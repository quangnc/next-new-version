import type { AppProps } from "next/app";

import "@styles/tailwind.css";
import "@styles/shared.css";
import "@styles/nprogress.css";
import "@styles/custom.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
