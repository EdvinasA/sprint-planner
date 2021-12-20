export const subtotalOldPoints = (items) => {
  if (items === undefined) {
    return 0;
  }
  return items.map(({ oldPoints }) => Number(oldPoints)).reduce((sum, i) => sum + i, 0);
};

export const subtotalRemainingPoints = (items) => {
  if (items === undefined) {
    return 0;
  }
  return items.map(({ remainingPoints }) => Number(remainingPoints)).reduce((sum, i) => sum + i, 0);
};

export const subtotalNewPoints = (items) => {
  if (items === undefined) {
    return 0;
  }
  return items.map(({ newPoints }) => Number(newPoints)).reduce((sum, i) => sum + i, 0);
};
