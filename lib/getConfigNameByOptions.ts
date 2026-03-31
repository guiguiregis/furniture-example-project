import { Options } from './getCylindoCodesByOptions';

// const optionsExample = {
//   collection: 'original',
//   color: 'dark-grey',
//   seating: '5-seater-with-corner-r',
//   upsells: ['with-chaise', 'with-ottoman'],
//   arms: 'arms-normal',
//   upgrade: '',
// };

export const getConfigNameByOptions = (options: Options): string => {
  let configName = '';
  const { color, seating, upsells, arms } = options;
  if (options.collection === 'original') {
    // ORIGINAL
    if (upsells.length > 0 && upsells[0] !== '') {
      let upsellsFormatted = '';
      if (upsells.includes('with-ottoman') && upsells[0] !== 'with-ottoman') {
        upsellsFormatted = upsells.reverse().join('-');
      } else {
        upsellsFormatted = upsells.join('-');
      }
      configName = `${color}-${seating}-${arms}-${upsellsFormatted}`;
    } else {
      configName = `${color}-${seating}-${arms}`;
    }
  } else if (options.collection === 'ciello') {
    let upsellsFormatted = '';

    // CIELLO
    if (upsells.length > 0 && upsells[0] !== '') {
      if (upsells.includes('with-ottoman')) {
        upsellsFormatted = '-with-ottoman';
      }
    }
    configName = `${color}-${seating}-ciello-arms${upsellsFormatted}`;
  } else if (options.collection === 'mistral') {
    if (upsells.length > 0) {
      configName = `${color}-${seating}-ott1`;
    } else {
      configName = `${color}-${seating}-ott0`;
    }
  } else {
    let upsellsFormatted = '';

    // ATMOSPHERE
    if (upsells.length > 0 && upsells[0] !== '') {
      if (upsells.includes('with-ottoman')) {
        upsellsFormatted = '-with-ottoman';
      }
    }
    configName = `atmos-${color}-${seating}${upsellsFormatted}`;
  }
  return configName;
};
