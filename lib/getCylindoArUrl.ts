interface GetCylindoArProps {
  productCode: string;
  productFeatures: string[];
}

export const getCylindoArUrl = ({
  productCode,
  productFeatures,
}: GetCylindoArProps) => {
  let feature = ``;
  const amountOfFeatures = productFeatures.length;
  for (let j = 0; j < amountOfFeatures; j += 2) {
    const featureName = productFeatures[j];
    const featureValue = productFeatures[j + 1];

    feature += `feature=${featureName}:${featureValue}&`;
  }
  const arLink = encodeURI(
    `https://content.cylindo.com/api/v2/5035/products/${productCode}/ARQR/${productCode}?${feature}`,
  );
  return arLink;
};
