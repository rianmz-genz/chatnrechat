import Head from "next/head";
import Container from "../components/layout/Container";
import Navbar from "../components/navbar/Navbar";
import HomeSection from "../components/sections/HomeSection";
import Brands from "../components/brands/Brands";
import FeaturesSection from "../components/sections/FeaturesSection";
import TechsSection from "../components/sections/TechsSection";
import DownloadSection from "../components/sections/DownloadSection";
import FaqsSection from '../components/sections/FaqsSection';
import FooterSection from "../components/sections/FooterSection";
export default function Home() {
  return (
    <>
      <Head>
        <title>Chat n&apos; rechat</title>
        <meta name="og:title" content="CHAT N' RECHAT" />
        <meta name="og:description" content="Slicing Design By Adrian Aji Septa" />
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
        className="w-full lg:text-center h-fit min-h-screen flex items-center  bg-gradient-radial  from-[#EEF2FF] via-[#EEF2FF]  to-[#F4F7FF] "
      >
        <Container>
          <FeaturesSection />
        </Container>
      </section>
      <section
        id="tech"
        className="w-full h-fit min-h-screen flex items-center  bg-[#F4F7FF] overflow-x-hidden"
      >
        <Container>
          <TechsSection />
        </Container>
      </section>
      <section
        className="w-full h-fit min-h-screen flex items-center  bg-[#F4F7FF]"
      >
        <Container>
          <DownloadSection />
        </Container>
      </section>
      <section
        id="faq"
        className="w-full h-fit min-h-screen bg-[#F4F7FF]"
      >
        <Container>
          <FaqsSection />
        </Container>
      </section>
      <footer
        id="faq"
        className="w-full h-fit bg-[#F4F7FF]"
      >
        <Container>
          <FooterSection />
        </Container>
      </footer>
    </>
  );
}
