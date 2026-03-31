/* eslint-disable no-nested-ternary */
import Image from 'next/image';
import { ButtonConfigContainer } from './styles';

interface ButtonConfigProps extends React.ComponentPropsWithoutRef<'button'> {
  isSelected: boolean;
  url: string;
}

export const ButtonConfigNew = ({
  isSelected,
  url,
  ...rest
}: ButtonConfigProps) => {
  return (
    <ButtonConfigContainer isSelected={isSelected} {...rest}>
      <div
        style={{
          position: 'relative',
          width: '48px',
          height: '48px',
        }}
      >
        <Image src={url} width={48} height={48} alt="button" />
      </div>
    </ButtonConfigContainer>
  );
};
