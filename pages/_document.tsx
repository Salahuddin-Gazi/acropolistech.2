import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import VWO_SCRIPT from "../components/vwo-script/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="./images/main_logo_sm.png" type="image/x-icon" />

        {/* <!-- Start VWO Async SmartCode --> */}
        <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
        {/* <script id="vwo-script">{VWO_SCRIPT}</script> */}
        <Script
          id="vwoCode"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: VWO_SCRIPT,
          }}
        />
        {/* <!-- End VWO Async SmartCode --> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
