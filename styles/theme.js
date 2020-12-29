import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
 ${normalize}

* {
  box-sizing: border-box;
}

html,
body {
  background: ${(props) => props.theme.primaryBackgroundColor};
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeLegibility;
  font-family: "Russo One", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  overflow-x: hidden; 
}

body * {
  transition: 0.3s;
}

a {
  color: inherit;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
  color: ${(props) => props.theme.primaryTextColor};
  font-family: "Russo One", sans-serif;
  font-weight: 500;
}

p,
li,
span,
label,
input,
textarea {
  color: ${(props) => props.theme.secondaryTextColor};
  font-family: "Roboto Mono", monospace;
}

ul {
  list-style: none;
}

h1 {
  font-size: 3.5rem;
}
h2 {
  font-size: 2.25rem;
}
h3 {
  font-size: 1.75rem;
}
h4 {
  font-size: 1.5rem;
}
h5 {
  font-size: 1.25rem;
}
h6 {
  font-size: 1rem;
}

a {
  text-decoration: none;
  color: #17a2b8;
}

@media screen and (max-width: 680px) {
  h1 {
    font-size: 2.25rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.25rem;
  }
  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: 0.85rem;
  }
}
`;

export const theme = {
  light: {
    primaryBackgroundColor: "#eaeaea",
    secondaryBackgroundColor: "#fff",
    borderColor: "#c1c1c1",
    themeDotBorder: "#24292e",
    primaryTextColor: "#000",
    secondaryTextColor: "#28292b",
    previewBackground: "rgb(251, 249, 243, 0.8)",
    previewShadow: "#f0ead6",
    buttonColor: "#000",
    hoverButtonColor: "#514c4c",
  },
  blue: {
    primaryBackgroundColor: "#15202b",
    secondaryBackgroundColor: "#192734",
    borderColor: "#164d56",
    themeDotBorder: "#fff",
    primaryTextColor: "#fff",
    secondaryTextColor: "#eeeeee",
    previewBackground: "rgb(25, 39, 52, 0.8)",
    previewShadow: "#111921",
    buttonColor: "#17a2b8",
    hoverButtonColor: "#38c1d6",
  },
  green: {
    primaryBackgroundColor: "#606b56",
    secondaryBackgroundColor: "#515a48",
    borderColor: "#161914",
    themeDotBorder: "#fff",
    primaryTextColor: "#fff",
    secondaryTextColor: "#eeeeee",
    previewBackground: "rgb(81, 90, 72, 0.8)",
    previewShadow: "#2a2f25",
    buttonColor: "#669966",
    hoverButtonColor: "#8cc18c",
  },
  purple: {
    primaryBackgroundColor: "#46344e",
    secondaryBackgroundColor: "#382a3f",
    borderColor: "#1d1520",
    themeDotBorder: "#fff",
    primaryTextColor: "#fff",
    secondaryTextColor: "#eeeeee",
    previewBackground: "rgb(29, 21, 32, 0.8)",
    previewShadow: "#2b202f",
    buttonColor: "#8534a3",
    hoverButtonColor: "#be6fdb",
  },
};
