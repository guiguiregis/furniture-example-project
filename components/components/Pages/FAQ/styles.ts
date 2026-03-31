import styled from 'styled-components';
import colors from '../../../../constants/colors';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //margin: 0 80px;
  padding: 0px 80px 0px;
  gap: 24px;
  width: 100%;
  /* background: ${colors.COZEY_CLOUD_WHITE}; */
  @media (min-width: 1440px) {
    width: 1440px;
    margin: 0 auto;
  }
  @media (max-width: 1440px) {
    padding: 0px 80px;
  }
  @media (max-width: 1024px) {
    padding: 0px 32px;
  }
`;

export const SectionHeading = styled.span`
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

export const AccordionSectionWrapper = styled.div`
  width: 100%;
`;

export const AccordionSectionChild = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  padding: 32px 0px 0px;
`;

export const Description = styled.p`
  font-family: 'Larsseit';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: ${colors.COZEY_ULTRAMARINE_BLUE};

  @media (max-width: 1024px) {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const RichDescription = styled.div`
  & p {
    font-family: 'Larsseit';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.02em;
    color: ${colors.COZEY_ULTRAMARINE_BLUE};
  }

  @media (max-width: 1024px) {
    & p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

export const LocationSectionWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const LocationSectionHeading = styled.span`
  font-family: 'Larsseit';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;
  color: ${colors.COZEY_LIGHT_BLUE};

  @media (max-width: 1024px) {
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
  }
`;

export const LocationConfirmationText = styled.span`
  font-family: 'Larsseit';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.02em;
  color: ${colors.COZEY_BLUE};
  @media (max-width: 1024px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 95vw;
  gap: 35px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LinkWrapper = styled.div`
  padding-top: 34px;
`;
