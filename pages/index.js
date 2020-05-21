import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Alert from "../components/alert";

import React, { useState } from "react";

export default function Home() {
  const [alertType, setAlertType] = useState(1);

  function handleOnClickAlert() {
    setAlertType(!alertType);
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello there! I am <strong>Jend</strong>. I am software engineer,web
          developer and a plant lover. You can contact me on{" "}
          <a href="https://www.linkedin.com/in/jendhordejan/">LinkedIn</a>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <Alert type={alertType}>
        This is a sample of using classnames library.
      </Alert>
      <button onClick={handleOnClickAlert}>
        {alertType ? "set ERROR alert" : "set SUCCESS alert"}
      </button>
    </Layout>
  );
}
