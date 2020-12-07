interface BagNode {
  name: string;
  contains: { [bagName: string]: number };
  containsCount: number;
  containedBy: { [bagName: string]: boolean };
}

const bagNode = ({ name }): BagNode => ({
  name,
  contains: {},
  containsCount: 0,
  containedBy: {},
});

export const solve = (input: string) => {
  // Create bag graph
  const lines = input.split("\n");
  const bags: { [bagName: string]: BagNode } = {};
  for (const line of lines) {
    const [bagName, rulesString] = line.split(" bags contain ");
    const rules = rulesString
      .substring(0, rulesString.length - 1)
      .split(",")
      .map((r) => r.match(/ *(?<amount>\d{1,3}) (?<ruleBagName>\w+ \w+)/));

    // If the bag doesn't already exist create it, else use the already existing bag
    const bagRef = bags[bagName]
      ? bags[bagName]
      : (bags[bagName] = bagNode({ name: bagName }));
    for (const rule of rules) {
      if (!rule) {
        console.log(`${bagName} can contain no bags`);
        continue;
      }
      const { ruleBagName, amount } = rule.groups;
      // If the bag doesn't already exist create it, else use the already existing bag
      const childBagRef = bags[ruleBagName]
        ? bags[ruleBagName]
        : (bags[ruleBagName] = bagNode({ name: ruleBagName }));
      childBagRef.containedBy = { ...childBagRef.containedBy, [bagName]: true };
      bagRef.contains = {
        ...bagRef.contains,
        [ruleBagName]: Number(amount),
      };
      bagRef.containsCount += Number(amount);
    }
  }

  // find all "parent" bags to the shiny gold bag
  const parents: { [bagName: string]: boolean } = {};
  const addParents = (bag: BagNode) => {
    for (const parentName in bag.containedBy) {
      const parent = bags[parentName];
      parents[parentName] = true;
      Object.keys(parent.containedBy).forEach(() => addParents(parent));
    }
  };
  addParents(bags["shiny gold"]);
  // Part1
  //   return Object.keys(parents).length;

  // Part 2
  const countBagsInside = (bag: BagNode) => {
    let bagsInside = bag.containsCount;
    for (const childName in bag.contains) {
      const child = bags[childName];
      const count = bag.contains[childName];
      bagsInside += countBagsInside(child) * count;
    }
    return bagsInside;
  };
  console.log(bags);

  return countBagsInside(bags["shiny gold"]);
};

export const d7_text = `interface BagNode {
    name: string;
    contains: { [bagName: string]: number };
    containsCount: number;
    containedBy: { [bagName: string]: boolean };
  }
  
  const bagNode = ({ name }): BagNode => ({
    name,
    contains: {},
    containsCount: 0,
    containedBy: {},
  });
  
  export const solvePart1 = (input: string) => {
    // Create bag graph
    const lines = input.split("\\n");
    const bags: { [bagName: string]: BagNode } = {};
    for (const line of lines) {
      const [bagName, rulesString] = line.split(" bags contain ");
      const rules = rulesString
        .substring(0, rulesString.length - 1)
        .split(",")
        .map((r) => r.match(/ *(?<amount>\\d{1,3}) (?<ruleBagName>\\w+ \\w+)/));
  
      // If the bag doesn't already exist create it, else use the already existing bag
      const bagRef = bags[bagName]
        ? bags[bagName]
        : (bags[bagName] = bagNode({ name: bagName }));
      for (const rule of rules) {
        if (!rule) {
          console.log(\`\${bagName} can contain no bags\`);
          continue;
        }
        const { ruleBagName, amount } = rule.groups;
        // If the bag doesn't already exist create it, else use the already existing bag
        const childBagRef = bags[ruleBagName]
          ? bags[ruleBagName]
          : (bags[ruleBagName] = bagNode({ name: ruleBagName }));
        childBagRef.containedBy = { ...childBagRef.containedBy, [bagName]: true };
        bagRef.contains = {
          ...bagRef.contains,
          [ruleBagName]: Number(amount),
        };
        bagRef.containsCount += Number(amount);
      }
    }
  
    // find all "parent" bags to the shiny gold bag
    const parents: { [bagName: string]: boolean } = {};
    const addParents = (bag: BagNode) => {
      for (const parentName in bag.containedBy) {
        const parent = bags[parentName];
        parents[parentName] = true;
        Object.keys(parent.containedBy).forEach(() => addParents(parent));
      }
    };
    addParents(bags["shiny gold"]);
    // Part1
    //   return Object.keys(parents).length;
  
    // Part 2
    const countBagsInside = (bag: BagNode) => {
      let bagsInside = bag.containsCount;
      for (const childName in bag.contains) {
        const child = bags[childName];
        const count = bag.contains[childName];
        bagsInside += countBagsInside(child) * count;
      }
      return bagsInside;
    };
    console.log(bags);
  
    return countBagsInside(bags["shiny gold"]);
  };`;
