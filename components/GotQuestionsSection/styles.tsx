import colors from '@/constants/colors';
import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled('span')`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  font-family: 'CamptonMedium';
  color: ${colors.PURPLE};
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 16px;
  padding-left: 16px;
  text-decoration-line: underline;
  display: block;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    padding-right: 8px;
    padding-left: 8px;
  }
`;
