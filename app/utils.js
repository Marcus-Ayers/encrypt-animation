export const randomDecimal = () => {
  const precision = 100; // 2 decimals
  return (
    Math.floor(
      Math.random() * (10 * precision - 1 * precision) + 1 * precision
    ) /
    (1 * precision)
  );
};

export const angleVector = (angle, distance) => {
  const angleRadians = (angle * Math.PI) / 180 + (90 * Math.PI) / 180;
  return {
    x: distance * Math.cos(angleRadians),
    y: distance * Math.sin(angleRadians),
  };
};
