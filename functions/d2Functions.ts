export const solvePuzzle = (input: string[]) => {
  let validPasswords = 0;
  for (const line of input) {
    const { min, max, char, password } = line.match(
      /(?<min>\d+)-(?<max>\d+) (?<char>.): (?<password>[\w\d]+)/
    )?.groups;

    const occurrences_rgx = new RegExp(`${char}`, "g");
    const occurrences = (password.match(occurrences_rgx) || []).length;

    if (occurrences >= Number(min) && occurrences <= Number(max)) {
      validPasswords++;
    }
  }

  return validPasswords;
};

export const solvePuzzlePartTwo = (input: string[]) => {
  let validPasswords = 0;
  for (const line of input) {
    const { pos1, pos2, char, password } = line.match(
      /(?<pos1>\d+)-(?<pos2>\d+) (?<char>.): (?<password>[\w\d]+)/
    )?.groups;

    const i1 = Number(pos1) - 1;
    const i2 = Number(pos2) - 1;
    const p1Valid = password[i1] === char;
    const p2Valid = password[i2] === char;

    if (!p1Valid != !p2Valid) {
      validPasswords++;
    }
  }

  return validPasswords;
};
