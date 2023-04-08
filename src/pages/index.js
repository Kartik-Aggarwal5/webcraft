import Ellipses from "@/components/ellipses";
import StructuredData from "@/components/structured-data";
import Cta from "@/layout/cta";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import Hero from "@/layout/hero";
import MainFeatures from "@/layout/main-features";
import SecondaryFeautes from "@/layout/secondary-features";
import Head from "next/head";

const Index = () => {
  const data = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: "Webcraft",
    url: "https://www.webcraft.works/",
    description:
      "Webcraft is an AI-based platform optimized for the IBDP curriculum, offering personalized support and accurate resources for students.",
    keywords:
      "IBDP, AI, chatbot, education, academic support, TOK, lab reports, IAs, personalized, reliable, accurate, dedicated prompts, data set, student success, academic resources",
    author: {
      "@type": "Person",
      name: "Kartik Aggarwal",
    },
  };

  return (
    <div className="w-screen text-white min-h-screen">
      <Head>
        <title>Webcraft</title>
        <meta
          name="description"
          content="Webcraft is the world's first AI platform optimized for the IBDP curriculum, offering personalized support and accurate resources for students."
        />

        <StructuredData data={data} />
      </Head>
      <Ellipses />

      <Header />
      <Hero />
      <MainFeatures />
      <SecondaryFeautes />
      <Cta />
      <Footer />
    </div>
  );
};

export default Index;
