import styled from "styled-components";
import icons from "@/data/tools";

const AboutMeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  padding-bottom: 50px;
  padding-top: 50px;
  gap: 100px;
  padding: 2em;
`;
const AboutMeColumn = styled.div`
  & h4 {
    margin-top: 1em;
  }
`;
const Skills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.5em;
  background-color: ${(props) => props.theme.previewShadow};

  & ul {
    padding-left: 0.5em;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap:wrap;
  }

  & ul li:first-child {
    margin-right: 0.4em;
    font-weight: 500;
    font-family: Russo One, monospace;
    font-size: 1.2em;
  }

  & ul li {
    margin: 0 0.5em;
  }
  @media screen and (max-width: 800px) {
    margin-top: 0;
  }
`;

const ToolIcon = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
  width: props.width || "45",
  height: props.height || "45",
}))`
  height: auto;
`;

const ToolList = ({ title, iconset, tools }) => {
  return (
    <section id={title}>
      <ul>
        <li>{title}</li>
        {tools.map((tool) => (
          <li key={tool}>
            <ToolIcon src={icons[iconset][tool]} alt={tool} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <AboutMeColumn>
        <h4>More about me</h4>
        <p>
          I build new projects just to tickle my brain and love teaching others
          how they're made.
        </p>

        <p>
          While I keep busy teaching courses, I still take interviews in search
          of a great team & projects that interest me.
        </p>
      </AboutMeColumn>
      <AboutMeColumn>
        <h4>Top Expertise</h4>
        <Skills>
          <ToolList
            title="Frontend"
            iconset="frontend"
            tools={[
              "html5",
              "css3",
              "javascript",
              "typescript",
              "react",
              "jest",
            ]}
          />
          <ToolList
            title="Backend"
            iconset="backend"
            tools={["php", "laravel", "node", "mysql"]}
          />
          <ToolList
            title="General"
            iconset="general"
            tools={["terminal", "git"]}
          />
        </Skills>
      </AboutMeColumn>
    </AboutMeWrapper>
  );
};

export default AboutMe;
