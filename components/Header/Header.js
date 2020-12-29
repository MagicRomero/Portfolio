import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "@/lib/context";

const HeaderWrapper = styled.div`
  display: grid;
  text-align: center;
  align-content: center;
  min-height: 10em;
  margin-bottom: 2.5em;
`;

const Title = styled.h1`
  margin-bottom: 0;
`;

const Subtitle = styled.h5`
  text-align: center;
  line-height: 0;
`;

const ThemeOptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ThemeDot = styled.div`
  height: 30px;
  width: 30px;
  background-color: black;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.themeDotBorder};

  margin: 5px;

  -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);

  cursor: pointer;

  transition: transform 0.2s;

  background-color: ${(props) => props.backgroundColor};

  &:hover {
    transform: scale(1.2);
  }
`;

const Header = ({ themeSelector }) => {
  const context = useContext(GlobalContext);
  const translations = context.translations;

  const updateTheme = (theme) => context.setTheme(theme);

  return (
    <HeaderWrapper>
      <Title>{translations.title}</Title>

      {themeSelector && (
        <>
          <Subtitle>{translations.subtitle}</Subtitle>

          <ThemeOptionsWrapper>
            {[
              { theme: "light", color: "#fff" },
              { theme: "blue", color: "#192734" },
              { theme: "green", color: "#78866b" },
              { theme: "purple", color: "#7e4c74" },
            ].map((data) => (
              <ThemeDot
                key={data.theme}
                backgroundColor={data.color}
                onClick={(event) => updateTheme(data.theme)}
              />
            ))}
          </ThemeOptionsWrapper>
        </>
      )}
    </HeaderWrapper>
  );
};

Header.defaultProps = {
  themeSelector: true,
};

export default Header;
