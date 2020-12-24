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
  scroll-behavior: smooth;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
  font-family: "Russo One", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100vw;
  height: 100vh;
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
  font-size: 56px;
}
h2 {
  font-size: 36px;
}
h3 {
  font-size: 28px;
}
h4 {
  font-size: 24px;
}
h5 {
  font-size: 20px;
}
h6 {
  font-size: 16px;
}

a {
  text-decoration: none;
  color: #17a2b8;
}

.button {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.button:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.button-primary {
  color: #fff;
  background-color: #7571f9;
  border-color: #7571f9;
}

.button-primary:hover {
  background: #4540f7;
  color: #fff;
  border-color: #4540f7;
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
