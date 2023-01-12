import Head from "next/head";
import Image from "next/image";
import Container from "../components/layout/Container";
import Navbar from "../components/navbar/Navbar";
import HomeSection from "../components/sections/HomeSection";
import Brands from "../components/brands/Brands";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chat n' rechat</title>
        <meta name="description" content="Slicing Design By Adrian Aji Septa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.svg" />
      </Head>
      <section
        id="home"
        className="w-full h-fit min-h-screen  bg-gradient-to-b from-[#EEF2FF] to-transparent"
      >
        <Container>
          <Navbar />
          <HomeSection />
          <Brands />
        </Container>
      </section>
      <section
        id="feature"
        className="w-full h-fit min-h-screen  bg-gradient-radial  from-[#EEF2FF]  to-transparent"
      >
        <Container>

        </Container>
      </section>
    </>
  );
}
