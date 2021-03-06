import Link from "next/link";
import styled from "styled-components";
import { renderTechnologyIconsFromProject } from "@/data/images";
import { CommonButton } from "@/components/Common/StyledComponents";
import { CustomImage } from "@/components/Common/StyledComponents";
import { OptimizedImage } from "../Common";

const MainWrapper = styled.div`
  padding: 1em;

  & h3 {
    text-align: center;
  }

  & h5 {
    margin-top: 0;
  }
`;

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  gap: 25px;
  justify-content: center;
  padding-bottom: 50px;
`;

const Card = styled.div`
  height: fit-content;
  margin-bottom: 1.25rem;
  border: 0;
  border-radius: 0.625rem;
  box-shadow: 6px 11px 41px -28px #a99de7;
  word-wrap: break-word;
  background: ${(props) => props.theme.secondaryBackgroundColor};
`;

const CardImage = styled(CustomImage)`
  width:100%;
  border-style: none;
`;

const CardBody = styled.div`
  padding: 1.88rem 1.81rem;
  flex: 1 1 auto;
`;

const CardTitle = styled.h5`
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 0.75rem;
`;

const CardText = styled.p`
  &:last-child {
    margin-bottom: 0;
    margin-top: 0;
  }
`;

const CardFooter = styled.div`
  background: white;
  padding: 0.75rem 1.25rem;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  flex-direction: column;
  align-content: center;

  &:last-child {
    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
  }

  & span {
    color: ${(props) => props.theme.buttonColor};
  }
`;

const CardProjectTechnologies = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 0.5em;
  padding-bottom: 0.5em;

  & img {
    margin: 0 0.4rem;
  }
`;

const CardLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ProjectCard = ({ project, translations }) => {
  const detail = translations.projects[project.translation_key];
  return (
    <Card>
      <OptimizedImage category="projects" name={`${project.images_key}/thumbnail`} alt={detail.name}>
        <CardImage />
      </OptimizedImage>
      <CardBody>
        <CardTitle>{detail.name}</CardTitle>
        <CardText>{detail.description}</CardText>
      </CardBody>
      <CardFooter>
        <CardProjectTechnologies>
          {renderTechnologyIconsFromProject(project)}
        </CardProjectTechnologies>
        <CardLinks>
          <CommonButton
            as="a"
            href={project.demo}
            rel="noopener noreferrer"
            target="_blank"
          >
            {translations.demo}
          </CommonButton>
          <Link
            href={`/projects/${encodeURIComponent(project.slug)}`}
            getServerSideProps
          >
            {translations.detail}
          </Link>
        </CardLinks>
      </CardFooter>
    </Card>
  );
};

const Projects = ({ translations, projects = [] }) => {
  return (
    <MainWrapper>
      <h3>Projects</h3>
      <ProjectsWrapper>
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            translations={translations}
          />
        ))}
      </ProjectsWrapper>
    </MainWrapper>
  );
};

export default Projects;
