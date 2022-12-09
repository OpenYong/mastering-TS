function triple(age: string | number) {
  if (typeof age === "string") {
    return age.repeat(3);
  }
  return age * 3;
}
