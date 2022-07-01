const { RESTDataSource } = require("apollo-datasource-rest");

class AssetsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.coincap.io/v2/assets";
  }

  getAssets(offset, limit = 10) {
    return this.get(`?offset=${offset}&limit=${limit}`).then(
      (response) => response.data
    );
  }

  getAssetHistory(id, interval) {
    return this.get(`/${id}/history?interval=${interval}`).then(
      (response) => response.data
    );
  }
}
module.exports = AssetsAPI;
