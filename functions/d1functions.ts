export function solvePuzzle(sortedInput) {
  let i = 0;
  let j = 1;
  let currSum = undefined;
  do {
    const [val1, val2] = [sortedInput[i], sortedInput[j]];
    currSum = val1 + val2;

    if (currSum === 2020) {
      console.log(`${val1} + ${val2} = 2020`);
      console.log(`${val1} * ${val2} = ${val1 * val2}!`);
      break;
    } else if (currSum > 2020) {
      i++;
      j = i + 1;
    } else {
      j++;
    }
  } while (true);
}
export const d1p1_functionAsText = `
function solvePuzzle(sortedInput) {
    let i = 0;
    let j = 1;
    let currSum = undefined;
    do {
      const [val1, val2] = [sortedInput[i], sortedInput[j]];
      currSum = val1 + val2;
  
      if (currSum === 2020) {
        console.log(\`\${val1} + \${val2} = 2020\`);
        console.log(\`\${val1} * \${val2} = \${val1 * val2}!\`);
        break;
      } else if (currSum > 2020) {
        i++;
        j = i + 1;
      } else {
        j++;
      }
    } while (true);
  }
`;
export function solvePuzzlePart2(sortedInput) {
  let i = 0;
  let j = 1;
  let y = 2;
  let currSum = undefined;
  do {
    const [val1, val2, val3] = [sortedInput[i], sortedInput[j], sortedInput[y]];
    currSum = val1 + val2 + val3;

    if (currSum === 2020) {
      console.log(`${val1} + ${val2} + ${val3} = 2020`);
      console.log(`${val1} * ${val2} * ${val3} = ${val1 * val2 * val3}!`);
      break;
    } else if (currSum > 2020) {
      j++;
      y = j + 1;
      const [val1, val2, val3] = [
        sortedInput[i],
        sortedInput[j],
        sortedInput[y],
      ];
      if (val1 + val2 + val3 > 2020) {
        i++;
        j = i + 1;
        y = i + 2;
      }
    } else {
      y++;
    }
  } while (true);
}
export const d1p2_functionAsText = `
function solvePuzzlePart2(sortedInput) {
    let i = 0;
    let j = 1;
    let y = 2;
    let currSum = undefined;
    do {
      const [val1, val2, val3] = [sortedInput[i], sortedInput[j], sortedInput[y]];
      currSum = val1 + val2 + val3;
  
      if (currSum === 2020) {
        console.log(\`\${val1} + \${val2} + \${val3} = 2020\`);
        console.log(\`\${val1} * \${val2} * \${val3} = \${val1 * val2 * val3}!\`);
        break;
      } else if (currSum > 2020) {
        j++;
        y = j + 1;
        const [val1, val2, val3] = [
          sortedInput[i],
          sortedInput[j],
          sortedInput[y],
        ];
        if (val1 + val2 + val3 > 2020) {
          i++;
          j = i + 1;
          y = i + 2;
        }
      } else {
        y++;
      }
    } while (true);
  }
`;
