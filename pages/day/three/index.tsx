import styles from "../../../styles/Home.module.css";
import React, { useEffect } from "react";
import Link from "next/link";
import {
  d1p1_functionAsText,
  d1p2_functionAsText,
} from "../../../functions/d1/functions";
import Header from "../../../components/header";
import { d3p2_text, d3_functionAsText } from "../../../functions/d3Functions";

const three = () => {
  useEffect(() => {}, [input]);
  return (
    <>
      <Header pageTitle="Day 3: Toboggan Trajectory"></Header>
      <div className={styles.container}>
        <main className={styles.main}>
          <p className={styles.description}>
            <a
              href="https://adventofcode.com/2020/day/3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Puzzle</button>
            </a>

            <Link href="/puzzle-input/d3p1.html">
              <button>Input.html</button>
            </Link>
          </p>
          <div>
            <div style={{ textAlign: "center" }}></div>
            <p className={styles.description}>Part 1:</p>
            <div className={styles.code}>
              <pre>{d3_functionAsText}</pre>
              <pre>{`const result = solvePuzzle(input, 3, 1);`}</pre>
            </div>
            <p className={styles.description}>Part 2:</p>
            <div className={styles.code}>
              <pre>{d3p2_text}</pre>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default three;
const solvePuzzle1 = (input: string) => {
  const [SLOPE_X, SLOPE_Y] = [1, 2];
  // flipped coordinate system (y, x)
  const map = input
    .trim()
    .split("\n")
    .map((y) => y.split(""));

  const width = map[0].length;
  const height = map.length;

  let [x, y] = [0, 0];
  let trees = 0;
  while (y < height - 1) {
    x += SLOPE_X;
    y += SLOPE_Y;

    const pos = map[y][x % width];
    if (pos === "#") {
      trees++;
    }
  }
  return trees;
};
const rem = "84 + 289 + 89 + 71 + 36";
const input = `.#..#.....#....##..............
...#.#...#...#.#..........#....
#...###...#.#.....#.##.#.#...#.
#.....#.#...##....#...#...#....
##.......##.#.....#........##.#
#..#....#......#..#......#...#.
#..#......#.......#............
##...#.#..#...#........#....##.
#.#.#...#...#..#........#....#.
.......#...........##......#...
##.##.##......#..#............#
..#.###..#..............#......
.##..#.....#......#.#..........
........#.........#....#....###
#..........#........#.#.#......
...##.....#..####.###..#.##....
....#...###............#..#....
...#.#...#.#...#..#.#........##
.....#...#.............#..#....
....#.#.#.##.....##.##....#....
..#....#............#.##.##..#.
.#..#..#................#...###
#..###.#..##..#............#...
.......#.#....#.##.#.##........
##...###.#....#...........###.#
...#.#....#..####.........#....
....##........#.#.#.###........
#...#..#.....#....##..#.##...#.
##....................##..#....
.#....##...........##...##...#.
.#.#..#.........#.........#.#.#
#.#..#.....#.#..#..#..#.#......
...#.............#......#....##
....#.#.......#....#...#.##...#
#.#.#..###..........#...#......
......#.....#..#..#.......##..#
.#......#......#.....#...#.....
......#..#......#.#............
..#............#..#....#.#.....
.....#..##.......#...##.###.#.#
.....#........##....#.#...##..#
..........##.#..#.#...#..#....#
#.#.#.#.##...................#.
.....#....##.....#..#...#..#...
...#....#.............#....#.#.
.........#.##..##..............
#...#.#....#..#...#.......#....
.#...#......#.##.#...#.#..###..
..#.#.#......#..#...##..##.##..
.........#.....#......##....##.
...###.......#..#........#.....
...#....#...#.#.#......##....#.
.#.....#......#...##.##..#.....
..#.##...#....####...##........
..#.#.###....#..##.......##....
.....#....##...#......#.......#
.#....#......#..............#..
.......#.#......#..#....#.#.#..
.......#.#.........###....#....
.#...#.......#.#..#..####....#.
..#...#.#......#..#.##.###..#..
..##.........#............#.#.#
#.........##.##.........#.###..
...#....#.......#..#..##.......
.#....##........##.......#..#..
...#.....#.#.##.#.#.....##.....
.#.#........#.......#.#..#..#..
.....####..##.##.#.#....#......
..#.##.#.#.#....###..#....#.#..
..##..#.#......##.#..#.........
....#..#.#.##.......#...##.....
....###.....#..###...#....###.#
..#....#.......#......#...##..#
..#..##......#....#.###..#..##.
..#..#...............#.#.#.....
...##...#.#..#.#...#......#....
#....#...#.#.#.#.#....#....#...
....##...#....#.....##..#.....#
......##.....#...##..#.......#.
......###......#....#.##..#....
.....#........#........#...#..#
.#..##.....##....#.#......#.#..
#..#.#.....#........#......#.#.
.#..#.##.....#####.#....#.#....
....##........#..........#.#...
.......#.....#.......#...#.#...
.#....#...##.###....#.#......#.
#...#...........##.#...........
#...##.......#..#........#.#..#
.....#..##..###....#.#.#....#..
..#..#.....#............#.#....
............#......#.....#.....
.#..#.....##.........#....###.#
#.........#....#....#.#..#...#.
##.#...##....#..#...#.#...#....
....###..##...................#
....##...#......#...#.#...#...#
#....#....###..........#...#..#
.....##.#....###.###....#..###.
#.....#...........#...........#
##..###.##........#..#.#..#.#..
.##...#..#.......#.#....#.....#
......##..#..#.......#.#...##..
......#..#..#.#...###..#.#....#
#.##.#..#......#...##........##
.....#..........##.....#...#...
........#....##......#......#.#
..#..#.#...#.#.#.......#......#
.#....#........#............#..
......##.....#...#.............
#......##..#.......##....##.#..
.....#..#..#...#.......#..#....
...#..##.#..#.#....##.....#..##
......#...#.#...#.#......###.#.
.#.#...#.....#..###.....#......
#..####.#....#.......##...#....
.##.......#.....#.........#....
#......##.#...............#....
.######.#...##...#...#...#..##.
....#...####....##.#..#...##...
.#...................#.#..#..#.
.#.#....##...#...#.#..#.#.#.#..
......#......#........##.#...#.
##..#...#..#.............##.#..
#.............#..........#.#...
...##.....#.............#......
......###.....#................
#.#.#....#..##.#.....#.........
.#.#........#.........#.#.##.#.
......#...##...#.#.....#....#..
#...#.........##.##.#..........
#..............#..#.......##...
#...#......#.#......#...#....#.
...#...#........#.#......#.###.
##.....#...#.#..#..#..#.......#
..#.##..##.........#...##.##...
#....#....#.....#..........#...
#.####..#..###.....#..#..#.....
..#.....#.##.##..####....#.#.#.
...#.#....#...#.......#..#.....
......###...#.#..#..#..........
.........#..#.....#.#.##......#
.......#.#....##.....##.#..#.#.
.#..#.#..#......##.###...##..#.
....###...........#.....#....#.
.#.##.....#..#.....#......##...
#..##....#..........#.##.##..#.
.###.#.#..#.#.....#..##....#.#.
..##.#....#.....##..#..........
##........#...#..#........###.#
#...#...........##.......#.#...
...###.....##.#....#...#...#...
......#....#.#.......###....#..
...#...#.......##.......###.#..
..............#.#..........##..
#.#....###..#..#.........#.....
.###.#.......#.....#....#.#....
.....###...#.#..#.#.......#....
.........#.##.#......#.#..#....
.......#....#....#.#....#..##.#
...............#...##.#..#.#..#
.....##........#..##...........
.##.#..#....#..#.#...#.........
.#.#..##.#..#......#....#.#...#
##....#.......##...........#...
..#...#.............#.#....#..#
..#......#..#.....#...##.....#.
....##...#.#...##...#..##......
.....#..#..........#...........
..##....#..#.#....#..#........#
.###....#.....#.#....#..##.....
#.......##.......#..#..#....#.#
.##..#...........#..##..##..#..
.#.................#...#....#..
.######.......#............##..
.#.........#......##.#.#.#.#.#.
.#.......#...#...#....###....#.
....#...##.#.#...#.....#.#..#..
.#..#..#...#.....###....#......
...#.##.###........#.....##....
..#....#.#.#..........#..#..#..
......#.....#...#..#..##..#.#..
#.#.......##.......#....#.....#
..#...#..#.#....#.##.##........
..#....#..##..#..##......#.....
#....#..##.....#....###........
##...#......#..###.#.....#.....
#..###....#...#...#...#......##
.....###....#......#..#..#...#.
.##......#.......##...#........
....#.#.....##.....#.....#.....
...##.#.....#..##...#...##.#...
..#...#.#....#....#...##.......
......#....#..#....#.#.........
..........#.#.#...##....#......
...#....................#..#...
...#....###....#..#.....#.....#
..#....#....#..#.#..##.#...#...
..#.##....##.....#.#........#..
#.....###..#.#.#...#..#....#...
........#..#.#..#........##....
.##....#................##.#.##
..##...#.#.#.....##..#....#....
....#..#....#..#........#..##..
...#...##....#....#..##......#.
##........#...#.....#.....#...#
.#......#....##...#.........##.
##........#...#.....#..#...#.#.
...##..#..#.....#..###.#..#....
....#..#..............#.......#
.......#.##...#......#.###.....
#........##..##....#.#.#.......
#.#..##.#.......#..##.....###..
.....##...#..#.....#...........
...#..#..#......#...#.#........
.#....#....#.#.....#.....#....#
...#..#...#..#.##.#......#.#.#.
..##....#..#..#.....#....#....#
...#....#.##.#..#.###......#...
.......#..#.....#.......#..#...
..###.#####..#..##.#.........#.
...#.......##...#.#..#.#......#
....#...#.###..#..........#....
...........#...#..##........#..
.......#...#....#....#.#..#....
.........#..........#...#....##
.##.........##..#.......##.#...
........#......###...##...#.#.#
#.#...##.##...........#...#.#..
.....###...#..##......#..#.....
#.#.....#.#....##..........#..#
#..#.......#.#.........####....
#.#...#.....#........#.....#..#
.....#..#.#.###.....#.#.###....
.###..#......##..#..#..........
#....#.#......#...#.##......#..
..#.........##.#.....#.........
...#....#.....##.#..#..##.#..#.
##.....#.#..#.#....#......#....
....###.#.....#.......#..#.#...
#.....##.....##...........#....
..........#..#......#.##...#...
#...#.###....##....#.###..###..
##........#.#...#..#.........#.
##........##.......#.....###...
.##....###........#..##...#...#
......#..##....##.....#..#.#...
.....#..##..#.......#.......#..
......#....#.......##.#........
.#.####.#..#......#..#.........
.##..#....#...##.#....#....#...
..#..#..#####.........#...#....
....#.....#.#.#.#...#.#......#.
....#...#.#..#.##...#...#......
..#...#...#...#...#..#.#.##..#.
..#......#.#.#.##.##.##..#.....
#..###......#.##...#....#.##.#.
.#.#.......##..##....##...##.#.
.##......##....##.#.......#...#
..#...#...................#....
.#...#.......######.....#.#..##
......#.##.....#.#.............
...........##.#........#..#....
#.............#.#.....#....##..
#...........#...#..###.....#...
....#.......#.#..#..#.#........
......#...##.......#..##....#..
......#.##.##..#........#.#...#
.#..#...##...................#.
.#.............#...#.#.#.#...#.
.........#.....#........#.#....
#..#...#.............##.#.....#
...#.#....#...##............#..
..#...#.##.###.#.....#......##.
...#.#..###...#.#............#.
...#....#........#.#...........
.#......#.#.#.........#.#....#.
....#..#......#.##.....#.#.....
..#..###....#....#.........###.
#..#.#....##.#....#.##..#......
#..#.....#.#.....##..#.##......
......#...#.#.............#..#.
#.#....#.#..#...#......#.#.....
..#.........#.#....#...#.......
.#..#.#...#....#...#......#...#
.......#........#.#..#..#...#..
..##.#......#..##.##.#..#..#...
.##...#....##.....#.....#...##.
#.....##.#....#.#......##..#...
.......#.#..#...#.......#.#...#
..#...#.......#...#..##........
#....##..#...#..#.#......#..#.#
##.#....#....#....#...#..#.##..
###........#.#..#..#......#....
.#......#.....#....#.#..#...#..
.#.....#.....#...##.......#..##
#..##.#..#..........#..........
...#.##.........#.#.##.#.......
.#..#...............#...#.#.#..
.....#.#.....#...####..#.....#.
.#....#.##..##...#...##.#...#.#
....#......##...#.#.#.....#.##.
#...#..#.#...#.#.....##...#....
..#..#....##..###......#..#....
.........#......##.....##....#.
.......#....#...#........###...
.....#..#..#...#...#......#....
..#..#...#.....#.....###..#.###
............#.#..#..#....#.....
...#..#...###.......#.......#..
#.........#........#.....##....
.#.#........#.....#........###.
....#.##.#...#.#.#.....#....#..
.##...#..#.......#.#...........
##...#.##...#...........#.....#
##....#.#.....##..#.......#....
##....#...#....#..#.......####.
......#...#..#.....#.#....#...#
.......#.....#..###............
#.#.#..#.....#.............#..#
.#..#.....##.....#...#.......##
..#.##........##...........#.#.
....##.#..###.#.........#...##.`;