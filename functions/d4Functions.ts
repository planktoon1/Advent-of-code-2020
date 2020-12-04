export const solvePuzzle = (input: string) => {
  let passCount = 0;
  const rgx = new RegExp(
    "((?:(?:byr|iyr|eyr|hgt|hcl|ecl|pid|cid):.+)(?: |\\n))+(?=\\n)",
    "g"
  );
  const rgx2 = new RegExp("(byr|iyr|eyr|hgt|hcl|ecl|pid|cid)", "g");
  const passports = input.match(rgx);
  for (const passport of passports) {
    const arr = passport.match(rgx2);
    console.log(arr);
    if (containsAll(["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"], arr)) {
      passCount++;
    }
  }
  return passCount;
};
function containsAll(needles, haystack: any[]) {
  for (var i = 0; i < needles.length; i++) {
    if (!haystack.includes(needles[i])) {
      return false;
    }
  }
  return true;
}

export const solvePuzzlePart2 = (input: string) => {
  let validPassports = 0;
  const rgx = new RegExp(
    "((?:(?:byr|iyr|eyr|hgt|hcl|ecl|pid|cid):.+)(?: |\\n))+(?=\\n)",
    "g"
  );
  const rgx2 = new RegExp("(byr|iyr|eyr|hgt|hcl|ecl|pid|cid)", "g");
  const passports = input.match(rgx);
  for (const passport of passports) {
    let passValid = false;
    const arr = passport.match(rgx2);

    if (containsAll(["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"], arr)) {
      const arrWValues = passport.split(/[\s\n]+/);
      passValid = true;
      for (const data of arrWValues) {
        const [name, val] = data.split(":");

        let fieldValid = false;
        const nVal = Number(val);
        switch (name) {
          case "byr":
            fieldValid = nVal >= 1920 && nVal <= 2002;
            break;
          case "iyr":
            fieldValid = nVal >= 2010 && nVal <= 2020;
            break;
          case "eyr":
            fieldValid = nVal >= 2020 && nVal <= 2030;
            break;
          case "hgt":
            const groups = val.match(/(?<number>\d{2,3})(?<type>cm|in)/)
              ?.groups;

            if (groups && groups.type && groups.number) {
              const nNumber = Number(groups.number);
              if (groups.type === "cm") {
                fieldValid = nNumber >= 150 && nNumber <= 193;
              } else if (groups.type === "in") {
                fieldValid = nNumber >= 59 && nNumber <= 76;
              }
            }
            break;

          case "hcl":
            fieldValid = !!val.match(/^#(?:[0-9a-f]{6})$/);
            break;
          case "ecl":
            fieldValid = !!val.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/);
            break;
          case "pid":
            fieldValid = !!val.match(/^\d{9}$/);
            break;

          default:
            fieldValid = true;
            break;
        }
        if (!fieldValid) {
          console.log(`name: ${name} | val: ${val}`);

          passValid = false;
          break;
        }
      }
    }
    if (passValid) {
      validPassports++;
    }
  }
  return validPassports;
};

export const puzzle1_asText = `const solvePuzzle = (input: string) => {
  let passCount = 0;
  const rgx = new RegExp(
    "((?:(?:byr|iyr|eyr|hgt|hcl|ecl|pid|cid):.+)(?: |\\n))+(?=\\n)",
    "g"
  );
  const rgx2 = new RegExp("(byr|iyr|eyr|hgt|hcl|ecl|pid|cid)", "g");
  const passports = input.match(rgx);
  for (const passport of passports) {
    const arr = passport.match(rgx2);
    console.log(arr);
    if (containsAll(["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"], arr)) {
      passCount++;
    }
  }
  return passCount;
};
function containsAll(needles, haystack: any[]) {
  for (var i = 0; i < needles.length; i++) {
    if (!haystack.includes(needles[i])) {
      return false;
    }
  }
  return true;
}
`;

export const puzzlePart2_asText = `const solvePuzzlePart2 = (input: string) => {
  let validPassports = 0;
  const rgx = new RegExp(
    "((?:(?:byr|iyr|eyr|hgt|hcl|ecl|pid|cid):.+)(?: |\\n))+(?=\\n)",
    "g"
  );
  const rgx2 = new RegExp("(byr|iyr|eyr|hgt|hcl|ecl|pid|cid)", "g");
  const passports = input.match(rgx);
  for (const passport of passports) {
    let passValid = false;
    const arr = passport.match(rgx2);

    if (containsAll(["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"], arr)) {
      const arrWValues = passport.split(/[\\s\\n]+/);
      passValid = true;
      for (const data of arrWValues) {
        const [name, val] = data.split(":");

        let fieldValid = false;
        const nVal = Number(val);
        switch (name) {
          case "byr":
            fieldValid = nVal >= 1920 && nVal <= 2002;
            break;
          case "iyr":
            fieldValid = nVal >= 2010 && nVal <= 2020;
            break;
          case "eyr":
            fieldValid = nVal >= 2020 && nVal <= 2030;
            break;
          case "hgt":
            const groups = val.match(/(?<number>\\d{2,3})(?<type>cm|in)/)
              ?.groups;

            if (groups && groups.type && groups.number) {
              const nNumber = Number(groups.number);
              if (groups.type === "cm") {
                fieldValid = nNumber >= 150 && nNumber <= 193;
              } else if (groups.type === "in") {
                fieldValid = nNumber >= 59 && nNumber <= 76;
              }
            }
            break;

          case "hcl":
            fieldValid = !!val.match(/^#(?:[0-9a-f]{6})$/);
            break;
          case "ecl":
            fieldValid = !!val.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/);
            break;
          case "pid":
            fieldValid = !!val.match(/^\\d{9}$/);
            break;

          default:
            fieldValid = true;
            break;
        }
        if (!fieldValid) {
          console.log(\`name: \${name} | val: \${val}\`);

          passValid = false;
          break;
        }
      }
    }
    if (passValid) {
      validPassports++;
    }
  }
  return validPassports;
};`;
