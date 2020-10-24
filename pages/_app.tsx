import type { AppProps /*, AppContext */ } from "next/app";
import { useEffect } from "react";
import "../styles/style.css";
import "../styles/style2.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
