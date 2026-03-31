import colors from '@/constants/colors';
import styled from 'styled-components';

export const SubHeading = styled.span`
  font-family: 'Quincy Regular';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 52px;
  width: 100%;
  padding-bottom: 24px;
  color: ${colors.COZEY_BLUE};

  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 26px;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 80px 64px;
  gap: 32px;
  width: 100%;
  background: ${colors.COZEY_SKY_BLUE_1};

  @media (max-width: 1024px) {
    padding: 48px 32px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 32px 0px;
  justify-content: space-between;
  width: 100%;
  height: 684px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 24px 0px 0px;
      gap: 12px;
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 24px 0px 0px;
    gap: 12px;
    width: 100%;
    height: auto;
  }
`;

export const ArrowIcon = styled.img``;

export const ProductImage = styled.img`
  width: 620px;
  height: 620px;
  border-radius: 8px;
  @media (max-width: 1024px) {
    width: 78vw;
    height: auto;
    border-radius: 4px;
  }
`;

export const ProductName = styled.span`
  font-family: 'CamptonMedium';
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  color: ${colors.COZEY_BLUE};
`;

export const ProductDescription = styled.span`
  font-family: 'Larsseit';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.02em;
  color: ${colors.COZEY_ULTRAMARINE_BLUE};
`;

export const ProductLink = styled.a`
  font-family: 'CamptonMedium';
  font-style: normal;
  font-size: 18px;
  line-height: 21px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  color: ${colors.COZEY_BLUE};

  &:hover {
    text-decoration: underline;
    color: ${colors.COZEY_BLUE};
  }
`;

export const FAQSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  //gap: 24px;
  width: 100%;
  background: ${colors.COZEY_CLOUD_WHITE};

  @media (min-width: 1440px) {
    width: 1440px;
    margin: 0 auto;
  }
  @media (max-width: 1024px) {
    padding: 48px 32px;
  }
`;

export const BgContainer = styled.div`
  width: 100%;
  /* background: ${colors.COZEY_CLOUD_WHITE}; */
`;

export const AccordionSection = styled.div`
  width: 100%;
`;

export const Text = styled.p`
  font-family: 'Larsseit';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: ${colors.COZEY_ULTRAMARINE_BLUE};
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;
