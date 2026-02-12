const { fetchRailsHealth } = require("../../infrastructure/clients/railsApiClient");

async function getRailsHealth() {
  const data = await fetchRailsHealth();
  return { ...data, source: "rails" };
}

module.exports = { getRailsHealth };
