import Head from "next/head";
import AboutMe from "../components/AboutMe/AboutMe";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import Terminal from "../components/Terminal/Terminal";
import styled from "styled-components";

const StyledMainContainer = styled.section`
  width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    width: 95%;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Daniel Romero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMainContainer>
        <Header title="Hi, I'm Romero!" />
        {/*
        <section className="section-first-type">
          <Terminal />
        </section>

        <section className="section-second-type">
          <AboutMe />
        </section>

        <section className="section-first-type">
          <Projects />
        </section> */}
      </StyledMainContainer>
    </>
  );
}
