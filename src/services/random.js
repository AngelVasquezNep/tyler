export const numRandom = (max, min) => Math.round(Math.random() * (max - min)) + min;

export const colorRandom = (h, s, l) => {
  return `hsl(${h}, ${s}%, ${l}%)`
}

export const lightnessRandom = (lrandom) => {
  if(lrandom > 50) {
    return numRandom(1, 35)
  }
  else {
    return numRandom(65, 99)
  }
}
