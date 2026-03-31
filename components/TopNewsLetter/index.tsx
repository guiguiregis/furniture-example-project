import colors from '@/constants/colors';
import { useNotifyNewsletter } from '@/hooks/useNotifyNewsletter';
import { FooterProps } from '@/components/Layout/Footer';
import { CircularProgress } from '@mui/material';
import { FC } from 'react';
import { styled } from 'styled-components';
import React from 'react';
import { SectionTitle } from '../Section/styles';
import { Info } from '../Common/Modals/NotifyModal/styles';

interface FooterContainerProps {
  shouldMoved: boolean;
}
export const InputFieldWrapper = styled.div`
  height: 80px;
  width: 100%;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  justify-content: center;
  @media (max-width: 1024px) {
    border-radius: 2px;
    height: 56px;
  }
`;

export const TopNewsLetterContainer = styled.div<FooterContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 999;
  position: relative;
  top: ${props => (props.shouldMoved ? '-70px' : 'unset')};
`;

export const NewsletterSubmit = styled.button`
  /* height: 100%; */
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

export const NewsletterInput = styled.input`
  height: 100%;
  width: 100%;
  max-width: 526px;
  padding: 35px 32px;
  background: ${colors.COZEY_SKY_BLUE_1};
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

export const NewsletterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 480px; */

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const OurCollectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 80px 0px;
  gap: 32px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0px 16px;
    gap: 24px;
  }
`;

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0px 54px;
  gap: 80px;
  justify-content: space-between;
  background: ${colors.WHITE};
  color: #2b2c6e;

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

const TopNewsLetter: FC<FooterProps> = ({ data }) => {
  const [email, setEmail] = React.useState<string>('');
  const [checked, setChecked] = React.useState<boolean>(false);
  const { emailSubscribed, emailLoading, handleNewsletter, emailErrorMessage } =
    useNotifyNewsletter('VzR4Ye', 'Homepage - Be the first to know');

  const getInfoMessage = () => {
    if (emailErrorMessage) {
      return 'Email is required';
    }

    if (emailSubscribed) {
      return 'Congrats, you are successfully subscribed!';
    }
    return null;
  };

  return (
    <TopNewsLetterContainer
      shouldMoved={false}
      style={{
        background: `#FFFFFF`,
      }}
    >
      <div id="topNewsLetter">
        <NewsletterContainer>
          <NewsletterInfoContainer>
            <OurCollectionsContainer>
              <SectionTitle>Be the first to know</SectionTitle>
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
                  onClick={() => {
                    handleNewsletter(email);
                  }}
                >
                  {emailLoading ? (
                    <CircularProgress size="1rem" color="inherit" />
                  ) : (
                    <span>{data.newsletterInputSubmitText}</span>
                  )}
                </NewsletterSubmit>
              </InputFieldWrapper>
              {!!getInfoMessage() && (
                <Info warning={!!emailErrorMessage}>{getInfoMessage()}</Info>
              )}
              <span
                style={{
                  fontFamily: 'Larsseit',
                  fontSize: '10px',
                }}
              >
                By signing up, I agree to receive notifications on product
                launches, updates, and exclusive content via email.{' '}
                <a href="https://www.cozey.com/terms">
                  <strong
                    style={{
                      textDecorationLine: 'underline',
                      fontFamily: 'Larsseit Bold',
                    }}
                  >
                    Terms of Use
                  </strong>
                </a>{' '}
                and{' '}
                <a href="https://www.cozey.com/privacy">
                  <strong
                    style={{
                      textDecorationLine: 'underline',
                      fontFamily: 'Larsseit Bold',
                    }}
                  >
                    Privacy Policy
                  </strong>
                </a>
                .
              </span>
            </OurCollectionsContainer>
          </NewsletterInfoContainer>
        </NewsletterContainer>
      </div>
    </TopNewsLetterContainer>
  );
};

export default TopNewsLetter;
