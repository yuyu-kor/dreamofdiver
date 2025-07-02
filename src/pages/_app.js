import "@/styles/globals.css";
import Layout from "./components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <html lang="ko">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </html>
  );
}
