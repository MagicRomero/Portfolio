import dynamic from "next/dynamic";
import styled from "styled-components";
import { useRouter } from "next/router";
import { PortfolioLayout } from "@/components/layouts";
import { availableLocale } from "@/locales";
import {
  StyledMainContainer,
  StyledSectionSecondary,
} from "@/components/Common/StyledComponents";
import { renderTechnologyIconsFromProject } from "@/data/tools";

const Carousel = dynamic(() => import("styled-components-carousel"), {
  ssr: false,
});

const ProjectCard = styled.div`
  padding: 1em;
`;

const ProjectHeader = styled.header`
  text-align: center;
  text-transform: uppercase;

  & h2 {
    margin-bottom: 0.5em;
  }

  & img {
    margin: 0 0.4rem;
  }
`;

const ProjectStyledSection = styled(StyledSectionSecondary)`
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px 5px 0 0;
  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  overflow: hidden !important;
`;

const ProjectSliderCard = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0 0.5em;
`;

const SlideImage = styled.img.attrs((props) => ({
  alt: props.alt,
  src: props.src,
}))`
  width: 100%;
  height: auto;
  display: block;
`;

const ProjectDetailPage = ({ project }) => {
  const router = useRouter();
  const translations = availableLocale(router.locale || router.defaultLocale);

  if (project) {
    const detail = translations.projects[project.translation_key];

    return (
      <StyledMainContainer>
        <ProjectCard>
          <ProjectHeader>
            <h2>{detail.name}</h2>
            {renderTechnologyIconsFromProject(project, 40, 40)}
          </ProjectHeader>
          <ProjectStyledSection>
            <Carousel
              slidesToShow={3}
              center
              breakpoints={[
                {
                  size: 1280,
                  settings: {
                    slidesToShow: 3,
                    showArrows: true,
                    showIndicator: true,
                    swipeable: true,
                  },
                },
                {
                  size: 760,
                  settings: {
                    slidesToShow: 2,
                    showArrows: false,
                    showIndicator: true,
                    swipeable: true,
                  },
                },
                {
                  size: 480,
                  settings: {
                    slidesToShow: 1,
                    showArrows: false,
                    showIndicator: false,
                    swipeable: true,
                  },
                },
              ]}
            >
              {project.sliders &&
                project.sliders.images.map((name) => (
                  <ProjectSliderCard key={name}>
                    <SlideImage
                      src={`${project.sliders.basePath}/${name}.png`}
                      alt={name}
                    />
                  </ProjectSliderCard>
                ))}
            </Carousel>
          </ProjectStyledSection>
        </ProjectCard>
      </StyledMainContainer>
    );
  }

  return <p>no encontrao</p>;
};

export const getServerSideProps = async (ctx) => {
  let project = null;

  if (ctx.req?.headers) {
    const protocol =
      process.env.NODE_ENV === "production" ? "https://" : "http://";

    const url = `${protocol}${ctx.req.headers.host}/api/projects/${ctx.query.slug}`;

    const response = await fetch(url, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();

    project = data.project;
  }

  return { props: { project } };
};

ProjectDetailPage.getLayout = (page) => {
  return <PortfolioLayout {...page.props}>{page}</PortfolioLayout>;
};

export default ProjectDetailPage;
