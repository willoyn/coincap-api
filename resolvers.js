const resolvers = {
  Query: {
    getAssets: (parent, { offset, limit }, { dataSources }, info) => {
      return dataSources.AssetsAPI.getAssets(offset, limit);
    },
    getAssetHistory: (parent, { id, interval }, { dataSources }, info) => {
      return dataSources.AssetsAPI.getAssetHistory(id, interval);
    },
  },
};

module.exports = resolvers;
