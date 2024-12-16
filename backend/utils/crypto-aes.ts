import * as crypto from "crypto";

class CryptoHelper {
  private algorithm: string = "aes-256-ctr"; // Algorithm for symetric encryption and decryption
  private secretKey: Buffer; // Key for encryption and decryption
  private iv: Buffer = crypto.randomBytes(16); // Initialization vector
  private maxInputSize: number = 16; // Maximum size of input data for encryption is 16 bytes because of the max input size of AES-256
  private secret: string | undefined = process.env.S;

  constructor(secret: string | undefined) {
    if (!secret && !this.secret) {
      console.warn(
        `No secret provided. Using default secret; \x1b[31mDo not use this in production!!\x1b[0m`
      );
    }
    this.secretKey = crypto
      .createHash("sha256")
      .update(secret || this.secret || "secret")
      .digest()
      .subarray(0, 32);
  }

  public encrypt = (text: string): string => {
    if (!text || typeof text !== "string") {
      throw new Error("The text to encrypt must be a non-empty string.");
    }

    const textBuffer = Buffer.from(text, "utf8");
    if (textBuffer.length > this.maxInputSize) {
      return this.encryptInChunks(textBuffer);
    }

    return this.encryptChunk(textBuffer);
  };

  public decrypt = (hash: string): string => {
    if (!hash || typeof hash !== "string" || !hash.includes(":")) {
      throw new Error(
        "The hash to decrypt must be a non-empty string in the correct format."
      );
    }

    const chunks = hash.split("::"); // Split by chunk separator
    return chunks.map(this.decryptChunk).join(""); // Decrypt each chunk and concatenate the results
  };

  private encryptChunk = (chunk: Buffer): string => {
    const cipher = crypto.createCipheriv(
      this.algorithm,
      this.secretKey,
      this.iv
    );
    const encrypted = Buffer.concat([cipher.update(chunk), cipher.final()]);
    return `${this.iv.toString("hex")}:${encrypted.toString("hex")}`;
  };

  private decryptChunk = (encryptedChunk: string): string => {
    const [iv, encrypted] = encryptedChunk.split(":");

    if (!iv || !encrypted) {
      throw new Error(
        'Invalid format for encrypted data. Expected "iv:encryptedText".'
      );
    }

    const decipher = crypto.createDecipheriv(
      this.algorithm,
      this.secretKey,
      Buffer.from(iv, "hex")
    );
    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(encrypted, "hex")),
      decipher.final(),
    ]);
    return decrypted.toString("utf8");
  };

  private encryptInChunks = (text: Buffer): string => {
    const chunks = this.splitIntoChunks(text, this.maxInputSize);
    const encryptedChunks = chunks.map(this.encryptChunk);
    return encryptedChunks.join("::"); // Use double colon as chunk separator
  };

  private splitIntoChunks = (text: Buffer, chunkSize: number): Buffer[] => {
    const numChunks = Math.ceil(text.length / chunkSize);
    const chunks: Buffer[] = new Array(numChunks);

    for (let i = 0, o = 0; i < numChunks; ++i, o += chunkSize) {
      chunks[i] = text.subarray(o, o + chunkSize);
    }

    return chunks;
  };
}
const cryp = new CryptoHelper(process.env.S);
export default cryp;
export { CryptoHelper };
