import "@/styles/globals.css";
import Layout from "./components/Layout";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});
export default function App({ Component, pageProps }) {
  return (
    <html lang="ko" className={montserrat.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </html>
  );
}
