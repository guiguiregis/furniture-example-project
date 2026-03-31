import {
  CozeyDifference,
  Meet,
  ProductCollection,
  ProductConfig,
} from '@/helpers/contentful/contentful.types';
// import {
//   MISTRAL_SECTIONAL_SEATINGS,
//   MISTRAL_SOFA_SEATINGS,
//   MISTRAL_UPSELLS,
// } from './collections/mistral';
import Colors from './colors';
import {
  ATMOSPHERE_ARMS,
  ATMOSPHERE_COLOR_OPTIONS,
  ATMOSPHERE_SECTIONAL_SEATINGS,
  ATMOSPHERE_SOFA_SEATINGS,
  CIELLO_COLOR_OPTIONS,
  CIELLO_SOFA_SEATINGS,
  MISTRAL_COLOR_OPTIONS,
  ORIGINAL_ARMS,
  ORIGINAL_COLOR_OPTIONS,
  ORIGINAL_SOFA_SEATINGS,
  SECTIONAL_SEATINGS,
  UPGRADES,
  UPSELLS,
} from './productData';
import {
  MISTRAL_SECTIONAL_SEATINGS,
  MISTRAL_SOFA_SEATINGS,
  MISTRAL_UPSELLS,
} from './collections/mistral';

export const PDP_TEXT_DATA = {
  en: {
    reviewsText: 'reviews',
    cozeyDifference: 'The Cozey Difference',
    suggestedAccessories: 'Suggested Items',
    colorText: 'Pick your color',
    colorTextAcc: 'Pick a color',
    styleText: 'Pick a style',
    sofasText: 'Sofas',
    sectionalsText: 'Sectionals',
    upsellsText: 'Add an ottoman and / or lounging chaise',
    ottomanText: 'Add an ottoman',
    armDesignText: 'Select your arm design',
    seatingUpgradesText: 'Upgrades',
    addToCartText: 'Add to Cart',
    enterPostalcodeText: 'Enter postal code',
    moduleText: 'Module',
    freeSwatchesText: 'Order free swatches',
    quantityText: 'Quantity',
    quantityTextAtmospherePillows: 'Quantity (sold in pairs)',
    performanceFabricText: 'Performance fabric',
    mistralFabricText: 'Water-resistant Fabric',
    velvetFabricText: 'Velvet',
    velvetCielloFabricText: 'Chenille (limited)',
    checkText: 'Check',
    ogPerformanceFabricText: 'Fabric',
    cielloPerformanceFabricText: 'Performance Fabric',
    step1: '1. What are you looking for?',
    step1Btn1: 'I want new legs for my entire sofa',
    step1Btn2: 'I only want a few legs',
    step2: '2. How many legs do you need?',
    step3: '3. Match the legs to your sofa',
    chooseYourLegs: 'Choose your leg design',
    selectionPreview: 'Make a selection to see preview',
    legsPdpMainTitle: 'Original Legs',
    whatsYourConfiguration: "What's you configuration?",
    cantfindYourConfiguration: 'Can’t find your configuration?',
    chaiseOrOttoman: 'Got a chaise or an ottoman?',
    sofaColorText: 'What color is your sofa?',
    wood: 'Wood',
    metal: 'Metal',
    whichLegs: '3. Which legs do you need?',
    stillUnsure: 'Still unsure? Let us help you',
    contactUs: '4. Contact us for further help',
    contactUsFlowOne: '2. Contact us for further help',
    tooltipText: 'Drag to rotate',
    ARBtnTxt: 'View in your space',
    colorSingleText: 'Color',
    preorder: 'Pre-order',
    lowered: 'Lowered',
    raised: 'Raised',
    tooltipTextTable: 'Drag to rotate. Click to zoom',
    selectProduct: 'Select a product',
    download: 'Download',
    opened: 'Open',
    closed: 'Closed',
  },
  fr: {
    reviewsText: 'avis',
    cozeyDifference: 'La difference Cozey',
    suggestedAccessories: 'Articles suggérés',
    colorText: 'Choisir une couleur',
    colorTextAcc: 'Choisir une couleur',
    styleText: 'Choisir un style',
    sofasText: 'Divans',
    sectionalsText: 'Sectionnels',
    upsellsText: 'Ajoutez un ottoman et/ou une chaise longue',
    ottomanText: 'Ajouter un ottoman',
    armDesignText: 'Choisissez votre style de bras',
    seatingUpgradesText: 'Additions',
    addToCartText: 'Ajouter au panier',
    enterPostalcodeText: 'Entrer le code postal',
    moduleText: 'Module',
    freeSwatchesText: 'Commander des échantillons gratuits',
    quantityTextAtmospherePillows: 'Quantité (vendu par paire)',
    quantityText: 'Quantité',
    performanceFabricText: 'Tissu performant',
    mistralFabricText: 'Tissu résistant à l’eau',
    cielloPerformanceFabricText: 'Tissu performance',
    velvetFabricText: 'Velour',
    velvetCielloFabricText: 'Chenille (limité)',
    checkText: 'Vérifier',
    ogPerformanceFabricText: 'Tissu',
    step1: '1. Que recherchez-vous?',
    step1Btn1: 'Je veux remplacer toutes mes pattes',
    step1Btn2: 'Je veux seulement quelques pattes',
    step2: '2. Combien de pattes avez-vous besoin?',
    step3: '3. Choisissez les pattes pour votre divan',
    chooseYourLegs: 'Choisissez votre modèle de pattes',
    selectionPreview: 'Faites une sélection pour voir un aperçu',
    legsPdpMainTitle: 'Pattes Original',
    whatsYourConfiguration: 'Quelle est votre configuration?',
    cantfindYourConfiguration: 'Impossible de trouver votre configuration?',
    chaiseOrOttoman: 'Avez-vous une chaise longue ou un ottoman?',
    sofaColorText: 'Quelle couleur est votre divan?',
    wood: 'Bois',
    metal: 'Métal',
    whichLegs: '3. De quelles pattes avez vous besoin?',
    stillUnsure: 'Besoin d’aide? Nous sommes là pour vous aider',
    contactUs: '4. Contactez-nous',
    contactUsFlowOne: '2. Contactez-nous',
    tooltipText: 'Glisser pour pivoter.',
    ARBtnTxt: 'Voir dans votre espace',
    colorSingleText: 'Couleur',
    preorder: 'Pré-commander',
    lowered: 'Abaissé',
    raised: 'Soulevé',
    tooltipTextTable: 'Glisser pour pivoter. Cliquez pour zoomer',
    selectProduct: 'Choisir un produit',
    download: 'Télécharger',
    closed: 'Fermé',
    opened: 'Ouvert',
  },
};

export const sofaConfigs: ProductConfig[] = [
  {
    title: '1 Seater',
    icon: '/images/configurations/1-place-sofa.svg',
    value: '1-seat',
    description: '',
  },
  {
    title: '2 Seater',
    icon: '/images/configurations/2-places-sofa.svg',
    value: '2-seat',
    description: '',
  },
  {
    title: '3 Seater',
    icon: '/images/configurations/3-places-sofa.svg',
    value: '3-seat',
    description: '',
  },
  {
    title: '4 Seater',
    icon: '/images/configurations/4-places-sofa.svg',
    value: '4-seat',
    description: '',
  },
];

export const sectionalConfigs: ProductConfig[] = [
  {
    title: '3 Seater With Corner R',
    icon: '/images/configurations/4-places-sectionnal-right.svg',
    value: '3-seater-with-corner-r',
    description: '',
  },
  {
    title: '4 Seater With Corner R',
    icon: '/images/configurations/5-places-sectionnal-corner.svg',
    value: '4-seater-with-corner',
    description: '',
  },
  {
    title: '5 Seater With Corner R',
    icon: '/images/configurations/6-places-sectionnal-right.svg',
    value: '5-seater-with-corner-r',
    description: '',
  },
  {
    title: '6 Seater With Corner R',
    icon: '/images/configurations/7-places-sectionnal-corner.svg',
    value: '6-seater-with-corner',
    description: '',
  },
  {
    title: '6 Seater Corner U',
    icon: '/images/configurations/8-places-sectionnal.svg',
    value: '6-seater-with-2-corner',
    description: '',
  },
  {
    title: '7 Seater Corner U',
    icon: '/images/configurations/9-places-sectionnal.svg',
    value: '7-seater-with-corner-r',
    description: '',
  },
  {
    title: '3 Seater With Corner L',
    icon: '/images/configurations/4-places-sectionnal-left.svg',
    value: '3-seater-with-corner-l',
    description: '',
  },
  {
    title: '5 Seater With Corner L',
    icon: '/images/configurations/6-places-sectionnal-left.svg',
    value: '5-seater-with-corner-l',
    description: '',
  },
];

export const optionsConfigs: ProductConfig[] = [
  {
    title: 'Cozey Ottoman',
    icon: '/images/configurations/ottoman.svg',
    value: 'with-ottoman',
    description: '',
  },
  {
    title: 'Cozey Chaise',
    icon: '/images/configurations/chaise.svg',
    value: 'with-chaise',
    description: '',
  },
];

export const armConfigs: ProductConfig[] = [
  {
    title: 'Cozey Square Arms',
    icon: '/images/configurations/rectangle-arm-shape.svg',
    value: 'arms-bloc',
    description: '',
  },
  {
    title: 'Cozey Original Arms',
    icon: '/images/configurations/folder-arm-shape.svg',
    value: 'arms-normal',
    description: '',
  },
];

export const textData = {
  en: {
    sofaConfigurationText: 'Sofa Configuration',
    sectionalConfigurationText: 'Sectional Configuration',
    getInspiredTitle: 'Get Inspired',
    overview: [
      'Sustainably sourced. Fair Trade Certified.',
      'Made from 50% polyester, and 50% cotton.',
      'Gently wash by hand.',
      'Free Shipping & Returns, 30-day trial',
    ],
  },
  fr: {
    sofaConfigurationText: 'Configuration du canapé',
    sectionalConfigurationText: 'Configuration en coupe',
    getInspiredTitle: 'Être inspiré',
    overview: [
      'Sustainably sourced. Fair Trade Certified.',
      'Made from 50% polyester, and 50% cotton.',
      'Gently wash by hand.',
      'Free Shipping & Returns, 30-day trial',
    ],
  },
};

export const accessoryPdpData = {
  en: {
    accessoryUpsellSection: {
      sectionTitle: 'Suggested Items',
      seeMoreText: 'SEE MORE',
      atcText: 'Add to Cart',
      continueButtonText: 'Continue to Cart',
    },
    cartPopupSection: {
      sectionTitle: "We Think You'd Like",
      atcText: 'Add to Cart',
      continueButtonText: 'Continue to Cart',
      seeMoreText: 'SEE MORE',
    },
  },
  fr: {
    accessoryUpsellSection: {
      sectionTitle: 'Articles suggérés',
      seeMoreText: 'VOIR PLUS',
      atcText: 'AJOUTER AU PANIER',
      continueButtonText: 'Afficher le panier',
    },
    cartPopupSection: {
      sectionTitle: 'Nous pensons que vous aimeriez',
      atcText: 'AJOUTER AU PANIER',
      continueButtonText: 'Afficher le panier',
      seeMoreText: 'VOIR PLUS',
    },
  },
};

export const accessoryShopData = {
  en: {
    shopInfoSection: [
      {
        for: 'cushion',
        title: "Can't get enough.",
        paragraphs: [
          "There's such thing as too many cushions.",
          "Mix and match to your heart's content, or keep it simple and save by choosing a Style Set.",
          'The best part? They are designed to pair with your Cozey perfectly.',
        ],
        image:
          'https://images.ctfassets.net/z0vszzs4am30/3wWfWoeTG8QH5XCs6GPyYB/e07ac64b3f802069ffaba00e9aa17c77/Multi__Accessories.jpg',
      },
      {
        for: 'throw',
        title: 'Created with care.',
        paragraphs: [
          'More reasons to love the collection.',
          '- Ethically, handcrafted in India. Which helps to support the local economy.',
          '- Made With Eco Friendly Oeko-Tex Dyes.',
          '- Cushion fill inserts made with 100% recycled materials.',
        ],
        image:
          'https://images.ctfassets.net/z0vszzs4am30/uRQQSXOWOCc1ZDgkD9Bwq/dd733d0759ae99eba1e6b17bce92b547/Ferrier_Chai_detail.jpg',
      },
    ],
  },
  fr: {
    shopInfoSection: [
      {
        for: 'cushion',
        title: 'Je ne peux pas en avoir assez.',
        paragraphs: [
          'Il y a trop de coussins.',
          'Mélangez et faites correspondre le contenu de votre cœur, ou restez simple et économisez en choisissant un ensemble de style.',
          "La meilleure partie? Ils sont conçus pour s'accorder parfaitement avec votre Cozey.",
        ],
        image:
          'https://images.ctfassets.net/z0vszzs4am30/3wWfWoeTG8QH5XCs6GPyYB/e07ac64b3f802069ffaba00e9aa17c77/Multi__Accessories.jpg',
      },
      {
        for: 'throw',
        title: 'Créé avec soin.',
        paragraphs: [
          "Plus de raisons d'aimer la collection.",
          "- Éthique, fabriqué à la main en Inde. Ce qui contribue à soutenir l'économie locale.",
          '- Fabriqué avec des colorants écologiques Oeko-Tex.',
          '- Inserts de remplissage de coussin fabriqués avec des matériaux 100% recyclés.',
        ],
        image:
          'https://images.ctfassets.net/z0vszzs4am30/uRQQSXOWOCc1ZDgkD9Bwq/dd733d0759ae99eba1e6b17bce92b547/Ferrier_Chai_detail.jpg',
      },
    ],
  },
};

// export const shopIndividualImage = {
//   url: '/images/shop-individual-product.png',
// };

// export const accessoriesPdpData = {
//   en: {
//     overview: [
//       'Sustainably sourced. Fair Trade Certified.',
//       'Made from 50% polyester, and 50% cotton.',
//       'Gently wash by hand.',
//       'Free Shipping & Returns, 30-day trial',
//     ],
//   },
// };

export const SHOP_PAGE_DATA = {
  seatingHeader: 'Seating',
  seatingSubheader: 'Comfortable, elegant, and modular',
  modulesHeader: 'Modules',
  modulesSubheader: 'Expand, maintain, and reconfigure your Cozey',
  accessoriesHeader: 'Accessories',
  accessoriesSubheader: 'Upgrade your Cozeyness',
  sofaOptionsText: 'Sofa configurations',
  sectionalOptionsText: 'Sectional configurations',
  upsellOptionsText: 'Chaise & Ottoman',
  armsOptionsText: 'Arms',
  customizerButtonText: 'Design your own',
  filtersText: 'Filters',
  clearAllText: 'Clear all',
  colorText: 'Color',
  collectionText: 'Collection',
  originalCollectionHeader: 'The Original Collection',
  cielloCollectionHeader: 'The Ciello Collection',
  throwsCollectionHeader: 'Throws',
  cushionsCollectionHeader: 'Cushions',
  styleSetsCollectionHeader: 'Style Sets',
  ergonomicCollectionHeader: 'Ergonomics',
  applyFiltersText: 'Apply Filters',
  seeMoreButtonText: 'See More',
  originalCollection: {
    collectionTitle: 'The Original',
    introSectionColor: Colors.COZEY_BLUE,
    collectionTag: {
      title: 'MOST POPULAR',
      hex: `${Colors.COZEY_BLUE}`,
    },
    collectionText:
      'The model that started it all is our most versatile, including our lightest and most colorful design, offering full modularity.',
    collectionLink: {
      title: 'Learn about The Original Collection',
      href: '/collections',
    },
  },
  cielloCollection: {
    collectionTitle: 'Ciello',
    introSectionColor: Colors.COZEY_LIGHT_BLUE,
    collectionTag: {
      title: 'NEW',
      hex: `${Colors.COZEY_RUST}`,
    },
    collectionText:
      'Wider, deeper, and plusher seating make the Ciello collection perfect to lounge in and sink into with your family members.',
    collectionLink: {
      title: 'Learn about the Ciello Collection',
      href: '/collections',
    },
  },
};

export const COLLECTIONS: ProductCollection[] = [
  {
    title: 'Original',
    handle: 'original',
    colors: ORIGINAL_COLOR_OPTIONS,
    seatingConfigs: {
      sofa: ORIGINAL_SOFA_SEATINGS,
      sectional: SECTIONAL_SEATINGS,
    },
    upsells: UPSELLS,
    arms: ORIGINAL_ARMS,
    legs: [],
    upgrades: UPGRADES,
  },
  {
    title: 'Ciello',
    handle: 'ciello',
    colors: CIELLO_COLOR_OPTIONS,
    seatingConfigs: {
      sofa: CIELLO_SOFA_SEATINGS,
      sectional: SECTIONAL_SEATINGS,
    },
    upsells: UPSELLS,
    arms: ORIGINAL_ARMS,
    legs: [],
    upgrades: [],
  },
  {
    title: 'Atmosphere',
    handle: 'atmosphere',
    colors: ATMOSPHERE_COLOR_OPTIONS,
    seatingConfigs: {
      sofa: ATMOSPHERE_SOFA_SEATINGS,
      sectional: ATMOSPHERE_SECTIONAL_SEATINGS,
    },
    upsells: UPSELLS,
    arms: ATMOSPHERE_ARMS,
    legs: [],
    upgrades: [],
  },
  {
    title: 'Mistral',
    handle: 'mistral',
    colors: MISTRAL_COLOR_OPTIONS,
    seatingConfigs: {
      sofa: MISTRAL_SOFA_SEATINGS,
      sectional: MISTRAL_SECTIONAL_SEATINGS,
    },
    upsells: MISTRAL_UPSELLS,
    arms: [],
    legs: [],
    upgrades: [],
  },
];

export const COZEY_DIFFERENCE_DATA: CozeyDifference = {
  title: 'The Cozey difference',
  sections: [
    {
      title: 'Fully Modular',
      content:
        'Add and reconfigure modules to adapt your furniture to your evolving space.',
    },
    {
      title: 'Canadian company',
      content:
        'Founded, based, and designed in the Canadian city of Montreal, QC.',
    },
    {
      title: 'Fast & free shipping',
      content:
        'Enjoy exceptional shipping speeds in all Canadian provinces and on all orders.',
    },
    {
      title: '2000+  5-star reviews',
      content: 'Built with you in mind, our reviews speak for themselves.',
    },
  ],
  mobileSections: [
    {
      title: 'Fully Modular',
      content:
        'Add and reconfigure modules to adapt your furniture to your evolving space.',
    },
    {
      title: 'Canadian company',
      content:
        'Founded, based, and designed in the Canadian city of Montreal, QC.',
    },
    {
      title: 'Fast & free shipping',
      content:
        'Enjoy exceptional shipping speeds in all Canadian provinces and on all orders.',
    },
    {
      title: '30-day risk-free trial',
      content:
        'If the product doesn’t fit your needs, we will take it back for free.',
    },
  ],
  image1: '/images/Easy-Assembly.png',
  image2: '/images/Canadian-Company.png',
  image3: '/images/Fast-Delivery.png',
  image4: '/images/Reviews.png',
  mobileImage1: '/images/Easy-Assembly.png',
  mobileImage2: '/images/Canadian-Company.png',
  mobileImage3: '/images/Fast-Delivery.png',
  mobileImage4: '/images/Risk-Free-Trial.png',
};

export const MEET_DATA: Meet = {
  title: 'Our seating collections',
  sections: [
    {
      description:
        'With fully swappable covers in vibrant colours, Atmosphere offers the unique ability to completely change the sofa’s colour anytime.',
      link: '/collections/atmosphere',
      title: 'Atmosphere',
    },
    {
      description:
        'Marked by its compact design, colour variety, and configurability, the Original fits any space.',
      link: '/collections/original',
      title: 'Original',
    },
    {
      description:
        'Ciello’s deeper and plusher seating elegantly combines cloud-like comfort and modularity.',
      link: '/collections/ciello',
      title: 'Ciello',
    },
  ],
  originalsImage: '/images/tile.svg',
  originalsImageMobile: '/images/tile.svg',
  cielloImage: '/images/tile.svg',
  cielloImageMobile: '/images/tile.svg',
  atmosphereImage: '/images/tile.svg',
  atmosphereImageMobile: '/images/tile.svg',
  link: '/shop/seating',
  linkTitle: 'Shop all seating',
};
