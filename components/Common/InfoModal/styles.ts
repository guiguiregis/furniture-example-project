import Colors from '@/constants/colors';
import { styled } from '@mui/material';

export const Container = styled('div')`
  padding: 48px;
  width: 582px;
  @media (max-width: 650px) {
    width: 100%;
    padding: 32px;
  }
`;

export const Header = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ productModal }: { productModal: boolean }) =>
    productModal ? '34px' : '32px'};
`;

export const Title = styled('span')`
  font-family: CamptonMedium;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 30px;
  color: ${Colors.COZEY_BLUE};

  @media (max-width: 1200px) {
    font-size: 18px;
  }
`;

export const Content = styled('div')`
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageWrapper = styled('div')`
  position: relative;
  width: 100%;
  max-width: 180px;
  height: 220px;
  margin-right: 32px;
  @media (max-width: 650px) {
    margin-right: 0px;
    margin-bottom: 32px;
  }
`;

export const Description = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (max-width: 650px) {
    align-items: center;
  }
`;

export const Minimum = styled('span')`
  font-family: 'Larsseit';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: ${Colors.COZEY_ULTRAMARINE_BLUE};
  @media (max-width: 650px) {
    font-size: 16px;
  }
`;

export const Paragraph = styled('p')`
  font-family: 'Larsseit';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  margin-top: ${({ productModal }: { productModal: boolean }) =>
    productModal ? '0px' : '28px'};
  &:not(:last-child) {
    margin-bottom: ${({ productModal }: { productModal: boolean }) =>
      productModal ? '28px' : '0px'};
  }
  color: ${Colors.COZEY_ULTRAMARINE_BLUE};
  @media (max-width: 1200px) {
    text-align: left;
    font-size: 16px;
  }
`;
