# Pegasys V3 Periphery

[![Tests](https://github.com/pegasys-fi/v3-phperiphery/workflows/Tests/badge.svg)](https://github.com/pegasys-fi/v3-phperiphery/actions?query=workflow%3ATests)
[![Lint](https://github.com/pegasys-fi/v3-phperiphery/workflows/Lint/badge.svg)](https://github.com/pegasys-fi/v3-phperiphery/actions?query=workflow%3ALint)

This repository contains the periphery smart contracts for the Pegasys V3 Protocol.
For the lower level core contracts, see the [v3-core](https://github.com/pegasys-fi/v3-core)
repository.


## Local deployment

In order to deploy this code to a local testnet, you should install the npm package
`@pollum-io/v3-periphery`
and import bytecode imported from artifacts located at
`@pollum-io/v3-periphery/artifacts/contracts/*/*.json`.
For example:

```typescript
import {
  abi as SWAP_ROUTER_ABI,
  bytecode as SWAP_ROUTER_BYTECODE,
} from '@pollum-io/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json'

// deploy the bytecode
```
This will ensure that you are testing against the same bytecode that is deployed to
mainnet and public testnets, and all Pegasys code will correctly interoperate with
your local deployment.

## Using solidity interfaces

The Pegasys V3 periphery interfaces are available for import into solidity smart contracts
via the npm artifact `@pollum-io/v3-periphery`, e.g.:

```solidity
import '@pollum-io/v3-periphery/contracts/interfaces/ISwapRouter.sol';

contract MyContract {
  ISwapRouter router;

  function doSomethingWithSwapRouter() {
    // router.exactInput(...);
  }
}

```

## Addresses

Pegasys V3 is fully deployed on Rollux at the following addresses:

- v3CoreFactoryAddress: [0xeAa20BEA58979386A7d37BAeb4C1522892c74640](https://explorer.rollux.com/address/0xeAa20BEA58979386A7d37BAeb4C1522892c74640)
- multicall2Address: [0xc9E6E07CB460F36A6D5826f70647eff7e1823899](https://explorer.rollux.com/address/0xc9E6E07CB460F36A6D5826f70647eff7e1823899)
- proxyAdminAddress: [0x7fC89F7B58737aC833630DDB42e1BA8CE486eABA](https://explorer.rollux.com/address/0x7fC89F7B58737aC833630DDB42e1BA8CE486eABA)
- tickLensAddress: [0x6dfd1ea91128733Dc96479b7d1b0F4bC36C31C44](https://explorer.rollux.com/address/0x6dfd1ea91128733Dc96479b7d1b0F4bC36C31C44)
- nftDescriptorLibraryAddressV1_3_0: [0x116EEfffB6D8A902294E74CcFf12C6DE6b4A2dC6](https://explorer.rollux.com/address/0x116EEfffB6D8A902294E74CcFf12C6DE6b4A2dC6)
- nonfungibleTokenPositionDescriptorAddressV1_3_0: [0xFAF4968F8DA756ddB6CbF2AFBBA40e5c73465fEF](https://explorer.rollux.com/address/0xFAF4968F8DA756ddB6CbF2AFBBA40e5c73465fEF)
- descriptorProxyAddress: [0x1AA955a40B0817aFb7697B14DE12754b1b4e33fF](https://explorer.rollux.com/address/0x1AA955a40B0817aFb7697B14DE12754b1b4e33fF)
- nonfungibleTokenPositionManagerAddress: [0x4dB158Eec5c5d63F9A09535882b835f36d3fd012](https://explorer.rollux.com/address/0x4dB158Eec5c5d63F9A09535882b835f36d3fd012)
- v3MigratorAddress: [0x2b75Ee991F4E5572451E186E5cd2148Ba4B286e5](https://explorer.rollux.com/address/0x2b75Ee991F4E5572451E186E5cd2148Ba4B286e5)
- v3StakerAddress: [0x0F64767bf65bb56c076076bCEE680F00b89a19cf](https://explorer.rollux.com/address/0x0F64767bf65bb56c076076bCEE680F00b89a19cf)
- quoterV2Address: [0x4aa7D3a3D8025e653886EbD5f2e9416a7b4ADe22](https://explorer.rollux.com/address/0x4aa7D3a3D8025e653886EbD5f2e9416a7b4ADe22)
- swapRouter02: [0xd93c60A8E0F53361524698Cce1BBb65E080b8976](https://explorer.rollux.com/address/0xd93c60A8E0F53361524698Cce1BBb65E080b8976)
- UnsupportedProtocol deployed: [0x85919312dB290fCcFe9D85d11CEA94DD97b0a1a7](https://explorer.rollux.com/address/0x85919312dB290fCcFe9D85d11CEA94DD97b0a1a7)
- permit2: [0x000000000022D473030F116dDEE9F6B43aC78BA3](https://explorer.rollux.com/address/0x000000000022D473030F116dDEE9F6B43aC78BA3)
- weth9: [0x4200000000000000000000000000000000000006](https://explorer.rollux.com/address/0x4200000000000000000000000000000000000006)
- Universal Router Deployed: [0x0d476148769E4CF5AFFB59e5552cAC8a30D13669](https://explorer.rollux.com/address/0x0d476148769E4CF5AFFB59e5552cAC8a30D13669)
- UNISWAP_MULTICALL_ADDRESSES: [0x25DAE2f7ad027b29b4e968ecC899F8A8A0f54B2A](https://explorer.rollux.com/address/0x25DAE2f7ad027b29b4e968ecC899F8A8A0f54B2A)
- MULTICALL_NETWORKS: [0x6aE73f43cc18Bb9ffB35204023C6C7897CA879C4](https://explorer.rollux.com/address/0x6aE73f43cc18Bb9ffB35204023C6C7897CA879C4)
