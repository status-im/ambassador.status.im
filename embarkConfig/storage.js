module.exports = {
  default: {
    enabled: true,
    ipfs_bin: "ipfs",
    available_providers: ["ipfs"],
    upload:{
      provider: "ipfs",
      host: "localhost",
      port: 5001,
      getUrl: "http://localhost:8080/ipfs"
    },
    dappConnection:[
      {
        provider: "ipfs", 
        host: "localhost", 
        port: 5001, 
        getUrl: "http://localhost:8080/ipfs/"
      }
    ],
    versions: {
      "ipfs-api": "17.2.4"
    }
  },
  development: {
    enabled: true,
    provider: "ipfs",
    host: "localhost",
    port: 5001
  }
}