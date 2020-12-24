import { ThemeProvider } from "styled-components";
import { GlobalContext, ContextProvider } from "@/lib/context.js";
import { theme, GlobalStyles } from "@/styles/theme.js";

// const MainContainer = styled.main`
// background:{({theme}) => theme.primaryBackgroundColor};
// `;

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <GlobalContext.Consumer>
        {(value) => (
          <ThemeProvider theme={theme[value.theme]}>
            <GlobalStyles />
            <Component {...pageProps} />
          </ThemeProvider>
        )}
      </GlobalContext.Consumer>
    </ContextProvider>
  );
}

export default MyApp;
