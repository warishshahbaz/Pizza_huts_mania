import "../styles/globals.css";
import Layout from "../component/Layout";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { Roboto } from "@next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export default function App({ Component, pageProps }) {
  // console.log("Component-----", Component);

  return (
    <Provider store={store}>
      <main className={roboto.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </Provider>
  );
}
