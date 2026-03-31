import colors from '@/constants/colors';
import { styled } from 'styled-components';

export const TopbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.COZEY_BLUE};
  padding: 10px 0px;
  padding-bottom: 12px;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  z-index: 9999999;

  @media (max-width: 768px) {
    padding-bottom: 10px;
  }
`;

export const LeftContainer = styled.div`
  color: white;
  margin-left: 80px;

  @media (max-width: 768px) {
    margin-left: 16px;
  }
`;

export const FeatureText = styled.span`
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

export const FeatureDivider = styled.span`
  display: inline-block;
  position: relative;
  top: 1px;
  margin: 0px 8px;
  height: 10px;
  width: 1px;
  background-color: white;
`;

export const LocaleSwitcherContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    position: relative;
    bottom: 2px;
  }
`;

export const ArrowIconWrapper = styled.div`
  transform: scale(0.7);
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ActiveLocale = styled.div`
  display: flex;
  flex-direction: row;
  color: ${colors.WHITE};
  cursor: pointer;
`;

export const LocaleDropdownDividerA = styled.div`
  height: 10px;
  width: 1px;
  background-color: ${colors.BLACK};
  margin: 0px 4px;
  position: relative;
  bottom: 1px;
  display: inline-block;
`;

export const LocaleDropdownDividerB = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.COZEY_SKY_BLUE_1};
  margin: 8px 8px;

  position: relative;
  top: 1px;
  display: inline-block;
`;

export const ActiveLocaleText = styled.span`
  font-size: 12px;
  display: flex;
  align-items: center;
  margin-right: 8px;
  position: relative;
  top: 1px;
`;

export const ActiveLocaleIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LocaleDropdown = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 46px;
  right: 20px;
  background-color: ${colors.WHITE};
  z-index: 999;
  padding: 8px;
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    top: 32px;
    right: 6px;
  }
`;

export const LocaleDropdownItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: ${colors.BLACK};
  cursor: pointer;
`;

export const LocaleDropdownItemText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const LocaleItemIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  position: relative;
  bottom: 1px;
`;
