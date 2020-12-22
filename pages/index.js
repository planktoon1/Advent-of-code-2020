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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "20rem",
            justifyContent: "center",
          }}
        >
          <Link href="/day/one">
            <button>Day 1</button>
          </Link>
          <Link href="/day/two">
            <button>Day 2</button>
          </Link>
          <Link href="/day/three">
            <button>Day 3</button>
          </Link>
          <Link href="/day/four">
            <button>Day 4</button>
          </Link>
          <Link href="/day/five">
            <button>Day 5</button>
          </Link>
          <Link href="/day/six">
            <button>Day 6</button>
          </Link>
          <Link href="/day/seven">
            <button>Day 7</button>
          </Link>
          <Link href="/day/eight">
            <button>Day 8</button>
          </Link>
          <Link href="/day/nine">
            <button>Day 9</button>
          </Link>
          <Link href="/day/ten">
            <button>Day 10</button>
          </Link>
          <Link href="/day/eleven">
            <button>Day 11</button>
          </Link>
          <Link href="/day/twelve">
            <button>Day 12</button>
          </Link>
        </div>
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
