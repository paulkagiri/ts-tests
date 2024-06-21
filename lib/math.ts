export const add = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;
export const multiply = (a: number, b: number): number => a * b;
export const divide = (a: number, b: number): number => {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
};
export const power = (base: number, exponent: number): number =>
  Math.pow(base, exponent);
export const square = (a: number): number => a * a;
export const modulus = (a: number, b: number): number => a % b;
export const factorial = (n: number): number => {
  if (n < 0) throw new Error("Cannot calculate factorial of a negative number");
  return n === 0 ? 1 : n * factorial(n - 1);
};
export const squareRoot = (a: number): number => {
  if (a < 0)
    throw new Error("Cannot calculate square root of a negative number");
  return Math.sqrt(a);
};
export const cube = (a: number): number => a * a * a;
