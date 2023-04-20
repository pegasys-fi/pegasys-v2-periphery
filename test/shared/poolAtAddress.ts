import { abi as POOL_ABI } from '@pollum-io/v2-core/artifacts/contracts/PegasysV2Pool.sol/PegasysV2Pool.json'
import { Contract, Wallet } from 'ethers'
import { IPegasysV2Pool } from '../../typechain'

export default function poolAtAddress(address: string, wallet: Wallet): IPegasysV2Pool {
  return new Contract(address, POOL_ABI, wallet) as IPegasysV2Pool
}
