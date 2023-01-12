import Head from "next/head";
import Container from "../components/layout/Container";
import Navbar from "../components/navbar/Navbar";
import HomeSection from "../components/sections/HomeSection";
import Brands from "../components/brands/Brands";
import FeaturesSection from "../components/sections/FeaturesSection";
import TechsSection from "../components/sections/TechsSection";
export default function Home() {
  return (
    <>
      <Head>
        <title>Chat n' rechat</title>
        <meta name="title" content="CHAT N' RECHAT" />
        <meta name="description" content="Slicing Design By Adrian Aji Septa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.svg" />
      </Head>
      <section
        id="home"
        className="w-full h-fit min-h-screen  bg-gradient-to-b from-[#EEF2FF] via-[#EEF2FF] to-[#F4F7FF]"
      >
        <Container>
          <Navbar />
          <HomeSection />
          <Brands />
        </Container>
      </section>
      <section
        id="features"
        className="w-full text-center h-fit min-h-screen flex items-center  bg-gradient-radial  from-[#EEF2FF] via-[#EEF2FF]  to-[#F4F7FF] "
      >
        <Container>
          <FeaturesSection />
        </Container>
      </section>
      <section
        id="tech"
        className="w-full h-fit min-h-screen flex items-center  bg-[#F4F7FF]"
      >
        <Container>
          <TechsSection />
        </Container>
      </section>
    </>
  );
}
