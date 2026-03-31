import styled from 'styled-components';
import Colors from '@/constants/colors';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
// import {
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
// } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 80px;
  gap: 80px;
  justify-content: space-between;
  background: ${Colors.COZEY_ULTRAMARINE_BLUE};
  color: white;

  @media (min-width: 1440px) {
    width: 1440px;
    margin: 0 auto;
  }

  @media (max-width: 1440px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 32px;
    gap: 32px;
  }
`;

export const MobileNavigationItemText = styled.p`
  font-size: 18px;
  font-family: CamptonSemiBold;
  color: #ced4d1;
`;

export const FooterLink = styled.span`
  color: ${Colors.SKY_BLUE};
  cursor: pointer;
  font-family: Larsseit;

  &:hover {
    text-decoration: underline;
  }
`;

export const SupportItemContainer = styled.div`
  border-radius: 10px;
  max-width: 420px;
  width: 100%;
  border: 1px solid ${Colors.COZEY_LIGHT_BLUE};
  display: flex;
  flex-direction: column;
  max-width: 420px;
  @media (max-width: 700px) {
    max-width: 364px;
  }
  @media (max-width: 550px) {
    max-width: unset;
  }
`;

export const FooterLinksContainerDesktop = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* padding: 64px 80px;
  background: #19142b; */

  @media (min-width: 1440px) {
    width: 1440px;
    margin: 0 auto;
  }

  @media (max-width: 1440px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const FooterLinksContainerMobile = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 33.5px 0px;
  background: #19142b;
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const CustomAccordion = styled(Accordion)`
  margin: 0;
  color: #ced4d1;
  width: 100%;
  padding-left: 0px;
  &:not(:last-child) {
    margin-bottom: 23px;
  }

  &.MuiAccordionSummary-root {
    background-color: black;
    padding-left: 0px;
  }

  &.MuiAccordion-root::before {
    background-color: ${Colors.CONTENT_GRID};
    display: none !important;
  }

  &.MuiAccordionDetails-root {
    padding-top: 20px;
    padding-bottom: 0px !important;
  }

  .MuiAccordionSummary-content.Mui-expanded {
    margin: 0 !important;
    padding-left: 0px;
  }

  .MuiAccordionSummary-content {
    margin-top: 0 !important;
    padding-left: 0px;
  }

  .MuiIconButton-root {
    padding-top: 0px !important;
    padding-left: 0px;
  }
`;

export const CustomAccordionSummary = styled(AccordionSummary)`
  color: #ced4d1;

  &.Mui-expanded {
    background-color: #19142b;
    min-height: unset !important;
  }
`;

export const CustomAccordionDetails = styled(AccordionDetails)`
  box-shadow: none;
  margin: 0;
  background-color: #19142b;
  display: flex;
  flex-direction: column;
`;

export const FooterLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  @media (max-width: 1024px) {
    font-size: 14px;
    /* margin-bottom: 12px; */

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export const FooterExternalLink = styled.a`
  color: ${Colors.SKY_BLUE};
  cursor: pointer;
  font-family: Larsseit;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterLinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
  gap: 24px;
`;

export const FooterLinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const FooterLinksHeader = styled.div`
  font-size: 24px;
  font-family: CamptonSemiBold;
`;

export const Contact = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 80px;
  background: ${Colors.COZEY_ULTRAMARINE_BLUE};
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    width: 100%;
    gap: 24px;
    justify-content: center;
    align-items: center;
  }
`;

export const SupportTitle = styled('span')`
  font-family: 'CamptonMedium';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #f5f6f8;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const SectionMainTitle = styled('span')`
  font-family: 'Quincy Regular';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 52px;
  color: ${Colors.COZEY_BLUE};
  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;

export const TextContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    max-width: 420px;
  }
  @media (max-width: 700px) {
    max-width: 364px;
  }
`;
