import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StoreProvider } from "../src/stores/storeContext";
import rootStore from "../src/stores/rootStore";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider value={rootStore}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;