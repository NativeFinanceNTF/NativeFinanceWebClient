import { MenuItemsType, DropdownMenuItemType } from 'ntfuikit2'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  {
    label: t('Play'),
    // href: '/prediction',
    href: '/swap',
    icon: 'Trophy',
    items: [
      {
        label: t('Prediction (BETA)'),
        href: '/swap',
      },
      {
        label: t('Lottery'),
        href: '/swap',
      },
    ],
  },
  {
    label: t('NFT'),
    href: '/swap',
    // href: `${nftsBaseUrl}`,
    icon: 'Nft',
    items: [
      {
        label: t('Overview'),
        href: '/swap',
        // href: `${nftsBaseUrl}`,
      },
      {
        label: t('Collections'),
        // href: `${nftsBaseUrl}/collections`,
        href: '/swap',
      },
    ],
  },
  {
    label: '',
    href: '/info',
    icon: 'More',
    hideSubNav: true,
    items: [
      {
        label: t('Info'),
        href: 'https:docs.nativefinance.io',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      // {
      //   label: t('IFO'),
      //   href: '/ifo',
      // },
      {
        label: t('Voting'),
        href: '/voting',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      // {
      //   label: t('Leaderboard'),
      //   href: '/teams',
      // },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      // {
      //   label: t('Blog'),
      //   href: 'https://medium.com/pancakeswap',
      //   type: DropdownMenuItemType.EXTERNAL_LINK,
      // },
      {
        label: t('Docs'),
        href: 'https://docs.pancakeswap.finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
