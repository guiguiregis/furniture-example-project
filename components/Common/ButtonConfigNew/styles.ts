import styled from 'styled-components';
import Colors from '../../../constants/colors';

interface ButtonConfigContainerStyleProps {
  isSelected: boolean;
}

export const ButtonConfigContainer = styled.button<ButtonConfigContainerStyleProps>`
  width: 64px;
  height: 64px;
  padding: 5px;
  margin-top: 12px;
  margin-right: 12px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ isSelected }) =>
    `3px solid ${
      isSelected ? Colors.COZEY_LIGHT_BLUE : Colors.COZEY_SKY_BLUE_2
    }`};
  background-color: ${({ isSelected }) =>
    isSelected ? Colors.COZEY_SKY_BLUE_3 : Colors.COZEY_SKY_BLUE_1};
`;
