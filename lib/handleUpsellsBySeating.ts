interface UpsellData {
  value: string;
  icon: string;
  legsCombinations?: {
    regularLegs?: number;
    cornerLegs?: number;
    simpleLegs?: number;
  };
}

interface HandleUpsellsBySeatingProps {
  upsells: UpsellData[];
  seat: string;
}

const up = {
  ottoman: 'with-ottoman',
  chaiseL: 'with-chaise-left',
  chaise: 'with-chaise',
  chaiseU: 'with-2-chaise',
};

export const handleUpsellsBySeating = ({
  seat,
  upsells,
}: HandleUpsellsBySeatingProps) => {
  if (seat.includes('1-seat') && !seat.includes('corner')) {
    return upsells.filter(
      upsell =>
        upsell.value === up.ottoman ||
        (upsell.value === up.chaise && upsell.value !== up.chaiseL),
    );
  }

  if (seat.includes('2-corner') && seat.includes('6-seat')) {
    return upsells.filter(upsell => upsell.value !== up.chaiseU);
  }

  if (seat.includes('corner-l')) {
    if (
      seat.includes('2-seat') ||
      seat.includes('3-seat') ||
      seat.includes('4-seat')
    ) {
      return upsells.filter(
        upsell => upsell.value === up.chaiseL || upsell.value === up.ottoman,
      );
    }
    return upsells;
  }

  if (seat.includes('corner-r') && !seat.includes('5-seat')) {
    if (
      seat.includes('2-seat') ||
      seat.includes('3-seat') ||
      seat.includes('4-seat')
    ) {
      return upsells.filter(
        upsell => upsell.value !== up.chaiseL && upsell.value !== up.chaiseU,
      );
    }
    return upsells.filter(upsell => upsell.value !== up.chaiseL);
  }

  if (
    seat.includes('with-corner') &&
    !seat.includes('corner-l') &&
    !seat.includes('corner-r')
  ) {
    if (
      seat.includes('2-seat') ||
      seat.includes('3-seat') ||
      seat.includes('4-seat')
    ) {
      return upsells.filter(upsell => upsell.value !== up.chaiseU);
    }
    return upsells;
  }

  if (seat.includes('2-seat') || seat.includes('3-seat')) {
    return upsells.filter(upsell => upsell.value !== up.chaiseU);
  }

  return upsells;
};
