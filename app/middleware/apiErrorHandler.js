const apiErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Erreur interne du serveur";

  console.error(`[Erreur API] ${err}`);

  res.status(statusCode).json({
    error: true,
    message: message
  });
};

module.exports = apiErrorHandler;
