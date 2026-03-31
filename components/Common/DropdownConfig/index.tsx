import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { ArrowIconWrapper } from '../../Pages/Product/Configurators/common.types';

import {
  DropdownConfigAction,
  DropdownConfigChildrenContainer,
  DropdownConfigContainer,
} from './styles';
import { ConfiguratorDivider, ConfiguratorSectionTitle } from '../common.types';

interface DropdownConfigProps {
  title: string;
  children: React.ReactNode;
  dropdown: string;
  setIsOpen: Dispatch<SetStateAction<string>>;
  isOpen: string;
}

export const DropdownConfig = ({
  children,
  title,
  dropdown,
  setIsOpen,
  isOpen,
}: DropdownConfigProps) => {
  const dropdownHandler = () => {
    if (isOpen !== dropdown) {
      setIsOpen(dropdown);
    } else {
      setIsOpen('');
    }
  };
  return (
    <DropdownConfigContainer>
      <DropdownConfigAction onClick={() => dropdownHandler()}>
        <ConfiguratorSectionTitle>{title}</ConfiguratorSectionTitle>

        <ArrowIconWrapper
          style={{ height: 30, width: 30, position: 'relative' }}
        >
          <Image
            src={
              isOpen === dropdown
                ? '/images/icons/chevron-up.svg'
                : '/images/icons/chevron-down.svg'
            }
            objectFit="cover"
            layout="fill"
            alt={isOpen === dropdown ? 'chevron up' : 'chevron down'}
          />
        </ArrowIconWrapper>
      </DropdownConfigAction>
      {isOpen === dropdown && (
        <DropdownConfigChildrenContainer>
          {children}
        </DropdownConfigChildrenContainer>
      )}
      <ConfiguratorDivider />
    </DropdownConfigContainer>
  );
};
