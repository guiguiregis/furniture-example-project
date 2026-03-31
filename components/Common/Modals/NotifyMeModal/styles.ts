import styled from 'styled-components';
import Colors from '../../../../constants/colors';

export const GetNotifiedButton = styled.button`
  width: 100%;
  height: 5rem;
  border-radius: 50px;
  background-color: ${Colors.COZEY_BLUE};
  color: ${Colors.COZEY_CLOUD_WHITE};
  font-family: 'CamptonMedium';
  font-size: 24px;
  line-height: 28px;
  margin-top: 32px;
  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 18px;
  }
`;

export const GetNotifiedContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 100px;
  padding-right: 100px;
  @media (max-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const SuccessMessageWrapper = styled.span`
  background: white;
  height: 50vh;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    width: auto;
  }
`;
