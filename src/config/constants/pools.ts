import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xa2d4c3C62DffAD61d50e85E68F9D77778212C8E3',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools


// interface PoolConfigBaseProps {
//   sousId: number
//   contractAddress: Address
//   poolCategory: PoolCategory
//   tokenPerBlock: string
//   sortOrder?: number
//   harvest?: boolean
//   isFinished?: boolean
//   enableEmergencyWithdraw?: boolean
// }
