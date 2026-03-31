import Image from 'next/image';
import styled from 'styled-components';
import Colors from '../../../constants/colors';

interface SwatchProps {
  isSelected?: boolean;
}

export const RootLayout = styled.div`
  overflow-x: hidden;
  @media (min-width: 1440px) {
    background: linear-gradient(
      90deg,
      #ffffff 60%,
      ${Colors.COZEY_CLOUD_WHITE} 40%
    );
  }

  @media (min-width: 1200px) {
    background: linear-gradient(
      90deg,
      #ffffff 70%,
      ${Colors.COZEY_CLOUD_WHITE} 50%
    );
  }
  /* @media (max) background: transparent; */
`;

export const Layout = styled.div`
  display: flex;
  /* flex-direction: row;
  width: auto;
  height: 100%;
  justify-content: center;
  align-items: center; */
  margin: 0px auto;
  justify-content: center;
  gap: 0px;
  @media (min-width: 1440px) {
    width: 1440px;
  }

  @media (max-wdith: 1440px) {
    width: 100%;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    padding-left: 0px;
  }
`;

export const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding-bottom: 16px;
  margin-left: 4px;
  /* @media (max-width: 1024px) {
    padding-left: 30px;
    gap: 6px;
  } */
`;

export const RadioOption = styled.div<SwatchProps>`
  width: fit-content;
  height: 34px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px 8px;
  gap: 10px;
  border: 2px solid;
  border-radius: 100px;
  background: ${props =>
    props.isSelected ? `${Colors.COZEY_BLUE}` : `${Colors.WHITE}`};
  color: ${props =>
    props.isSelected ? `${Colors.WHITE}` : `${Colors.COZEY_CLOUD_GREY}`};
  border-color: ${props =>
    props.isSelected ? `${Colors.COZEY_BLUE}` : `${Colors.COZEY_CLOUD_GREY}`};
  cursor: pointer;

  /* Desktop/Item Selector */

  font-family: 'Larsseit';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
`;

export const OrderFreeSwatchButton = styled.div`
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 17.5px 24px;
  gap: 15px;
  width: fit-content;
  white-space: no-wrap;
  height: 56px;
  background: ${Colors.COZEY_RUST};
  border-radius: 50px;
  /*  */
  font-family: 'CamptonMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: ${Colors.COZEY_WHITE};

  @media (max-width: 1200px) {
    display: flex;
  }
`;

export const MainOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 130%;
  height: auto;
  @media (max-width: 1200px) {
    align-items: start;
  }
`;

export const InnerMainOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  margin-left: 80px;
  margin-right: 48px;
  margin-bottom: 80px;
  @media (max-width: 1200px) {
    margin-right: 0;
    margin-bottom: 12px;
    margin-left: 16px;
    gap: 0px;
  }
`;

export const MainTwo = styled.div`
  display: flex;
  align-items: center;
  background: ${Colors.COZEY_CLOUD_WHITE};
  width: 100%;
  height: auto;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const InnerMainTwo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (max-width: 1024px) {
    max-width: 480px;
  }
  @media (max-width: 600px) {
    max-width: 600px;
  }
`;

export const TellMoreLayout = styled.div`
  max-width: 780px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  /* background-color: aliceblue; */
  width: 100%;
  height: 100%;
  /* padding: 64px 66px 80px 80px; */
  gap: 100px;
  @media (max-width: 1200px) {
    padding: 32px;
    width: 100%;
    gap: 24px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  @media (max-width: 1200px) {
    gap: 0px;
    margin-bottom: 32px;
  }
`;

export const Heading = styled.span`
  font-family: 'Quincy Bold';
  font-style: normal;
  font-size: 60px;
  line-height: 68px;
  color: ${Colors.COZEY_BLUE};

  @media (max-width: 1200px) {
    font-size: 44px;
    line-height: 46px;
  }
`;

export const Info = styled.span`
  font-family: 'Larsseit Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: ${Colors.COZEY_ULTRAMARINE_BLUE};

  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 16px;
  }
`;

export const OuterWrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
  align-items: flex-start;

  @media (max-width: 1024px) {
    justify-content: flex-start;
    gap: 48px;
    /* padding-left: 30px; */
  }

  @media (max-width: 400px) {
    justify-content: flex-start;
    gap: 24px;
    /* padding-left: 30px; */
  }
`;

export const MainSectionLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  @media (max-width: 1200px) {
    gap: 12px;
    margin-bottom: 20px;
  }
`;

export const MainSectionHeading = styled.span`
  font-family: 'Larsseit Bold';
  font-size: 32px;
  line-height: 32px;
  color: ${Colors.COZEY_BLUE};

  @media (max-width: 1200px) {
    font-size: 20px;
    line-height: 26px;
  }
`;

export const MainSectionItemsLayout = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 20px;
  /* flex-wrap: wrap; */

  @media (max-width: 1200px) {
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: scroll;
    white-space: nowrap;
    width: 94vw;
    padding-bottom: 24px;
    gap: 16px;
  }
`;

export const MainSectionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 210px;
  height: 250px;
  min-width: 210px;
  min-height: 250px;

  @media (max-width: 1200px) {
    width: 160px;
    height: 162.5px;
    min-width: 160px;
    min-height: 192.5px;
    gap: 6px;
  }
`;

export const EyeIcon = styled.img`
  width: 32px;
  height: 32px;

  @media (max-width: 1200px) {
    width: 24px;
    height: 24px;
  }
`;

export const ZoomInIcon = styled.img`
  width: 20.25px;
  height: 20.25px;

  @media (max-width: 1200px) {
    width: 16.88px;
    height: 16.88px;
  }
`;

export const ArrowRightWhite = styled.img`
  width: 18px;
  height: 15px;
`;

export const SubmitArrowRightWhite = styled.img`
  width: 24px;
  height: 20px;
  display: block;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ItemDesc = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: 'CamptonSemiBold' !important;
  font-style: normal;
  font-size: 16px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: ${Colors.COZEY_BLUE};
  cursor: pointer;

  @media (max-width: 1200px) {
    font-size: 12px;
    height: 24px;
    font-family: 'CamptonMedium' !important;
  }
`;

type FormLayoutProps = {
  isOpen?: boolean;
};

export const FormLayout = styled.div<FormLayoutProps>`
  /* display: flex;
  overflow: auto;
  position: sticky;
  height: 100vh;
  top: 50px; */
  /* max-width: 600px; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: red;
  width: 100%;
  height: 100%;
  background: ${Colors.COZEY_SKY_BLUE_1};

  @media (max-height: 950px) {
    top: 30px;
  }

  @media (max-width: 1200px) {
    max-width: 100%;
    height: 100%;
    width: 100%;
    display: flex;
    position: static;
    bottom: 0vh;
    z-index: ${props => (props.isOpen ? 0 : 998)};
  }
`;

type FormProps = {
  isExpanded?: boolean;
};
export const FormBody = styled.div<FormProps>`
  /* position: fixed; */
  width: 100%;
  max-width: 640px;
  height: ${props => (props.isExpanded ? '' : '72px')};
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: 64px 80px;
  gap: 24px;
  overflow-y: auto;

  @media (max-width: 1440px) {
    max-width: 40vw;
    padding: 64px 30px;
  }

  @media (max-width: 1340px) {
    max-width: 30vw;
    padding: 64px 30px;
  }
  @media (max-width: 1200px) {
    gap: 16px;
    /* position: sticky; */
    max-width: 100%;
    bottom: 0vh;
    padding: 20px 16px 48px 16px;
  }
`;

export const Form = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  @media (max-width: 1200px) {
    padding-top: 4px;
    gap: 0px;
  }
`;

export const FormHeading = styled.span`
  font-family: 'Larsseit Bold';
  font-size: 22px;
  line-height: 22px;
  color: ${Colors.COZEY_ULTRAMARINE_BLUE};

  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    font-size: 18px;
    line-height: 21px;
    gap: 24px;
  }

  span {
    display: none;

    @media (max-width: 1200px) {
      display: block;
    }
  }
`;

export const FormSectionLayout = styled.div<{
  mobileTopGap?: string;
  isCheckboxForm?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  height: auto;
  gap: 8px;
  width: 100%;
  @media (max-width: 1200px) {
    gap: ${({ isCheckboxForm }) => (isCheckboxForm ? '11px' : '8px')};
    margin-top: ${({ mobileTopGap }) => mobileTopGap || '24px'};
  }
`;

export const FormSectionHeading = styled.span`
  font-family: 'Larsseit Medium';
  font-style: normal;
  font-size: 18px;
  line-height: 18px;
  color: ${Colors.COZEY_ULTRAMARINE_BLUE};

  @media (max-width: 1200px) {
    font-size: 12px;
    line-height: 12px;
    padding-bottom: 0px;
    font-family: 'Larsseit Bold';
  }
`;

export const CheckboxLabel = styled('p')<{
  labelColor?: string;
}>`
  font-family: 'Larsseit 400' !important;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: ${({ labelColor }) => labelColor || Colors.PURPLE};
  letter-spacing: 0.02em;
`;

export const CheckboxSection = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: 1200px) {
    gap: 11px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const PreviewModalLayout = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  max-width: 440px;
  width: 100%;
  z-index: 9999999999;
  margin: 0px auto;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ConfirmationModalLayout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 490px;
  width: 100%;
  z-index: 9999999999;

  @media (max-width: 600px) {
    align-items: center;
    width: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const ConfirmationText = styled.span`
  font-family: 'Larsseit';
  font-style: normal;
  white-space: pre-wrap;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: ${Colors.COZEY_ULTRAMARINE_BLUE};

  @media (max-width: 1200px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`;
export const DropdownWrapper = styled.div`
  width: 100%;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const LightBeansIframe = styled.iframe`
  height: 440px;
  width: 100%;
  gap: 16px;
  @media (max-width: 1024px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const SwatchImgLayout = styled.div`
  position: relative;
  cursor: pointer;
`;

export const MaterialTag = styled.div`
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  padding: 8px 12px 6px;
  margin: 12px;
  margin-bottom: 18px;
  gap: 10px;
  position: absolute;
  width: auto;
  height: 29px;
  background: ${Colors.COZEY_CREAM};
  font-family: 'Larsseit';
  font-style: normal;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${Colors.COZEY_ULTRAMARINE_BLUE};

  @media (max-width: 1200px) {
    border-radius: 10px;
    font-size: 10px;
    line-height: 12.54px;
    padding: 4px 8px 2px 8px;
    margin: 8px 8px 12px 8px;
    height: 19px;
  }
`;

export const SwatchImg = styled(Image)`
  width: 210px;
  height: 210px;
  border-radius: 20px;

  @media (max-width: 1200px) {
    width: 160px;
    height: 160px;
    border-radius: 12px;
  }
`;

export const FinalizeOrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  @media (max-width: 1200px) {
    gap: 16px;
    margin-top: 20px;
  }
`;

export const SubmitButtonWrapper = styled.button<{ disabled: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 23px 32px;
  gap: 16px;
  width: fit-content;
  height: 80px;
  background: ${({ disabled }) =>
    disabled ? Colors.COZEY_CLOUD_GREY : Colors.COZEY_BLUE};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: 50px;

  @media (max-width: 1200px) {
    width: 100%;
    height: 56px;
    border-radius: 6px;
  }
`;

export const ButtonLabel = styled.a`
  font-family: 'CamptonMedium';
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: ${Colors.COZEY_CLOUD_WHITE};

  @media (max-width: 1200px) {
    font-size: 18px;
  }
`;

export const OrderPlacedLabel = styled.a`
  font-family: 'CamptonMedium';
  white-space: nowrap;
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: ${Colors.COZEY_CLOUD_WHITE};

  @media (max-width: 1200px) {
    font-size: 18px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  // padding-top: 16px;
  max-width: 764px;
  padding-bottom: 12px;
  @media (max-width: 1200px) {
    padding-top: 4px;
    padding-bottom: 8px;
  }
`;

export const CheckField = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 6px;
  gap: 16px;
  @media (max-width: 1200px) {
    gap: 11px;
  }
`;

export const SectionTitle = styled.span`
  font-family: 'Larsseit Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: ${Colors.COZEY_ULTRAMARINE_BLUE};
  padding-bottom: 10px;

  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 18px;
    padding-bottom: 12px;
  }
`;

// interface CheckBoxProps {
//   hideBorder?: boolean;
// }

// export const CheckBox = styled.input<CheckBoxProps>`
//   accent-color: ${Colors.COZEY_BLUE};
//   min-width: 24px !important;
//   min-height: 24px !important;
//   margin: 0;
//   outline: ${({ hideBorder }: CheckBoxProps) =>
//     hideBorder ? 'none' : `1px solid ${Colors.COZEY_BLUE}`};

//   @media (max-width: 1200px) {
//     min-height: 18px !important;
//     min-width: 18px !important;
//   }
// `;

export const Checkboxes = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-family: 'Larsseit';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  padding-left: 16px;
  letter-spacing: 0.02em;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const TextArea = styled.textarea`
  height: 120px;
  border: 0;
  padding: 20px 24px;

  background: ${Colors.COZEY_SKY_BLUE_1};
  border-radius: 4px;
  width: 100%;
  font-size: 18px;
  line-height: 25px;
  &::placeholder {
    color: ${Colors.COZEY_BLUE};
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.02em;
  }
  @media (max-width: 1024px) {
    &::placeholder {
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0;
    }
  }
`;
export const MoreButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
export const ButtonWrapperModal = styled.button`
  margin-top: 28px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 23px 32px;
  gap: 16px;
  width: fit-content;
  background-color: ${Colors.COZEY_BLUE};
  border-radius: 50px;

  @media (max-width: 1200px) {
    width: 100%;
    height: 56px;
    border-radius: 6px;
    padding: 16px 24px;
    margin-top: 0px;
  }
`;

export const Error = styled.p`
  padding: 8px;
  color: red;
`;

export const DivOpen = styled.div``;
