import sum from './sum'

export default function mean(...numbers) {
  return sum(...numbers) / numbers.length
}