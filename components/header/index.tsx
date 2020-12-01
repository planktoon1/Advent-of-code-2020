import * as React from "react";
import Head from "next/head";
import styles from "./Header.module.css";
import Link from "next/link";

export interface IHeaderProps {
  pageTitle: string;
}

export default function Header(props: IHeaderProps) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.back}>
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </div>
        <Head>
          <title>{props.pageTitle}</title>{" "}
        </Head>
        <div className={styles.title}>{props.pageTitle}</div>
        <div>
          <a href="https://adventofcode.com/2020">Advent of Code</a>
        </div>
      </div>
    </>
  );
}
