import { ThreeDotContainer } from './styles';

interface ThreeDotLoaderProps {
  isBlue?: boolean;
}

export const ThreeDotLoader = ({ isBlue = false }: ThreeDotLoaderProps) => {
  return <ThreeDotContainer isBlue={isBlue} />;
};
