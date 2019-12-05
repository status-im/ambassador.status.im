module.exports = {
  default: {
    deployment: {
      host: "localhost", 
      port: 8556,
      type: "ws"
    },
    dappConnection: [
      "$WEB3", 
      "ws://localhost:8546",
      "http://localhost:8545"
    ],
    gas: "auto",
    strategy: "explicit",
    contracts: {          
      StatusAmbassadorBadge: {
        args: [],
        deploy: true
      }
    }
  },
  livenet: {
  },
  testnet: {
    contracts: {
      StatusAmbassadorBadge: {
        address: "0x7Cb1C6CC7e81272ff81A8Ca2587B0227168a61fE",
        deploy: false
      }
    }
  },
  rinkeby: {
    contracts: {
      StatusAmbassadorBadge: {
        address: "0x7Cb1C6CC7e81272ff81A8Ca2587B0227168a61fE",
        deploy: false
      }
    }
  }
}
