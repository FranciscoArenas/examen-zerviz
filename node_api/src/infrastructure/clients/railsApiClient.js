const axios = require("axios");
const { railsApiUrl } = require("../../config/config");

async function fetchRailsHealth() {
  const response = await axios.get(`${railsApiUrl}/health`, { timeout: 2000 });
  return response.data;
}

module.exports = { fetchRailsHealth };
