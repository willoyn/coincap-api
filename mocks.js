const mocks = {
  Query: () => ({
    assets: () => [...new Array(30)],
    assetHistory: () => [...new Array(30)]
  }),
  Asset: () => ({
    id: () => "bitcoin",
    rank: () => "1",
    symbol: () => "BTC",
    name: () => "Bitcoin",
    supply: () => "19080912.0000000000000000",
    maxSupply: () => "21000000.0000000000000000",
    marketCapUsd: () => "370111033220.8864741530068736",
    volumeUsd24Hr: () => "8343910172.8313869515285855",
    priceUsd: () => "19396.9257455244526128",
    changePercent24Hr: () => "-2.6970871012122519",
    vwap24Hr: () => "20033.6348696388427141",
    explorer: () => "https://blockchain.info/",
  }),
  AssetHistory: () => ({
    priceUsd: () => "33805.8374030567884219",
    time: () => 1625097600000,
    date: () => "2021-07-01T00:00:00.000Z"
  })
};

module.exports = mocks;
