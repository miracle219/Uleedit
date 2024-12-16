import * as crypto from "crypto";

/**
 * Helper class for asymmetric cryptography operations.
 */
class AsymmetricCryptoHelper {
  private algorithm: string = "rsa";
  private keySize: number = 2048;
  private maxInputSize: number = this.keySize / 8 - 67;
  // When PKCS1 padding is performed, the maximum length of data that can be encrypted is 11 bytes less than the keysize considered by the PKCS1_OAEP_PADDING (8 * 8 + 11) = 67

  /**
   * Generates a key pair for RSA encryption.
   * @returns An object containing the generated public and private keys in base64.
   */
  public generateKeyPair = (): { publicKey: string; privateKey: string } => {
    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
      modulusLength: this.keySize,
      publicKeyEncoding: {
        type: "spki",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs8",
        format: "pem",
      },
    });

    return {
      publicKey: Buffer.from(publicKey).toString("base64"),
      privateKey: Buffer.from(privateKey).toString("base64"),
    };
  };

  /**
   * Encrypts the given text using RSA encryption.
   *
   * @param text - The text to encrypt.
   * @param externalPubKey - The external public key used for encryption in base64.
   * @returns The encrypted text.
   * @throws Error if the text to encrypt is not a non-empty string.
   */
  public encrypt = (text: string, externalPubKey: string): string => {
    if (!text || typeof text !== "string") {
      throw new Error("The text to encrypt must be a non-empty string.");
    }

    const publicKey = Buffer.from(externalPubKey, "base64").toString("utf8");
    const textBuffer = Buffer.from(text, "utf8");
    if (textBuffer.length > this.maxInputSize) {
      return this.encryptInChunks(textBuffer, publicKey);
    }

    return this.encryptChunk(textBuffer, publicKey);
  };

  /**
   * Decrypts an encrypted string using the provided private key.
   *
   * @param encrypted - The string to decrypt.
   * @param internalPrivKey - The private key used for decryption in base64.
   * @returns The decrypted string.
   * @throws Error if the encrypted string is empty or not a string.
   */
  public decrypt = (encrypted: string, internalPrivKey: string): string => {
    if (!encrypted || typeof encrypted !== "string") {
      throw new Error("The text to decrypt must be a non-empty string.");
    }

    const privateKey = Buffer.from(internalPrivKey, "base64").toString("utf8");
    const chunks = encrypted.split("::"); // Split by chunk separator
    return chunks.map((chunk) => this.decryptChunk(chunk, privateKey)).join(""); // Decrypt each chunk and concatenate the results
  };

  /**
   * Encrypts a chunk of data using RSA encryption with the provided public key.
   *
   * @param chunk - The data chunk to be encrypted.
   * @param publicKey - The public key used for encryption.
   * @returns The encrypted data as a base64-encoded string.
   */
  private encryptChunk = (chunk: Buffer, publicKey: string): string => {
    const encrypted = crypto.publicEncrypt(
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
      },
      chunk
    );
    return encrypted.toString("base64");
  };

  /**
   * Decrypts an encrypted chunk using RSA private key.
   *
   * @param encryptedChunk - The encrypted chunk to be decrypted.
   * @param privateKey - The RSA private key used for decryption.
   * @returns The decrypted chunk as a string.
   */
  private decryptChunk = (
    encryptedChunk: string,
    privateKey: string
  ): string => {
    const encryptedBuffer = Buffer.from(encryptedChunk, "base64");
    const decrypted = crypto.privateDecrypt(
      {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
      },
      encryptedBuffer
    );
    return decrypted.toString("utf8");
  };

  /**
   * Encrypts the given text in chunks using the provided public key.
   *
   * @param text - The text to be encrypted.
   * @param publicKey - The public key used for encryption.
   * @returns The encrypted text with chunks separated by double colons.
   */
  private encryptInChunks = (text: Buffer, publicKey: string): string => {
    const chunks = this.splitIntoChunks(text, this.maxInputSize);
    const encryptedChunks = chunks.map((chunk) =>
      this.encryptChunk(chunk, publicKey)
    );
    return encryptedChunks.join("::"); // Use double colon as chunk separator
  };

  /**
   * Splits a given text into chunks of a specified size.
   *
   * @param text - The text to be split.
   * @param chunkSize - The size of each chunk.
   * @returns An array of buffers representing the chunks.
   */
  private splitIntoChunks = (text: Buffer, chunkSize: number): Buffer[] => {
    const numChunks = Math.ceil(text.length / chunkSize);
    const chunks: Buffer[] = new Array(numChunks);

    for (let i = 0, o = 0; i < numChunks; ++i, o += chunkSize) {
      chunks[i] = text.subarray(o, o + chunkSize);
    }

    return chunks;
  };
}

const asymmetricCryp = new AsymmetricCryptoHelper();
export default asymmetricCryp;
export { AsymmetricCryptoHelper };
