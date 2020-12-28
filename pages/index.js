import Head from "next/head";
import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import AboutMe from "@/components/AboutMe/AboutMe";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import Terminal from "@/components/Terminal/Terminal";
import { useRouter } from "next/router";
import { availableLocale } from "@/locales";
import { PortfolioLayout } from "@/components/layouts";

const StyledMainContainer = styled.div`
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

const Home = ({projects}) => {
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
          <Projects translations={translations} projects={projects || []}/>
        </StyledSectionPrimary>
      </StyledMainContainer>
    </>
  );
};

Home.getLayout = (page) => {
  return <PortfolioLayout {...page.props}>{page}</PortfolioLayout>;
};

export const getServerSideProps = async (ctx) => {
  if (ctx.req?.headers) {
    const protocol =
      process.env.NODE_ENV === "production" ? "https://" : "http://";

    const url = `${protocol}${ctx.req.headers.host}/api/projects`;

    const response = await fetch(url, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();

    return { props: { projects: data.projects || [] } };
  }

  return { props: { projects: [] } };
};


export default Home;
