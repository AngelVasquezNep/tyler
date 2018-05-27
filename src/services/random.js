export const numRandom = (max, min) => Math.round(Math.random() * (max - min)) + min;

export const colorRandom = (h, s, l) => {
  return `hsl(${h}, ${s}%, ${l}%)`
}