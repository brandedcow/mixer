export default function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}