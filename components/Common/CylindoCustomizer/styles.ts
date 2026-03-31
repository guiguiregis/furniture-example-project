import styled from 'styled-components';
import Image from 'next/image';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import Colors from '../../../constants/colors';

interface LayoutStyleProps {
  layout?: 'home' | 'shop';
}

export const FlexContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1024px) {
    justify-content: center;
    /* width: 640px; */
  }
`;

export const ContainerTitle = styled.h1`
  color: ${Colors.MEDIUM_BLUE};
  /* font-family: 'QuincyCFBold';
  font-size: 3em; */
  font-family: 'QuincyCFBold';
  /* font-style: normal;
  font-weight: 700; */
  font-size: 48px;
  line-height: 52px;
  text-align: center;
  margin: 0;
  margin-bottom: 24px;
  @media (max-width: 1024px) {
    text-align: left;
    font-size: 24px;
    line-height: 26px;
    padding: 0;
    margin: 0;
    margin-bottom: 24px;
    text-align: center;
    // width: 640px;
  }
`;

export const SectionContainer = styled.div<LayoutStyleProps>`
  display: flex;
  flex-direction: column;
  padding-top: 0;
  height: 100%;
  width: 100%;
  padding-bottom: ${props => (props.layout === 'home' ? '64px' : '40px')};

  @media (min-width: 1440px) {
    width: ${props => (props.layout === 'home' ? '1440px' : '100%')};
    margin-left: auto;
    margin-right: auto;
    padding: ${props => (props.layout === 'home' ? '80px' : '10px')};
    padding-top: 32px;
    padding-bottom: 48px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    /* padding-top: 32px; */
    padding: ${props => (props.layout === 'home' ? '48px 32px' : '0px')};
    margin-top: ${props => (props.layout === 'shop' ? '30px' : '0px')};
  }
`;

export const CylindoCustomizerContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CylindoRightContainer = styled.div<LayoutStyleProps>`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: ${props =>
    props.layout === 'shop' ? 'flex-start' : 'center'};
  align-items: center;
  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
`;

export const CylindoLeftContainer = styled.div`
  margin-right: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  @media (max-width: 1024px) {
    position: unset;
    height: auto;
    width: 100%;
    margin-right: 0px;
  }
`;

interface CylindoImageContainerProps {
  hide?: boolean;
  isZoomed: boolean;
}

export const CylindoImageContainer = styled.div<CylindoImageContainerProps>`
  height: ${({ isZoomed }) =>
    isZoomed ? '400px !important' : '400px !important'};
  display: ${({ hide }) => hide && 'none'};
  transform: ${({ isZoomed }) => !isZoomed && 'scale(1)'};

  & > .cylindo-ar-modal > a {
    transform: scale(0.6);
    position: relative;
    left: -30px;
  }

  @media (max-width: 1024px) {
    height: 400px !important;
    margin-bottom: 30px;
  }
  @media (max-width: 600px) {
    height: 300px !important;
  }
`;

interface CollectionButtonProps {
  isSelected: boolean;
}

export const CollectionButton = styled.button<CollectionButtonProps>`
  border-radius: 8px;
  /* width: 5.875rem; */
  width: fit-content;
  height: 2.125rem;
  font-size: 16px;
  border-radius: 6rem;
  padding-left: 16px;
  padding-right: 16px;
  border: 2px solid
    ${({ isSelected }) =>
      isSelected ? Colors.COZEY_BLUE : Colors.COZEY_CLOUD_GREY};
  color: ${({ isSelected }) =>
    isSelected ? Colors.COZEY_WHITE : Colors.COZEY_CLOUD_GREY};
  background-color: ${({ isSelected }) =>
    isSelected ? Colors.COZEY_BLUE : Colors.COZEY_WHITE};
  margin-right: 12px;
  margin-bottom: 8px;

  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

export const SeatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  strong {
    font-size: 1rem;
    letter-spacing: 0.03rem;
    font-family: 'Larsseit';
  }
`;

export const UpsellWrapper = styled.div`
  display: flex;
`;

interface RoundButtonProps {
  isSelected: boolean;
  colorHex: string;
}

export const RoundButton = styled.button<RoundButtonProps>`
  background-color: ${({ colorHex }) => colorHex};
  border-radius: 17px;
  margin-right: 12px;
  width: 32px;
  height: 32px;
  border: 2px solid
    ${({ colorHex, isSelected }) => (isSelected ? 'white' : colorHex)};
  box-shadow: ${({ isSelected }) => isSelected && '0 0 6px rgba(0,0,0,0.4)'};

  @media (max-width: 425px) {
    width: 24px;
    height: 24px;
  }
`;

interface ButtonConfigContainerStyleProps {
  isSelected: boolean;
}

export const ButtonConfigContainer = styled.button<ButtonConfigContainerStyleProps>`
  width: 64px;
  height: 64px;
  padding: 8px;
  margin-top: 12px;
  margin-right: 12px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ isSelected }) =>
    `3px solid ${
      isSelected ? Colors.COZEY_LIGHT_BLUE : Colors.COZEY_SKY_BLUE_2
    }`};
  background-color: ${({ isSelected }) =>
    isSelected ? Colors.COZEY_SKY_BLUE_3 : Colors.COZEY_SKY_BLUE_1};
`;

export const CheckboxWrapper = styled(Checkbox)``;

export const CylindoLinkButton = styled(Link)``;

export const CylindoLinkText = styled.span`
  color: white;
  display: flex;
  gap: 20px;
  font-size: 24px;
  font-family: CamptonMedium;
  font-weight: 500;

  @media (max-width: 800px) {
    font-size: 18px;
    gap: 15px;
  }

  @media (max-width: 295px) {
    font-size: 14px;
  }
`;

export const CylindoLinkButtonWrapper = styled.button<LayoutStyleProps>`
  background: ${Colors.COZEY_BLUE};
  margin-top: 32px;
  position: relative;
  top: -12px;
  padding: ${({ layout }) => (layout === 'shop' ? '23px 32px' : '20px 40px')};
  border-radius: 50px;
  min-width: 200px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    place-self: flex-end;
    margin: auto;
    margin-top: 30px;
    padding: 16px 24px;
  }
`;

export const ArrowRight = styled(Image)`
  filter: brightness(0) invert(0);
`;

export const CylindoQRCodeContent = styled.div`
  background: url('https://viewer.cylindo.com/v4/assets/images/qr-background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 600px;

  @media (max-width: 1024px) {
    height: 400px;
  }

  @media (max-width: 600px) {
    height: 300px;
  }
`;

export const QRCodeContainer = styled.div`
  width: 165px;
  height: 165px;
  position: relative;
  padding: 15px;
  background: url('https://viewer.cylindo.com/v4/assets/images/qr-code-frame.png');
  background-size: cover;
`;

export const DevicesIcon = styled.div`
  background: url('https://viewer.cylindo.com/v4/assets/images/mobile-devices.svg');
  width: 43px;
  height: 34px;
`;

export const ARButtonCylindo = styled.button<{ layout?: string }>`
  padding: 0 32px;
  max-width: calc(1440px * 0.3);
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 64px;
  margin-bottom: 12px;
  font-family: 'CamptonMedium';
  border: 3px solid ${Colors.COZEY_BLUE};
  border-radius: 8px;
  color: ${Colors.COZEY_BLUE};
  background-color: transparent;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 18px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const CylindoQRCodeHeader = styled.div`
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    color: ${Colors.COZEY_BLUE};
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 100;
    text-align: center;
    color: ${Colors.COZEY_BLUE};
  }
`;

export const SVGWrapper = styled.div`
  height: 20px;
  width: 24px;
  position: relative;
  top: 0px;

  @media (max-width: 800px) {
    height: 15px;
    width: 18px;
  }
  @media (max-width: 680px) {
    top: -1px;
  }
  @media (max-width: 295px) {
    height: 12px;
  }
`;
