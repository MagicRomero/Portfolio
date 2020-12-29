import Head from "next/head";
import fetch from "isomorphic-unfetch";
import AboutMe from "@/components/AboutMe/AboutMe";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import Terminal from "@/components/Terminal/Terminal";
import { useContext } from "react";
import { PortfolioLayout } from "@/components/layouts";
import {
  StyledMainContainer,
  StyledSectionPrimary,
  StyledSectionSecondary,
} from "@/components/Common/StyledComponents";
import { GlobalContext } from "@/lib/context";

const Home = ({ projects }) => {
  const context = useContext(GlobalContext);
  const { translations } = context;

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
          <Projects projects={projects || []} translations={translations} />
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
