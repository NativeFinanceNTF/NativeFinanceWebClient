import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'NTF',
    lpAddresses: {
      97: '',
      56: '0xd30C1484652a32C98855655D21532EF16d1Ac204',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'NTF-BNB NTF-LP',
    lpAddresses: {
      97: '',
      56: '0xf5137605610509C9b15E7fCc2BEb7FC7C80aB1BA',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'NTF-BUSD NTF-LP',
    lpAddresses: {
      97: '',
      56: '0x5393805d45dE8Cff009a58757Dbcb688f0c7A2a6',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB NTF-LP',
    lpAddresses: {
      97: '',
      56: '0xfdCb09B12fcc2D9266Dea1908d456C31342CF4e2',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'USDT-BNB NTF-LP',
    lpAddresses: {
      97: '',
      56: '0x9eAF7F4E519D099E3da5Ea322542A01575044223',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wbnb,
  },
]

export default farms
