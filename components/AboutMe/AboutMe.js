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
  }

  & ul li:first-child {
    margin-right: 0.4em;
    font-weight: bold;
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
          <section id="frontend">
            <ul>
              <li>Frontend</li>
              <li>
                <ToolIcon src={icons.frontend.html5} alt="html5" />
              </li>
              <li>
                <ToolIcon src={icons.frontend.css3} alt="css3" />
              </li>
              <li>
                <ToolIcon src={icons.frontend.javascript} alt="javascript" />
              </li>
              <li>
                <ToolIcon src={icons.frontend.typescript} alt="typescript" />
              </li>
              <li>
                <ToolIcon src={icons.frontend.react} alt="react" />
              </li>
              <li>
                <ToolIcon src={icons.frontend.jest} alt="jest" />
              </li>
            </ul>
          </section>
          <section id="backend">
            <ul>
              <li>Backend</li>
              <li>
                <ToolIcon src={icons.backend.php} alt="php" />
              </li>
              <li>
                <ToolIcon src={icons.backend.laravel} alt="laravel" />
              </li>
              <li>
                <ToolIcon src={icons.backend.node} alt="node" />
              </li>
              <li>
                <ToolIcon src={icons.backend.mysql} alt="mysql" />
              </li>
            </ul>
          </section>
          <section id="backend">
            <ul>
              <li>General</li>
              <li>
                <ToolIcon src={icons.general.terminal} alt="terminal" />
              </li>
              <li>
                <ToolIcon src={icons.general.git} alt="git" />
              </li>
            </ul>
          </section>
        </Skills>
      </AboutMeColumn>
    </AboutMeWrapper>
  );
};

export default AboutMe;
