import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

const ProjectDetailPage = ({ project }) => {
  const router = useRouter();

  return <section>el proyecto {router.query.slug}</section>;
};

ProjectDetailPage.getInitialProps = async (ctx) => {
  const response = await fetch(`/api/projects/${ctx.query.slug}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const project = await response.json();

  return { project };
};

export default ProjectDetailPage;
