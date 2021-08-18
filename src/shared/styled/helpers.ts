export const fontSize = (size: number, base = 16) => `
  font-size: ${size}px;
  font-size: calc(${size / base} * 1rem);
`;

export const pxToRem = (
  ...px: number[]
) => px.map((size) => `${(size / 16) * 1}rem `);
