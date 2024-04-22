import Header from "@/components/01Header";
import About from "@/components/02About";
import Tokenomics from "@/components/03Tokenomics";
import Partners from "@/components/04Partners";
import Roadmap from "@/components/05Roadmap";
import Footer from "@/components/06Footer";
import Head from "next/head";

export default function Home() {
    return (
        <>
          <Head>
              <title>Alfadog</title>
              <meta httpEquiv="content-language" content="en" />
              <meta name="description" content="" />
              <link rel="shortcut icon" href="/img/favicon.png" />
          </Head>
          <Header />
          <About />
          <Tokenomics />
          <Partners />
          <Roadmap />
          <Footer />
        </>
    );
}
