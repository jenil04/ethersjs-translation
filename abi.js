const abi = [
    {
      constant: true,
      inputs: [],
      name: "seller",
      outputs: [
        {
          name: "",
          type: "address"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      name: "bids",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      name: "bidders",
      outputs: [
        {
          name: "",
          type: "address"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [],
      name: "auction",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [],
      name: "submitBid",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function"
    },
    {
      constant: false,
      inputs: [],
      name: "determineWinner",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "getHighestBidder",
      outputs: [
        {
          name: "",
          type: "address"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "getBidders",
      outputs: [
        {
          name: "",
          type: "address[]"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "getBids",
      outputs: [
        {
          name: "",
          type: "uint256[]"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    }
  ];

module.exports = abi