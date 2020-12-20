import Head from "next/head";
import AboutMe from "../components/AboutMe/AboutMe";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import Terminal from "../components/Terminal/Terminal";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Romero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-container">
        <Header title="Hi, I'm Romero!" />

        <section className="section-first-type">
           <Terminal />
        </section>

        <section className="section-second-type">
           <AboutMe />
        </section>

        <section className="section-first-type">
          <Projects />
        </section>
      </main>
    </>
  );
}
