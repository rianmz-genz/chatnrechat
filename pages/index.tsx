import Head from "next/head";
import Image from "next/image";
import Container from "../components/layout/Container";
import Navbar from "../components/navbar/Navbar";
import HomeSection from "../components/sections/HomeSection";
import Brands from "../components/brands/Brands";
import { ContentData } from "../store/ContentData";
import FeaturesCard from "../components/sections/FeaturesCard";
export default function Home() {
  const { featuresection } = ContentData;
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
        className="w-full h-fit min-h-screen  bg-gradient-to-b from-[#EEF2FF] via-[#EEF2FF] to-transparent"
      >
        <Container>
          <Navbar />
          <HomeSection />
          <Brands />
        </Container>
      </section>
      <section
        id="features"
        className="w-full text-center h-fit min-h-screen flex items-center  bg-gradient-radial  from-[#EEF2FF] via-[#EEF2FF]  to-transparent "
      >
        <Container>
          <p className="font-description font-semibold mb-3 text-[#0C1B4D]">
            {featuresection.toptitle}
          </p>
          <h1 className="text-2xl font-title text-[#0C1B4D]">
            {featuresection.title}
          </h1>
          <p className="font-description w-4/12 mx-auto mt-3 text-[#0C1B4D99]">
            {featuresection.description}
          </p>
          <div className="w-full flex ">
            {featuresection.features.map((feature) => (
              <FeaturesCard
                imageUrl={feature.imageUrl}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
