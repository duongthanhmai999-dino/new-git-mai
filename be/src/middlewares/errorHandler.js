export function errorHandler(err, req, res, next) {
  // eslint-disable-next-line no-console
  console.error(err);

  const status = Number(err.statusCode || err.status || 500);
  const message = err.message || "Internal Server Error";

  res.status(status).json({ success: false, message });
}

