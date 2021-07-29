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
      </Head>

      <main>
        <Slider />
        <Solutions />
        <Location />
      </main>
    </>
  );
}
