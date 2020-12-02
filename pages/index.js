import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Advent of Code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Advent of Code 2020</h1>

        <p className={styles.description}>
          Calendar puzzle solutions by{" "}
          <a
            href="https://github.com/planktoon1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frederik Østergaard
          </a>
        </p>
        <Link href="/day/one">
          <button>Day 1</button>
        </Link>
        <Link href="/day/two">
          <button>Day 2</button>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Also.. I'm learning Next.js{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
