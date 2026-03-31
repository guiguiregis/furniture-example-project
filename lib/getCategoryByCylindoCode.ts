export const getCategoryHandleByCylindoCode = (cylindoCode: string) => {
  if (cylindoCode === '' || !cylindoCode || cylindoCode.length === 0) {
    return 'accessories';
  }
  if (
    cylindoCode.toLowerCase().includes('seater') ||
    cylindoCode.includes('SF') ||
    cylindoCode.includes('SC')
  ) {
    return 'seating';
  }
  if (
    cylindoCode.toLowerCase().includes('solis') ||
    cylindoCode.toLowerCase().includes('stella lift-top') ||
    cylindoCode.toLowerCase().includes('stella tv')
  ) {
    return 'tables';
  }

  return 'modules';
};
