// pages/_app.js
import "@/styles/globals.css";
import Layout from "./components/Layout";

export default function MyApp({ Component, pageProps }) {
  // 페이지마다 getLayout 함수가 있으면 사용, 없으면 기본 Layout 사용
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  return getLayout(<Component {...pageProps} />);
}
