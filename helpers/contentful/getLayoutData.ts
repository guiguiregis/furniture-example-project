import { gql } from '@apollo/client';
import { LayoutData } from '.';
import { contentfulClient } from './contentfulClient';
// import { LayoutData, NavigationSection } from './contentful.types';
// import { contentfulClient } from './contentfulClient';

const supportNavigationItems = [
  {
    text: 'Call',
    link: 'tel:+18335211089',
    icon: '/images/icons/phone-icon.svg',
    description: '+1 (833) 521-1089',
  },
  {
    text: 'Live chat',
    link: 'live-chat',
    icon: '/images/icons/live-chat-icon.svg',
    description: '9AM-8PM EST',
  },
  {
    text: 'Email',
    link: 'mailto:support@cozey.ca',
    icon: '/images/icons/mail-icon.svg',
    description: 'support@cozey.ca',
  },
];

export const navigationSections = [
  {
    sectionHandle: 'help-pages-support-nav',
    title: 'Help Pages',
    sectionLink: {
      title: '',
      link: '',
    },
    navigationItems: [
      {
        text: 'FAQ',
        link: '/faq',
        icon: '',
        description: '',
      },
      {
        text: 'Shipping',
        link: '/shipping',
        icon: '',
        description: '',
      },
      {
        text: 'Returns',
        link: '/returns',
        icon: '',
        description: '',
      },
      {
        text: 'Warranty',
        link: '/warranty',
        icon: '',
        description: '',
      },
      {
        text: 'Financing',
        link: '/financing',
        icon: '',
        description: '',
      },
      {
        text: 'Reviews',
        link: '/reviews',
        icon: '',
        description: '',
      },
      {
        text: 'Assembly guides',
        link: '/assembly-guides',
        icon: '',
        description: '',
      },
    ],
    productNavigationItems: [],
  },
  {
    sectionHandle: 'contact-us-support-nav',
    title: 'Contact Us',
    sectionLink: {
      title: '',
      link: '',
    },
    navigationItems: supportNavigationItems,
    productNavigationItems: [],
  },
  {
    sectionHandle: 'by-collection-seating-nav',
    title: 'By Collection',
    sectionLink: {
      title: 'Shop All Collections',
      link: '/collections',
    },
    navigationItems: [
      {
        text: 'The Original Collection',
        link: '/shop/sofas',
        icon: '',
        description: '',
      },
      {
        text: 'Ciello Collection',
        link: '/shop/sofas',
        icon: '',
        description: '',
      },
    ],
    productNavigationItems: [],
  },
  {
    sectionHandle: 'by-configuration-seating-nav',
    title: 'Configurations',
    sectionLink: {
      title: 'Shop All Seating',
      link: '/collections',
    },
    navigationItems: [
      {
        text: 'Chairs',
        link: '/shop/sofas',
        icon: '',
        description: '',
      },
      {
        text: 'Loveseats',
        link: '/shop/sofas',
        icon: '',
        description: '',
      },
      {
        text: 'Three-seaters',
        link: '/shop/sofas',
        icon: '',
        description: '',
      },
      {
        text: 'L-Sectionals',
        link: '/shop/sofas',
        icon: '',
        description: '',
      },
      {
        text: 'U-Sectionals',
        link: '/shop/sofas',
        icon: '',
        description: '',
      },
      {
        text: 'Design Your Own',
        link: '/shop/sofas',
        icon: '',
        description: '',
      },
    ],
    productNavigationItems: [],
  },
  {
    sectionHandle: 'explore-seating-nav',
    title: 'Explore',
    sectionLink: {
      title: '',
      link: '',
    },
    navigationItems: [],
    productNavigationItems: [
      {
        title: 'The Original Collection',
        productImage: { url: '', alt: '' },
        tag: {
          color: '#2B2C6E',
          title: 'MOST POPULAR',
        },
        link: '/collection/original',
      },
      {
        title: 'Ciello Collection',
        productImage: { url: '', alt: '' },
        tag: {
          color: '#B35C1E',
          title: 'NEW',
        },
        link: '/collection/ciello',
      },
    ],
  },
  {
    sectionHandle: 'the-original-modules-modules-nav',
    title: 'The Original Modules',
    sectionLink: {
      title: 'Shop All Original Modules',
      link: '/shop/modules',
    },
    navigationItems: [
      {
        text: 'Ottoman',
        link: '/shop/modules',
        icon: '',
        description: '',
      },
      {
        text: 'Chaise',
        link: '/shop/modules',
        icon: '',
        description: '',
      },
      {
        text: 'Seats',
        link: '/shop/modules',
        icon: '',
        description: '',
      },
      {
        text: 'Arms',
        link: '/shop/modules',
        icon: '',
        description: '',
      },
      {
        text: 'Legs',
        link: '/shop/modules',
        icon: '',
        description: '',
      },
      {
        text: 'Replacements',
        link: '/shop/modules',
        icon: '',
        description: '',
      },
    ],
    productNavigationItems: [],
  },
  {
    sectionHandle: 'ciello-modules-modules-nav',
    title: 'Ciello Modules',
    sectionLink: {
      title: 'Shop All Ciello Modules',
      link: '/shop/modules',
    },
    navigationItems: [
      {
        text: 'Ottoman',
        link: '/shop/modules',
        icon: '',
        description: '',
      },
      {
        text: 'Seats',
        link: '/shop/modules',
        icon: '',
        description: '',
      },
      {
        text: 'Arms',
        link: '/shop/modules',
        icon: '',
        description: '',
      },
      {
        text: 'Replacements',
        link: '/shop/modules',
        icon: '',
        description: '',
      },
    ],
    productNavigationItems: [],
  },
  {
    sectionHandle: 'find-your-modules-modules-nav',
    title: 'Find Your Modules',
    sectionLink: {
      title: '',
      link: '',
    },
    navigationItems: supportNavigationItems,
    productNavigationItems: [],
  },
  {
    sectionHandle: 'by-category-accessories-nav',
    title: 'By Category',
    sectionLink: {
      title: 'Shop All Accessories',
      link: '/shop/accessories',
    },
    navigationItems: [
      {
        text: 'Style Sets',
        link: '/shop/accessories',
        icon: '',
        description: '',
      },
      {
        text: 'Cushions',
        link: '/shop/accessories',
        icon: '',
        description: '',
      },
      {
        text: 'Throws',
        link: '/shop/accessories',
        icon: '',
        description: '',
      },
      {
        text: 'Ergonomics',
        link: '/shop/accessories',
        icon: '',
        description: '',
      },
    ],
    productNavigationItems: [],
  },
  {
    sectionHandle: 'featured-accessories-nav',
    title: 'Featured',
    sectionLink: {
      title: '',
      link: '',
    },
    navigationItems: [],
    productNavigationItems: [
      {
        title: 'Golden Glow Style Set',
        productImage: { url: '', alt: '' },
        tag: {
          color: '#8298BD',
          title: 'Designer"s Pick',
        },
        link: '/product/style-sets/golden-glow-style-set-bundle',
      },
      {
        title: 'Florence Cushion',
        productImage: { url: '', alt: '' },
        tag: {
          color: '#2B2C6E',
          title: 'MOST POPULAR',
        },
        link: '/product/florence-cushion/florence-cushion',
      },
      {
        title: 'Bauer Throw',
        productImage: { url: '', alt: '' },
        tag: {
          color: '#B35C1E',
          title: 'New',
        },
        link: '/product/bauer-throw/bauer-throw',
      },
    ],
  },
];

export const getLayoutData = async (): Promise<LayoutData> => {
  const { data } = await contentfulClient.query({
    query: gql`
      {
        mainNavigation(id: "45Q5lcltUZXqlJH5iAscXw") {
          logo {
            url(transform: { format: WEBP })
            title
          }
          phoneNumber
          phoneNumberLink
          footerSuccessSubscription
          newsletterInfoHeader
          newsletterInfoText
          newsletterInputPlaceholder
          newsletterInputTextSubmit
        }
      }
    `,
  });

  const { mainNavigation } = data;

  // console.log(
  //   mainNavigation.navigationSectionsCollection.items
  //     .filter((section: NavigationSection) =>
  //       section.sectionHandle.includes('seating-nav'),
  //     )
  //     .map((section: any) => ({
  //       sectionHandle: section.sectionHandle,
  //       title: section.title,
  //       sectionLink: section.sectionLink,
  //       productNavigationItems:
  //         section.productNavigationItems.productNavigationItems,
  //       navigationItems:
  //         section.navigationItems.navigationItems.navigationItems,
  //     })),
  // );

  return {
    footer: {
      //klaviyoId: mainNavigation.footerKlaviyoId,
      successSubscription: mainNavigation.footerSuccessSubscription,
      //wisepopId: mainNavigation.footerWisepopId,
      // mail: {
      //   title: mainNavigation.footerMailTitle,
      //   subtitle: mainNavigation.footerMailSubtitle,
      //   placeholder: mainNavigation.footerMailPlaceholder,
      //   buttonText: mainNavigation.footerMailButtonText,
      // },
      newsletterInfoHeader: mainNavigation.newsletterInfoHeader,
      newsletterInfoText: mainNavigation.newsletterInfoText,
      newsletterInputPlaceholder: mainNavigation.newsletterInputPlaceholder,
      newsletterInputSubmitText: mainNavigation.newsletterInputTextSubmit,
      //privacyLink: mainNavigation.privacyLink.privacyLink,
      //termsLink: mainNavigation.termsLink.termsLink,
      //copyrightText: mainNavigation.copyrightText,
      //newsletterLinks: mainNavigation.newsletterLinks.newsletterLinks,
    },
  };
};
