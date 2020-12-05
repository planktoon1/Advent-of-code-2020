export const solvePart1 = (input: string) => {
  const positions = input.split("\n");
  let biggestId = -1;
  for (const position of positions) {
    const rows = position.substr(0, 7).split("");
    const cols = position.substr(7).split("");
    const rowPos = rows.reduce(
      (range, curr) =>
        getRange(range.lowerBound, range.upperBound, curr === "B"),
      { lowerBound: 0, upperBound: 127 }
    ).lowerBound;
    const colPos = cols.reduce(
      (range, curr) =>
        getRange(range.lowerBound, range.upperBound, curr === "R"),
      { lowerBound: 0, upperBound: 7 }
    ).lowerBound;

    const seatId = rowPos * 8 + colPos;
    if (seatId > biggestId) {
      biggestId = seatId;
    }
  }

  return biggestId;
};
interface Range {
  lowerBound: number;
  upperBound: number;
}

const getRange = (
  lowerBound: number,
  upperBound: number,
  upperHalf: boolean
): Range => {
  const middle = lowerBound + (upperBound - lowerBound) / 2;
  return upperHalf
    ? { lowerBound: Math.ceil(middle), upperBound }
    : { lowerBound, upperBound: Math.floor(middle) };
};

export const solvePart2 = (input: string) => {
  const positions = input.split("\n");
  const seats: string[][] = Array.from(Array(128), () => new Array(8));
  for (const position of positions) {
    const rows = position.substr(0, 7).split("");
    const cols = position.substr(7).split("");
    const rowPos = rows.reduce(
      (range, curr) =>
        getRange(range.lowerBound, range.upperBound, curr === "B"),
      { lowerBound: 0, upperBound: 127 }
    ).lowerBound;
    const colPos = cols.reduce(
      (range, curr) =>
        getRange(range.lowerBound, range.upperBound, curr === "R"),
      { lowerBound: 0, upperBound: 7 }
    ).lowerBound;
    seats[rowPos][colPos] = `(${rowPos},${colPos})`;
  }

  for (const row of seats) {
    console.log(row);
  }

  return 0;
};
interface Range {
  lowerBound: number;
  upperBound: number;
}
