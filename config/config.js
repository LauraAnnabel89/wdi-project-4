module.exports = {
  port: process.env.PORT || 3000,
  db: {
    test: "mongodb://localhost/mode-api-test",
    development: "mongodb://localhost/mode-api-development",
    production: process.env.MONGODB_URI || "mongodb://localhost/mode-api-production",
    authentication: process.env.MONGODB_URI || "mongodb://localhost/express-authentication-jwt"
  },
  secret: process.env.SECRET || "gosh this is so secret... shhh..."
};
