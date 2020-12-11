import Link from "next/link";
import React, { useEffect } from "react";
import Header from "../../../components/header";
import {
  solveD10Part1,
  solveD10Part2,
  d10p1_text,
  d10p2_text,
} from "../../../functions/d10Functions";
import styles from "../../../styles/Home.module.css";

const ten = () => {
  useEffect(() => {
    console.log(solveD10Part2(input));
  }, [input]);
  return (
    <>
      <Header pageTitle="Day 10: Adapter Array"></Header>
      <div className={styles.container}>
        <main className={styles.main}>
          <p className={styles.description}>
            <a
              href="https://adventofcode.com/2020/day/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Puzzle</button>
            </a>

            <Link href="/puzzle-input/d10.html">
              <button>Input.html</button>
            </Link>
          </p>
          <div>
            <div style={{ textAlign: "center" }}></div>
            <p className={styles.description}>Part 1:</p>
            <div className={styles.code}>
              <pre>{d10p1_text}</pre>
            </div>
            <p className={styles.description}>Part 2:</p>
            <div className={styles.code}>
              <pre>{d10p2_text}</pre>
            </div>
          </div>
          <div style={{ textAlign: "center" }}></div>
        </main>
      </div>
    </>
  );
};
export default ten;

const input = `128
6
152
16
118
94
114
3
146
44
113
83
46
40
37
72
149
155
132
9
75
1
82
80
111
124
66
122
129
32
30
136
112
65
90
117
11
45
161
55
135
17
159
38
51
131
12
123
81
64
50
43
19
63
13
153
110
27
23
104
145
18
125
86
10
76
26
142
59
47
160
79
139
54
121
97
162
36
107
56
25
99
24
31
69
137
33
138
130
158
91
2
74
101
73
20
98
154
89
62
100
39`;
