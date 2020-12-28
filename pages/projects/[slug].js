import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { PortfolioLayout } from "@/components/layouts";
import { availableLocale } from "@/locales";

const ProjectDetailPage = ({ project }) => {
  const router = useRouter();
  const translations = availableLocale(router.locale || router.defaultLocale);

  if (project) {
    const detail = translations.projects[project.translation_key];

    return <section>el proyecto {router.query.slug}</section>;
  }

  return <p>no encontrao</p>;
};

export const getServerSideProps = async (ctx) => {
  if (ctx.req?.headers) {
    const protocol =
      process.env.NODE_ENV === "production" ? "https://" : "http://";

    const url = `${protocol}${ctx.req.headers.host}/api/projects/${ctx.query.slug}`;

    const response = await fetch(url, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const project = await response.json();

    return { props: { project } };
  }

  return {props: {project: null}};
};

ProjectDetailPage.getLayout = (page) => {
  return <PortfolioLayout {...page.props}>{page}</PortfolioLayout>;
};

export default ProjectDetailPage;
