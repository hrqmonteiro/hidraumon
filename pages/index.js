import Head from "next/head";
import Slider from "../components/sections/Slider";
import Solutions from "../components/sections/Solutions";
import Location from "../components/sections/Location";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hidraumon Máquinas</title>
        <meta name="description" content="Hidraumon Máquinas" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script type="text/javascript" src="/static/script.js"></script>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </Head>

      <main>
        <Slider />
        <div id="bg-3">
          <img src="/images/bg3.svg" alt="" />
        </div>
        <Solutions />
        <div id="bg-4">
          <img src="/images/bg4.svg" alt="" />
        </div>
        <Location />
      </main>
    </>
  );
}
