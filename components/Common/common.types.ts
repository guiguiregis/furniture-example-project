import styled from 'styled-components';
import Colors from '../../constants/colors';

export const ConfiguratorWrapper = styled.div`
  width: 40%;
  height: 1440px;
  display: flex;
  flex-direction: column;
`;

export const CollectionNameWrapper = styled.div`
  h3 {
    font-size: 28px;
    font-family: 'CamptonMedium';
    line-height: 32.59px;
    color: ${Colors.COZEY_ULTRAMARINE_BLUE};
    margin: 0;
  }
`;

export const ReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;

  strong {
    text-align: center;
    font-size: 18px;
    font-family: 'CamptonMedium';
    color: ${Colors.COZEY_ULTRAMARINE_BLUE};

    &:first-child {
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
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ConfiguratorSectionTitle = styled.h3`
  font-family: 'CamptonBook';
  font-size: 24px;
  /* text-transform: capitalize; */
  margin-top: 4px;
  margin-bottom: 3px;
  text-align: left;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;
