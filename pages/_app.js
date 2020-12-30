import Head from "next/head";
import SEO from "@/next-seo.config";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
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
          <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY}
          >
            <ThemeProvider theme={theme[value.theme]}>
              <GlobalStyles />
              <Head>
                <meta
                  content="width=device-width, initial-scale=1"
                  name="viewport"
                />
              </Head>
              <DefaultSeo {...SEO} />
              {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
          </GoogleReCaptchaProvider>
        )}
      </GlobalContext.Consumer>
    </ContextProvider>
  );
}

export default MyApp;
