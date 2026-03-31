import { AppBar } from '@mui/material';
import { styled } from 'styled-components';

export const NavBar = styled(AppBar)`
  height: 60px;
  top: 46px !important;

  @media (max-width: 1024px) {
    height: 48px;
    top: 36px !important;
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: 76px;
  height: 42px;
  @media (max-width: 1024px) {
    position: relative;
    width: 72px;
    height: 40px;
  }
`;
