import colors from '@/constants/colors';
import styled from 'styled-components';

interface BtnProps {
  btnColor?: string;
  gap?: string;
  mobileGap?: string;
}

export const Button = styled.div<BtnProps>`
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  gap: ${props => (props.gap ? props.gap : '20px')};
  padding: 23px 32px;
  gap: 16px;
  width: fit-content;
  height: 80px;
  /* margin-top: 32px; */
  /* width: fit-content; */
  background-color: ${props =>
    props.btnColor ? props.btnColor : colors.COZEY_CLOUD_WHITE};
  &:hover {
    transform: scale(1.05);
  }

  & > p {
    font-family: 'CamptonMedium';
    font-size: 24px;
    line-height: 28px;
    font-style: normal;
    font-weight: 500;
    color: ${props =>
      props.btnColor === colors.COZEY_CLOUD_WHITE
        ? colors.COZEY_BLUE
        : colors.COZEY_CLOUD_WHITE};
  }

  @media (max-width: 1024px) {
    font-size: 18px;
    padding: 16px 24px;
    gap: 12px;

    width: fit-content;
    height: 56px;
    gap: ${props => (props?.mobileGap ? props?.mobileGap : '20px')};

    & > p {
      white-space: nowrap;
      font-size: 18px;
      line-height: 21px;
    }
  }

  @media (max-width: 600px) {
    width: fit-content;
    padding: 16px 24px;
    gap: 12px;

    width: fit-content;
    height: 56px;
    font-size: 18px;
    & p {
      font-size: 18px;
    }
  }
`;
