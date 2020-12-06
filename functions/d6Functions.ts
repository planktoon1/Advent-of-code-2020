export const solvePart1 = (input: string) => {
  const groups = input.split("\n\n");

  let counts = 0;
  for (const group of groups) {
    const groupYeses = {};
    const people = group.split("\n");
    people.forEach((person) =>
      person
        .split("")
        .forEach((char) =>
          !!groupYeses[char] ? groupYeses[char]++ : (groupYeses[char] = 1)
        )
    );
    counts += Object.keys(groupYeses).length;
  }
  return counts;
};

export const solvePart2 = (input: string) => {
  const groups = input.split("\n\n");

  let counts = 0;
  for (const group of groups) {
    const groupYeses = {};
    const people = group.split("\n");
    people.forEach((person) =>
      person
        .split("")
        .forEach((char) =>
          !!groupYeses[char] ? groupYeses[char]++ : (groupYeses[char] = 1)
        )
    );

    counts += Object.keys(groupYeses).reduce(
      (count, key) => (groupYeses[key] === people.length ? count + 1 : count),
      0
    );
  }
  return counts;
};

export const d6p1_text = `const solvePart1 = (input: string) => {
  const groups = input.split("\\n\\n");
  
  let counts = 0;
  for (const group of groups) {
    const groupYeses = {};
    const people = group.split("\\n");
    people.forEach((person) =>
    person
    .split("")
    .forEach((char) =>
    !!groupYeses[char] ? groupYeses[char]++ : (groupYeses[char] = 1)
    )
    );
    counts += Object.keys(groupYeses).length;
  }
  return counts;
};`;

export const d6p2_text = `const solvePart2 = (input: string) => {
  const groups = input.split("\\n\\n");

  let counts = 0;
  for (const group of groups) {
    const groupYeses = {};
    const people = group.split("\\n");
    people.forEach((person) =>
      person
        .split("")
        .forEach((char) =>
          !!groupYeses[char] ? groupYeses[char]++ : (groupYeses[char] = 1)
        )
    );

    counts += Object.keys(groupYeses).reduce(
      (count, key) => (groupYeses[key] === people.length ? count + 1 : count),
      0
    );
  }
  return counts;
};`;
