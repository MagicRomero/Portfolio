import SEO from "@/next-seo.config";
import { ThemeProvider } from "styled-components";
import { GlobalContext, ContextProvider } from "@/lib/context.js";
import { theme, GlobalStyles } from "@/styles/theme.js";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  
  return (
    <ContextProvider>
      <GlobalContext.Consumer>
        {(value) => (
          <ThemeProvider theme={theme[value.theme]}>
            <GlobalStyles />
            <DefaultSeo {...SEO} />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        )}
      </GlobalContext.Consumer>
    </ContextProvider>
  );
}

export default MyApp;
