const { createServer } = require("@vue-storefront/middleware");
const { integrationsFactory } = require("./middleware.config");
const cors = require("cors");
const session = require('express-session');
const crypto = require('crypto');


// Function to generate a random string (hash)
function generateRandomString(length) {
  return crypto.randomBytes(length).toString('hex');
}


(async () => {
  const tokenHash = generateRandomString(16)
  const integrations = integrationsFactory(tokenHash)
  const app = await createServer({ integrations });
  const host = process.argv[2] ?? process.env.MIDDLEWARE_HOST ?? "0.0.0.0";
  const port = process.argv[3] ?? process.env.MIDDLEWARE_HOST ? parseInt(process.env.MIDDLEWARE_HOST) : 4000;



  const CORS_MIDDLEWARE_NAME = "corsMiddleware";

  const corsMiddleware = app._router.stack.find(
    (middleware) => middleware.name === CORS_MIDDLEWARE_NAME
  );

  corsMiddleware.handle = cors({
    origin: [
      ...(process.env.MIDDLEWARE_ALLOWED_ORIGINS?.split(",") ?? []),
    ],
    credentials: true,
  });


  app.listen(port, host, () => {
    console.log(`Middleware started: ${host}:${port}`);
  });
})();