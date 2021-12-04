export const binaryToNumber = (binary: number[]) => parseInt(binary.join(''), 2)

export const splitBits = (row: string) => row.split('').map(x => parseInt(x))

export const joinBitRows = (
  row1: number[],
  row2: number[]
) => row1.map((x, i) => x + row2[i])

export const getMostCommonBit = (value: number, rows: number) => value > rows / 2 ? 1 : 0

export const flipBit = (bit: 0 | 1) => Math.abs(bit - 1)


export const doDay3 = (input: string[], bitLenght: number) => {
  const bitAbomanation = input
    .reduce((acc, row) => joinBitRows(
        acc,
        splitBits(row)
      ), (new Array(bitLenght).fill(0)));

  const gammaBits = bitAbomanation
      .map(x => getMostCommonBit(x, input.length));
  const epsylonBits = gammaBits
    .map(flipBit)
  
  const gammaDecimal = binaryToNumber(gammaBits);
  const epsDecimal = binaryToNumber(epsylonBits);

  return gammaDecimal * epsDecimal;
}