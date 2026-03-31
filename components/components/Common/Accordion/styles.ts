import colors from '@/constants/colors';
import {
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
// import colors from '../../../constants/Colors';

interface AccordionProps {
  bgcolor?: string;
}

export const Title = styled('span')`
  font-size: 28px;
  font-family: 'CamptonMedium';
  color: ${colors.COZEY_ULTRAMARINE_BLUE};
  padding: 32px 0;
  @media (max-width: 1024px) {
    font-size: 18px;
    padding: 16px 0px;
  }
`;

export const Summary = styled(AccordionSummary)<AccordionProps>`
  /* background-color: ${({ bgcolor }) =>
    bgcolor || colors.COZEY_CLOUD_WHITE}; */
  box-shadow: none;
  & .MuiAccordionSummary-content {
    margin: 0;
  }
`;

export const Main = styled(Accordion)<AccordionProps>`
  border-bottom: 1.5px solid ${colors.COZEY_SKY_BLUE_3};
  box-shadow: none;
  .MuiButtonBase-root {
    padding: 0;
    /* background: ${({ bgcolor }) => bgcolor || colors.COZEY_CLOUD_WHITE}; */
  }
`;

export const Details = styled(AccordionDetails)<AccordionProps>`
  /* background-color: ${({ bgcolor }) =>
    bgcolor || colors.COZEY_CLOUD_WHITE}; */
  display: flex;
  flex-direction: column;
  &.MuiAccordionDetails-root {
    padding: 0px 0px 34px 0px;
  }
`;
