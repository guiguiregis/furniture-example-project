// import {
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   Snackbar,
// } from '@material-ui/core';
//import Link from 'next/link';
//import { useRouter } from 'next/router';
import React, { FC } from 'react';
//import { FiChevronDown } from 'react-icons/fi';
import styled from 'styled-components';
//import CircularProgress from '@material-ui/core/CircularProgress';
// eslint-disable-next-line import/no-unresolved
//import MuiAlert from '@material-ui/lab/Alert';
import { CircularProgress } from '@mui/material';
import colors from '@/constants/colors';
import { FooterData } from '@/helpers/contentful';
//import MuiAlert from '@material-ui/lab/Alert';
//import { useNewsletter } from '../../../hooks/useNewsletter';
//import { ArrowRight as ArrowRightIcon } from '../../Common/Icons/ArrowRight';
//import { useNavigation } from '../../../hooks/useNavigation';

import { useNotifyNewsletter } from '@/hooks/useNotifyNewsletter';
import {
  FieldAreaWrapper,
  Info,
  InputFieldWrapper,
} from '@/components/Common/Modals/NotifyModal/styles';
import ContactSection from '@/components/ContactSection';
import router from 'next/router';

interface FooterContainerProps {
  shouldMoved: boolean;
}
export const FooterContainer = styled.div<FooterContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 999;
  position: relative;
  top: ${props => (props.shouldMoved ? '-70px' : 'unset')};
`;

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 80px;
  gap: 80px;
  justify-content: space-between;
  background: ${colors.COZEY_BLUE};
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

export const NewsletterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const NewsletterInfoHeader = styled.div`
  font-size: 48px;
  font-family: 'Quincy Medium';

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;

export const NewsletterInfoText = styled.span`
  font-family: Larsseit;
  color: ${colors.COZEY_SKY_BLUE_1};
  font-size: 20px;
  color: white;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const NewsletterFormContainer = styled.form`
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
    height: 56px;
  }
`;

export const NewsletterInfoInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 1024px) {
    gap: 12px;
  }
`;

export const NewsletterFormWrapper = styled.div`
  height: 100%;
  max-height: 96px;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  @media (max-width: 1024px) {
    border-radius: 2px;
    height: 56px;
  }
`;

export const NewsletterInput = styled.input`
  height: 100%;
  width: 100%;
  max-width: 526px;
  padding: 35px 32px;
  background: ${colors.WHITE};
  border-radius: 16px 0px 0px 16px;
  border: none;
  color: ${colors.PURPLE};
  font-size: 20px;
  line-height: 26px;
  @media (max-width: 1024px) {
    padding: 19px 16px;
    line-height: 18px;
    font-size: 14px;
    border-radius: 8px 0px 0px 8px;
    max-width: 262px;
  }

  @media (max-width: 600px) {
    max-width: unset;
  }

  ::placeholder {
    color: ${colors.PURPLE};
    font-family: Larsseit;
    font-size: 20px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
`;

export const NewsletterSubmit = styled.button`
  height: 100%;
  width: 100%;
  max-width: 194px;
  border-radius: 0px 16px 16px 0px;
  background: ${colors.COZEY_RUST};
  color: #fff;
  border: none;
  font-family: 'CamptonSemiBold';
  font-size: 22px;
  line-height: 26px;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    max-width: 100%;
    border-radius: 0px 8px 8px 0px;
    font-size: 16px;
    line-height: 19px;
    width: fit-content;
    white-space: nowrap;
  }
`;

export const SuccessSubscriptionMessage = styled.span`
  font-size: 20px;
  color: ${colors.WHITE};
`;

export const FooterLinksContainerDesktop = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 64px 80px;
  background: #19142b;

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
  flex-direction: column;
  padding: 33.5px 32px;
  background: #19142b;
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }
`;

// export const ArrowRight = styled(ArrowRightIcon)`
//   margin-left: 6px;
//   transform: scale(0.6);
//   @media (max-width: 1024px) {
//     position: relative;
//     top: 6px;
//   }
// `;

export const FooterLinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  color: white;
  gap: 24px;
`;

export const FooterLinksHeader = styled.div`
  font-size: 24px;
  font-family: CamptonSemiBold;
`;

export const FooterLinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FooterLink = styled.span`
  color: ${colors.SKY_BLUE};
  cursor: pointer;
  font-family: Larsseit;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterExternalLink = styled.a`
  color: ${colors.SKY_BLUE};
  cursor: pointer;
  font-family: Larsseit;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  @media (max-width: 1024px) {
    font-size: 14px;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export const FooterBottomContainer = styled.div`
  background: #19142b;
  display: flex;
  flex-direction: row;
  padding: 12px 80px;
  height: 100%;

  @media (min-width: 1440px) {
    width: 1440px;
    margin: 0 auto;
    padding: 0 80px;
  }

  @media (max-width: 1440px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 32px;
  }
`;

export const FooterCopyright = styled.div`
  font-family: Larsseit;
  color: #adadb7;
  font-size: 11px;

  @media (max-width: 1024px) {
    font-size: 11px;
  }
`;

export const FooterBottomLinks = styled.div`
  display: flex;
  flex-direction: row;
  color: #adadb7;
  font-size: 11px;
  gap: 30px;
  margin-left: 30px;

  @media (max-width: 1024px) {
    margin-left: 0px;
    margin-top: 10px;
  }
`;

// export const CustomAccordion = styled(Accordion)`
//   margin: 0;
//   color: #ced4d1;
//   width: 100%;
//   &:not(:last-child) {
//     margin-bottom: 23px;
//   }

//   &.MuiAccordionSummary-root {
//     background-color: black;
//   }

//   &.MuiAccordion-root::before {
//     background-color: ${colors.CONTENT_GRID};
//     display: none !important;
//   }

//   &.MuiAccordionDetails-root {
//     padding-top: 20px;
//     padding-bottom: 0px !important;
//   }

//   .MuiAccordionSummary-content.Mui-expanded {
//     margin: 0 !important;
//   }

//   .MuiAccordionSummary-content {
//     margin-top: 0 !important;
//   }

//   .MuiIconButton-root {
//     padding-top: 0px !important;
//   }
// `;

// export const CustomAccordionSummary = styled(AccordionSummary)`
//   color: #ced4d1;

//   &.Mui-expanded {
//     background-color: #19142b;
//     min-height: unset !important;
//   }
// `;

// export const CustomAccordionDetails = styled(AccordionDetails)`
//   box-shadow: none;
//   margin: 0;
//   background-color: #19142b;
//   display: flex;
//   flex-direction: column;
// `;

export const MobileNavigationItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
`;
export const MobileNavigationItemText = styled.p`
  font-size: 18px;
  font-family: CamptonSemiBold;
  color: #ced4d1;
`;

export interface FooterProps {
  data: FooterData;
  // eslint-disable-next-line react/no-unused-prop-types
  isMobileMenuOpen?: boolean;
}

const Footer: FC<FooterProps> = ({ data }) => {
  // const router = useRouter();
  // const {
  //   openFooterEmailError,
  //   footerEmailErrorMessage,
  //   emailFooterSubscribed,
  //   footerEmailLoading,
  //   handleFooterEmailErrorClose,
  //   handleNewsletter,
  // } = useNewsletter(data.klaviyoId);
  // const { mobileMenu } = useNavigation();

  const [email, setEmail] = React.useState<string>('');

  const { emailSubscribed, emailLoading, handleNewsletter, emailErrorMessage } =
    useNotifyNewsletter('VzR4Ye', 'Footer');

  const getInfoMessage = () => {
    if (emailErrorMessage) {
      return 'Email is required';
    }

    if (emailSubscribed) {
      return 'Congrats, you are successfully subscribed!';
    }
    return null;
  };

  // const isMobile = useMediaQuery('(max-width: 1024px)');
  // TODO: remove inspiration links from the code and move it to contentful

  return (
    <>
      <FooterContainer
        shouldMoved={false}
        style={{
          background: `${colors.MEDIUM_BLUE}`,
          marginTop: '24px',
        }}
      >
        <NewsletterContainer>
          <NewsletterInfoContainer>
            <NewsletterInfoInner>
              <NewsletterInfoHeader>
                {data.newsletterInfoHeader}
              </NewsletterInfoHeader>
              <NewsletterInfoText>{data.newsletterInfoText}</NewsletterInfoText>
            </NewsletterInfoInner>
          </NewsletterInfoContainer>
          <FieldAreaWrapper>
            <InputFieldWrapper>
              <NewsletterInput
                id="email"
                name={data.newsletterInputPlaceholder}
                type="text"
                value={email}
                placeholder={data.newsletterInputPlaceholder}
                onChange={e => setEmail(e.target.value)}
              />
              <NewsletterSubmit
                disabled={emailSubscribed}
                onClick={() => handleNewsletter(email)}
              >
                {emailLoading ? (
                  <CircularProgress size="1rem" color="inherit" />
                ) : (
                  <span>{data.newsletterInputSubmitText}</span>
                )}
              </NewsletterSubmit>
            </InputFieldWrapper>
            {!!getInfoMessage() && (
              <Info color={colors.COZEY_WHITE} warning={!!emailErrorMessage}>
                {getInfoMessage()}
              </Info>
            )}
          </FieldAreaWrapper>
        </NewsletterContainer>
      </FooterContainer>
      <FooterContainer
        shouldMoved={false}
        style={{
          background: `${colors.COZEY_ULTRAMARINE_BLUE}`,
        }}
      >
        <ContactSection />
      </FooterContainer>
      <FooterContainer
        shouldMoved={false}
        style={{
          background: `${colors.COZEY_ULTRAMARINE_BLUE}`,
        }}
      >
        <FooterBottomContainer>
          <FooterCopyright>
            © 2022 Cozey Inc. All rights reserved
          </FooterCopyright>
          <FooterBottomLinks>
            <FooterLink
              style={{ color: '#adadb7' }}
              onClick={() => router.push('/privacy')}
            >
              Privacy Policy
            </FooterLink>
            <FooterLink
              style={{ color: '#adadb7' }}
              onClick={() => router.push('/terms')}
            >
              Terms of Use
            </FooterLink>
          </FooterBottomLinks>
        </FooterBottomContainer>
        <div
          style={{
            background: `${colors.COZEY_ULTRAMARINE_BLUE}`,
            height: 70,
            width: '100%',
            position: 'absolute',
            left: 0,
            bottom: '-70px',
          }}
        />
      </FooterContainer>
    </>
  );
};

export default Footer;
