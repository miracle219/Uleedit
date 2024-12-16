/**
 * Resolves the forwarded IP address from the request object.
 *
 * @param {Object} req - The request object.
 * @returns {string|Error} - The resolved IP address behind proxies if present or an error object if an error occurs.
 */
const resolveForwardedIP = (req) => {
  try {
    const forwardedIpsStr = req.headers["x-forwarded-for"];
    let ip;

    if (forwardedIpsStr) {
      const forwardedIps = forwardedIpsStr.split(",");
      ip = forwardedIps[0];
    } else {
      ip = req.connection.remoteAddress;
    }
    return ip;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export default resolveForwardedIP;
