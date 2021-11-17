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
      <link rel="manifest" href="/manifest.json" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      {/* Link de Google Analytics y Google Tag Manager */}

      {/* MetaTags iOS */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-title" content="NovoFaciem" />

      {/* Meta Tags Icons */}
      <link rel="apple-touch-icon" href="/image/icon_192-Dark.png"></link>
      <link rel="apple-touch-startup-image" href="/image/icon_192-Dark.png"></link>
      <link rel="shortcut icon" type="image/png" href="/icon_180.png" />

    </Head>
  );
};

Seo.defaultProps = {
  title,
  description,
};

export default Seo;
