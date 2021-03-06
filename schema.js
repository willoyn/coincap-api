const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get currencies list from https://api.coincap.io/v2/assets"
    getAssets(offset: Int!, limit: Int): [Asset]!
    getAssetHistory(id: String!, interval: String!): [AssetHistory!]!
  }

  "Currencies list item from https://api.coincap.io/v2/assets"
  type Asset {
    id: String!
    rank: String!
    symbol: String!
    name: String!
    maxSupply: String
    marketCapUsd: String!
    volumeUsd24Hr: String!
    priceUsd: String!
    changePercent24Hr: String!
    vwap24Hr: String!
    explorer: String
  }

  "Asset history list item from https://api.coincap.io/v2/assets/ID/history"
  type AssetHistory {
    priceUsd: String!
    time: Float!
    circulatingSupply: String
    date: String
  }
`;

module.exports = typeDefs;
