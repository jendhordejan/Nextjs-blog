import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Alert from "../components/alert";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

import React, { useState } from "react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const [alertType, setAlertType] = useState(1);

  function handleOnClickAlert() {
    setAlertType(!alertType);
  }

  console.log("HOME Props allPostsData: ", allPostsData);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello there! I am <strong>Jend</strong>. I am a fullstack web
          developer and I am passionate about terrorizing student!. You can
          contact me on{" "}
          <a href="https://www.linkedin.com/in/jendhordejan/">LinkedIn</a>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Alert type={alertType}>P.S. - I'm missing class 39!!</Alert>
        <button onClick={handleOnClickAlert}>
          {alertType ? "set ERROR alert" : "set SUCCESS alert"}
        </button>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
