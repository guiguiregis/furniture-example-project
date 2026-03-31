import styled from 'styled-components';
import COLORS from '@/constants/colors';

export const SectionContainer = styled.div`
  padding: 24px 16px 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;

  @media (min-width: 1024px) {
    padding: 60px 80px 64px;
  }

  @media (min-width: 1440px) {
    padding: 40px 80px 64px;
    margin: 0 auto;
    max-width: 1440px;
    overflow-x: visible;
  }
`;

export const SectionHeader = styled.div`
  margin-bottom: 20px;
  position: relative;
  z-index: 200;
`;

export const SectionTitle = styled.h2`
  color: ${COLORS.COZEY_BLUE};
  font-family: 'QuincyCFMedium';
  font-size: 24px;
  line-height: 26px;
  text-align: center;
  margin: 0;
  position: relative;
  z-index: 200;

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 52px;
  }
`;

export const SectionSubtitle = styled.h3`
  color: ${COLORS.COZEY_ULTRAMARINE_BLUE};
  font-family: 'Larsseit Medium';
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  margin: 8px 0 0 0;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 30px;
  }
`;
