// Desc: Error handler middleware
export const errorHandler = async (err, req, res) => {
  const msg = err.message;

  console.error(msg);
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    message: msg,
    error: "Internal Server Error",
  });
};
