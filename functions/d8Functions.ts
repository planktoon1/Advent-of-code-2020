export const solveD8Part1 = (input: string) => {
  const instructions = input.split("\n");
  return checkIfInfinite(instructions);
};

export const solveD8Part2 = (input: string) => {
  const instructions = input.split("\n");
  const visited = {};
  let acc = 0;
  let i = 0;
  while (i < instructions.length) {
    const [type, amount_s] = instructions[i].split(" ");
    const amount = Number(amount_s);
    visited[i] = true;
    switch (type) {
      case "jmp":
        const result = checkIfInfinite(instructions, i + 1, acc, {
          ...visited,
        });

        if (result !== true) {
          return result;
        }
        i += amount;
        break;
      case "acc":
        acc += amount;
        i++;
        break;
      case "nop":
        const result2 = checkIfInfinite(instructions, i + amount, acc, {
          ...visited,
        });

        if (result2 !== true) {
          return result2;
        }
      default:
        i++;
        break;
    }
  }
};

const checkIfInfinite = (
  instructions,
  startIndex = 0,
  startAcc = 0,
  visited = {}
): true | number => {
  let acc = startAcc;
  let i = startIndex;
  while (i < instructions.length) {
    const [type, amount_s] = instructions[i].split(" ");
    const amount = Number(amount_s);
    if (visited[i]) {
      console.log(`  - Instructions ended in infinite loop.. Acc: ${acc}`);
      // Part 1
      // return acc
      // Part 2
      return true;
    }
    visited[i] = true;
    switch (type) {
      case "jmp":
        i += amount;
        break;
      case "acc":
        acc += amount;
        i++;
        break;
      default:
        i++;
        break;
    }
    if (i === instructions.length) {
      console.log(` ✨ Did last instruction, acc: ${acc}`);
      return acc;
    }
  }
  return true;
};

export const d8_checkIfInf_text = `const checkIfInfinite = (
  instructions,
  startIndex = 0,
  startAcc = 0,
  visited = {}
): true | number => {
  let acc = startAcc;
  let i = startIndex;
  while (i < instructions.length) {
    const [type, amount_s] = instructions[i].split(" ");
    const amount = Number(amount_s);
    if (visited[i]) {
      console.log(\`  - Instructions ended in infinite loop.. Acc: \${acc}\`);
      // Part 1
      // return acc
      // Part 2
      return true;
    }
    visited[i] = true;
    switch (type) {
      case "jmp":
        i += amount;
        break;
      case "acc":
        acc += amount;
        i++;
        break;
      default:
        i++;
        break;
    }
    // Part 2
    if (i === instructions.length) {
      console.log(\` ✨ Did last instruction, acc: \${acc}\`);
      return acc;
    }
  }
  return true;
};`;
export const d8p1_text = `export const solveD8Part1 = (input: string) => {
  const instructions = input.split("\\n");
  return checkIfInfinite(instructions);
};`;
export const d8p2_text = `export const solveD8Part2 = (input: string) => {
  const instructions = input.split("\\n");
  const visited = {};
  let acc = 0;
  let i = 0;
  while (i < instructions.length) {
    const [type, amount_s] = instructions[i].split(" ");
    const amount = Number(amount_s);
    visited[i] = true;
    switch (type) {
      case "jmp":
        const result = checkIfInfinite(instructions, i + 1, acc, {
          ...visited,
        });

        if (result !== true) {
          return result;
        }
        i += amount;
        break;
      case "acc":
        acc += amount;
        i++;
        break;
      case "nop":
        const result2 = checkIfInfinite(instructions, i + amount, acc, {
          ...visited,
        });

        if (result2 !== true) {
          return result2;
        }
      default:
        i++;
        break;
    }
  }
};`;
