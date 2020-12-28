import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { PortfolioLayout } from "@/components/layouts";

const ProjectDetailPage = ({ project }) => {
  const router = useRouter();

  return <section>el proyecto {router.query.slug}</section>;
};

ProjectDetailPage.getInitialProps = async (ctx) => {
  console.log("context ", ctx)
  const response = await fetch(`/api/projects/${ctx.query.slug}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const project = await response.json();

  return { project };
};

ProjectDetailPage.getLayout = (page) => {
  return <PortfolioLayout {...page.props}>{page}</PortfolioLayout>;
};
export default ProjectDetailPage;
