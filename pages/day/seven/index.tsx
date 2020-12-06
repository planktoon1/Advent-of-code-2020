import Link from "next/link";
import React, { useEffect } from "react";
import Header from "../../../components/header";
import {
  d7p1_text,
  d7p2_text,
  solvePart1,
  solvePart2,
} from "../../../functions/d7Functions";
import styles from "../../../styles/Home.module.css";

const seven = () => {
  useEffect(() => {
    solvePart1(input);
  }, [input]);
  return (
    <>
      <Header pageTitle="Day 7:"></Header>
      <div className={styles.container}>
        <main className={styles.main}>
          <p className={styles.description}>
            <a
              href="https://adventofcode.com/2020/day/7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Puzzle</button>
            </a>

            <Link href="/puzzle-input/d7p1.html">
              <button>Input.html</button>
            </Link>
          </p>
          <div>
            <div style={{ textAlign: "center" }}></div>
            <div className={styles.code}>
              <pre>{"TEXT"}</pre>
            </div>
            <p className={styles.description}>Part 1:</p>
            <div className={styles.code}>
              <pre>{d7p1_text}</pre>
            </div>
            <p className={styles.description}>Part 2:</p>
            <div className={styles.code}>
              <pre>{d7p2_text}</pre>
            </div>
          </div>
          <div style={{ textAlign: "center" }}></div>
        </main>
      </div>
    </>
  );
};
export default seven;

const input = ``;
