import { FooterLinkType } from 'ntfuikit2'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.nativefinance.io/contact-us',
      },
      // {
      //   label: t('Brand'),
      //   href: '',
      // },
      // {
      //   label: t('Blog'),
      //   href: '',
      // },
      {
        label: t('Community'),
        href: 'https://t.me/NativeFinance1',
      },
      {
        label: t('CAKE token'),
        href: 'https://docs.nativefinance.io/tokenomics/ntf',
      },
      // {
      //   label: '—',
      // },
      // {
      //   label: t('Online Store'),
      //   href: '',
      //   isHighlighted: true,
      // },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.nativefinance.io/contact-us/social-communities',
      },
      // {
      //   label: t('Troubleshooting'),
      //   href: '',
      // },
      {
        label: t('Guides'),
        href: 'https://docs.nativefinance.io/',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/NativeFinanceNTF',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.nativefinance.io/',
      },
      // {
      //   label: t('Bug Bounty'),
      //   href: '',
      // },
      // {
      //   label: t('Audits'),
      //   href: '',
      // },
      // {
      //   label: t('Careers'),
      //   href: '',
      // },
    ],
  },
]
