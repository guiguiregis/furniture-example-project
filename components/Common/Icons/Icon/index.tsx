import { SvgIconProps } from '@mui/material';
import { FC } from 'react';
import Colors from '../../../../constants/colors';
import { FullModularityIcon } from '../FullModularity';
import { PerformanceFabric } from '../PerformanceFabric';
import { PatentedHardware } from '../PatentedHardware';
import { Unbox } from '../Unbox';
import { Wood } from '../Wood';
import { DoubleRubs70K } from '../DoubleRubs70K';
import { PetFriendly } from '../PetFriendly';
import { RemovableCover } from '../RemovableCover';
import { Washable } from '../Washable';
import { ArrowRight } from '../ArrowRight';
import { GridView } from '../GridView';
import { FilterIcon } from '../FilterIcon';
import { Maximize } from '../Maximize';
import { FiveYearsWarranty } from '../FiveYearsWarranty';
import { RiskFree } from '../RiskFree';
import { Truck } from '../Truck';
import { Cushion } from '../Cushion';
import { Throw } from '../Throw';
import { StyleSet } from '../StyleSet';
import { Lumbar } from '../Lumbar';
import { Trash } from '../Trash';
import { TruckMobile } from '../TruckMobile';
import { FiveYearsWarrantyMobile } from '../FiveYearsWarrantyMobile';
import { RiskFreeMobile } from '../RiskFreeMobile';

type IconComponentProps = {
  name: string;
  fontSize?: number;
  fill?: string;
  active?: boolean;
};
type IconTypes = { [name: string]: FC<SvgIconProps> };

const iconTypes: IconTypes = {
  fullModularity: FullModularityIcon,
  performanceFabric: PerformanceFabric,
  patentedHardware: PatentedHardware,
  unbox: Unbox,
  wood: Wood,
  doubleRubs70K: DoubleRubs70K,
  petFriendly: PetFriendly,
  removableCover: RemovableCover,
  washable: Washable,
  arrowRight: ArrowRight,
  gridView: GridView,
  filterIcon: FilterIcon,
  maximize: Maximize,
  fiveYearsWarranty: FiveYearsWarranty,
  fiveYearsWarrantyMobile: FiveYearsWarrantyMobile,
  riskFree: RiskFree,
  riskFreeMobile: RiskFreeMobile,
  truck: Truck,
  truckMobile: TruckMobile,
  cushion: Cushion,
  throw: Throw,
  styleset: StyleSet,
  lumbartraversin: Lumbar,
  trash: Trash,
};

export const IconComponent = ({
  name,
  fontSize = 96,
  fill = Colors.COZEY_BLUE,
  ...props
}: IconComponentProps) => {
  const Icon = iconTypes[name];

  if (Icon) {
    return <Icon sx={{ fontSize }} fill={fill} {...props} />;
  }

  return null;
};
