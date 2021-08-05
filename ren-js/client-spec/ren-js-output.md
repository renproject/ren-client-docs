```json
yarn run v1.22.10
$ run-s test:*
$ nyc ../../../node_modules/ts-mocha/bin/ts-mocha --sort --exit --timeout 180000 --paths -p ./tsconfig.json ./test/*.spec.ts ./test/**/*.spec.ts --ignore ./test/testutils/chai.d.ts


  Refactor: mint
Mint address: 0xFB87bCF203b78d9B67719b7EEa3b6B65A208961B, balance: 0.390831171397589548
[RenJS][DEBUG]lockAndMint created:
  {
    asset: 'LUNA',
    nonce: <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 03>
  }
[RenJS][DEBUG]pHash
  Ymk5U5rcsw4XWdRssDQcITTrPRdIA92n3QW57h1fyeE= 0x0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000fb87bcf203b78d9b67719b7eea3b6b65a208961b00000000000000000000000000000000000000000000000000000000000000044c554e4100000000000000000000000000000000000000000000000000000000 [
    { type: 'string', name: '_symbol', value: 'LUNA' },
    {
      type: 'address',
      name: '_address',
      value: '0xFB87bCF203b78d9B67719b7EEa3b6B65A208961B'
    }
  ]
[RenJS][DEBUG]pHash
  Ymk5U5rcsw4XWdRssDQcITTrPRdIA92n3QW57h1fyeE= 0x0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000fb87bcf203b78d9b67719b7eea3b6b65a208961b00000000000000000000000000000000000000000000000000000000000000044c554e4100000000000000000000000000000000000000000000000000000000 [
    { type: 'string', name: '_symbol', value: 'LUNA' },
    {
      type: 'address',
      name: '_address',
      value: '0xFB87bCF203b78d9B67719b7EEa3b6B65A208961B'
    }
  ]
[RenJS][DEBUG]gHash
  +90QUTTCuDAbS1KHwswbgunCu9kq9YPxEAcW39JhRsM= 0x626939539adcb30e1759d46cb0341c2134eb3d174803dda7dd05b9ee1d5fc9e1cf82f7a141f97d439a22da6e28ef6c74c814875a32d79c6630afe73242e47e0d7ddfa2e5435027f6e13ca8db2f32ebd5551158bb0000000000000000000000000000000000000000000000000000000000000003
[RenJS][DEBUG]gPubKey:
  0x030dd65f7db2920bb229912e3f4213dd150e5f972c9b73e9be714d844561ac355c
[RenJS][DEBUG]gateway address:
  {
    asset: 'LUNA',
    address: 'terra15cdmhng0hmzfaw5ahhdd496kpjuekv72gt2ttu'
  }
Send at least 0.3 LUNA to {
  asset: 'LUNA',
  address: 'terra15cdmhng0hmzfaw5ahhdd496kpjuekv72gt2ttu'
}
LUNA balance: 978.000323 LUNA (terra1u9lte8qxtt53ssa8hs4t4kp27fkrh5gjvyr8yk)
[faucet] Sending 1.5 LUNA to {"asset":"LUNA","address":"terra15cdmhng0hmzfaw5ahhdd496kpjuekv72gt2ttu"}
[RenJS][DEBUG]LockAndMintDeposit created
  {
    transaction: {
      hash: 'C685515C36A05AEA885477E6DCD17E6C00E778139868CF8F7A440D3078EF8FB5',
      messageIndex: 0,
      from: 'terra1u9lte8qxtt53ssa8hs4t4kp27fkrh5gjvyr8yk',
      to: 'terra15cdmhng0hmzfaw5ahhdd496kpjuekv72gt2ttu',
      denomination: 'uluna',
      amount: '1500000',
      memo: '',
      confirmations: 2
    },
    amount: '1500000'
  } {
    contractCalls: [
      {
        sendTo: '0x7DDFA2e5435027f6e13Ca8Db2f32ebd5551158Bb',
        contractFn: 'mint',
        contractParams: [Array],
        txConfig: [Object]
      }
    ],
    asset: 'LUNA',
    nonce: <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 03>
  }
[yskU2X] Received 1.5 LUNA {
  transaction: {
    hash: 'C685515C36A05AEA885477E6DCD17E6C00E778139868CF8F7A440D3078EF8FB5',
    messageIndex: 0,
    from: 'terra1u9lte8qxtt53ssa8hs4t4kp27fkrh5gjvyr8yk',
    to: 'terra15cdmhng0hmzfaw5ahhdd496kpjuekv72gt2ttu',
    denomination: 'uluna',
    amount: '1500000',
    memo: '',
    confirmations: 2
  },
  amount: '1500000'
} https://finder.terra.money/tequila-0004/tx/C685515C36A05AEA885477E6DCD17E6C00E778139868CF8F7A440D3078EF8FB5
[yskU2X] Calling .signed
[yskU2X]RenVM txHash:
  yskU2X15B9k_Lcxp0aFjB9sb2ow_Lqub4H_tBAXvn0c
[RenJS][DEBUG]new deposit:
  {
    transaction: {
      hash: 'C685515C36A05AEA885477E6DCD17E6C00E778139868CF8F7A440D3078EF8FB5',
      messageIndex: 0,
      from: 'terra1u9lte8qxtt53ssa8hs4t4kp27fkrh5gjvyr8yk',
      to: 'terra15cdmhng0hmzfaw5ahhdd496kpjuekv72gt2ttu',
      denomination: 'uluna',
      amount: '1500000',
      memo: '',
      confirmations: 2
    },
    amount: '1500000'
  }
[yskU2X] status: confirming
[yskU2X]transaction status:
  confirming
[yskU2X] status: executing
[yskU2X]transaction status:
  executing
[yskU2X] status: executing
[yskU2X]transaction status:
  executing
[yskU2X]signature:
  <Buffer dd 69 44 2e 68 9e 06 fe 2f 08 c0 ef 5b 17 09 30 3f 9e 22 be 71 33 9b 71 0d c7 99 ae b5 df ae d3 14 01 f8 c9 7e 33 57 3c 85 60 32 03 26 3a dd 49 40 19 ... 15 more bytes>
[yskU2X] Calling .mint
[yskU2X] txHash: https://kovan.etherscan.io/tx/0xfdbefef6f3601f0c82dadf8177a2bb8ac668cf6df9f90b11126fcf01d6c30077
    ✓ mint to contract (151608ms)


  1 passing (3m)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |
----------|---------|----------|---------|---------|-------------------
Done in 153.98s.




{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "tx": {
      "hash": "yskU2X15B9k_Lcxp0aFjB9sb2ow_Lqub4H_tBAXvn0c",
      "version": "1",
      "selector": "LUNA/toEthereum",
      "in": {
        "t": {
          "struct": [
            {
              "txid": "bytes"
            },
            {
              "txindex": "u32"
            },
            {
              "amount": "u256"
            },
            {
              "payload": "bytes"
            },
            {
              "phash": "bytes32"
            },
            {
              "to": "string"
            },
            {
              "nonce": "bytes32"
            },
            {
              "nhash": "bytes32"
            },
            {
              "gpubkey": "bytes"
            },
            {
              "ghash": "bytes32"
            }
          ]
        },
        "v": {
          "amount": "1500000",
          "ghash": "-90QUTTCuDAbS1KHwswbgunCu9kq9YPxEAcW39JhRsM",
          "gpubkey": "Aw3WX32ykguyKZEuP0IT3RUOX5csm3PpvnFNhEVhrDVc",
          "nhash": "3vejIRESKNPYtHuW4ZcxbkTsCiMVwPI_YYZHKDbWQMI",
          "nonce": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM",
          "payload": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAD7h7zyA7eNm2dxm37qO2tlogiWGwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAETFVOQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
          "phash": "Ymk5U5rcsw4XWdRssDQcITTrPRdIA92n3QW57h1fyeE",
          "to": "7DDFA2e5435027f6e13Ca8Db2f32ebd5551158Bb",
          "txid": "xoVRXDagWuqIVHfm3NF-bADneBOYaM-PekQNMHjvj7U",
          "txindex": "0"
        }
      },
      "out": {
        "t": {
          "struct": [
            {
              "hash": "bytes32"
            },
            {
              "amount": "u256"
            },
            {
              "sighash": "bytes32"
            },
            {
              "sig": "bytes65"
            },
            {
              "txid": "bytes"
            },
            {
              "txindex": "u32"
            }
          ]
        },
        "v": {
          "amount": "1197000",
          "hash": "yskU2X15B9k_Lcxp0aFjB9sb2ow_Lqub4H_tBAXvn0c",
          "sig": "3WlELmieBv4vCMDvWxcJMD-eIr5xM5txDceZrrXfrtMUAfjJfjNXPIVgMgMmOt1JQBmBtHVcHpAwLhufORHY3wA",
          "sighash": "Ftg3mNeJwKwk6d6egOzwtNUPl-DHimbPed44zwA6b0c",
          "txid": "",
          "txindex": "0"
        }
      }
    },
    "txStatus": "done"
  }
}
```
