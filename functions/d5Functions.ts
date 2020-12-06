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

const getRange = (
  lowerBound: number,
  upperBound: number,
  upperHalf: boolean
): {
  lowerBound: number;
  upperBound: number;
} => {
  const middle = lowerBound + (upperBound - lowerBound) / 2;
  return upperHalf
    ? { lowerBound: Math.ceil(middle), upperBound }
    : { lowerBound, upperBound: Math.floor(middle) };
};

export const solvePart2 = (input: string) => {
  const positions = input.split("\n");
  let biggestId = -1;
  const ids: number[] = [];
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
    ids.push(seatId);

    if (seatId > biggestId) {
      biggestId = seatId;
    }
  }
  const sortedIds = ids.sort();

  return sortedIds.find((id, i) => sortedIds[i + 1] !== id + 1) + 1;
};

export const getRange_text = `const getRange = (
  lowerBound: number,
  upperBound: number,
  upperHalf: boolean
): {
  lowerBound: number;
  upperBound: number;
} => {
  const middle = lowerBound + (upperBound - lowerBound) / 2;
  return upperHalf
    ? { lowerBound: Math.ceil(middle), upperBound }
    : { lowerBound, upperBound: Math.floor(middle) };
};`;

export const d5p2_text = `const solvePart2 = (input: string) => {
  const positions = input.split("\\n");
  let biggestId = -1;
  const ids: number[] = [];
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
    ids.push(seatId);

    if (seatId > biggestId) {
      biggestId = seatId;
    }
  }
  const sortedIds = ids.sort();

  return sortedIds.find((id, i) => sortedIds[i + 1] !== id + 1) + 1;
};`;

export const d5p1_text = `const solvePart1 = (input: string) => {
  const positions = input.split("\\n");
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
};`;
