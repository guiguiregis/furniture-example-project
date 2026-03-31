import Image from 'next/image';
import styled from 'styled-components';
import Colors from '@/constants/colors';

interface CollectionProps {
  margin?: string;
  marginMobile?: string;
  height?: string;
  top?: string;
  right?: string;
  color?: string;
  selected?: boolean;
  handle?: string;
  backgroundColor?: string;
}

export const CollectionContainer = styled.div`
  padding: 0;
  min-width: 100%;
`;

export const FeaturedTitle = styled('span')`
  font-family: 'Quincy Regular';
  font-weight: 700;
  font-size: 48px;
  line-height: 52px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: ${Colors.COZEY_BLUE};
  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 26px;
  }
`;

export const CollectionBannerContainer = styled.div<CollectionProps>`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 32px;
  padding-bottom: 0px;
  @media (max-width: 600px) {
    padding: ${props =>
      props.handle?.includes('mistral') ? '32px 32px 0px 32px' : '0px 32px'};
    flex-direction: column-reverse;
    margin: 0px 16px;
  }
  @media (max-width: 400px) {
    width: 100%;
    margin: 0 auto;
    padding: 0 5px;
  }
`;

export const CollectionBannerTextContainer = styled.div`
  background-color: ${Colors.COZEY_SKY_BLUE_1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 480px;
  width: 440px;
  padding: 16px 24px;
  gap: 12px;
  border-radius: 20px 0px 0px 20px;

  @media (max-width: 600px) {
    padding: 24px;
    gap: 8px;
    width: 396px;
    justify-content: flext-start;
    height: 100%;
    border-radius: 0px 0px 12px 12px;
  }
  @media (max-width: 400px) {
    width: 100%;
    gap: 8px;
    padding: 24px;
    height: 100%;
  }
`;

export const CollectionBannerTag = styled.span`
  font-family: Larsseit Bold;
  width: 100%;
  height: 12px;
  font-size: 18px;
  line-height: 12px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${Colors.COZEY_RUST};
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 13px;
    width: 348px;
    height: 13px;
  }
  @media (max-width: 400px) {
    height: unset;
    width: 100%;
    font-size: 12px;
  }
`;

export const CollectionBannerHeader = styled.span`
  font-family: 'Larsseit Bold';
  width: 392px;
  line-height: 42px;
  font-size: 42px;
  color: ${Colors.COZEY_BLUE};
  @media (max-width: 600px) {
    font-size: 36px;
    line-height: 36px;
    width: 348px;
  }
  @media (max-width: 400px) {
    height: unset;
    width: 100%;
  }
`;

export const CollectionBannerSubheader = styled.span`
  font-family: 'Larsseit';
  width: 392px;
  line-height: 25px;
  font-size: 18px;
  display: flex;
  align-items: center;
  font-weight: 400;
  color: ${Colors.COZEY_ULTRAMARINE_BLUE};
  letter-spacing: 0.02em;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 18px;
    width: 348px;
    height: unset;
  }
  @media (max-width: 400px) {
    height: unset;
    width: 100%;
  }
`;

export const CollectionBannerLink = styled.span`
  font-family: CamptonSemiBold;
  width: 392px;
  height: 28px;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  color: ${Colors.COZEY_PURPLE};
  align-items: center;
  padding-top: 2px;
  gap: 12px;
  cursor: pointer;

  @media (max-width: 600px) {
    font-family: CamptonMedium;
    font-size: 18px;
    line-height: 21px;
    width: 348px;
    height: 16px;
    gap: 6px;
    padding-top: 4px;
    color: ${Colors.COZEY_PURPLE};
  }
  @media (max-width: 400px) {
    height: unset;
    width: 100%;
    padding-top: 0.5rem;
  }
`;

export const CollectionBannerImageContainer = styled.div`
  width: 840px;
  height: 480px;
  position: relative;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const CollectionBannerMobileImageContainer = styled.div`
  display: none;

  @media (max-width: 600px) {
    position: relative;
    display: block;
    width: 396px;
    height: 248px;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const CollectionBannerImage = styled(Image)`
  border-radius: 0px 20px 20px 0px;
`;

export const CollectionBannerMobileImage = styled(Image)`
  @media (max-width: 600px) {
    border-radius: 12px 12px 0px 0px;
  }
`;

export const CollectionTilesContainer = styled.div<{
  removePadding?: boolean;
  handle?: string;
}>`
  display: grid;
  //position: relative;
  //flex-wrap: wrap;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  row-gap: 32px;
  column-gap: 40px;
  padding-top: 40px;
  margin: 0 auto;

  padding: 40px 80px 0px 80px;
  padding-bottom: ${({ removePadding, handle }) =>
    handle?.includes('outdoor') ? '0px' : '42px'};

  @media (min-width: 1440px) {
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 0px;
  }

  @media (max-width: 1280px) {
    padding: 4px 32px;
  }
  /* @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 4px 0px 80px;
    padding-top: 40px;
  } */

  @media (min-width: 426px) and (max-width: 500px) {
    column-gap: 16px;
    row-gap: 32px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    padding-top: 16px;
    width: 100%;
    column-gap: 16px;
    row-gap: 16px;
    padding-bottom: ${({ removePadding }) => (removePadding ? '42px' : '0px')};
  }

  @media (max-width: 428px) {
    column-gap: 16px;
    row-gap: 32px;
  }
`;

export const CielloTilesContainer = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 40px;
  column-gap: 40px;
  padding-top: 40px;
  margin: 0 auto;

  padding: 40px 80px 0px 80px;

  @media (min-width: 1440px) {
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 1280px) {
    padding: 4px 32px;
  }
  @media (max-width: 1024px) {
    padding: 4px 0px 80px;
    padding-top: 40px;
  }

  @media (max-width: 600px) {
    justify-content: center;
    padding-top: 16px;
    width: 100%;
    column-gap: 16px;
  }

  @media (max-width: 428px) {
    column-gap: 6px;
  }
`;

export const CielloTilesMobileContainer = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    position: relative;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 16px;
    row-gap: 20px;
    width: 100%;
    column-gap: 16px;
    padding-bottom: 42px;
    margin: 0 auto;
  }
  @media (max-width: 800px) {
    display: flex;
    position: relative;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 16px;
    row-gap: 20px;
    width: 100%;
    column-gap: 16px;
    padding-bottom: 0px;
    margin: 0 auto;
  }
  @media (max-width: 400px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const CollectionTileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  width: 400px;
  height: 100%;

  @media (max-width: 1024px) {
    width: 270px;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: auto;
    align-items: center;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    height: auto;
    gap: 6px;
  }

  @media (max-width: 428px) {
    align-items: center;
    width: 180px;
    /* height: 185px; */
    height: auto;
    padding-left: 0px;
    padding-right: 0px;
  }
  @media (max-width: 375px) {
    align-items: center;
    width: 150px;
    height: 100%;
    padding-left: 0px;
    padding-right: 0px;
  }

  @media (max-width: 280px) {
    align-items: center;
    width: 120px;
    height: 100%;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const CollectionTileImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 300px;

  @media (max-width: 1024px) {
    width: 260px;
    height: 160px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 230px;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 142px;
  }
  @media (max-width: 400px) {
    width: 100%;
    height: 132px;
  }
  @media (max-width: 390px) {
    width: 100%;
    height: 122px;
  }
`;

export const OutdoorCollectionTileImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;

  @media (max-width: 1024px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 600px) {
    width: 190px;
    height: 190px;
  }
  @media (max-width: 428px) {
    width: 170px;
    height: 170px;
  }
  @media (max-width: 375px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 320px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 280px) {
    width: 110px;
    height: 110px;
  }
`;

export const CollectionTileImage = styled(Image)<{ src: string }>`
  border-radius: 20px;
  background-color: #f5f6f8;
  cursor: pointer;
  @media (max-width: 600px) {
    border-radius: 12px;
  }
`;

export const CollectionTileTextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evely;
  padding: 0px;
  gap: 4px;
  width: auto;
  @media (max-width: 1024px) {
    gap: 2px;
    width: 250px;
    max-height: 47px;
  }
  @media (max-width: 768px) {
    gap: 2px;
    width: 300px;
    max-height: 47px;
  }
  @media (max-width: 600px) {
    gap: 2px;
    width: 100%;
    max-height: 47px;
  }
`;

export const CollectionTileTitle = styled.div`
  display: block;
  width: 100%;
  font-size: 16px;
  line-height: 19px;
  font-family: CamptonSemiBold;
  color: ${Colors.COZEY_BLUE};

  @media (max-width: 1024px) {
    width: auto;
    font-size: 14px;
    line-height: 16px;
  }

  @media (max-width: 768px) {
    width: auto;
    font-size: 12px;
    line-height: 16px;
  }
  @media (min-width: 426px) and (max-width: 500px) {
    font-size: 10px;
  }
  @media (max-width: 425px) {
    font-size: 12px;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const CollectionTileSubheaderContainer = styled.div`
  // width: 215px;
  height: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  @media (max-width: 600px) {
    width: 108px;
    height: 26px;
    gap: 4px;
  }
  @media (min-width: 426px) and (max-width: 600px) {
    gap: 4px;
  }
  @media (max-width: 425px) {
    gap: 2px;
  }
`;

export const CollectionTileText = styled.span`
  font-family: Larsseit;
  font-size: 14px;
  line-height: 17.56px;
  color: ${Colors.COZEY_PURPLE};
  white-space: nowrap;
  @media (min-width: 426px) and (max-width: 600px) {
    font-size: 10px;
  }
  @media (max-width: 425px) {
    display: none;
    font-size: 9px;
  }
  @media (max-width: 375px) {
    font-size: 8px;
  }
`;

export const CollectionTileTextSeparatior = styled.span`
  font-family: Larsseit;
  font-size: 14px;
  line-height: 17.56px;
  color: ${Colors.COZEY_PURPLE};
  @media (max-width: 600px) {
    font-size: 11px;
    line-height: 13px;
  }
`;

export const CollectionTileMobileText = styled.span`
  display: none;
  @media (max-width: 600px) {
    display: block;
    color: ${Colors.COZEY_PURPLE};
    white-space: nowrap;
    font-size: 11px;
    line-height: 13px;
  }
  @media (max-width: 375px) {
    font-size: 8px;
  }
`;

export const CollectionTileLink = styled.span`
  position: relative;
  font-family: 'Larsseit Bold';
  font-size: 14px;
  line-height: 13.96px;
  display: flex;
  align-items: center;
  top: 0px;
  cursor: pointer;
  color: ${Colors.COZEY_RUST};
  @media (max-width: 600px) {
    font-size: 11px;
    line-height: 13px;
    top: 0px;
    white-space: nowrap;
  }
  @media (min-width: 426px) and (max-width: 600px) {
    font-size: 10px;
  }
  @media (max-width: 425px) {
    font-size: 9px;
  }
  @media (max-width: 400px) {
    top: 0px;
  }
  @media (max-width: 375px) {
    font-size: 8px;
  }
`;

export const CollectionButton = styled.button<CollectionProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 23px 32px;
  gap: 16px;
  width: fit-content;
  height: 80px;
  background-color: ${Colors.COZEY_RUST};
  border-radius: 50px;
  margin: ${props => (props.margin ? props.margin : '0px auto 64px auto')};
  font-family: CamptonMedium;
  color: ${Colors.COZEY_WHITE};
  font-size: 24px;
  line-height: 28px;
  white-space: nowrap;
  @media (max-width: 768px) {
    padding: 16px 24px;
    margin: ${props =>
      props.marginMobile ? props.marginMobile : '16px auto 64px auto;'};
    gap: 12px;
    width: fit-content;
    height: 56px;
    font-size: 18px;
    line-height: 21px;
  }
  @media (max-width: 400px) {
    width: fit-content;
    font-size: 18px;
    padding: 16px 16px;
  }
`;

export const SVGCollectionButtonWrapper = styled.div<CollectionProps>`
  height: 20px;
  width: 24px;
  position: relative;
  top: ${props => (props.top ? props.top : '-5px')};
  right: ${props => (props.right ? props.right : 'unset')};
  @media (max-width: 600px) {
    display: none;
  }
`;

export const SVGCollectionMobileButtonWrapper = styled.div<CollectionProps>`
  display: none;
  @media (max-width: 600px) {
    position: relative;
    display: block;
    height: 15px;
    width: 18px;
    top: ${props => (props.top ? props.top : '-3px')};
    right: ${props => (props.right ? props.right : 'unset')};
  }
  @media (max-width: 400px) {
    height: 12px;
    top: -7px;
    right: 2px;
  }
`;

export const SVGCollectionCustomizeWrapper = styled.div<CollectionProps>`
  height: 20px;
  width: 24px;
  position: relative;
  top: ${props => (props.top ? props.top : '2px')};
  right: ${props => (props.right ? props.right : 'unset')};
  @media (max-width: 600px) {
    display: none;
  }
`;

export const SVGCollectionCustomizeMobileWrapper = styled.div<CollectionProps>`
  display: none;
  @media (max-width: 600px) {
    position: relative;
    display: block;
    height: 15px;
    width: 18px;
    top: ${props => (props.top ? props.top : '0.5px')};
    right: ${props => (props.right ? props.right : '2px')};
  }
  @media (max-width: 400px) {
    height: 12px;
    top: 0px;
    right: -2px;
  }
`;

export const SVGWrapper = styled.div`
  height: 20px;
  width: 24px;
  position: relative;
  // top: 0px;
  @media (max-width: 600px) {
    height: 16px;
    width: 16px;
    top: 1px;
  }
  @media (max-width: 400px) {
    height: 12px;
    width: 12px;
    // top: 3px;
  }
`;

export const ArrowRight = styled(Image)``;

export const HiddenColorContainer = styled.div`
  @media (max-width: 600px) {
    position: absolute;
    bottom: 0px;
    z-index: 9998;
    right: 0px;
    display: flex;
    align-items: flex-end;
    padding: 4px;
  }
`;

export const AccessoryTagContainer = styled.div`
  @media (max-width: 600px) {
    position: absolute;
    bottom: 0px;
    z-index: 9998;
    /* right: 0px; */
    display: flex;
    align-items: center;
    padding: 4px;
  }
`;

export const TagContainer = styled.div<CollectionProps>`
  position: absolute;
  text-align: center;
  bottom: 12px;
  z-index: 9998;
  left: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  // width: 101px;
  height: 29px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? '#e2b941'};
  border-radius: 100px;
  cursor: pointer;
  width: fit-content;
  @media (max-width: 600px) {
    height: 19px;
    position: unset;
    left: 12px;
    padding: 6px;
    gap: 4px;
    justify-content: space-evenly;
    height: 20px;
    bottom: 4px;
    right: 4px;
  }
`;

export const TagText = styled.div<CollectionProps>`
  font-family: 'Larsseit';
  font-size: 12px;
  line-height: 15px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ color }) => color ?? Colors.COZEY_ULTRAMARINE_BLUE};
  @media (max-width: 600px) {
    height: 8px;
    font-size: 8px;
    line-height: 10px;
  }
`;

export const ColorContainer = styled.div`
  position: absolute;
  bottom: 12px;
  z-index: 9998;
  right: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 6px 6px 6px 10px;
  gap: 8px;
  // width: 101px;
  height: 32px;
  background-color: ${Colors.COZEY_WHITE};
  border: 0.5px solid ${Colors.COZEY_SKY_BLUE_3};
  border-radius: 100px;
  cursor: pointer;
  @media (max-width: 600px) {
    position: unset;
    right: 5px;
    padding: 4px 4px 4px 6px;
    gap: 4px;
    justify-content: space-evenly;
    height: 20px;
    bottom: 4px;
    right: 4px;
  }
`;

export const ColorText = styled.div<CollectionProps>`
  height: 12px;
  font-family: ${props => (props.selected ? 'Larsseit Bold' : 'Larsseit')};
  font-size: 10px;
  line-height: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  color: ${props =>
    props.selected ? Colors.COZEY_ULTRAMARINE_BLUE : '#999999'};
  @media (max-width: 600px) {
    height: 8px;
    font-size: 8px;
    line-height: 10px;
  }
`;

export const ColorSwatch = styled.div<CollectionProps>`
  border-radius: 100%;
  width: 20px;
  height: 20px;
  background-color: ${props =>
    props.color ? props.color : Colors.COZEY_CLOUD_GREY};
  @media (max-width: 600px) {
    width: 12px;
    height: 12px;
  }
`;
