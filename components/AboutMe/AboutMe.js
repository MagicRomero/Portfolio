import styled from "styled-components";

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
  justify-content: space-evenly;
  padding: 0.5em;
  background-color: ${(props) => props.theme.previewShadow};

  & ul {
    padding-left: 0.5em;
  }

  @media screen and (max-width: 800px) {
    margin-top: 0;
  }
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
          <ul>
            <li>Python</li>
            <li>Django</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Postgres</li>
          </ul>

          <ul>
            <li>Google Maps API</li>
            <li>JS Charts</li>
            <li>AWS (RDS/S3)</li>
            <li>Heroku</li>
            <li>HTML/CSS</li>
          </ul>
        </Skills>
      </AboutMeColumn>
    </AboutMeWrapper>
  );
};

export default AboutMe;
