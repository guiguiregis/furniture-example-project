const options = [
  {
    code: '1 SEATER SOFA OG',
    frame: 4,
  },
  {
    code: '2 SEATER SOFA OG',
    frame: 4,
  },
  {
    code: '3 SEATER SOFA OG',
    frame: 4,
  },
  {
    code: '4 SEATER SOFA OG',
    frame: 4,
  },
  {
    code: '3 SEATER CORNER OG LEFT',
    frame: 5,
  },
  {
    code: '3 SEATER CORNER OG RIGHT',
    frame: 29,
  },
  {
    code: '4 SEATER CORNER OG',
    frame: 29,
  },
  {
    code: '5 SEATER CORNER OG LEFT',
    frame: 29,
  },
  {
    code: '5 SEATER CORNER OG RIGHT',
    frame: 5,
  },
  {
    code: '6 SEATER CORNER OG',
    frame: 29,
  },
  {
    code: '6 SEATER U OG',
    frame: 1,
  },
  {
    code: '7 SEATER CORNER OG',
    frame: 1,
  },
  {
    code: 'COZEY OTTOMAN OG',
    frame: 1,
  },
  {
    code: 'COZEY SEAT OG',
    frame: 4,
  },
  {
    code: 'COZEY LOUNGING CHAISE OG',
    frame: 5,
  },
  {
    code: 'COZEY ARMS SLOPE OG',
    frame: 6,
  },
  {
    code: 'COZEY ARMS BLOC OG',
    frame: 6,
  },
  {
    code: 'COZEY CORNER OG',
    frame: 29,
  },
  {
    code: 'CIELLO - SF - 1',
    frame: 4,
  },
  {
    code: 'CIELLO - SF - 2',
    frame: 4,
  },
  {
    code: 'CIELLO - SF - 3',
    frame: 4,
  },
  {
    code: 'CIELLO - SF - 4',
    frame: 4,
  },
  {
    code: 'CIELLO - SC - 3L',
    frame: 29,
  },
  {
    code: 'CIELLO - SC - 3R',
    frame: 5,
  },
  {
    code: 'CIELLO - SC - 4',
    frame: 29,
  },
  {
    code: 'CIELLO - SC - 5L',
    frame: 29,
  },
  {
    code: 'CIELLO - SC - 5R',
    frame: 5,
  },
  {
    code: 'CIELLO - SC - 6',
    frame: 29,
  },
  {
    code: 'CIELLO - SC - 6U',
    frame: 1,
  },
  {
    code: 'CIELLO - SC - 7U',
    frame: 1,
  },
  {
    code: 'CIELLO - MOD - OTTOMAN',
    frame: 1,
  },
  {
    code: 'CIELLO - MOD - SEAT',
    frame: 4,
  },
  {
    code: 'CIELLO - MOD - ARMS',
    frame: 5,
  },
  {
    code: 'CIELLO - MOD - CORNER',
    frame: 5,
  },
  {
    code: 'ATMOSPHERE 1 SEATER ARMLESS',
    frame: 4,
  },
  {
    code: 'ATMOSPHERE 1 SEATER CORNER',
    frame: 5,
  },
  {
    code: 'ATMOSPHERE 2 SEATER 1 ARM LEFT',
    frame: 4,
  },
  {
    code: 'ATMOSPHERE 2 SEATER 1 ARM RIGHT',
    frame: 4,
  },
  {
    code: 'ATMOSPHERE 2 SEATER 2 ARMS',
    frame: 4,
  },
  {
    code: 'ATMOSPHERE 2 SEATER ARMLESS',
    frame: 4,
  },
  {
    code: 'ATMOSPHERE 3 SEATER 1 ARM LEFT',
    frame: 4,
  },
  {
    code: 'ATMOSPHERE 3 SEATER 1 ARM RIGHT',
    frame: 4,
  },
  {
    code: 'ATMOSPHERE 3 SEATER 2 ARMS',
    frame: 5,
  },
  {
    code: 'ATMOSPHERE 3 SEATER ARMLESS',
    frame: 4,
  },
  {
    code: 'ATMOSPHERE 4 SEATER 1 ARM LEFT',
    frame: 4,
  },
  {
    code: 'ATMOSPHERE 4 SEATER 1 ARM RIGHT',
    frame: 4,
  },
  {
    code: 'ATMOSPHERE 4 SEATER 2 ARMS',
    frame: 4,
  },
  {
    code: 'ATMOSPHERE 4 SEATER ARMLESS',
    frame: 4,
  },
  {
    code: 'ATMOSPHERE 3 SEATER CORNER LEFT 1 ARM LEFT',
    frame: 29,
  },
  {
    code: 'ATMOSPHERE 3 SEATER CORNER LEFT 1 ARM RIGHT',
    frame: 29,
  },
  {
    code: 'ATMOSPHERE 3 SEATER CORNER LEFT 2 ARMS',
    frame: 29,
  },
  {
    code: 'ATMOSPHERE 3 SEATER CORNER LEFT ARMLESS',
    frame: 29,
  },
  {
    code: 'ATMOSPHERE 3 SEATER CORNER RIGHT 1 ARM LEFT',
    frame: 5,
  },
  {
    code: 'ATMOSPHERE 3 SEATER CORNER RIGHT 1 ARM RIGHT',
    frame: 5,
  },
  {
    code: 'ATMOSPHERE 3 SEATER CORNER RIGHT 2 ARMS',
    frame: 5,
  },
  {
    code: 'ATMOSPHERE 3 SEATER CORNER RIGHT ARMLESS',
    frame: 5,
  },
  {
    code: 'ATMOSPHERE 4 SEATER CORNER 1 ARM LEFT',
    frame: 29,
  },
  {
    code: 'ATMOSPHERE 4 SEATER CORNER 1 ARM RIGHT',
    frame: 29,
  },
  {
    code: 'ATMOSPHERE 4 SEATER CORNER 2 ARMS',
    frame: 29,
  },
  {
    code: 'ATMOSPHERE 4 SEATER CORNER ARMLESS',
    frame: 29,
  },
  {
    code: 'ATMOSPHERE 5 SEATER CORNER LEFT 1 ARM LEFT',
    frame: 29,
  },
  {
    code: 'ATMOSPHERE 5 SEATER CORNER LEFT 1 ARM RIGHT',
    frame: 29,
  },
  {
    code: 'ATMOSPHERE 5 SEATER CORNER LEFT 2 ARMS',
    frame: 29,
  },
  {
    code: 'ATMOSPHERE 5 SEATER CORNER LEFT ARMLESS',
    frame: 29,
  },
  {
    code: 'ATMOSPHERE 5 SEATER CORNER RIGHT 1 ARM LEFT',
    frame: 5,
  },
  {
    code: 'ATMOSPHERE 5 SEATER CORNER RIGHT 1 ARM RIGHT',
    frame: 5,
  },
  {
    code: 'ATMOSPHERE 5 SEATER CORNER RIGHT 2 ARMS',
    frame: 5,
  },
  {
    code: 'ATMOSPHERE 5 SEATER CORNER RIGHT ARMLESS',
    frame: 5,
  },
  {
    code: 'ATMOSPHERE 6 SEATER CORNER 1 ARM LEFT',
    frame: 29,
  },
  {
    code: 'ATMOSPHERE 6 SEATER CORNER 1 ARM RIGHT',
    frame: 29,
  },
  {
    code: 'ATMOSPHERE 6 SEATER CORNER 2 ARMS',
    frame: 29,
  },
  {
    code: 'ATMOSPHERE 6 SEATER CORNER ARMLESS',
    frame: 29,
  },
  {
    code: 'ATMOSPHERE 6 SEATER CORNER U 1 ARM LEFT',
    frame: 1,
  },
  {
    code: 'ATMOSPHERE 6 SEATER CORNER U 1 ARM RIGHT',
    frame: 1,
  },
  {
    code: 'ATMOSPHERE 6 SEATER CORNER U 2 ARMS',
    frame: 1,
  },
  {
    code: 'ATMOSPHERE 6 SEATER CORNER U ARMLESS',
    frame: 1,
  },
  {
    code: 'ATMOSPHERE 7 SEATER CORNER U 1 ARM LEFT',
    frame: 1,
  },
  {
    code: 'ATMOSPHERE 7 SEATER CORNER U 1 ARM RIGHT',
    frame: 1,
  },
  {
    code: 'ATMOSPHERE 7 SEATER CORNER U 2 ARMS',
    frame: 1,
  },
  {
    code: 'ATMOSPHERE 7 SEATER CORNER U ARMLESS',
    frame: 1,
  },
  {
    code: 'ATMOSPHERE OTTOMAN',
    frame: 4,
  },
  {
    code: 'ATMOSPHERE ACCENT CUSHION',
    frame: 1,
  },
  {
    code: 'ATMOSPHERE 1 SEATER ARMLESS MODULE',
    frame: 4,
  },
  {
    code: 'ATMOSPHERE 1 SEATER CORNER MODULE',
    frame: 5,
  },
  {
    code: 'MISTRAL - SF - 1',
    frame: 4,
  },
  {
    code: 'MISTRAL - SF - 2',
    frame: 4,
  },
  {
    code: 'MISTRAL - SF - 3',
    frame: 4,
  },
  {
    code: 'MISTRAL - SF - 4',
    frame: 4,
  },
  {
    code: 'MISTRAL - SC - 3L',
    frame: 5,
  },
  {
    code: 'MISTRAL - SC - 3R',
    frame: 29,
  },
  {
    code: 'MISTRAL - SC - 4',
    frame: 29,
  },
  {
    code: 'MISTRAL - SC - 5L',
    frame: 29,
  },
  {
    code: 'MISTRAL - SC - 5R',
    frame: 5,
  },
  {
    code: 'MISTRAL - SC - 6',
    frame: 29,
  },
  {
    code: 'MISTRAL - SC - 6U',
    frame: 1,
  },
  {
    code: 'MISTRAL - SC - 7U',
    frame: 1,
  },
  {
    code: 'MISTRAL - MOD - OTTOMAN',
    frame: 1,
  },
  {
    code: 'MISTRAL - MOD - SEAT',
    frame: 5,
  },
  {
    code: 'MISTRAL - MOD - CORNER',
    frame: 29,
  },
  {
    code: 'MISTRAL - MOD - ARMS',
    frame: 5,
  },
];

interface SelectFrameCylindo {
  cylindoProductCode: string;
}

export const selectFrameCylindo = ({
  cylindoProductCode,
}: SelectFrameCylindo): number => {
  return (
    options.find(
      op =>
        op.code.toLocaleLowerCase() === cylindoProductCode.toLocaleLowerCase(),
    )?.frame || 1
  );
};
