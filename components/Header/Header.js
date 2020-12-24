import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import styled from "styled-components";

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

const Header = ({ title, subtitle, themeSelector }) => {
  return (
    <HeaderWrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>

      {themeSelector && (
        <ThemeOptionsWrapper>
          {[
            { type: "light", color: "#fff" },
            { type: "blue", color: "#192734" },
            { type: "green", color: "#78866b" },
            { type: "purple", color: "#7e4c74" },
          ].map((data) => (
            <ThemeDot key={data.type} backgroundColor={data.color} />
          ))}
        </ThemeOptionsWrapper>
      )}
    </HeaderWrapper>
  );
};

Header.defaultProps = {
  title: "Hi I'm Daniel Romero!",
  subtitle: "Personalize theme",
  themeSelector: true,
};

export default Header;
