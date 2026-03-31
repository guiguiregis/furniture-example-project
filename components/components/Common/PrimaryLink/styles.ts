import styled from 'styled-components';

interface PrimaryLinkWrapperStyleProps {
  color: string;
}

interface PrimaryLinkTextStyleProps {
  font?: string;
}

export const PrimaryLinkWrapper = styled.a<PrimaryLinkWrapperStyleProps>`
  display: flex;
  align-items: center;
  strong {
    color: ${({ color }) => color};
  }
  span {
    color: ${({ color }) => color} !important;
  }
  svg {
    fill: ${({ color }) => color};
    transform: scale(1);

    @media (max-width: 700px) {
      transform: scale(0.7);
      margin-top: 0px !important;
    }
  }
`;

export const Text = styled.span<PrimaryLinkTextStyleProps>`
  padding-right: 8px;
  margin-top: 0px !important;
  font-family: 'Larsseit';
  color: ${({ color }) => color} !important;
  font-weight: bold;
  font-size: ${({ font }) => font || '20px'};
  @media (max-width: 800px) {
    margin-top: 2px !important;
    font-size: 16px;
  }
`;
