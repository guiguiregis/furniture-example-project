/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { styled as muiStyled, Rating } from '@mui/material';
import Image from 'next/image';
import Colors from '../../../../constants/colors';

export const StyledRating = muiStyled(Rating)({
  '& .MuiRating-iconFilled': {
    color: Colors.COZEY_RUST,
  },
});

export const FinancingLogoWrapper = styled.div`
  width: 60px;
  height: 40px;
  position: relative;
`;

export const FinancingLogo = styled(Image)``;

export const ModuleConfiguratorWrapper = styled.div`
  flex: 1;
  //height: 1440px;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

  @media (max-width: 1024px) {
    padding-top: 0px;
    padding-left: 16px;
    padding-right: 32px;
    width: 100%;
    padding-bottom: 20px;
  }
`;

export const ArrowIconWrapper = styled.div`
  @media (max-width: 1024px) {
    position: relative;
    right: -8px;
    margin-top: 24px;
  }

  @media (max-width: 768px) {
    bottom: 10px;
  }
`;

export const AccessoriesConfiguratorWrapper = styled.div`
  width: 30%;
  //height: 1440px;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

  @media (max-width: 1024px) {
    padding-top: 16px;
    padding-left: 32px;
    padding-right: 32px;
    width: 100%;
    padding-bottom: 20px;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 28px;
  font-family: CamptonMedium;
  font-weight: 400;
`;

export const ConfiguratorWrapper = styled.div`
  width: 40%;
  //height: 1440px;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  position: relative;

  @media (max-width: 1024px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 100%;
    padding-bottom: 20px;
    padding-top: 32px;
  }
`;

export const ColorOptionsContainer = styled.div<{
  center?: boolean;
  between?: boolean;
  isZoomed?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: ${({ center, between }) =>
    center ? 'center' : between ? 'space-between' : 'flex-start'};
  padding: 12px 0;
  padding-top: ${({ isZoomed }) => (isZoomed ? '12px' : '0px')};
  width: 100%;
  gap: 36px;
  padding-right: ${({ between }) => (between ? '34px' : '0px')};

  @media (max-width: 1024px) {
    justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
    padding-right: 0;
    position: relative;
    left: 30px;
  }

  @media (max-width: 360px) {
    gap: 12px;
  }
`;

// accessory version
export const ColorOptionsContainerAcc = styled.div<{
  center?: boolean;
  isZoomed?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
  padding: 12px 0 0 0;
  padding-top: ${({ isZoomed }) => (isZoomed ? '12px' : '0px')};
  width: 100%;
  gap: 36px;

  @media (max-width: 360px) {
    gap: 12px;
  }
`;

export const TextSeparator = styled.span`
  margin: 0 8px;
  @media (max-width: 1024px) {
    margin: 0 4px;
  }
`;

export const ColorSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  @media (max-width: 1024px) {
    gap: 6px;
  }
  @media (max-width: 460px) {
    width: fit-content;
    margin-right: 0px;
  }
`;

export const ColorType = styled.span`
  font-family: 'Larsseit';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  padding-right: 2px;

  color: ${Colors.COZEY_ULTRAMARINE_BLUE};
`;

export const ColorSectionTitle = styled.span<{ mobileMt?: number }>`
  font-family: 'Larsseit';
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 8px;
  white-space: nowrap;
  color: ${Colors.COZEY_ULTRAMARINE_BLUE};
  @media (min-width: 370px) {
    &:first-child {
      min-width: 30vw;
    }
  }
  @media (min-width: 470px) {
    &:first-child {
      min-width: 195px;
    }
  }
  @media (max-width: 369px) {
    &:first-child {
      min-width: 50vw;
    }
  }

  @media (max-width: 1024px) {
    font-size: 10px;
    line-height: 14px;

    margin-top: ${props => props.mobileMt}px;
  }

  strong {
    font-family: 'Larsseit';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
  }

  @media (max-width: 1024px) {
    white-space: nowrap;
  }
`;

export const ColorCol = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColorsRow = styled.div<{ noGap?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: ${({ noGap }) => (noGap ? '0px' : '36px')};
  @media (max-width: 1300px) {
    flex-wrap: wrap;
    row-gap: 14px;
  }
`;

export const OrderFreeSwatches = styled.span`
  color: ${Colors.COZEY_BLUE};
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    color: ${Colors.COZEY_SKY_BLUE_3};
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const AccessoriesCollectionNameWrapper = styled.h1`
  margin: 0;
  margin-bottom: 16px;

  @media (max-width: 800px) {
    margin-bottom: 24px;
  }

  h3 {
    font-size: 28px;
    font-family: 'CamptonMedium';
    line-height: 32.59px;
    color: ${Colors.COZEY_ULTRAMARINE_BLUE};
    margin: 0;
    margin-bottom: 20px;

    @media (max-width: 800px) {
      font-size: 22px;
      margin-bottom: 0px;
    }
  }
`;

export const AccessoriesStyleSetName = styled.div`
  font-family: 'CamptonBookItalic';
  font-size: 24px;
  line-height: 28px;
  color: ${Colors.COZEY_ULTRAMARINE_BLUE};

  @media (max-width: 1024px) {
    paadding-top: 4px;
    font-size: 18px;
    line-height: 20px;
  }
`;

export const AccessoriesCollectionText = styled.div`
  font-family: 'Larsseit';
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: ${Colors.COZEY_ULTRAMARINE_BLUE};

  @media (max-width: 800px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: unset;
  }
`;

export const CollectionNameWrapper = styled.div`
  margin-bottom: 10px;
  h3 {
    font-size: 28px;
    font-family: 'CamptonMedium';
    line-height: 32.59px;
    color: ${Colors.COZEY_ULTRAMARINE_BLUE};
    margin: 0;
    margin-bottom: 4px;

    @media (max-width: 1024px) {
      font-size: 22px;
      margin-bottom: 4px;
    }
  }
`;

export const ReviewWrapper = styled.div`
  display: flex;
  align-items: center;

  strong {
    text-align: center;
    font-size: 18px;
    font-weight: normal;
    font-family: 'CamptonMedium';
    color: ${Colors.COZEY_ULTRAMARINE_BLUE};

    &:first-of-type {
      margin-right: 4px;
    }

    &:last-child {
      margin-left: 4px;
    }
  }
`;

export const ConfiguratorDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${Colors.COZEY_SKY_BLUE_3};
  opacity: 0.5;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ConfiguratorDividerAcc = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${Colors.COZEY_SKY_BLUE_3};
  opacity: 0.5;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const ConfiguratorSectionTitle = styled.div`
  font-family: 'CamptonBook';
  font-size: 24px;
  font-weight: normal;
  color: ${Colors.COZEY_ULTRAMARINE_BLUE};
  text-align: left;
  @media (max-width: 1024px) {
    margin-top: 24px;
  }
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

export const SectionMainTitle = styled.h2`
  font-family: 'QuincyCFRegular';
  margin: 0;
  font-weight: 700;
  font-size: 48px;
  line-height: 52px;
  color: ${Colors.COZEY_BLUE};
  text-align: center;

  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 26px;
  }
`;

export const EnterPostalCodeButton = styled.button`
  display: flex;
  margin-top: 0px;
  margin-bottom: 8px;
  font-family: 'CamptonBook';
  font-size: 18px;
  color: ${Colors.COZEY_LIGHT_BLUE};
  align-items: center;
  justify-content: center;
  background-color: transparent;

  span {
    margin-right: 8px;
  }
`;

export const ButtonPostalCodeText = styled.span`
  font-family: 'CamptonSemiBold';
  color: ${Colors.COZEY_LIGHT_BLUE};
  font-size: 18px;
  margin-right: 8px;

  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 9px;
`;

export const ModalProduct = styled.div`
  font-family: 'Larsseit';
  font-style: normal;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-decoration-line: underline;
  color: ${Colors.COZEY_BLUE};
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;
