import styled, { keyframes, css } from 'styled-components';
import Colors from '../../../constants/colors';

interface DotColorProps {
  isBlue: boolean;
}

const dotTyping = keyframes`
  0% {
    box-shadow: 9984px 0 0 0 ${Colors.COZEY_WHITE}, 9999px 0 0 0 ${Colors.COZEY_WHITE}, 10014px 0 0 0 ${Colors.COZEY_WHITE};
  }
  16.667% {
    box-shadow: 9984px -10px 0 0 ${Colors.COZEY_WHITE}, 9999px 0 0 0 ${Colors.COZEY_WHITE}, 10014px 0 0 0 ${Colors.COZEY_WHITE};
  }
  33.333% {
    box-shadow: 9984px 0 0 0 ${Colors.COZEY_WHITE}, 9999px 0 0 0 ${Colors.COZEY_WHITE}, 10014px 0 0 0 ${Colors.COZEY_WHITE};
  }
  50% {
    box-shadow: 9984px 0 0 0 ${Colors.COZEY_WHITE}, 9999px -10px 0 0 ${Colors.COZEY_WHITE}, 10014px 0 0 0 ${Colors.COZEY_WHITE};
  }
  66.667% {
    box-shadow: 9984px 0 0 0 ${Colors.COZEY_WHITE}, 9999px 0 0 0 ${Colors.COZEY_WHITE}, 10014px 0 0 0 ${Colors.COZEY_WHITE};
  }
  83.333% {
    box-shadow: 9984px 0 0 0 ${Colors.COZEY_WHITE}, 9999px 0 0 0 ${Colors.COZEY_WHITE}, 10014px -10px 0 0 ${Colors.COZEY_WHITE};
  }
  100% {
    box-shadow: 9984px 0 0 0 ${Colors.COZEY_WHITE}, 9999px 0 0 0 ${Colors.COZEY_WHITE}, 10014px 0 0 0 ${Colors.COZEY_WHITE};
  }
`;

const dotTypingBlue = keyframes`
  0% {
    box-shadow: 9984px 0 0 0 ${Colors.COZEY_BLUE}, 9999px 0 0 0 ${Colors.COZEY_BLUE}, 10014px 0 0 0 ${Colors.COZEY_BLUE};
  }
  16.667% {
    box-shadow: 9984px -10px 0 0 ${Colors.COZEY_BLUE}, 9999px 0 0 0 ${Colors.COZEY_BLUE}, 10014px 0 0 0 ${Colors.COZEY_BLUE};
  }
  33.333% {
    box-shadow: 9984px 0 0 0 ${Colors.COZEY_BLUE}, 9999px 0 0 0 ${Colors.COZEY_BLUE}, 10014px 0 0 0 ${Colors.COZEY_BLUE};
  }
  50% {
    box-shadow: 9984px 0 0 0 ${Colors.COZEY_BLUE}, 9999px -10px 0 0 ${Colors.COZEY_BLUE}, 10014px 0 0 0 ${Colors.COZEY_BLUE};
  }
  66.667% {
    box-shadow: 9984px 0 0 0 ${Colors.COZEY_BLUE}, 9999px 0 0 0 ${Colors.COZEY_BLUE}, 10014px 0 0 0 ${Colors.COZEY_BLUE};
  }
  83.333% {
    box-shadow: 9984px 0 0 0 ${Colors.COZEY_BLUE}, 9999px 0 0 0 ${Colors.COZEY_BLUE}, 10014px -10px 0 0 ${Colors.COZEY_BLUE};
  }
  100% {
    box-shadow: 9984px 0 0 0 ${Colors.COZEY_BLUE}, 9999px 0 0 0 ${Colors.COZEY_BLUE}, 10014px 0 0 0 ${Colors.COZEY_BLUE};
  }
`;

export const ThreeDotContainer = styled.div<DotColorProps>`
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${Colors.COZEY_WHITE};
  color: ${Colors.COZEY_WHITE};
  box-shadow: 9984px 0 0 0 ${Colors.COZEY_WHITE},
    9999px 0 0 0 ${Colors.COZEY_WHITE}, 10014px 0 0 0 ${Colors.COZEY_WHITE};
  ${({ isBlue }) =>
    isBlue
      ? css`
          animation: ${dotTypingBlue} 1.5s infinite linear;
        `
      : css`
          animation: ${dotTyping} 1.5s infinite linear;
        `}
`;
