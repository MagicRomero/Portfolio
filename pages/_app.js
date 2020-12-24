import { ThemeProvider } from "styled-components";
import theme from "../styles/theme.js";
import "../styles/globals.css";

// const MainContainer = styled.main`
// background:{({theme}) => theme.primaryBackgroundColor};
// `;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme.light}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
