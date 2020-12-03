export const solvePuzzle = (input: string, SLOPE_X, SLOPE_Y) => {
  // flipped coordinate system (y, x)
  const map = input
    .trim()
    .split("\n")
    .map((y) => y.split(""));
  const height = map.length;
  const width = map[0].length;

  let [x, y] = [0, 0];
  let trees = 0;
  while (y < height) {
    const pos = map[y][x % width];
    if (pos === "#") {
      trees++;
    }
    x += SLOPE_X;
    y += SLOPE_Y;
  }
  return trees;
};

export const d3_functionAsText = `const solvePuzzle = (input: string, SLOPE_X, SLOPE_Y) => {
    // flipped coordinate system (y, x)
    const map = input
      .trim()
      .split("\\n")
      .map((y) => y.split(""));
    const height = map.length;
    const width = map[0].length;
  
    let [x, y] = [0, 0];
    let trees = 0;
    while (y < height) {
      const pos = map[y][x % width];
      if (pos === "#") {
        trees++;
      }
      x += SLOPE_X;
      y += SLOPE_Y;
    }
    return trees;
  };`;
export const d3p2_text = `const result = solvePuzzle(1,1)
*solvePuzzle(3,1)
*solvePuzzle(5,1)
*solvePuzzle(7,1)
*solvePuzzle(1,2);
`;
