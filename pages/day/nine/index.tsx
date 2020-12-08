import Link from "next/link";
import React, { useEffect } from "react";
import Header from "../../../components/header";
import {
  solveD9Part1,
  solveD9Part2,
  d9p1_text,
  d9p2_text,
} from "../../../functions/d9Functions";
import styles from "../../../styles/Home.module.css";

const nine = () => {
  useEffect(() => {
    console.log(solveD9Part1(input));
  }, [input]);
  return (
    <>
      <Header pageTitle="Day 4: Passport Processing"></Header>
      <div className={styles.container}>
        <main className={styles.main}>
          <p className={styles.description}>
            <a
              href="https://adventofcode.com/2020/day/4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Puzzle</button>
            </a>

            <Link href="/puzzle-input/d4p1.html">
              <button>Input.html</button>
            </Link>
          </p>
          <div>
            <div style={{ textAlign: "center" }}></div>
            <div className={styles.code}>
              <pre>{"Extra"}</pre>
            </div>
            <p className={styles.description}>Part 1:</p>
            <div className={styles.code}>
              <pre>{d9p1_text}</pre>
            </div>
            <p className={styles.description}>Part 2:</p>
            <div className={styles.code}>
              <pre>{d9p2_text}</pre>
            </div>
          </div>
          <div style={{ textAlign: "center" }}></div>
        </main>
      </div>
    </>
  );
};
export default nine;

const input = ``;
