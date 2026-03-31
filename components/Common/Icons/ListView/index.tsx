import React from 'react';
import Colors from '../../../../constants/colors';

type Props = {
  onClick?: any;
  isActive: boolean;
};

const ListViewIcon = ({ isActive = false, onClick }: Props) => {
  const fill = isActive
    ? Colors.COZEY_ULTRAMARINE_BLUE
    : Colors.COZEY_LIGHT_BLUE;
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M21 19.5H3V21h18v-1.5zM21 14.25H3v1.5h18v-1.5zM19.5 4.5V9h-15V4.5h15zm0-1.5h-15A1.5 1.5 0 003 4.5V9a1.5 1.5 0 001.5 1.5h15A1.5 1.5 0 0021 9V4.5A1.5 1.5 0 0019.5 3z"
      />
    </svg>
  );
};

export default ListViewIcon;
