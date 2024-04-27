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
              <meta name="description" content="Alfadog is a rapidly growing community aiming to become one of the most popular in the crypto world. " />
              <link rel="shortcut icon" href="/img/favicon.ico" />
          </Head>
          <Header />
          <About />
          <div className="relative w-full h-full">
            <div className="opacity-25 absolute h-full w-full bg-no-repeat bg-cover bg-[url('/img/00General/bg.webp')]"></div>
            <Tokenomics />
            <Partners />
          </div>
          <Roadmap />
          <Footer />
        </>
    );
}
