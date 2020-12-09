export const solveD9Part1 = (input: string) => {
  const LOOKBACK_DISTANCE = 25;
  const list = input.split("\n").map(Number);
  return list.find((sum, i) => {
    // Skip preamble
    if (i < LOOKBACK_DISTANCE) {
      return false;
    }
    const hashset = {};
    for (const n of list.slice(i - LOOKBACK_DISTANCE, i)) {
      const rest = sum - n;
      if (hashset[rest]) {
        return false; // There is indeed two values that sum to the current value
      }
      hashset[n] = true;
    }
    return true; // We have found what we're looking for.
  });
};

export const solveD9Part2 = (input: string, sumToFind: number) => {
  const list = input.split("\n").map(Number);
  let currentSum = list[0];
  let last = 0;
  let lead = 1;
  while (lead < list.length) {
    while (currentSum > sumToFind && last < lead - 1) {
      currentSum = currentSum - list[last]; // remove the last element
      last++;
    }
    if (currentSum === sumToFind) {
      const sortedList = list.slice(last, lead).sort((a, b) => a - b);
      return sortedList[0] + sortedList[sortedList.length - 1];
    }
    if (lead < list.length) {
      currentSum += list[lead]; // add the next element
    }
    lead++;
  }
};

export const d9p1_text = `const solveD9Part1 = (input: string) => {
  const LOOKBACK_DISTANCE = 25;
  const list = input.split("\\n").map(Number);
  return list.find((sum, i) => {
    // Skip preamble
    if (i < LOOKBACK_DISTANCE) {
      return false;
    }
    const hashset = {};
    for (const n of list.slice(i - LOOKBACK_DISTANCE, i)) {
      const rest = sum - n;
      if (hashset[rest]) {
        return false; // There is indeed two values that sum to the current value
      }
      hashset[n] = true;
    }
    return true; // We have found what we're looking for.
  });
};`;
export const d9p2_text = `const solveD9Part2 = (input: string, sumToFind: number) => {
  const list = input.split("\\n").map(Number);
  let currentSum = list[0];
  let last = 0;
  let lead = 1;
  while (lead < list.length) {
    while (currentSum > sumToFind && last < lead - 1) {
      currentSum = currentSum - list[last]; // remove the last element
      last++;
    }
    if (currentSum === sumToFind) {
      const sortedList = list.slice(last, lead).sort((a, b) => a - b);
      return sortedList[0] + sortedList[sortedList.length - 1];
    }
    if (lead < list.length) {
      currentSum += list[lead]; // add the next element
    }
    lead++;
  }
};`;
