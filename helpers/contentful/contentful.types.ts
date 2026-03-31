export interface PressReview {
  name: string;
  text: string;
  link?: string;
  logo: string;
  image: string;
}

export interface BlogPost {
  metaTitle: string;
  image: string;
  title: string;
  date: string;
  tags: string[];
  link: string;
  excerpt?: string;
  content?: any;
  buttonLink?: string;
  blurImageUrl?: string;
  thumbnailImage?: string;
  handle: string;
}

export interface NavigationItem {
  text: string;
  link: string;
  icon?: string;
  description?: string;
}

interface CollectionTileProps {
  title: string;
  description: string;
  image: string;
  url?: string;
}

export interface MeetSection {
  description: string;
  link: string;
  title: string;
}

export interface Meet {
  title: string;
  sections: MeetSection[];
  originalsImage: string;
  originalsImageMobile: string;
  cielloImage: string;
  cielloImageMobile: string;
  atmosphereImage: string;
  atmosphereImageMobile: string;
  link: string;
  linkTitle: string;
}

export interface UpsellProduct {
  tag?: {
    title?: string;
    color?: string;
    price?: string;
    description?: string;
    featureText?: string;
  };
  price?: number;
  link?: string;
  variantId: string;
  title: string;
  upsellTitle: string;
  buttonText: string;
  image: {
    url: string;
  };
}

export interface Color {
  image?: string;
  blurImageUrl?: string;
  hex: string;
  title: string;
  swatchData: {
    blurImageUrl?: string;
    url: string;
    alt: string;
  };
  swatch?: {
    url: string;
    alt: string;
  };
  tags: {
    icon: string;
    title: string;
  }[];
  accessoryUpsells?: UpsellProduct[];
  sofaUpsell?: UpsellProduct[];
  desc: string;
  value: string;
  lightbeansSku?: string;
  isLimited?: boolean;
  type?: string;
  cylindoCode?: string;
  material?: string;
}

export interface CozeyDifferenceSections {
  title: string;
  content: string;
}

export interface HomePageData {
  metaTitle: string;
  metaDescription: string;
  reviewsSectionTitle: string;
  reviewsSectionSubtitle: string;
  hero: {
    text: string;
    text2: string;
    image: string;
    mobileImage: string;
    video: string;
    mobileVideo: string;
  };
  pressReviews: PressReview[];
  ourCollectionsTitle: string;
  ourCollectionsItems: CollectionTileProps[];
  blogSectionTitle: string;
  featuredBlogPosts: BlogPost[];
}

export interface CozeyDifference {
  title: string;
  sections: CozeyDifferenceSections[];
  mobileSections: CozeyDifferenceSections[];
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  mobileImage1?: string;
  mobileImage2?: string;
  mobileImage3?: string;
  mobileImage4?: string;
}

export interface FooterMailData {
  title: string;
  subtitle: string;
  placeholder: string;
  buttonText: string;
}

export interface MainNavigationItem {
  title: string;
  productImage: { url: string; alt: string };
  tag: {
    backgroundColor: string;
    textColor?: string;
    title: string;
  };
  link: string;
}

export interface NavigationSection {
  sectionHandle: string;
  title: string;
  sectionLink: {
    sectionLink: {
      title: string;
      link: string;
    };
  };
  navigationItems: NavigationItem[];
  productNavigationItems: MainNavigationItem[];
}

export interface FooterLinkSection {
  handle: string;
  title: string;
  links: {
    title: string;
    url: string;
  }[];
}

export interface MainNavigation {
  logo: {
    url: string;
    title: string;
  };
  seatingNavSections: NavigationSection[];
  modulesNavSections: NavigationSection[];
  accessoriesNavSections: NavigationSection[];
  tablesNavSections: NavigationSection[];
  supportNavSections: NavigationSection[];
  navigationProducts: {
    title: string;
    handle: any; //MainNavigationItems;
    link: string;
  }[];
  freeSwatchesText: string;
  aboutCozeyText: string;
  financingText: string;
  giftCardText: string;
  supportText: string;
  followUsText: string;
  // navigationItems: NavigationItem[];
  // extraMobileNavigationItems: NavigationItem[];
  // phoneNumber: string;
  // phoneNumberLink: string;
  // getInspiredText: string;
  // paylater: string;
  // dropdownData: {
  //   collectionsTitle: string;
  //   freeSwatchesText: string;
  //   allCollectionsText: string;
  //   financingText: string;
  // };
}

export interface FooterData {
  //mail: FooterMailData;
  //wisepopId: string;
  successSubscription: string;
  //klaviyoId: string;
  newsletterInfoHeader: string;
  newsletterInfoText: string;
  newsletterInputPlaceholder: string;
  newsletterInputSubmitText: string;
  // privacyLink: {
  //   title: string;
  //   url: string;
  // };
  // termsLink: {
  //   title: string;
  //   url: string;
  // };
  //copyrightText: string;
  //newsletterLinks: FooterLinkSection[];
}

export interface TopNavigationData {
  leftText: string;
  leftTextImage: string;
  navigationItems: NavigationItem[];
}

export interface LayoutData {
  //topNavigation: TopNavigationData;
  //mainNavigation: MainNavigation;
  footer: FooterData;
}

export interface CozeyInfo {
  title?: string;
  description?: any;
  description1?: string;
  description2?: string;
  image?: {
    url?: string;
  };
  linkText?: string;
  linkUrl?: string;
  linkText2?: string;
  linkUrl2?: string;
  linkText3?: string;
  linkUrl3?: string;
  linkText4?: string;
  linkUrl4?: string;
}

export interface helpFaqPageData {
  metaTitle: string;
  mainTitle: string;
  mainSubtitle: string;
  nav: {
    sections: string[];
  };
  shippingTitle: string;
  shippingTiles: CozeyInfo[];
  returnsTitle: string;
  returnsTiles: CozeyInfo[];
  warrantyTitle: string;
  warrantyTiles: CozeyInfo[];
  productTitle: string;
  productTiles: CozeyInfo[];
  assemblyTitle: string;
  assemblyTiles: CozeyInfo[];
  financingTitle: string;
  financingTiles: CozeyInfo[];
  giftCardTitle: string;
  giftCardTiles: CozeyInfo[];
  contactTile: CozeyInfo[];
}

export interface ProductConfig {
  title: string;
  icon: string;
  value: string;
  blurImageUrl?: string;
  description?: string;
  legsCombination?: {
    regularLegs: number;
    cornerLegs: number;
    simpleLegs: number;
  };
}

export interface ProductCollection {
  title: string;
  handle: string;
  colors: Color[];
  seatingConfigs: {
    sofa: ProductConfig[];
    sectional: ProductConfig[];
  };
  upsells: ProductConfig[];
  arms: ProductConfig[];
  legs: [];
  upgrades: {
    title: string;
    handle: string;
  }[];
}
