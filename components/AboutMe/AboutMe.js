import styled from "styled-components";
import icons from "@/data/tools";
import { ToolIcon } from "../Common";

const AboutMeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  padding-bottom: 50px;
  padding-top: 50px;
  gap: 100px;
  padding: 2em;

  & p {
    line-height: 1.20;
  }
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


const ToolList = ({ title, iconset, tools }) => {
  return (
    <section id={title}>
      <ul>
        <li>{title}</li>
        {tools.map((tool) => (
          <li key={tool}>
            <ToolIcon iconset={iconset} name={tool} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const AboutMe = ({translations}) => {
  return (
    <AboutMeWrapper>
      <AboutMeColumn>
        <h4>{translations.more_about_me}</h4>
        <p>
         {translations.about_me}.
        </p>

        <p>
          {translations.about_me_extended}.
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
