import "../styles/globals.scss";
import Menu from "../components/UI/Menu";
import Footer from "../components/sections/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
      <div id="bg-1">
        <img src="/images/bg2.svg" height="100%" className="img-fluid" alt="" />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
