import Head from "next/head";
import styled from "styled-components";
import AboutMe from "@/components/AboutMe/AboutMe";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import Terminal from "@/components/Terminal/Terminal";
import { useRouter } from "next/router";
import { availableLocale } from "@/locales";
import { PortfolioLayout } from "@/components/layouts/PortofolioLayout";

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

const Home = () => {
  const router = useRouter();

  const translations = availableLocale(router.locale || router.defaultLocale);

  return (
    <>
      <Head>
        <title>Portfolio - Daniel Romero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMainContainer>
        <Header translations={translations} />

        <StyledSectionPrimary>
          <Terminal translations={translations} />
        </StyledSectionPrimary>

        <StyledSectionSecondary>
          <AboutMe translations={translations} />
        </StyledSectionSecondary>

        <StyledSectionPrimary>
          <Projects translations={translations} />
        </StyledSectionPrimary>
      </StyledMainContainer>
    </>
  );
};

Home.getLayout = (page) => {
  return <PortfolioLayout {...page.props}>{page}</PortfolioLayout>;
};

export default Home;
