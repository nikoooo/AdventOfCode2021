const Moves: { [key: string]: number} = {
  "forward": 1,
  "down": 1,
  "up": -1
}

export const convertRowToMultiplier = (row: string) => {
  const [sign, multiplier] = row.split(/\s/);
  return Moves[sign] * parseInt(multiplier);
}

export const isVertical = (row: string) => 
  row.startsWith('up') || row.startsWith('down')

export const isHorizontal = (row: string) => 
  !isVertical(row)

export const calculateMovementXYMultiplied = (input: string[]) => Math.imul(
  input
    .filter(isHorizontal)
    .map(convertRowToMultiplier)
    .reduce((acc, curr) => acc + curr, 0),
  input
    .filter(isVertical)
    .map(convertRowToMultiplier)
    .reduce((acc, curr) => acc + curr, 0)
)
  