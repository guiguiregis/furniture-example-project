/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-cycle */
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useRouter } from 'next/router';
import axios from 'axios';
import { setCylindoViewer } from '@/lib/setCylindoViewer';
import {
  Color,
  ProductCollection,
} from '@/helpers/contentful/contentful.types';
import { getCylindoCodesByOptions } from '@/lib/getCylindoCodesByOptions';
import { getCylindoArUrl } from '@/lib/getCylindoArUrl';
import { getCategoryHandleByCylindoCode } from '@/lib/getCategoryByCylindoCode';
import { getConfigNameByOptions } from '@/lib/getConfigNameByOptions';
import { handleUpsellsBySeating } from '@/lib/handleUpsellsBySeating';
import { selectFrameCylindo } from '@/lib/selectFrameCylindo';
import {
  ColorOptionsContainer,
  ColorSectionContainer,
  ColorSectionTitle,
  ColorsRow,
} from '@/components/Pages/Product/Configurators/common.types';
import {
  CollectionButton,
  CylindoCustomizerContainer,
  CylindoLeftContainer,
  CylindoRightContainer,
  SeatingWrapper,
  UpsellWrapper,
  RoundButton,
  SectionContainer,
  CylindoImageContainer,
  CylindoQRCodeContent,
  QRCodeContainer,
  DevicesIcon,
  CylindoQRCodeHeader,
  FlexContainerTitle,
  ContainerTitle,
} from './styles';
import { DropdownConfig } from '../DropdownConfig';
import { ButtonConfigNew } from '../ButtonConfigNew';
import { InfoModal } from '../InfoModal';
import { NotifyMeModal } from '../Modals/NotifyMeModal';

const legsModalData = {
  title: 'Leg design',
  description1:
    'The Dark Oak wooden leg design is the default leg design of The Original Collection and is included in every sofa order at no additional cost.',
  description2:
    'You may upgrade to a metal finish design at an extra cost, reflected on the “Add to Cart” button.',
};

const ARM_SELECTION_TEXT = {
  armlessSelectionText: 'arms-atmos-none',
  leftArmSelectionText: 'arms-atmos-left',
  rightArmSelectionText: 'arms-atmos-right',
  armSelectionText: 'arms-atmos-2',
};

const ARM_SELECTION_TEXT_ARRAY = [
  'arms-atmos-none',
  'arms-atmos-left',
  'arms-atmos-right',
  'arms-atmos-2',
];

const TEXT_DATA = {
  en: {
    collectionText: 'Collection',
    colorText: 'Pick your color',
    originalText: 'Altus',
    cielloText: 'Ciello',
    atmosphereText: 'Atmosphere',
    mistralText: 'Mistral',
    configurationText: 'Configuration',
    sofasText: 'Sofas',
    sectionalsText: 'Sectionals',
    upsellsText: 'Chaise & Ottoman',
    ottomanText: 'Ottoman',
    armDesignText: 'Arm design',
    armDesignAtmosphereText: 'Arm style',
    armlessStyleText: 'Armless',
    leftArmStyleText: 'Left Arm',
    rightArmStyleText: 'Right Arm',
    armStyleText: '2 Arms',
    seatingUpgradesText: 'Upgrades',
    submitButtonText: 'Continue your build',
    performanceFabricText: 'Performance fabric',
    mistralFabricText: 'Water-resistant Fabric',
    removableFabricText: 'Removable fabric',
    velvetFabricText: 'Velvet',
    tooltipText: 'Drag to rotate',
    ARBtnTxt: 'View in your space',
    lumbarText: 'Lumbar',
    traversinText: 'Traversin',
    selectLegDesign: 'Leg design',
    wood: 'Wood',
    metal: 'Metal',
  },
  fr: {
    collectionText: 'Collection',
    colorText: 'Choisir une couleur',
    originalText: 'Original',
    cielloText: 'Ciello',
    atmosphereText: 'Atmosphère',
    configurationText: 'Configuration',
    sofasText: 'Divans',
    sectionalsText: 'Sectionnels',
    upsellsText: 'Chaise et ottoman',
    ottomanText: 'Ottoman',
    armDesignText: 'Design de bras',
    armDesignAtmosphereText: 'Style de bras',
    armlessStyleText: 'Sans bras',
    leftArmStyleText: 'Bras gauche',
    rightArmStyleText: 'Bras droit',
    armStyleText: '2 bras',
    seatingUpgradesText: 'Ajouts',
    submitButtonText: 'Continuer votre design',
    performanceFabricText: 'Tissu performant',
    mistralFabricText: 'Tissu résistant à l’eau',
    removableFabricText: 'Tissu remplaçable',
    velvetFabricText: 'Velvet',
    tooltipText: 'Faire glisser pour pivoter',
    ARBtnTxt: 'Voir dans votre espace',
    lumbarText: 'Lombaires',
    traversinText: 'Traversins',
    selectLegDesign: 'Design de pattes',
    wood: 'Bois',
    metal: 'Métal',
  },
};

const defaultCielloCollection = {
  collection: 'ciello',
  color: 'dream-grey',
  seating: '3-seater',
  upsells: [],
  arms: '',
  upgrade: '',
};

// const defaultAtmosphereCollection = {
//   collection: 'atmosphere',
//   color: 'desert',
//   seating: '3-seater-with-corner-r',
//   upsells: [],
//   arms: '',
//   upgrade: '',
// };

interface CylindoCustomizerProps {
  collections: ProductCollection[];
  headerText?: string;
  layout?: 'home' | 'shop';
  colorsData?: Color[];
}

interface CollectionSelected {
  collection: string;
  color: string;
  seating: string;
  upsells: string[];
  arms: string;
  legs?: Color;
  upgrade: string;
}

const CylindoCustomizer = ({
  collections,
  headerText,
  layout = 'shop',
  colorsData,
}: CylindoCustomizerProps) => {
  const router = useRouter();
  const textData = router.locale === 'fr' ? TEXT_DATA.fr : TEXT_DATA.en;
  const [cylindoToggle, setCylindoToggle] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [redirectButtonTogle, setRedirectButtonTogle] = useState(false);
  const legsColors = {
    wood: colorsData?.filter(
      (color: Color) => color.value === 'cozey-dark-oak',
    ),
    metal: colorsData?.filter(
      (color: Color) =>
        color.value === 'cozey-brushed-nickle' ||
        color.value === 'cozey-matte-black',
    ),
  };
  const defaultOriginalCollection = {
    collection: 'original',
    color: 'dark-grey',
    seating: '3-seat',
    upsells: [],
    arms: 'arms-bloc',
    legs: legsColors?.wood?.[0],
    upgrade: '',
  };

  const defaultAtmosphereCollection = {
    collection: 'atmosphere',
    color: 'desert',
    seating: '3-seater-arms-atmos-2',
    upsells: [],
    arms: '',
    upgrade: '',
  };

  // const defaultMisralCollection = {
  //   collection: 'mistral',
  //   color: 'silvershade',
  //   seating: 'SF-3',
  //   upsells: [],
  //   arms: '',
  //   upgrade: '',
  // };

  const [collectionSelected, setCollectionSelected] =
    useState<CollectionSelected>(
      router.asPath.includes('collections/ciello')
        ? defaultCielloCollection
        : router.asPath.includes('collections/original')
        ? defaultOriginalCollection
        : router.asPath.includes('collections/atmosphere')
        ? defaultAtmosphereCollection
        : defaultCielloCollection,
    );

  const [armSelected, setArmSelected] = useState<string>(
    ARM_SELECTION_TEXT.armSelectionText,
  );

  const [cylindoQRCode, setCylindoQRCode] = useState('');

  const [cylindoViewerInstance, setCylindoViewerInstance] = useState<any>(null);

  const [isCylindoZoomed, setIsCylindoZoomed] = useState(false);

  const getColorName = colorsData?.find(
    color => color.value === collectionSelected.color,
  );

  const tempOGColors = [
    {
      key: 'dark-grey',
      value: 'Slate',
    },
    {
      key: 'light-grey',
      value: 'Fog',
    },
    {
      key: 'charcoal',
      value: 'Obsidian',
    },
    {
      key: 'sand',
      value: 'Latte',
    },
    {
      key: 'navy-blue',
      value: 'Deep Sea',
    },
    {
      key: 'ivory',
      value: 'Pearl',
    },
  ];

  const tempColorName = tempOGColors.find(
    tempColor => tempColor.key === collectionSelected.color,
  );

  const upsellsBySelection =
    collectionSelected.collection === 'ciello' ||
    collectionSelected.collection === 'atmosphere'
      ? collections
          .filter(col => col.handle === collectionSelected.collection)
          .flatMap(col =>
            col.upsells.filter(upsell => upsell.value === 'with-ottoman'),
          )
      : handleUpsellsBySeating({
          seat: collectionSelected.seating,
          upsells: collections
            .filter(col => col.handle === collectionSelected.collection)
            .flatMap(col => col.upsells),
        });

  const handleCollectionSelected = (collection: string) => {
    if (collection === 'original') {
      setCollectionSelected({
        collection: 'original',
        color: 'dark-grey',
        seating: '3-seat',
        upsells: [],
        arms: 'arms-bloc',
        legs: legsColors?.wood?.[0],
        upgrade: '',
      });
    } else if (collection === 'atmosphere') {
      setCollectionSelected({
        collection: 'atmosphere',
        color: 'desert',
        seating: '3-seater-arms-atmos-2',
        upsells: [],
        arms: '',
        upgrade: '',
      });
    } else if (collection === 'ciello') {
      setCollectionSelected({
        collection: 'ciello',
        color: 'dream-grey',
        seating: '3-seater',
        upsells: [],
        arms: '',
        upgrade: '',
      });
    } else {
      setCollectionSelected({
        collection: 'mistral',
        color: 'silvershade',
        seating: 'SF-3',
        upsells: [],
        arms: '',
        upgrade: '',
      });
    }
  };

  const handleArmsSelected = (arms: string) => {
    const currentArm = ARM_SELECTION_TEXT_ARRAY.find(arm =>
      collectionSelected.seating.includes(arm),
    );

    if (collectionSelected.collection === 'atmosphere') {
      setCollectionSelected({
        ...collectionSelected,
        seating: collectionSelected.seating.replace(currentArm as string, arms),
      });
    }

    setArmSelected(arms);
  };

  useEffect(() => {
    window.cylindo.on('ready', function () {
      if (cylindoViewerInstance) {
        cylindoViewerInstance.on(
          cylindoViewerInstance.events.ZOOM_ENTER,
          () => {
            setIsCylindoZoomed(true);
          },
        );
        cylindoViewerInstance.on(cylindoViewerInstance.events.ZOOM_EXIT, () => {
          setIsCylindoZoomed(false);
        });
      }
    });
  }, [cylindoViewerInstance]);

  useEffect(() => {
    const { productCode, features } = getCylindoCodesByOptions({
      ...collectionSelected,
      legs: collectionSelected.legs?.value,
    });
    setCylindoViewer({
      cylindoProductCode: productCode,
      cylindoProductFeatures: features,
      cylindoViewerInstance,
      setCylindoViewerInstance,
      enableThumbs: false,
      ARBtnTxt: textData.ARBtnTxt,
      tooltipText: textData.tooltipText,
      locale: router.locale,
      ARDesktop: false,
      startFrame: selectFrameCylindo({ cylindoProductCode: productCode }),
    });

    const cylindoQRCodeUrl = getCylindoArUrl({
      productCode,
      productFeatures: features,
    });
    axios.get(cylindoQRCodeUrl).then(response => {
      setCylindoQRCode(response.data);
    });
  }, [collectionSelected, router.locale]);

  const getUrl = () => {
    const { productCode } = getCylindoCodesByOptions({
      ...collectionSelected,
      legs: collectionSelected.legs?.value,
    });
    const configName = getConfigNameByOptions({
      ...collectionSelected,
      legs: collectionSelected.legs?.value,
    });
    const categoryHandle = getCategoryHandleByCylindoCode(productCode);

    let productHandle = '';

    if (
      productCode.toLowerCase().includes('cloud') ||
      productCode.toLowerCase().includes('ciello')
    ) {
      productHandle = 'ciello';
    } else if (productCode.toLowerCase().includes('atmos')) {
      productHandle = 'atmosphere';
    } else if (productCode.includes('MISTRAL')) {
      productHandle = 'mistral';
    } else {
      productHandle = 'original';
    }

    return `/product/${categoryHandle}/${productHandle}/${configName}`;
  };

  const configLink = getUrl();

  const handleSelectConfig = () => {
    alert('Clicked');
  };

  const handleUpsells = (upsell: string) => {
    setCollectionSelected(oldSelection => {
      const checkUpsell = oldSelection.upsells.find(up => up === upsell);

      if (checkUpsell) {
        const checkUpsellIndex = oldSelection.upsells.indexOf(checkUpsell);
        return {
          ...oldSelection,
          upsells: [...oldSelection.upsells.filter(up => up !== checkUpsell)],
        };
      }

      const checkChaise = oldSelection.upsells.find(up => {
        if (up.includes('chaise')) {
          return up;
        }

        return null;
      });

      const upsellChaise = upsell.includes('chaise');

      if (checkChaise && upsellChaise) {
        return {
          ...oldSelection,
          upsells: [
            ...oldSelection.upsells.filter(up => up !== checkChaise),
            upsell,
          ],
        };
      }

      return {
        ...oldSelection,
        upsells: [...oldSelection.upsells, upsell],
      };
    });
  };

  const handleTextFabric = () => {
    if (collectionSelected.collection === 'atmosphere') {
      return textData.removableFabricText;
    }

    if (collectionSelected.collection === 'mistral') {
      return textData.mistralFabricText;
    }

    return textData.performanceFabricText;
  };

  const shouldDisplayVelvetColors =
    collectionSelected.collection === 'original';

  const [isOpen, setIsOpen] = useState('collection');

  const reducedVelvetColorVelvetColorSplit = getColorName?.title.split(' ');
  const reducedVelvetColor =
    reducedVelvetColorVelvetColorSplit && reducedVelvetColorVelvetColorSplit[1];

  return (
    <SectionContainer layout={layout} id="config">
      <FlexContainerTitle>
        {headerText && <ContainerTitle>{headerText}</ContainerTitle>}
      </FlexContainerTitle>
      <CylindoCustomizerContainer>
        <CylindoLeftContainer>
          <div
            style={{
              position: 'sticky',
              top: '70px',
            }}
          >
            {cylindoToggle && (
              <CylindoQRCodeContent>
                <CylindoQRCodeHeader>
                  <h1>
                    {router.locale === 'fr'
                      ? 'Voir ce produit dans votre espace'
                      : 'View this product in your space'}
                  </h1>

                  {router.locale === 'fr' ? (
                    <p>
                      Balayez le code QR ci-dessous avec la caméra de votre
                      <br />
                      téléphone intelligent ou tablette
                    </p>
                  ) : (
                    <p>
                      Point your smartphone or tablets
                      <br />
                      camera at the QR code below.
                    </p>
                  )}
                </CylindoQRCodeHeader>
                <DevicesIcon />
                <QRCodeContainer
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: cylindoQRCode,
                  }}
                />
              </CylindoQRCodeContent>
            )}
            <CylindoImageContainer
              id="cylindo-container"
              isZoomed={isCylindoZoomed}
              hide={isMobile ? false : cylindoToggle}
            />
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {collections
                .filter(col => col.handle === collectionSelected.collection)
                .map(col => {
                  return col && col.colors.length > 0 ? (
                    <ColorOptionsContainer
                      key={col.handle}
                      isZoomed={isCylindoZoomed}
                      center
                    >
                      <ColorSectionContainer>
                        <ColorSectionTitle>
                          {handleTextFabric()}
                          {collectionSelected.color &&
                            !collectionSelected.color.includes('velvet') &&
                            !collectionSelected.color.includes('celeste') && (
                              <>
                                <span style={{ marginLeft: 8, marginRight: 8 }}>
                                  |
                                </span>
                                <strong>
                                  {tempColorName
                                    ? tempColorName.value
                                    : getColorName?.title}
                                </strong>
                              </>
                            )}
                        </ColorSectionTitle>
                        <ColorsRow noGap>
                          {col.colors
                            .filter(color => !color.value.includes('velvet'))
                            .filter(color => !color.value.includes('celeste'))
                            .map(c => (
                              <RoundButton
                                isSelected={
                                  collectionSelected.color === c.value
                                }
                                key={c.value}
                                type="button"
                                onClick={() =>
                                  setCollectionSelected(oldCollection => ({
                                    ...oldCollection,
                                    color: c.value,
                                  }))
                                }
                                colorHex={c.hex}
                              >
                                <div />
                              </RoundButton>
                            ))}
                        </ColorsRow>
                      </ColorSectionContainer>
                      <ColorSectionContainer>
                        {shouldDisplayVelvetColors && (
                          <>
                            <ColorSectionTitle>
                              {textData.velvetFabricText}
                              {collectionSelected.color &&
                                collectionSelected.color.includes('velvet') && (
                                  <>
                                    <span
                                      style={{ marginLeft: 8, marginRight: 8 }}
                                    >
                                      |
                                    </span>
                                    <strong>{reducedVelvetColor}</strong>
                                  </>
                                )}
                            </ColorSectionTitle>
                            <ColorsRow noGap>
                              {col.colors
                                .filter(color => color.value.includes('velvet'))
                                .map(c => (
                                  <RoundButton
                                    isSelected={
                                      collectionSelected.color === c.value
                                    }
                                    key={c.desc}
                                    type="button"
                                    onClick={() =>
                                      setCollectionSelected(oldCollection => ({
                                        ...oldCollection,
                                        color: c.value,
                                      }))
                                    }
                                    colorHex={c.hex}
                                  >
                                    <div />
                                  </RoundButton>
                                ))}
                            </ColorsRow>
                          </>
                        )}
                      </ColorSectionContainer>
                    </ColorOptionsContainer>
                  ) : null;
                })}
            </div>
            {/* {isMobile === false && (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {cylindoToggle ? (
                  <ARButtonCylindo
                    layout={layout}
                    onClick={() => setCylindoToggle(false)}
                    type="button"
                  >
                    {router.locale === 'fr'
                      ? ' Retourner en vue 360'
                      : 'Back to 360'}
                  </ARButtonCylindo>
                ) : (
                  <ARButtonCylindo
                    layout={layout}
                    onClick={() => setCylindoToggle(true)}
                    type="button"
                  >
                    {router.locale === 'fr'
                      ? 'Voir dans votre espace'
                      : 'View in your space'}{' '}
                    <ARIcon sx={{ fontSize: '32px' }} />
                  </ARButtonCylindo>
                )}
              </div>
            )} */}
          </div>
        </CylindoLeftContainer>
        <CylindoRightContainer layout={layout}>
          {collections
            .filter(col => col.handle === collectionSelected.collection)
            .map(col => (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                }}
                key={col.handle}
              >
                <DropdownConfig
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  dropdown="collection"
                  title={textData.collectionText}
                >
                  <CollectionButton
                    onClick={() => handleCollectionSelected('original')}
                    isSelected={collectionSelected.collection === 'original'}
                    type="button"
                  >
                    {textData.originalText}
                  </CollectionButton>
                  <CollectionButton
                    onClick={() => handleCollectionSelected('ciello')}
                    isSelected={collectionSelected.collection === 'ciello'}
                    type="button"
                  >
                    {textData.cielloText}
                  </CollectionButton>
                  <CollectionButton
                    onClick={() => handleCollectionSelected('atmosphere')}
                    isSelected={collectionSelected.collection === 'atmosphere'}
                    type="button"
                    style={{ padding: '0px 10px', width: 'fit-content' }}
                  >
                    Atmosphere
                  </CollectionButton>
                  {/* <CollectionButton
                    onClick={() => handleCollectionSelected('mistral')}
                    isSelected={collectionSelected.collection === 'mistral'}
                    type="button"
                    style={{ padding: '0px 10px', width: 'fit-content' }}
                  >
                    Mistral
                  </CollectionButton> */}
                </DropdownConfig>
                <DropdownConfig
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  dropdown="configuration"
                  title={textData.configurationText}
                >
                  <SeatingWrapper>
                    <strong>{textData.sofasText}</strong>
                    <div>
                      {collectionSelected.collection === 'atmosphere'
                        ? col.seatingConfigs.sofa
                            .filter(sofa => sofa.value.includes(armSelected))
                            .map(seat => (
                              <ButtonConfigNew
                                key={seat.blurImageUrl}
                                url={seat.icon}
                                onClick={() => {
                                  if (
                                    collectionSelected.collection.includes(
                                      'atmos',
                                    ) &&
                                    seat.value.includes('1-seater') &&
                                    seat.value.includes('arms-atmos-2')
                                  ) {
                                    setCollectionSelected(oldSelection => ({
                                      ...oldSelection,
                                      seating: '1-seater-arms-atmos-right',
                                      upsells: [],
                                    }));
                                    setArmSelected('arms-atmos-right');
                                  } else {
                                    setCollectionSelected(oldSelection => ({
                                      ...oldSelection,
                                      seating: seat.value,
                                      upsells: [],
                                    }));
                                  }
                                }}
                                isSelected={
                                  collectionSelected.seating === seat.value
                                }
                              />
                            ))
                        : col.seatingConfigs.sofa.map(seat => (
                            <ButtonConfigNew
                              key={seat.blurImageUrl}
                              url={seat.icon}
                              onClick={() =>
                                setCollectionSelected(oldSelection => ({
                                  ...oldSelection,
                                  seating: seat.value,
                                  upsells: [],
                                }))
                              }
                              isSelected={
                                collectionSelected.seating === seat.value
                              }
                            />
                          ))}
                    </div>
                  </SeatingWrapper>
                  <SeatingWrapper style={{ marginTop: '10px' }}>
                    <strong>{textData.sectionalsText}</strong>
                    <div>
                      {collectionSelected.collection === 'atmosphere'
                        ? col.seatingConfigs.sectional
                            .filter(sofa => sofa.value.includes(armSelected))
                            .map(seat => (
                              <ButtonConfigNew
                                key={seat.blurImageUrl}
                                url={seat.icon}
                                onClick={() =>
                                  setCollectionSelected(oldSelection => ({
                                    ...oldSelection,
                                    seating: seat.value,
                                    upsells: [],
                                  }))
                                }
                                isSelected={
                                  collectionSelected.seating === seat.value
                                }
                              />
                            ))
                        : col.seatingConfigs.sectional.map(seat => (
                            <ButtonConfigNew
                              key={seat.blurImageUrl}
                              url={seat.icon}
                              onClick={() =>
                                setCollectionSelected(oldSelection => ({
                                  ...oldSelection,
                                  seating: seat.value,
                                  upsells: [],
                                }))
                              }
                              isSelected={
                                collectionSelected.seating === seat.value
                              }
                            />
                          ))}
                    </div>
                  </SeatingWrapper>
                </DropdownConfig>
                <DropdownConfig
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  dropdown="type"
                  title={
                    // eslint-disable-next-line no-nested-ternary
                    collectionSelected.collection === 'original'
                      ? textData.upsellsText
                      : collectionSelected.collection === 'ciello' ||
                        collectionSelected.collection === 'atmosphere'
                      ? textData.ottomanText
                      : textData.ottomanText
                  }
                >
                  <UpsellWrapper>
                    {upsellsBySelection.map(upsell => (
                      <ButtonConfigNew
                        key={upsell.icon}
                        // url={upsell.icon}
                        url={
                          // eslint-disable-next-line no-nested-ternary
                          collectionSelected.seating?.includes(
                            '3-seater-with-corner',
                          ) &&
                          upsellsBySelection.some(u =>
                            u.value.includes('chaise'),
                          ) &&
                          upsell.value.includes('chaise')
                            ? upsellsBySelection.some(u =>
                                u.value.includes('chaise-left'),
                              )
                              ? 'https://images.ctfassets.net/z0vszzs4am30/5xmgqPJJevUIqiX5OorisU/62c80a2d6372032045507b46a6fdb271/Chaise_Right.svg'
                              : 'https://images.ctfassets.net/z0vszzs4am30/7h09BzyWAZXioReCxFfw41/3b0c9d7dba2152c624d95ddaef1d954c/chaise-module.svg'
                            : upsell.icon
                        }
                        onClick={() => handleUpsells(upsell.value)}
                        isSelected={
                          collectionSelected.upsells.findIndex(
                            up => up === upsell.value,
                          ) !== -1
                        }
                      />
                    ))}
                  </UpsellWrapper>
                </DropdownConfig>
                {collectionSelected.collection === 'original' && (
                  <>
                    {/* <DropdownConfig
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                      dropdown="arm"
                      title={textData.armDesignText}
                    >
                      <UpsellWrapper>
                        {col.arms.map(arm => (
                          <ButtonConfigNew
                            key={arm.blurImageUrl}
                            url={arm.icon}
                            isSelected={collectionSelected.arms === arm.value}
                            onClick={() => {
                              setCollectionSelected(oldSelection => ({
                                ...oldSelection,
                                arms: arm.value,
                              }));
                            }}
                          />
                        ))}
                      </UpsellWrapper>
                    </DropdownConfig> */}
                    {/* <DropdownConfig title="Leg Design">
                      <button type="button">Original</button>
                    </DropdownConfig> */}
                    {collectionSelected.collection === 'original' && (
                      <DropdownConfig
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        dropdown="legs"
                        title={textData.selectLegDesign}
                      >
                        <ColorOptionsContainer>
                          <ColorSectionContainer>
                            <ColorSectionTitle style={{ minWidth: '108px' }}>
                              {collectionSelected.legs && (
                                <strong>{textData.wood}</strong>
                              )}
                            </ColorSectionTitle>

                            <ColorsRow noGap>
                              {legsColors?.wood?.map(c => (
                                <RoundButton
                                  isSelected={
                                    collectionSelected.legs?.value === c.value
                                  }
                                  key={c.hex}
                                  colorHex={c.hex}
                                  type="button"
                                  onClick={() =>
                                    setCollectionSelected(oldCollection => ({
                                      ...oldCollection,
                                      legs: c,
                                    }))
                                  }
                                />
                              ))}
                            </ColorsRow>
                          </ColorSectionContainer>
                          <ColorSectionContainer>
                            <ColorSectionTitle>
                              {collectionSelected.legs && (
                                <strong>{textData.metal}</strong>
                              )}
                            </ColorSectionTitle>

                            <ColorsRow>
                              {legsColors?.metal?.map(c => (
                                <RoundButton
                                  isSelected={
                                    collectionSelected.legs?.value === c.value
                                  }
                                  key={c.hex}
                                  colorHex={c.hex}
                                  type="button"
                                  onClick={() =>
                                    setCollectionSelected(oldCollection => ({
                                      ...oldCollection,
                                      legs: c,
                                    }))
                                  }
                                />
                              ))}
                            </ColorsRow>
                          </ColorSectionContainer>
                        </ColorOptionsContainer>
                        {/* <div style={{ height: '16px' }} /> */}
                        {/* <LinkContainer onClick={() => setIsOpenModal(true)}>
                          <ModalProduct>
                            {router.locale === 'en'
                              ? 'Wooden legs included in every order'
                              : 'Pattes Chêne Foncé en bois inclues dans chaque commande'}
                          </ModalProduct>
                          <InfoOutlinedIcon style={{ fontSize: '19px' }} />
                        </LinkContainer> */}
                      </DropdownConfig>
                    )}
                    {/* <DropdownConfig
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                      dropdown="seating"
                      title={textData.seatingUpgradesText}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {col.upgrades.map(upgrade => (
                          <div key={upgrade.handle}>
                            <FormControlLabel
                              control={
                                <RadioWrapper
                                  id={upgrade.title}
                                  name={upgrade.title}
                                  checked={
                                    collectionSelected.upgrade ===
                                    upgrade.handle
                                  }
                                  icon={<RadioButtonUnchecked />}
                                  checkedIcon={<RadioButtonCheckedOutlined />}
                                  sx={{
                                    color: Colors.COZEY_CLOUD_GREY,
                                    '&.Mui-checked': {
                                      color: Colors.COZEY_BLUE,
                                    },
                                  }}
                                  value={upgrade.handle}
                                  onChange={val =>
                                    setCollectionSelected(oldSelection => {
                                      return {
                                        ...oldSelection,
                                        upgrade: val.target.checked
                                          ? upgrade.handle
                                          : '',
                                      };
                                    })
                                  }
                                />
                              }
                              label={
                                upgrade.handle === 'lumbar'
                                  ? textData.lumbarText
                                  : upgrade.title
                              }
                            />
                          </div>
                        ))}
                      </div>
                    </DropdownConfig> */}
                  </>
                )}
                {collectionSelected.collection === 'atmosphere' && (
                  <DropdownConfig
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    dropdown="arm"
                    title={textData.armDesignAtmosphereText}
                  >
                    <CollectionButton
                      onClick={() =>
                        handleArmsSelected(
                          ARM_SELECTION_TEXT.armlessSelectionText,
                        )
                      }
                      isSelected={
                        armSelected === ARM_SELECTION_TEXT.armlessSelectionText
                      }
                      type="button"
                    >
                      {textData.armlessStyleText}
                    </CollectionButton>
                    <CollectionButton
                      onClick={() => {
                        handleArmsSelected(
                          ARM_SELECTION_TEXT.leftArmSelectionText,
                        );
                      }}
                      isSelected={
                        armSelected === ARM_SELECTION_TEXT.leftArmSelectionText
                      }
                      type="button"
                    >
                      {textData.leftArmStyleText}
                    </CollectionButton>
                    <CollectionButton
                      onClick={() => {
                        handleArmsSelected(
                          ARM_SELECTION_TEXT.rightArmSelectionText,
                        );
                      }}
                      isSelected={
                        armSelected === ARM_SELECTION_TEXT.rightArmSelectionText
                      }
                      type="button"
                    >
                      {textData.rightArmStyleText}
                    </CollectionButton>
                    {!collectionSelected.seating.includes('1-seater') && (
                      <CollectionButton
                        onClick={() =>
                          handleArmsSelected(
                            ARM_SELECTION_TEXT.armSelectionText,
                          )
                        }
                        isSelected={
                          armSelected === ARM_SELECTION_TEXT.armSelectionText
                        }
                        type="button"
                      >
                        {textData.armStyleText}
                      </CollectionButton>
                    )}
                  </DropdownConfig>
                )}
              </div>
            ))}
          {/* <CylindoLinkButtonWrapper
            layout={layout}
            onClick={() => handleSelectConfig()}
          >
            {redirectButtonTogle ? (
              <ThreeDotLoader />
            ) : (
              <CylindoLinkText>
                {textData.submitButtonText}

                <SVGWrapper>
                  <ArrowRight />
                </SVGWrapper>
              </CylindoLinkText>
            )}
          </CylindoLinkButtonWrapper> */}
          <NotifyMeModal
            data={{
              getNotifiedButtonText: 'Notify me when available',
              notifyMeButtonText: 'NOTIFY ME',
              getNotifiedDialogTitle: "Don't Miss Out",
              getNotifiedDialogSubtitle:
                'Enter your email to know as soon as this product is available.',
              getNotifiedInputPlaceholder: 'Email',
              notifySuccessText: 'Congrats, you are successfully subscribed!',
              invalidInputText: 'Email is required',
              klaviyoId: 'VzR4Ye',
            }}
          />
        </CylindoRightContainer>
      </CylindoCustomizerContainer>
      <InfoModal
        open={isOpenModal}
        handleClose={() => setIsOpenModal(false)}
        data={legsModalData}
        productModal
      />
    </SectionContainer>
  );
};

export { CylindoCustomizer };
