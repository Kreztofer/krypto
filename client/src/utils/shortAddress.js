export const shortAddress = (address) =>
  `${address.slice(0, 6)}...${address.slice(address.length - 4)}`;
