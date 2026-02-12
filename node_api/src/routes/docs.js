const path = require("path");
const fs = require("fs");
const yaml = require("yaml");
const swaggerUi = require("swagger-ui-express");

const specPath = path.join(__dirname, "..", "..", "openapi.yaml");
const spec = yaml.parse(fs.readFileSync(specPath, "utf8"));

function setupDocs(app) {
  app.get("/openapi.yaml", (req, res) => {
    res.type("text/yaml").send(fs.readFileSync(specPath, "utf8"));
  });

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(spec));
}

module.exports = { setupDocs };
