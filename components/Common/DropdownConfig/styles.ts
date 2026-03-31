import styled from 'styled-components';
import Colors from '../../../constants/colors';

export const DropdownConfigContainer = styled.div``;

export const DropdownConfigAction = styled.button`
  display: flex;
  width: 100%;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;

  @media (max-width: 768px) {
    padding-bottom: 0px;
  }

  div {
    background-color: transparent;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const DropdownConfigDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${Colors.COZEY_SKY_BLUE_3};
  opacity: 0.5;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const DropdownConfigChildrenContainer = styled.div`
  margin-left: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 18px;

  @media (max-width: 768px) {
    padding-top: 0px;
    padding-bottom: 10px;
  }
`;

interface DropdownSectionTitleProps {
  size: number;
}

export const DropdownSectionTitle = styled.strong<DropdownSectionTitleProps>`
  font-family: 'CamptonBook';
  font-size: 26px;
  text-transform: capitalize;
  color: ${Colors.COZEY_ULTRAMARINE_BLUE};
`;
