// 101. Generics, Arrow Functions, & TSX Files

const getRandomElement2 = <T,>(list: T[]): T => {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
};
