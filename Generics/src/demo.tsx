// 101. Generics, Arrow Functions, & TSX Files

const getRandomElement = <T,>(list: T[]): T => {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
};
