export const solveD10Part1 = (input: string) => {
  const differences = input
    .split("\n")
    .map(Number)
    .sort((a, b) => a - b)
    .reduce(
      (acc, adapter) => {
        const diff = adapter - acc.prev;
        return { ...acc, prev: adapter, [diff]: acc[diff] + 1 };
      },
      { prev: 0, 1: 0, 2: 0, 3: 1 }
    );
  return differences[1] * differences[3];
};

export const solveD10Part2 = (input: string) => {
  const values = input.split("\n").map((num) => Number(num));
  const sorted = values.sort((a, b) => (a > b ? 1 : -1));
  sorted.unshift(0);
  sorted.push(sorted[sorted.length - 1] + 3);

  let totalcombinations = 1;
  let i = 0;
  while (i < sorted.length) {
    const [currentIndex, one, two, three, four] = [...sorted].splice(i, i + 5);
    const validways = [one, two, three].filter((step, i) => {
      return (
        currentIndex + 1 === step ||
        currentIndex + 2 === step ||
        currentIndex + 3 === step
      );
    }).length;
    // Based on the 4 patterns we know exists do the needful
    // ps. found those patterns by drawing the example input and all the possible paths
    const doubletriplet = four - one === 3;
    if (validways === 3 && doubletriplet) {
      totalcombinations *= 7;
      i += 4;
    } else if (validways === 3) {
      totalcombinations *= 4;
      i += 3;
    } else if (validways === 2) {
      totalcombinations *= 2;
      i += 2;
    } else {
      i++;
    }
  }
  return totalcombinations;
};

export const d10p1_text = `const solveD10Part1 = (input: string) => {
  const differences = input
    .split("\\n")
    .map(Number)
    .sort((a, b) => a - b)
    .reduce(
      (acc, adapter) => {
        const diff = adapter - acc.prev;
        return { ...acc, prev: adapter, [diff]: acc[diff] + 1 };
      },
      { prev: 0, 1: 0, 2: 0, 3: 1 }
    );
  return differences[1] * differences[3];
};`;
export const d10p2_text = `const solveD10Part2 = (input: string) => {
  const values = input.split("\\n").map((num) => Number(num));
  const sorted = values.sort((a, b) => (a > b ? 1 : -1));
  sorted.unshift(0);
  sorted.push(sorted[sorted.length - 1] + 3);

  let totalcombinations = 1;
  let i = 0;
  while (i < sorted.length) {
    const [currentIndex, one, two, three, four] = [...sorted].splice(i, i + 5);
    const validways = [one, two, three].filter((step, i) => {
      return (
        currentIndex + 1 === step ||
        currentIndex + 2 === step ||
        currentIndex + 3 === step
      );
    }).length;
    // Based on the 4 patterns we know exists do the needful
    // ps. found those patterns by drawing the example input and all the possible paths
    const doubletriplet = four - one === 3;
    if (validways === 3 && doubletriplet) {
      totalcombinations *= 7;
      i += 4;
    } else if (validways === 3) {
      totalcombinations *= 4;
      i += 3;
    } else if (validways === 2) {
      totalcombinations *= 2;
      i += 2;
    } else {
      i++;
    }
  }
  return totalcombinations;
};`;
