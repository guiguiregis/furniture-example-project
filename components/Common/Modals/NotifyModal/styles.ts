import styled from 'styled-components';
import Colors from '../../../../constants/colors';

export const NotifyModalLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;

  @media (max-width: 1024px) {
    width: 100%;
    gap: 32px;
  }
`;

export const Headline = styled.span`
  font-family: 'Larsseit';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: ${Colors.COZEY_ULTRAMARINE_BLUE};

  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 20px;
    max-width: 500px;
    white-space: normal;
  }
`;

export const FieldAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  /* padding: 0 12px; */
  padding: 0px;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const InputFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 96px;
  width: 100%;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  overflow: hidden;

  @media (max-width: 1024px) {
    border-radius: 2px;
    height: 56px;
  }
`;

export const Field = styled.input`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-radius: 4px;
  padding: 10px 20px;
  background-color: ${Colors.COZEY_SKY_BLUE_1};
  border: none;
  color: ${Colors.COZEY_BLUE};
  font-size: 1.05em;

  // style placeholder
  &::placeholder {
    color: ${Colors.COZEY_BLUE};
    font-size: 18px;
  }

  @media (max-width: 1024px) {
    font-size: 14px !important;

    &::placeholder {
      color: ${Colors.COZEY_BLUE};
      font-size: 14px !important;
    }
  }
`;

export const Button = styled.button`
  height: 100%;
  width: 40%;
  padding: 0;
  background: ${Colors.LIGHT_BLUE};
  color: ${Colors.COZEY_ULTRAMARINE_BLUE};
  font-family: CamptonSemiBold;
  font-size: 22px;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

interface StyleProps {
  color?: string;
  warning?: boolean;
}

export const Info = styled.span<{ warning: boolean; color?: string }>`
  font-family: 'Larsseit';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.02em;
  color: ${({ warning, color }: StyleProps) =>
    // eslint-disable-next-line no-nested-ternary
    warning ? 'red' : color ? color : Colors.COZEY_ULTRAMARINE_BLUE};

  @media (max-width: 1024px) {
    font-size: 12px;
    line-height: 15px;
  }
`;
