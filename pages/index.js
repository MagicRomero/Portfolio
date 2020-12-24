import Head from "next/head";
import AboutMe from "@/components/AboutMe/AboutMe";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import Terminal from "@/components/Terminal/Terminal";
import styled from "styled-components";

const StyledMainContainer = styled.main`
  width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    width: 95%;
  }
`;

const StyledSection = styled.section`
  border-bottom: 1px solid var ${(props) => props.theme.borderColor};
  overflow: auto;
  margin-top: 1em;
  margin-bottom: 1em;
`;
const StyledSectionPrimary = styled(StyledSection)`
  background-color: ${(props) => props.theme.primaryBackgroundColor};
`;
const StyledSectionSecondary = styled(StyledSection)`
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Daniel Romero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMainContainer>
        <Header />

        <StyledSectionPrimary>
          <Terminal />
        </StyledSectionPrimary>

        <StyledSectionSecondary>
          <AboutMe />
        </StyledSectionSecondary>

        <StyledSectionPrimary>
          <Projects />
        </StyledSectionPrimary>
      </StyledMainContainer>
    </>
  );
}
