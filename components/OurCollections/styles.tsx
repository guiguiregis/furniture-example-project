import colors from '@/constants/colors';
import Image from 'next/image';
import styled from 'styled-components';

export const OurCollectionsContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 48px 80px 32px;
  overflow: hidden;
  gap: 32px;
  background-color: #ffffff;
  position: relative;

  @media (max-width: 768px) {
    padding: 32px 16px;
    gap: 24px;
  }
`;

export const OurCollectionsTilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const CollectionTileContainer = styled.div<{ inverse?: boolean }>`
  display: flex;
  flex-direction: ${({ inverse }) => (inverse ? 'row-reverse' : 'row')};
  align-items: flex-start;
  padding: 0px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CollectionTileImageContainer = styled.div`
  width: 840px;
  height: 480px;
  position: relative;

  @media (max-width: 768px) {
    width: 396px;
    height: 248px;
  }

  @media (max-width: 400px) {
    width: 350px;
    height: 248px;
  }
`;

export const CollectionTileImage = styled(Image)<{ inverse?: boolean }>`
  border-radius: ${({ inverse }) =>
    inverse ? '0px 20px 20px 0px' : '20px 0px 0px 20px'};
  object-fit: cover;

  @media (max-width: 768px) {
    border-radius: 12px 12px 0px 0px;
  }
`;

export const CollectionTileTextContainer = styled.div<{ inverse?: boolean }>`
background-color: ${colors.COZEY_SKY_BLUE_1};
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 16px 24px;
gap: 12px;
width: 440px;
height: 480px;
border-radius: ${({ inverse }) =>
  inverse ? '20px 0px 0px 20px' : '0px 20px 20px 0px'};

@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 24px;
  gap: 8px;
  0px 0px 12px 12px;
  width: 396px;
  height: unset;
  border-radius: 0px 0px 12px 12px;
}

  @media (max-width: 400px) {
    width: 350px;
  }
`;

export const CollectionTileTitle = styled.div`
  font-family: 'Larsseit Bold';
  font-size: 42px;
  line-height: 42px;
  color: #2b2c6e;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }
`;

export const CollectionTileDescription = styled.div`
  font-family: 'Larsseit';
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.02em;
  color: #19142b;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const OutdoorTag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px 6px;
  gap: 10px;
  background-color: #e2b941;
  border-radius: 100px;
  position: absolute;
  left: 14px;
  bottom: 20px;
  font-family: 'Larsseit';
  color: ${colors.COZEY_ULTRAMARINE_BLUE};
  font-size: 12px;
  line-height: 15px;

  @media (max-width: 768px) {
    padding: 4px 8px 2px;
    font-size: 10px;
    line-height: 13px;
  }
`;
