import { EAFNOSUPPORT } from "constants";

enum Direction {
  E = 0,
  W = 180,
  N = 270,
  S = 90,
}
export const solveD12Part1 = (input: string) => {
  const instructions: [string, number][] = input
    .split("\n")
    .map((i) => [i[0], Number(i.substr(1))]);
  let facingDegrees = 0;
  let southNorth = 0;
  let eastWest = 0;
  for (const [type, amount] of instructions) {
    switch (type) {
      case "S":
        southNorth += amount;
        break;
      case "N":
        southNorth -= amount;
        break;
      case "E":
        eastWest += amount;
        break;
      case "W":
        eastWest -= amount;
        break;
      case "R":
        facingDegrees += amount;
        break;
      case "L":
        facingDegrees += 360 - amount;
        break;
      case "F":
        const currentlyFacing = Direction[facingDegrees % 360];
        instructions.push([currentlyFacing, amount]);
      default:
        break;
    }
  }
  return Math.abs(southNorth) + Math.abs(eastWest);
};

export const solveD12Part2 = (input: string) => {
  const instructions: [string, number][] = input
    .split("\n")
    .map((i) => [i[0], Number(i.substr(1))]);
  let y = 0; // south north
  let x = 0; // east west
  let wpY = 1; // wp south north
  let wpX = 10; // wp east west
  for (const [type, amount] of instructions) {
    const tempX = wpX;
    const tempY = wpY;
    switch (type) {
      case "S":
        wpY -= amount;
        break;
      case "N":
        wpY += amount;
        break;
      case "E":
        wpX += amount;
        break;
      case "W":
        wpX -= amount;
        break;
      case "R":
        if (amount === 180) {
          wpY = -tempY;
          wpX = -tempX;
        } else if (amount === 90) {
          wpY = -tempX;
          wpX = tempY;
        } else if (amount === 270) {
          wpY = tempX;
          wpX = -tempY;
        }
        break;
      case "L":
        if (amount === 180) {
          wpY = -tempY;
          wpX = -tempX;
        } else if (amount === 90) {
          wpY = tempX;
          wpX = -tempY;
        } else if (amount === 270) {
          wpY = -tempX;
          wpX = tempY;
        }
        break;
      case "F":
        y += wpY * amount;
        x += wpX * amount;
      default:
        break;
    }
  }

  return Math.abs(y) + Math.abs(x);
};

export const d12p1_text = `export const solveD12Part1 = (input: string) => {
  const instructions: [string, number][] = input
    .split("\\n")
    .map((i) => [i[0], Number(i.substr(1))]);
  let facingDegrees = 0;
  let southNorth = 0;
  let eastWest = 0;
  for (const [type, amount] of instructions) {
    switch (type) {
      case "S":
        southNorth += amount;
        break;
      case "N":
        southNorth -= amount;
        break;
      case "E":
        eastWest += amount;
        break;
      case "W":
        eastWest -= amount;
        break;
      case "R":
        facingDegrees += amount;
        break;
      case "L":
        facingDegrees += 360 - amount;
        break;
      case "F":
        const currentlyFacing = Direction[facingDegrees % 360];
        instructions.push([currentlyFacing, amount]);
      default:
        break;
    }
  }
  return Math.abs(southNorth) + Math.abs(eastWest);
};`;
export const d12p2_text = `const solveD12Part2 = (input: string) => {
  const instructions: [string, number][] = input
    .split("\\n")
    .map((i) => [i[0], Number(i.substr(1))]);
  let y = 0; // south north
  let x = 0; // east west
  let wpY = 1; // wp south north
  let wpX = 10; // wp east west
  for (const [type, amount] of instructions) {
    const tempX = wpX;
    const tempY = wpY;
    switch (type) {
      case "S":
        wpY -= amount;
        break;
      case "N":
        wpY += amount;
        break;
      case "E":
        wpX += amount;
        break;
      case "W":
        wpX -= amount;
        break;
      case "R":
        if (amount === 180) {
          wpY = -tempY;
          wpX = -tempX;
        } else if (amount === 90) {
          wpY = -tempX;
          wpX = tempY;
        } else if (amount === 270) {
          wpY = tempX;
          wpX = -tempY;
        }
        break;
      case "L":
        if (amount === 180) {
          wpY = -tempY;
          wpX = -tempX;
        } else if (amount === 90) {
          wpY = tempX;
          wpX = -tempY;
        } else if (amount === 270) {
          wpY = -tempX;
          wpX = tempY;
        }
        break;
      case "F":
        y += wpY * amount;
        x += wpX * amount;
      default:
        break;
    }
  }

  return Math.abs(y) + Math.abs(x);
};`;

// 77058 TOO HIGH
