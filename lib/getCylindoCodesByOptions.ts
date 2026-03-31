export interface Options {
  collection: string;
  color: string;
  seating: string;
  upsells: string[];
  arms: string;
  upgrade: string;
  legs?: string;
}

const OG_PRODUCT_CODES = {
  '1-seat': '1 SEATER SOFA OG',
  '2-seat': '2 SEATER SOFA OG',
  '3-seat': '3 SEATER SOFA OG',
  '4-seat': '4 SEATER SOFA OG',
  '3-seater-with-corner-r': '3 SEATER CORNER OG RIGHT',
  '3-seater-with-corner-l': '3 SEATER CORNER OG LEFT',
  '4-seater-with-corner': '4 SEATER CORNER OG',
  '5-seater-with-corner-r': '5 SEATER CORNER OG RIGHT',
  '5-seater-with-corner-l': '5 SEATER CORNER OG LEFT',
  '6-seater-with-corner': '6 SEATER CORNER OG',
  '6-seater-with-2-corner': '6 SEATER U OG',
  '7-seater-with-2-corner': '7 SEATER CORNER OG',
};

const CIELLO_PRODUCT_CODES = {
  '1-seater': 'CIELLO - SF - 1',
  '2-seater': 'CIELLO - SF - 2',
  '3-seater': 'CIELLO - SF - 3',
  '3-seater-with-corner-r': 'CIELLO - SC - 3R',
  '3-seater-with-corner-l': 'CIELLO - SC - 3L',
  '4-seater': 'CIELLO - SF - 4',
  '4-seater-with-corner': 'CIELLO - SC - 4',
  '5-seater-with-corner-r': 'CIELLO - SC - 5R',
  '5-seater-with-corner-l': 'CIELLO - SC - 5L',
  '6-seater-with-corner': 'CIELLO - SC - 6',
  '6-seater-with-2-corner': 'CIELLO - SC - 6U',
  '7-seater-with-2-corner': 'CIELLO - SC - 7U',
};

const ATMOSPHERE_PRODUCT_CODES = {
  '1-seater-arms-atmos-none': 'ATMOSPHERE 1 SEATER ARMLESS',
  '1-seater-arms-atmos-left': 'ATMOSPHERE 1 SEATER CORNER',
  '1-seater-arms-atmos-right': 'ATMOSPHERE 1 SEATER CORNER',
  '2-seater-arms-atmos-none': 'ATMOSPHERE 2 SEATER ARMLESS',
  '2-seater-arms-atmos-left': 'ATMOSPHERE 2 SEATER 1 ARM LEFT',
  '2-seater-arms-atmos-right': 'ATMOSPHERE 2 SEATER 1 ARM RIGHT',
  '2-seater-arms-atmos-2': 'ATMOSPHERE 2 SEATER 2 ARMS',
  '3-seater-arms-atmos-none': 'ATMOSPHERE 3 SEATER ARMLESS',
  '3-seater-arms-atmos-left': 'ATMOSPHERE 3 SEATER 1 ARM LEFT',
  '3-seater-arms-atmos-right': 'ATMOSPHERE 3 SEATER 1 ARM RIGHT',
  '3-seater-arms-atmos-2': 'ATMOSPHERE 3 SEATER 2 ARMS',
  '3-seater-with-corner-l-arms-atmos-left':
    'ATMOSPHERE 3 SEATER CORNER LEFT 1 ARM LEFT',
  '3-seater-with-corner-l-arms-atmos-right':
    'ATMOSPHERE 3 SEATER CORNER LEFT 1 ARM RIGHT',
  '3-seater-with-corner-l-arms-atmos-2':
    'ATMOSPHERE 3 SEATER CORNER LEFT 2 ARMS',
  '3-seater-with-corner-l-arms-atmos-none':
    'ATMOSPHERE 3 SEATER CORNER LEFT ARMLESS',
  '3-seater-with-corner-r-arms-atmos-left':
    'ATMOSPHERE 3 SEATER CORNER RIGHT 1 ARM LEFT',
  '3-seater-with-corner-r-arms-atmos-right':
    'ATMOSPHERE 3 SEATER CORNER RIGHT 1 ARM RIGHT',
  '3-seater-with-corner-r-arms-atmos-2':
    'ATMOSPHERE 3 SEATER CORNER RIGHT 2 ARMS',
  '3-seater-with-corner-r-arms-atmos-none':
    'ATMOSPHERE 3 SEATER CORNER RIGHT ARMLESS',
  '4-seater-with-corner-arms-atmos-none': 'ATMOSPHERE 4 SEATER CORNER ARMLESS',
  '4-seater-arms-atmos-left': 'ATMOSPHERE 4 SEATER 1 ARM LEFT',
  '4-seater-arms-atmos-right': 'ATMOSPHERE 4 SEATER 1 ARM RIGHT',
  '4-seater-arms-atmos-2': 'ATMOSPHERE 4 SEATER 2 ARMS',
  '4-seater-with-corner-arms-atmos-left':
    'ATMOSPHERE 4 SEATER CORNER 1 ARM LEFT',
  '4-seater-with-corner-r-arms-atmos-right':
    'ATMOSPHERE 4 SEATER CORNER 1 ARM RIGHT',
  '4-seater-with-corner-l-arms-atmos-2': 'ATMOSPHERE 4 SEATER CORNER 2 ARMS',
  '4-seater-with-corner-l-arms-atmos-none':
    'ATMOSPHERE 4 SEATER CORNER ARMLESS',
  '5-seater-with-corner-l-arms-atmos-left':
    'ATMOSPHERE 5 SEATER CORNER LEFT 1 ARM LEFT',
  '5-seater-with-corner-l-arms-atmos-right':
    'ATMOSPHERE 5 SEATER CORNER LEFT 1 ARM RIGHT',
  '5-seater-with-corner-l-arms-atmos-2':
    'ATMOSPHERE 5 SEATER CORNER LEFT 2 ARMS',
  '5-seater-with-corner-l-arms-atmos-none':
    'ATMOSPHERE 5 SEATER CORNER LEFT ARMLESS',
  '5-seater-with-corner-r-arms-atmos-left':
    'ATMOSPHERE 5 SEATER CORNER RIGHT 1 ARM LEFT',
  '5-seater-with-corner-r-arms-atmos-right':
    'ATMOSPHERE 5 SEATER CORNER RIGHT 1 ARM RIGHT',
  '5-seater-with-corner-r-arms-atmos-2':
    'ATMOSPHERE 5 SEATER CORNER RIGHT 2 ARMS',
  '5-seater-with-corner-r-arms-atmos-none':
    'ATMOSPHERE 5 SEATER CORNER RIGHT ARMLESS',
  '6-seater-with-corner-r-arms-atmos-left':
    'ATMOSPHERE 6 SEATER CORNER 1 ARM LEFT',
  '6-seater-with-corner-r-arms-atmos-2': 'ATMOSPHERE 6 SEATER CORNER 2 ARMS',
  // '6-seater-with-corner-r-arms-atmos-none':
  //   'ATMOSPHERE 6 SEATER CORNER RIGHT ARMLESS',
  '6-seater-with-2-corner-arms-atmos-left':
    'ATMOSPHERE 6 SEATER CORNER U 1 ARM LEFT',
  '6-seater-with-2-corner-arms-atmos-right':
    'ATMOSPHERE 6 SEATER CORNER U 1 ARM RIGHT',
  '6-seater-with-2-corner-arms-atmos-2': 'ATMOSPHERE 6 SEATER CORNER U 2 ARMS',
  '6-seater-with-2-corner-arms-atmos-none':
    'ATMOSPHERE 6 SEATER CORNER U ARMLESS',
  '6-seater-with-corner-l-arms-atmos-right':
    'ATMOSPHERE 6 SEATER CORNER 1 ARM RIGHT',
  '7-seater-with-2-corner-arms-atmos-left':
    'ATMOSPHERE 7 SEATER CORNER U 1 ARM LEFT',
  '7-seater-with-2-corner-arms-atmos-right':
    'ATMOSPHERE 7 SEATER CORNER U 1 ARM RIGHT',
  '7-seater-with-2-corner-arms-atmos-2': 'ATMOSPHERE 7 SEATER CORNER U 2 ARMS',
  '7-seater-with-2-corner-arms-atmos-none':
    'ATMOSPHERE 7 SEATER CORNER U ARMLESS',
};

const MISTRAL_PRODUCT_CODES = {
  'SF-1': 'MISTRAL - SF - 1',
  'SF-2': 'MISTRAL - SF - 2',
  'SF-3': 'MISTRAL - SF - 3',
  'SF-4': 'MISTRAL - SF - 4',
  'SC-3L': 'MISTRAL - SC - 3L',
  'SC-3R': 'MISTRAL - SC - 3R',
  'SC-4': 'MISTRAL - SC - 4',
  'SC-5L': 'MISTRAL - SC - 5L',
  'SC-5R': 'MISTRAL - SC - 5R',
  'SC-6': 'MISTRAL - SC - 6',
  'SC-6U': 'MISTRAL - SC - 6U',
  'SC-7U': 'MISTRAL - SC - 7U',
};

const OTTOMAN_FEATURE = {
  code: 'OTTOMAN',
  on: 'ON',
  off: 'OFF',
};

const CHAISE_FEATURE = {
  code: 'CHAISE',
  on: 'ON',
  off: 'OFF',
  both: 'BOTH',
  left: 'LEFT',
  right: 'RIGHT',
};

const ARMS_FEATURE = {
  code: 'ARM DESIGN',
  'arms-bloc': 'BLOC',
  'arms-normal': 'SLOPE',
};

const COLORS_FEATURE = {
  codeOriginal: 'FABRIC',
  codeCiello: 'FABRIC',
  codeAtmosphere: 'FABRIC',
  codeMistral: 'FABRIC',
  'light-grey': 'LIGHT GREY',
  'dark-grey': 'DARK GREY',
  charcoal: 'CHARCOAL',
  ivory: 'IVORY',
  'navy-blue': 'NAVY BLUE',
  sand: 'SAND',
  'storm-grey': 'STORM GREY',
  'dream-grey': 'DREAM GREY',
  'sunset-beige': 'SUNSET BEIGE',
  celeste: 'CELESTE',
  'velvet-green': 'VELVET GREEN',
  'velvet-blue': 'VELVET BLUE',
  'white-sand': 'ATMOSPHERE WHITE SAND',
  smoke: 'ATMOSPHERE SMOKE',
  silver: 'ATMOSPHERE SILVER',
  desert: 'ATMOSPHERE DESERT',
  copper: 'ATMOSPHERE COPPER',
  wheat: 'ATMOSPHERE WHEAT',
  midnight: 'ATMOSPHERE MIDNIGHT BLUE',
  coral: 'ATMOSPHERE CORAL',
  night: 'ATMOSPHERE NIGHT',
  coolwater: 'COOL WATER',
  silvershade: 'SILVER SHADE',
  shadow: 'SHADOW',
  sandcastle: 'SANDCASTLE',
  patio: 'PATIO',
};

const LEGS_FEATURE = {
  code: 'LEGS',
  'cozey-dark-oak': 'Dark Brown',
  'cozey-matte-black': 'METAL LEG MATTE BLACK',
  'cozey-brushed-nickle': 'METAL LEG SILVER',
};

const PILLOWS_FEATURE = {
  code: 'PILLOWS',
  off: 'OFF',
  lumbar: 'RECTANGLE',
  traversin: 'CYLINDRICAL',
};

export const getCylindoCodesByOptions = (options: Options) => {
  let productCode = '';
  let features: string[] = [];

  if (options.collection === 'original') {
    productCode =
      OG_PRODUCT_CODES[options.seating as keyof typeof OG_PRODUCT_CODES];

    if (options.arms === 'arms-bloc' || options.arms === 'arms-normal') {
      const armsFeatures = [
        ARMS_FEATURE.code,
        ARMS_FEATURE[options.arms as keyof typeof ARMS_FEATURE],
      ];
      features = [...features, ...armsFeatures];
    }

    if (options.legs && options.legs !== '') {
      const armsFeatures = [
        LEGS_FEATURE.code,
        LEGS_FEATURE[options.legs as keyof typeof LEGS_FEATURE],
      ];
      features = [...features, ...armsFeatures];
    }

    if (options.color !== '') {
      const colorFeatures = [
        COLORS_FEATURE.codeOriginal,
        COLORS_FEATURE[options.color as keyof typeof COLORS_FEATURE],
      ];
      features = [...features, ...colorFeatures];
    }

    if (options.upsells.length > 0 && options.upsells[0] !== '') {
      const upsellFeatures = options.upsells
        .map(upsell => {
          switch (upsell) {
            case 'with-chaise':
              if (options.seating.includes('1-seat'))
                return [CHAISE_FEATURE.code, CHAISE_FEATURE.on];
              return [CHAISE_FEATURE.code, CHAISE_FEATURE.right];
            case 'with-chaise-left':
              return [CHAISE_FEATURE.code, CHAISE_FEATURE.left];
            case 'with-2-chaise':
              return [CHAISE_FEATURE.code, CHAISE_FEATURE.both];
            case 'with-ottoman':
              return [OTTOMAN_FEATURE.code, OTTOMAN_FEATURE.on];
            default:
              return '';
          }
        })
        .flat();
      features = [...features, ...upsellFeatures];
    } else {
      const upsellsFeatures = [
        CHAISE_FEATURE.code,
        CHAISE_FEATURE.off,
        OTTOMAN_FEATURE.code,
        OTTOMAN_FEATURE.off,
      ];
      features = [...features, ...upsellsFeatures];
    }

    if (options.upgrade !== '') {
      const upgradeFeatures = [
        PILLOWS_FEATURE.code,
        PILLOWS_FEATURE[options.upgrade as keyof typeof PILLOWS_FEATURE],
      ];
      features = [...features, ...upgradeFeatures];
    }
  } else if (options.collection === 'ciello') {
    productCode =
      CIELLO_PRODUCT_CODES[
        options.seating as keyof typeof CIELLO_PRODUCT_CODES
      ];
    if (options.color !== '') {
      const colorFeatures = [
        COLORS_FEATURE.codeCiello,
        COLORS_FEATURE[options.color as keyof typeof COLORS_FEATURE],
      ];
      features = [...features, ...colorFeatures];
    }

    if (options.upsells.length > 0 && options.upsells[0] === 'with-ottoman') {
      const upsellFeatures = [OTTOMAN_FEATURE.code, OTTOMAN_FEATURE.on];
      features = [...features, ...upsellFeatures];
    }
  } else if (options.collection === 'mistral') {
    productCode =
      MISTRAL_PRODUCT_CODES[
        options.seating as keyof typeof MISTRAL_PRODUCT_CODES
      ];
    if (options.color !== '') {
      const colorFeatures = [
        COLORS_FEATURE.codeMistral,
        COLORS_FEATURE[options.color as keyof typeof COLORS_FEATURE],
      ];
      features = [...features, ...colorFeatures];
    }

    if (options.upsells.length > 0 && options.upsells[0] === 'ott1') {
      const upsellFeatures = [OTTOMAN_FEATURE.code, OTTOMAN_FEATURE.on];
      features = [...features, ...upsellFeatures];
    } else {
      const upsellFeatures = [OTTOMAN_FEATURE.code, OTTOMAN_FEATURE.off];
      features = [...features, ...upsellFeatures];
    }
  } else {
    productCode =
      ATMOSPHERE_PRODUCT_CODES[
        options.seating as keyof typeof ATMOSPHERE_PRODUCT_CODES
      ];

    if (options.arms === 'arms-bloc' || options.arms === 'arms-normal') {
      const armsFeatures = [
        ARMS_FEATURE.code,
        ARMS_FEATURE[options.arms as keyof typeof ARMS_FEATURE],
      ];
      features = [...features, ...armsFeatures];
    }

    // if (options.legs && options.legs !== '') {
    //   const armsFeatures = [
    //     LEGS_FEATURE.code,
    //     LEGS_FEATURE[options.legs as keyof typeof LEGS_FEATURE],
    //   ];
    //   features = [...features, ...armsFeatures];
    // }

    if (options.color !== '') {
      const colorFeatures = [
        COLORS_FEATURE.codeAtmosphere,
        COLORS_FEATURE[options.color as keyof typeof COLORS_FEATURE],
      ];
      features = [...features, ...colorFeatures];
    }

    if (options.upsells.length > 0 && options.upsells[0] !== '') {
      const upsellFeatures = options.upsells
        .map(upsell => {
          switch (upsell) {
            case 'with-chaise':
              if (options.seating.includes('1-seat'))
                return [CHAISE_FEATURE.code, CHAISE_FEATURE.on];
              return [CHAISE_FEATURE.code, CHAISE_FEATURE.right];
            case 'with-chaise-left':
              return [CHAISE_FEATURE.code, CHAISE_FEATURE.left];
            case 'with-2-chaise':
              return [CHAISE_FEATURE.code, CHAISE_FEATURE.both];
            case 'with-ottoman':
              return [OTTOMAN_FEATURE.code, 'YES'];
            default:
              return '';
          }
        })
        .flat();
      features = [...features, ...upsellFeatures];
    } else {
      const upsellsFeatures = [OTTOMAN_FEATURE.code, 'NO'];
      features = [...features, ...upsellsFeatures];
    }

    if (options.upgrade !== '') {
      const upgradeFeatures = [
        PILLOWS_FEATURE.code,
        PILLOWS_FEATURE[options.upgrade as keyof typeof PILLOWS_FEATURE],
      ];
      features = [...features, ...upgradeFeatures];
    }
  }
  return {
    productCode,
    features,
  };
};
