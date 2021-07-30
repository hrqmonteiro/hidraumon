import "../styles/globals.scss";
import Menu from "../components/UI/Menu";
import { useEffect } from "react";
import AOS from "aos";
import Footer from "../components/sections/Footer";
import WhatsApp from "../components/UI/WhatsApp";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Menu />
      <Component {...pageProps} />
      <div id="bg-1">
        <img src="/images/bg2.svg" height="100%" className="img-fluid" alt="" />
      </div>
      <Footer />
      <WhatsApp />
    </>
  );
}

export default MyApp;
