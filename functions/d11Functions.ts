export const solveD11Part1 = (input: string) => {
  // seatLayout[y][x]
  const seatLayout = input.split("\n").map((y) => y.split(""));

  const countOccupiedNeighbours = (
    seatGrid: string[][],
    y: number,
    x: number,
    bigLetterRound: boolean
  ) => {
    const bigLetterReducer = (acc, curr) =>
      !!curr && (curr === "O" || curr === "l") ? acc + 1 : acc;
    const smallLetterReducer = (acc, curr) =>
      !!curr && (curr === "o" || curr === "L") ? acc + 1 : acc;
    const reducer = bigLetterRound ? bigLetterReducer : smallLetterReducer;
    return [
      seatGrid?.[y - 1]?.[x], // up
      seatGrid?.[y + 1]?.[x], // down
      seatGrid?.[y - 1]?.[x - 1], // up left
      seatGrid?.[y - 1]?.[x + 1], // up right
      seatGrid?.[y + 1]?.[x - 1], // down left
      seatGrid?.[y + 1]?.[x + 1], // down right
      seatGrid?.[y]?.[x - 1], // left
      seatGrid?.[y]?.[x + 1], // right
    ].reduce(reducer, 0);
  };

  // Alternate between two different states to be able to keep track of current and next state in same seatLayout
  // Big letter round meaning the board will be filled with O's and L's, small letter round will be filled wil o's and l's
  let bigLetterRound = true;
  let changes = true;
  let round = 0;
  while (changes) {
    changes = false;
    for (let y = 0; y < seatLayout.length; y++) {
      for (let x = 0; x < seatLayout[y].length; x++) {
        const seat = seatLayout[y][x];
        const occupiedNeighbours: number = countOccupiedNeighbours(
          seatLayout,
          y,
          x,
          bigLetterRound
        );
        if ((seat === "L" || seat === "l") && occupiedNeighbours === 0) {
          // empty
          seatLayout[y][x] = bigLetterRound ? "o" : "O";
          changes = true;
        } else if ((seat === "O" || seat === "o") && occupiedNeighbours >= 4) {
          // occupied
          seatLayout[y][x] = bigLetterRound ? "l" : "L";
          changes = true;
        }
      }
    }
    for (let y = 0; y < seatLayout.length; y++) {
      for (let x = 0; x < seatLayout[y].length; x++) {
        const seat = seatLayout[y][x];
        seatLayout[y][x] = bigLetterRound
          ? seat.toLowerCase()
          : seat.toUpperCase();
      }
    }

    bigLetterRound = !bigLetterRound;
  }
  let takenSeats = 0;
  for (let y = 0; y < seatLayout.length; y++) {
    const row = seatLayout[y].join("");
    const occurrences_rgx = new RegExp(`(O|o)`, "g");
    const occurrences = (row.match(occurrences_rgx) || []).length;
    takenSeats += occurrences;
  }
  return takenSeats;
};

export const solveD11Part2 = (input: string) => {
  // seatLayout[y][x]
  const seatLayout = input.split("\n").map((y) => y.split(""));

  const countOccupiedDirections = (
    seatGrid: string[][],
    y: number,
    x: number,
    bigLetterRound: boolean
  ) => {
    const bigLetterReducer = (acc, curr) =>
      !!curr && (curr === "O" || curr === "l") ? acc + 1 : acc;
    const smallLetterReducer = (acc, curr) =>
      !!curr && (curr === "o" || curr === "L") ? acc + 1 : acc;
    const reducer = bigLetterRound ? bigLetterReducer : smallLetterReducer;
    const directions = [
      [-1, 0], // up
      [1, 0], // down
      [0, -1], // left
      [0, 1], // right
      [-1, -1], // up left
      [-1, 1], // up right
      [1, -1], // down left
      [1, 1], // down right
    ];
    const firstVisibleNeighbour = [];
    for (const direction of directions) {
      let currentPos = ".";
      let dx = direction[0];
      let dy = direction[1];
      let i = 1;
      while (currentPos === ".") {
        dx = direction[0] * i;
        dy = direction[1] * i;
        i++;
        currentPos = seatGrid?.[y + dy]?.[x + dx];
      }
      firstVisibleNeighbour.push(currentPos);
    }

    const occupiedCount = firstVisibleNeighbour.reduce(reducer, 0);

    return occupiedCount;
  };

  // Alternate between two different states to be able to keep track of current and next state in same seatLayout
  // Big letter round meaning the board will be filled with O's and L's, small letter round will be filled wil o's and l's
  let bigLetterRound = true;
  let changes = true;
  let round = 0;

  while (changes) {
    changes = false;
    for (let y = 0; y < seatLayout.length; y++) {
      for (let x = 0; x < seatLayout[y].length; x++) {
        const seat = seatLayout[y][x];
        const occupiedNeighbours: number = countOccupiedDirections(
          seatLayout,
          y,
          x,
          bigLetterRound
        );

        if ((seat === "L" || seat === "l") && occupiedNeighbours === 0) {
          // empty
          seatLayout[y][x] = bigLetterRound ? "o" : "O";
          changes = true;
        } else if ((seat === "O" || seat === "o") && occupiedNeighbours >= 5) {
          // occupied
          seatLayout[y][x] = bigLetterRound ? "l" : "L";
          changes = true;
        }
      }
    }
    for (let y = 0; y < seatLayout.length; y++) {
      for (let x = 0; x < seatLayout[y].length; x++) {
        const seat = seatLayout[y][x];
        seatLayout[y][x] = bigLetterRound
          ? seat.toLowerCase()
          : seat.toUpperCase();
      }
    }
    // //Print the seats
    // for (let y = 0; y < seatLayout.length; y++) {
    //   console.log(seatLayout[y].join(""));
    // }
    // round++;
    // console.log(round);
    bigLetterRound = !bigLetterRound;
  }
  //Count occupied seats
  let takenSeats = 0;
  for (let y = 0; y < seatLayout.length; y++) {
    const row = seatLayout[y].join("");
    const occurrences_rgx = new RegExp(`(O|o)`, "g");
    const occurrences = (row.match(occurrences_rgx) || []).length;
    takenSeats += occurrences;
  }
  return takenSeats;
};

export const d11p1_text = `const solveD11Part1 = (input: string) => {
  // seatLayout[y][x]
  const seatLayout = input.split("\\n").map((y) => y.split(""));

  const countOccupiedNeighbours = (
    seatGrid: string[][],
    y: number,
    x: number,
    bigLetterRound: boolean
  ) => {
    const bigLetterReducer = (acc, curr) =>
      !!curr && (curr === "O" || curr === "l") ? acc + 1 : acc;
    const smallLetterReducer = (acc, curr) =>
      !!curr && (curr === "o" || curr === "L") ? acc + 1 : acc;
    const reducer = bigLetterRound ? bigLetterReducer : smallLetterReducer;
    return [
      seatGrid?.[y - 1]?.[x], // up
      seatGrid?.[y + 1]?.[x], // down
      seatGrid?.[y - 1]?.[x - 1], // up left
      seatGrid?.[y - 1]?.[x + 1], // up right
      seatGrid?.[y + 1]?.[x - 1], // down left
      seatGrid?.[y + 1]?.[x + 1], // down right
      seatGrid?.[y]?.[x - 1], // left
      seatGrid?.[y]?.[x + 1], // right
    ].reduce(reducer, 0);
  };

  /* Alternate between two different states to be able to keep track of
     current and next state in same seatLayout. Big letter round meaning the board
      will be filled with O's and L's, small letter round will be filled wil o's and l's */

  let bigLetterRound = true;
  let changes = true;
  let round = 0;
  while (changes) {
    changes = false;
    for (let y = 0; y < seatLayout.length; y++) {
      for (let x = 0; x < seatLayout[y].length; x++) {
        const seat = seatLayout[y][x];
        const occupiedNeighbours: number = countOccupiedNeighbours(
          seatLayout,
          y,
          x,
          bigLetterRound
        );
        if ((seat === "L" || seat === "l") && occupiedNeighbours === 0) {
          // empty
          seatLayout[y][x] = bigLetterRound ? "o" : "O";
          changes = true;
        } else if ((seat === "O" || seat === "o") && occupiedNeighbours >= 4) {
          // occupied
          seatLayout[y][x] = bigLetterRound ? "l" : "L";
          changes = true;
        }
      }
    }
    for (let y = 0; y < seatLayout.length; y++) {
      for (let x = 0; x < seatLayout[y].length; x++) {
        const seat = seatLayout[y][x];
        seatLayout[y][x] = bigLetterRound
          ? seat.toLowerCase()
          : seat.toUpperCase();
      }
    }

    bigLetterRound = !bigLetterRound;
  }
  let takenSeats = 0;
  for (let y = 0; y < seatLayout.length; y++) {
    const row = seatLayout[y].join("");
    const occurrences_rgx = new RegExp(\`(O|o)\`, "g");
    const occurrences = (row.match(occurrences_rgx) || []).length;
    takenSeats += occurrences;
  }
  return takenSeats;
};`;

export const d11p2_text = `export const solveD11Part2 = (input: string) => {
  // seatLayout[y][x]
  const seatLayout = input.split("\\n").map((y) => y.split(""));

  const countOccupiedDirections = (
    seatGrid: string[][],
    y: number,
    x: number,
    bigLetterRound: boolean
  ) => {
    const bigLetterReducer = (acc, curr) =>
      !!curr && (curr === "O" || curr === "l") ? acc + 1 : acc;
    const smallLetterReducer = (acc, curr) =>
      !!curr && (curr === "o" || curr === "L") ? acc + 1 : acc;
    const reducer = bigLetterRound ? bigLetterReducer : smallLetterReducer;
    const directions = [
      [-1, 0], // up
      [1, 0], // down
      [0, -1], // left
      [0, 1], // right
      [-1, -1], // up left
      [-1, 1], // up right
      [1, -1], // down left
      [1, 1], // down right
    ];
    const firstVisibleNeighbour = [];
    for (const direction of directions) {
      let currentPos = ".";
      let dx = direction[0];
      let dy = direction[1];
      let i = 1;
      while (currentPos === ".") {
        dx = direction[0] * i;
        dy = direction[1] * i;
        i++;
        currentPos = seatGrid?.[y + dy]?.[x + dx];
      }
      firstVisibleNeighbour.push(currentPos);
    }

    const occupiedCount = firstVisibleNeighbour.reduce(reducer, 0);

    return occupiedCount;
  };

  /* Alternate between two different states to be able to keep track of
     current and next state in same seatLayout. Big letter round meaning the board
      will be filled with O's and L's, small letter round will be filled wil o's and l's */
      
  let bigLetterRound = true;
  let changes = true;
  let round = 0;

  while (changes) {
    changes = false;
    for (let y = 0; y < seatLayout.length; y++) {
      for (let x = 0; x < seatLayout[y].length; x++) {
        const seat = seatLayout[y][x];
        const occupiedNeighbours: number = countOccupiedDirections(
          seatLayout,
          y,
          x,
          bigLetterRound
        );

        if ((seat === "L" || seat === "l") && occupiedNeighbours === 0) {
          // empty
          seatLayout[y][x] = bigLetterRound ? "o" : "O";
          changes = true;
        } else if ((seat === "O" || seat === "o") && occupiedNeighbours >= 5) {
          // occupied
          seatLayout[y][x] = bigLetterRound ? "l" : "L";
          changes = true;
        }
      }
    }
    for (let y = 0; y < seatLayout.length; y++) {
      for (let x = 0; x < seatLayout[y].length; x++) {
        const seat = seatLayout[y][x];
        seatLayout[y][x] = bigLetterRound
          ? seat.toLowerCase()
          : seat.toUpperCase();
      }
    }
    // //Print the seats
    // for (let y = 0; y < seatLayout.length; y++) {
    //   console.log(seatLayout[y].join(""));
    // }
    // round++;
    // console.log(round);
    bigLetterRound = !bigLetterRound;
  }
  //Count occupied seats
  let takenSeats = 0;
  for (let y = 0; y < seatLayout.length; y++) {
    const row = seatLayout[y].join("");
    const occurrences_rgx = new RegExp(\`(O|o)\`, "g");
    const occurrences = (row.match(occurrences_rgx) || []).length;
    takenSeats += occurrences;
  }
  return takenSeats;
};`;
