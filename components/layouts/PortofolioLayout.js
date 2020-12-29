import Link from "next/link";
import dynamic from "next/dynamic";
import styled from "styled-components";
import ReactCountryFlag from "react-country-flag";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "@/lib/context";

const SelectNoSSR = dynamic(() => import("react-select"), { ssr: false });

/**
 * Este wrapper es para forzar al footer a siempre estar al fondo del viewport
 * se le resta la altura del footer y este ultimo se coloca fuera de este wrapper.
 */
const PageWrapper = styled.main`
  min-height: calc(100vh - 85px);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1em;

  background: ${(props) => props.theme.previewShadow};
  box-shadow: 6px 11px 41px -28px #a99de7;

  & ul {
    margin-left: auto;
  }

  & #language-selector {
    width: 100%;
    min-width: 150px;
  }

  & ul li#language {
    min-width: 120px;
  }
`;

const LanguageLabel = styled.span`
  margin-left: 0.3em;
  vertical-align: center;
  color: ${(props) => props.theme.buttonColor};
`;

const Footer = styled.footer`
  height: auto;
  max-height: 85px;
  margin-top: auto;
  padding: 1em 4em;
  text-align: center;
  background: ${(props) => props.theme.previewShadow};
  box-shadow: 6px 11px 41px -28px #a99de7;
  line-height: 1.35;

  & a {
    margin-left: 0.5em;
  }
`;

const PortfolioLayout = ({ children }) => {
  const router = useRouter();

  const context = useContext(GlobalContext);
  const translations = context.translations;

  const [languageOptions, setLanguageOptions] = useState([]);
  const [defaultLanguage, setDefaultLanguage] = useState({});

  useEffect(() => {
    localeSelectorOptions();
  }, []);

  const changeLanguage = (locale) => {
    if (router.locales.includes(locale.value)) {
      router.push(router.pathname, router.asPath, { locale: locale.value });
    }
  };

  const defaultSelectorLanguage = (options) => {
    const defaultLanguage = options.find(
      (option) => option.value === router.locale
    );


    setDefaultLanguage(defaultLanguage);
  };

  const localeSelectorOptions = () => {
    const options = router.locales.map((locale) => {
      let upperLocale = locale.toLocaleUpperCase();

      if (locale == "en") {
        upperLocale = "GB";
      }

      return {
        value: locale,
        label: (
          <>
            <ReactCountryFlag
              countryCode={upperLocale}
              title={upperLocale}
              svg
              cdnSuffix="svg"
              style={{
                width: "1.5em",
                height: "1.5em",
              }}
            />

            <LanguageLabel>{upperLocale}</LanguageLabel>
          </>
        ),
      };
    });

    defaultSelectorLanguage(options);
    setLanguageOptions(options);

  };

  return (
    <>
      <PageWrapper>
        <Nav>
          {router.pathname !== "/" && (
            <Link href="/">{translations.go_back}</Link>
          )}

          <ul>
            <li id="language">
              <SelectNoSSR
                inputId="react-no-ssr-language-selector"
                instanceId="react-language-selector"
                onChange={changeLanguage}
                defaultValue={defaultLanguage}
                options={languageOptions}
              />
            </li>
          </ul>
        </Nav>
        {children}
      </PageWrapper>
      <Footer>
        <p>
          {translations.footer}
          <a
            href="https://www.dennisivy.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dennis Ivy
          </a>
        </p>
      </Footer>
    </>
  );
};

export default PortfolioLayout;
