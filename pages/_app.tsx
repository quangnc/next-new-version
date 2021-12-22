import type { AppProps } from "next/app";

import "@styles/tailwind.css";
import "@styles/shared.css";
import "@styles/nprogress.css";
import "@styles/custom.css";

import { ThemeProvider } from "@frontend/framework/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
