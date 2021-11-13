import React from "react";
import Head from "next/head";
import { metatags } from "../helpers/data.json";

let { title, description } = metatags;

const Seo = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/icon_180.png" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      {/* Link de Google Analytics y Google Tag Manager */}
    </Head>
  );
};

Seo.defaultProps = {
  title,
  description,
};

export default Seo;
