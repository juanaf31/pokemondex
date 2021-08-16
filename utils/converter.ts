export const kgToFeet = (weight) => {
  return `${Number(weight / 2.205).toFixed(1)} lbs`;
};

export const cmToInches = (height) => {
  let realFeet = (height * 0.3937) / 12;
  let feet = Math.floor(realFeet);
  let inches = Math.round((realFeet - feet) * 12);
  return `${feet}"${inches}'`;
};
