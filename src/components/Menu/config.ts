import { MenuEntry } from '@bunnymoon-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x72e3F1a5f31989DbeB5eE4CFf03303FfAEc7821B',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x72e3F1a5f31989DbeB5eE4CFf03303FfAEc7821B',
      }
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: '/referrals',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Official',
        href: 'https://www.bunnymoon.info',
      },
      {
        label: 'Github',
        href: 'https://github.com/bunnymoondev',
      },
    ],
  },
]

export default config
