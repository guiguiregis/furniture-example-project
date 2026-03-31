import { createGlobalStyle } from 'styled-components';
import Colors from '../constants/colors';

export const GlobalStyle = createGlobalStyle`
   :root {
    @media (max-width: 991px) {
      font-size: 93.75%;
    }

    @media (max-width: 767px) {
      font-size: 81.25%;
    }
   }

    // this is the shared style
    img {
      transition: 0.5s;
      transition-timing-function: ease-in;
    }
    @font-face {
        font-display: swap;
      font-family: "Larsseit";
      src: url("/fonts/Larsseit/Larsseit.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
        font-display: swap;
      font-family: "Larsseit Bold";
      src: url("/fonts/Larsseit/Larsseit-Bold.otf") format("opentype");
      font-weight: bold;
      font-style: normal;
    }
    @font-face {
        font-display: swap;
      font-family: "Larsseit Bold Italic";
      src: url("/fonts/Larsseit/Larsseit-BoldItalic.otf") format("opentype");
      font-weight: 700;
      font-style: italic;
    }
    @font-face {
        font-display: swap;
      font-family: "Larsseit Extra Bold";
      src: url("/fonts/Larsseit/Larsseit-ExtraBold.otf") format("opentype");
      font-weight: 800;
      font-style: normal;
    }
    @font-face {
        font-display: swap;
      font-family: "Larsseit Extra Bold Italic";
      src: url("/fonts/Larsseit/Larsseit-ExtraBoldItalic.otf") format("opentype");
      font-weight: 800;
      font-style: italic;
    }

    @font-face {
        font-display: swap;
      font-family: "Larsseit Italic";
      src: url("/fonts/Larsseit/Larsseit-Italic.otf") format("opentype");
      font-weight: normal;
      font-style: italic;
    }
    @font-face {
        font-display: swap;
      font-family: "Larsseit Light";
      src: url("/fonts/Larsseit/Larsseit-Light.otf") format("opentype");
      font-weight: 300;
      font-style: normal;
    }
    @font-face {
      font-display: swap;
      font-family: "Larsseit 400";
      src: url("/fonts/Larsseit/Larsseit.otf") format("opentype");
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
        font-display: swap;
      font-family: "Larsseit Light Italic";
      src: url("/fonts/Larsseit/Larsseit-LightItalic.otf") format("opentype");
      font-weight: 300;
      font-style: italic;
    }
    @font-face {
        font-display: swap;
      font-family: "Larsseit Medium";
      src: url("/fonts/Larsseit/Larsseit-Medium.otf") format("opentype");
      font-weight: 500;
      font-style: normal;
    }
    @font-face {
        font-display: swap;
      font-family: "Larsseit Medium Light";
      src: url("/fonts/Larsseit/Larsseit-MediumLight.otf") format("opentype");
      font-weight: 500;
      font-style: italic;
    }

    @font-face {
        font-display: swap;
      font-family: "Larsseit Thin";
      src: url("/fonts/Larsseit/Larsseit-Thin.otf") format("opentype");
      font-weight: 300;
      font-style: normal;
    }
    @font-face {
        font-display: swap;
      font-family: "Larsseit Thin Italic";
      src: url("/fonts/Larsseit/Larsseit-ThinItalic.otf") format("opentype");
      font-weight: 300;
      font-style: italic;
    }


    @font-face {
        font-display: swap;
      font-family: "Quincy Regular";
      src: url("/fonts/Quincy/quincycf-regular.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
        font-display: swap;
      font-family: "Quincy Regular Italic";
      src: url("/fonts/Quincy/quincycf-regularitalic.otf") format("opentype");
      font-weight: normal;
      font-style: italic;
    }
    @font-face {
        font-display: swap;
      font-family: "Quincy Bold";
      font-weight: 700;
      src: url("/fonts/Quincy/quincycf-bold.otf") format("opentype");
      font-weight: bold;
      font-style: normal;
    }
    @font-face {
        font-display: swap;
      font-family: "Quincy Bold Italic";
      src: url("/fonts/Quincy/quincycf-bolditalic.otf") format("opentype");
      font-weight: bold;
      font-style: italic;
    }

    @font-face {
        font-display: swap;
      font-family: "Quincy Black";
      src: url("/fonts/Quincy/quincycf-black.otf") format("opentype");
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
        font-display: swap;
      font-family: "Quincy Black Italic";
      src: url("/fonts/Quincy/quincycf-blackitalic.otf") format("opentype");
      font-weight: 600;
      font-style: italic;
    }


    @font-face {
        font-display: swap;
      font-family: "Quincy Light";
      src: url("/fonts/Quincy/quincycf-light.otf") format("opentype");
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
        font-display: swap;
      font-family: "Quincy Light Italic";
      src: url("/fonts/Quincy/quincycf-lightitalic.otf") format("opentype");
      font-weight: 300;
      font-style: italic;
    }

    @font-face {
        font-display: swap;
      font-family: "Quincy Medium";
      src: url("/fonts/Quincy/quincycf-medium.otf") format("opentype");
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
        font-display: swap;
      font-family: "Quincy Medium Italic";
      src: url("/fonts/Quincy/quincycf-mediumitalic.otf") format("opentype");
      font-weight: 500;
      font-style: italic;
    }


    @font-face {
        font-display: swap;
      font-family: "Quincy Extra Bold";
      src: url("/fonts/Quincy/quincycf-extrabold.otf") format("opentype");
      font-weight: 800;
      font-style: normal;
    }

    @font-face {
        font-display: swap;
      font-family: "Quincy Extra Bold Italic";
      src: url("/fonts/Quincy/quincycf-extrabolditalic.otf") format("opentype");
      font-weight: 800;
      font-style: italic;
    }


    @font-face {
        font-display: swap;
      font-family: "Quincy";
      src: url("/fonts/Quincy/quincycf-text.otf") format("opentype");
      font-weight: 200;
      font-style: normal;
    }

    @font-face {
        font-display: swap;
      font-family: "Quincy Italic";
      src: url("/fonts/Quincy/quincycf-textitalic.otf") format("opentype");
      font-weight: 200;
      font-style: italic;
    }

    @font-face {
        font-display: swap;
      font-family: "Quincy Thin";
      src: url("/fonts/Quincy/quincycf-thin.otf") format("opentype");
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
        font-display: swap;
      font-family: "Quincy Thin Italic";
      src: url("/fonts/Quincy/quincycf-thinitalic.otf") format("opentype");
      font-weight: 300;
      font-style: italic;
    }

    @font-face {
      font-display: swap;
      font-family: "Campton";
      src: url("/fonts/Campton/Campton-BoldDEMO.otf") format("opentype");
      font-style: normal;
    }

    @font-face {
      font-display: swap;
      font-family: "CamptonBook";
      src: url("/fonts/Campton/Campton-Book.otf") format("opentype");
      font-style: normal;
    }


    @font-face {
      font-family: "CamptonBookItalic";
      src: url("/fonts/Campton/Campton-BookItalic.otf")  format("opentype");
    }

    @font-face {
      font-display: swap;
      font-family: "CamptonMedium";
      src: url("/fonts/Campton/CamptonMedium.otf") format("opentype");
      font-style: normal;
      font-weight: 500;
    }

    @font-face {
      font-display: swap;
      font-family: "CamptonLight";
      src: url("/fonts/Campton/Campton-Light.otf")  format("opentype");
      font-style: normal;
      font-weight: 300;
    }

    @font-face {
      font-family: "CamptonBlack";
      src: url("/fonts/Campton/Campton-Black.otf")  format("opentype");
    }

    @font-face {
      font-family: "CamptonBlackItalic";
      src: url("/fonts/Campton/Campton-BlackItalic.otf")  format("opentype");
    }

    @font-face {
      font-family: "CamptonBold";
      src: url("/fonts/Campton/Campton-Bold.otf")  format("opentype");
    }

    @font-face {
      font-family: "CamptonBoldItalic";
      src: url("/fonts/Campton/Campton-BoldItalic.otf")  format("opentype");
    }

    @font-face {
      font-family: "CamptonExtraBold";
      src: url("/fonts/Campton/Campton-ExtraBold.otf")  format("opentype");
    }

    @font-face {
      font-family: "CamptonExtraBoldItalic";
      src: url("/fonts/Campton/Campton-ExtraBoldItalic.otf")  format("opentype");
    }

    @font-face {
      font-family: "CamptonExtraLight";
      src: url("/fonts/Campton/Campton-ExtraLight.otf")  format("opentype");
    }

    @font-face {
      font-family: "CamptonExtraLightItalic";
      src: url("/fonts/Campton/Campton-ExtraLightItalic.otf")  format("opentype");
    }

    @font-face {
      font-family: "CamptonLightItalic";
      src: url("/fonts/Campton/Campton-LightItalic.otf")  format("opentype");
    }

    @font-face {
      font-family: "CamptonMediumItalic";
      src: url("/fonts/Campton/Campton-MediumItalic.otf")  format("opentype");
    }

    @font-face {
      font-family: "CamptonSemiBold";
      src: url("/fonts/Campton/Campton-SemiBold.otf")  format("opentype");
    }

    @font-face {
      font-family: "CamptonSemiBoldItalic";
      src: url("/fonts/Campton/Campton-SemiBoldItalic.otf")  format("opentype");
    }

    @font-face {
      font-family: "CamptonThin";
      src: url("/fonts/Campton/Campton-Thin.otf")  format("opentype");
    }

    @font-face {
      font-family: "CamptonThinItalic";
      src: url("/fonts/Campton/Campton-ThinItalic.otf")  format("opentype");
    }

    @font-face {
      font-family: "QuincyCFBlack";
      src: url("/fonts/QuincyCF/QuincyCF-Black.otf")  format("opentype");
    }

    @font-face {
      font-family: "QuincyCFBlackItalic";
      src: url("/fonts/QuincyCF/QuincyCF-BlackItalic.otf")  format("opentype");
    }

    @font-face {
      font-family: "QuincyCFBold";
      src: url("/fonts/QuincyCF/quincybold.otf")  format("opentype");
    }

    @font-face {
      font-family: "QuincyCFBoldItalic";
      src: url("/fonts/QuincyCF/QuincyCF-BoldItalic.otf")  format("opentype");
    }

    @font-face {
      font-family: "QuincyCFExtraBold";
      src: url("/fonts/QuincyCF/QuincyCF-ExtraBold.otf")  format("opentype");
    }

    @font-face {
      font-family: "QuincyCFExtraBoldItalic";
      src: url("/fonts/QuincyCF/QuincyCF-ExtraBoldItalic.otf")  format("opentype");
    }

    @font-face {
      font-family: "QuincyCFLight";
      src: url("/fonts/QuincyCF/quincylight.otf")  format("opentype");
    }

    @font-face {
      font-family: "QuincyCFLightItalic";
      src: url("/fonts/QuincyCF/QuincyCF-LightItalic.otf")  format("opentype");
    }

    @font-face {
      font-family: "QuincyCFMedium";
      src: url("/fonts/QuincyCF/QuincyCF-Medium.otf")  format("opentype");
    }

    @font-face {
      font-family: "QuincyCFMediumItalic";
      src: url("/fonts/QuincyCF/QuincyCF-MediumItalic.otf")  format("opentype");
    }

    @font-face {
      font-family: "QuincyCFRegular";
      src: url("/fonts/QuincyCF/quincycf.otf")  format("opentype");
    }

    @font-face {
      font-family: "QuincyCFRegularItalic";
      src: url("/fonts/QuincyCF/QuincyCF-RegularItalic.otf")  format("opentype");
    }

    @font-face {
      font-family: "QuincyCFText";
      src: url("/fonts/QuincyCF/QuincyCF-Text.otf")  format("opentype");
    }

    @font-face {
      font-family: "QuincyCFTextItalic";
      src: url("/fonts/QuincyCF/QuincyCF-TextItalic.otf")  format("opentype");
    }

    @font-face {
      font-family: "QuincyCFThin";
      src: url("/fonts/QuincyCF/QuincyCF-Thin.otf")  format("opentype");
    }

    @font-face {
      font-family: "QuincyCFThinItalic";
      src: url("/fonts/QuincyCF/QuincyCF-ThinItalic.otf")  format("opentype");
    }

    /* @font-face {
      font-family: "QuincyCF";
      src: url("/fonts/QuincyCF/quincycf.otf")  format("opentype");
      font-style: normal;
      font-weight: 700;
    }

    @font-face {
      font-family: "QuincyCFLight";
      src: url("/fonts/QuincyCF/Quincy CF Light.ttf")  format("truetype");
    }

    @font-face {
      font-family: "Quincy CF Bold";
      src: url("/fonts/QuincyCF/Quincy CF Bold (1).ttf")  format("truetype");
    } */


  html {
    box-sizing: border-box;
    scroll-behavior: smooth!important;
    --scroll-behavior: smooth!important;
  }

  body{
    margin: 0;
    font-family: Larsseit;
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
  }
  h1 {
    font-size: 28px;
    font-family: CamptonMedium;
    font-weight: 400;
    /* color: ${Colors.PRIMARY}; */
    /* font-family: 'Quincy Regular'; */
    /* margin-top: 20px;
    margin-bottom: 20px; */
    /* @media(max-width: 1024px) {
      font-size: 48px;
    } */
  }
  h2 {
    font-size: 72px;
    color: ${Colors.PRIMARY};
    font-family: 'Quincy Regular';
    font-weight: 300;
    margin-top: 20px;
    margin-bottom: 20px;
    @media(max-width: 1024px) {
      font-size: 32px;
    }
  }
  h3 {
    font-size: 48px;
    color: ${Colors.PRIMARY};
    font-family: 'Quincy Regular';
    font-weight: 300;
    margin-top: 20px;
    margin-bottom: 20px;
    @media(max-width: 1024px) {
      font-size: 24px;
    }
  }
  h4 {
    font-size: 24px;
    /* color: ${Colors.BLACK}; */
    font-family: Larsseit;
    margin-top: 20px;
    margin-bottom: 20px;
    @media(max-width: 1024px) {
      font-size: 18px;
    }

  }
  h5 {
    font-size: 20px;
    /* color: ${Colors.BLACK}; */
    font-family: Larsseit;
    margin-top: 20px;
    margin-bottom: 20px;
    @media(max-width: 1024px) {
      font-size: 16px;
    }
  }
  h6 {
    font-size: 20px;
    color: ${Colors.PRIMARY};
    font-weight: bold;
    font-family: 'Larsseit Bold';
    @media(max-width: 1024px) {
      font-size: 14px;
    }
    
  }

  button {
    cursor: pointer;
    border: none;
  }

  #body1 {
    font-family: Larsseit;
    font-size: 16px;
  }

  #body2 {
    font-family: Larsseit;
    font-size: 14px;
  }
  
  p {
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 16px;
    /* color: ${Colors.BLACK}; */
    font-family: Larsseit;

  }

  a {
    text-decoration: none;
  }

  .cbTebN {
    text-transform: none;
  }

  .cylindo-drag-tooltip,.cylindo-zoom-drag-tooltip{
    color: ${Colors.PRIMARY} !important;
  }

  .cylindo-icon-fullscreen-off {
    background: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_81_781)'%3E%3Cpath d='M20 2V4H26.586L18 12.582L19.414 14L28 5.414V12H30V2H20Z' fill='%232B2C6E'/%3E%3Cpath d='M14 19.416L12.592 18L4 26.586V20H2V30H12V28H5.414L14 19.416Z' fill='%232B2C6E'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_81_781'%3E%3Crect width='32' height='32' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat center center !important;
  }

  .cylindo-icon-fullscreen-on {
    background: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_921_22446)'%3E%3Cpath d='M4 18V20H10.586L2 28.582L3.414 30L12 21.414V28H14V18H4Z' fill='%232B2C6E'/%3E%3Cpath d='M30 3.416L28.592 2L20 10.586V4H18V14H28V12H21.414L30 3.416Z' fill='%232B2C6E'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_921_22446'%3E%3Crect width='32' height='32' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat center center !important;
  }



  .cylindo-tooltip, .cylindo-drag-tooltip, .cylindo-drag-to-rotate-tooltip {
    background-color: transparent !important;
    font-family: 'Larsseit' !important;
  }

  /* .cylindo-button, .cylindo-ar-button {
    width: 18rem !important;
  } */

  .cylindo-drag-tooltip {
    font-size: 16px !important;
  }

  .cylindo-tooltip, .cylindo-drag-tooltip, .cylindo-drag-to-rotate-tooltip {
    .left::before {
      content: url("data:image/svg+xml,%3Csvg width='19' height='16' viewBox='0 0 19 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.82812 15.5L8.88562 14.4425L3.20062 8.75H18.3281V7.25H3.20062L8.88562 1.5575L7.82812 0.5L0.328125 8L7.82812 15.5Z' fill='%232B2C6E'/%3E%3C/svg%3E%0A") !important;
    }

    .right::after {
    content: url("data:image/svg+xml,%3Csvg width='19' height='16' viewBox='0 0 19 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.8281 0.5L9.75562 1.54475L15.4406 7.25H0.328125V8.75H15.4406L9.75562 14.4298L10.8281 15.5L18.3281 8L10.8281 0.5Z' fill='%232B2C6E'/%3E%3C/svg%3E%0A") !important;
  }
  }

  .cylindo-button, .cylindo-ar-button {
    background-color: transparent !important;
    border-radius: 8px !important;
    height: 4rem !important;
    width: 18rem !important;

    a {
      background-color: transparent !important;
      border-radius: 8px !important;
      height: 4rem !important;
      width: 16rem !important;
      position: relative !important;
      border: none !important;
      color: transparent !important;


      &:hover {
        box-shadow: none !important; 
      }
    }
  }
  .ar-glyph-background {
    background-color: transparent !important;
    border-radius: 8px !important;
    border: 3px solid ${Colors.COZEY_BLUE} !important;
    height: 4rem !important;
    width: 18rem !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    &:hover {
      box-shadow: none;
    }
    .ar-icon {
      display: none !important;
    }
    .ar-text {
      display: flex;
      align-items: center !important;
      text-align: center !important;
      justify-content: center !important;
      margin-right: 8px !important;
      color: ${Colors.COZEY_BLUE} !important;
      font-size: 20px !important;
      height: 4rem !important;
      width: 18rem !important;
      float: none !important;
      font-family: 'CamptonMedium' !important;
      &::after {
        display: block !important;
        margin-left: 12px;
        margin-top: 4px;
        content: url("data:image/svg+xml,%3Csvg width='33' height='32' viewBox='0 0 33 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.3281 10H9.32812C8.79769 10 8.28898 10.1806 7.91391 10.5021C7.53884 10.8236 7.32812 11.2596 7.32812 11.7143V22H9.32812V17.7143H13.3281V22H15.3281V11.7143C15.3281 11.2596 15.1174 10.8236 14.7423 10.5021C14.3673 10.1806 13.8586 10 13.3281 10ZM9.32812 16V11.7143H13.3281V16H9.32812Z' fill='%232B2C6E'/%3E%3Cpath d='M25.3281 15.1429V11.7143C25.3281 11.2596 25.1174 10.8236 24.7423 10.5021C24.3673 10.1806 23.8586 10 23.3281 10H17.3281V22H19.3281V16.8571H20.8081L23.1481 22H25.3281L22.9981 16.8571H23.3281C23.8586 16.8571 24.3673 16.6765 24.7423 16.355C25.1174 16.0335 25.3281 15.5975 25.3281 15.1429ZM19.3281 11.7143H23.3281V15.1429H19.3281V11.7143Z' fill='%232B2C6E'/%3E%3Cpath d='M28.3281 27H4.32812C3.79769 27 3.28898 26.7682 2.91391 26.3556C2.53884 25.9431 2.32813 25.3835 2.32812 24.8V7.2C2.32812 6.61652 2.53884 6.05694 2.91391 5.64437C3.28898 5.23178 3.79769 5 4.32812 5H28.3281C28.8586 5 29.3673 5.23178 29.7423 5.64437C30.1174 6.05694 30.3281 6.61652 30.3281 7.2V24.8C30.3281 25.3835 30.1174 25.9431 29.7423 26.3556C29.3673 26.7682 28.8586 27 28.3281 27ZM4.32812 7.2V24.8H28.3281V7.2H4.32812Z' fill='%232B2C6E'/%3E%3C/svg%3E%0A") !important;
      }
    }
  }

  @media (max-width: 600px) {
    .cylindo-button, .cylindo-ar-button {
    background-color: transparent !important;
    border-radius: 8px !important;
    border: none !important;
    height: 1rem !important;
    width: 12rem !important;

    a {
      background-color: transparent !important;
      border-radius: 8px !important;
      height: 1rem !important;
      width: 12rem !important;
      position: relative !important;
      border: none !important;
    }
  }

    .ar-glyph-background {
    background-color: transparent !important;
    border-radius: 8px !important;
    border: none !important;
    height: 1rem !important;
    width: 12rem !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    &:hover {
      box-shadow: none;
    }
    .ar-icon {
      display: none !important;
    }
    .ar-text {
      display: flex !important;
      align-items: center !important;
      text-decoration: underline !important;
      text-align: center !important;
      justify-content: center !important;
      margin-right: 8px !important;
      color: ${Colors.COZEY_BLUE} !important;
      font-size: 1rem !important;
      width: 12rem !important;
      height: 1rem !important;
      float: none !important;
      font-family: 'CamptonMedium' !important;
      &::after {
        display: block !important;
        margin-left: 4px;
        margin-bottom: -4px;
        content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.5 5H4.5C4.23478 5 3.98043 5.09031 3.79289 5.25105C3.60536 5.4118 3.5 5.62981 3.5 5.85714V11H4.5V8.85714H6.5V11H7.5V5.85714C7.5 5.62981 7.39464 5.4118 7.20711 5.25105C7.01957 5.09031 6.76522 5 6.5 5ZM4.5 8V5.85714H6.5V8H4.5Z' fill='%232B2C6E'/%3E%3Cpath d='M12.5 7.57143V5.85714C12.5 5.62981 12.3946 5.4118 12.2071 5.25105C12.0196 5.09031 11.7652 5 11.5 5H8.5V11H9.5V8.42857H10.24L11.41 11H12.5L11.335 8.42857H11.5C11.7652 8.42857 12.0196 8.33827 12.2071 8.17752C12.3946 8.01677 12.5 7.79876 12.5 7.57143ZM9.5 5.85714H11.5V7.57143H9.5V5.85714Z' fill='%232B2C6E'/%3E%3Cpath d='M14 13.5H2C1.73478 13.5 1.48043 13.3841 1.29289 13.1778C1.10536 12.9715 1 12.6917 1 12.4V3.6C1 3.30826 1.10536 3.02847 1.29289 2.82218C1.48043 2.61589 1.73478 2.5 2 2.5H14C14.2652 2.5 14.5196 2.61589 14.7071 2.82218C14.8946 3.02847 15 3.30826 15 3.6V12.4C15 12.6917 14.8946 12.9715 14.7071 13.1778C14.5196 13.3841 14.2652 13.5 14 13.5ZM2 3.6V12.4H14V3.6H2Z' fill='%232B2C6E'/%3E%3C/svg%3E%0A") !important;
      }
    }
  }
  }

  .cylindo-thumbnail-bar {
    padding-top: 16px;
    .active {
      border: 5px solid ${Colors.COZEY_BLUE};
      background: linear-gradient(0deg, rgba(43, 44, 110, 0.25), rgba(43, 44, 110, 0.25))
    }

    ul {
      li {
        margin-right: 8px !important;
        width: 19% !important;
        &:last-child {
          margin-right: 0px !important;
        }
      }
    }
  }



  .cylindo-ar-modal.is-qr-modal {
    font-family: 'CamptonMedium';
    a {
      background-color: transparent !important;
      border-radius: 8px !important;
      border: 3px solid ${Colors.COZEY_BLUE} !important;
      color: ${Colors.COZEY_BLUE} !important;
      font-size: 20px !important;
      height: 4rem !important;
      width: 16rem !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      &:hover {
        box-shadow: none;
      }
    }

    h1 {
      margin-top: 20px;
      color: ${Colors.COZEY_BLUE} !important;
    }

    p {
      color: ${Colors.COZEY_BLUE} !important;
    }

  }

  .cylindo-back-icon {
    display: none !important;
  }

  /* .carousel .slide {
    min-width: 80% !important;
    @media (max-width: 1024px) {
      min-width: 100% !important;
    }
  } */

  .datePicker input{
  white-space: pre;
}

  
  // anything else you would like to include
`;
