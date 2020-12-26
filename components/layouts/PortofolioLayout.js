import styled from "styled-components";
import dynamic from "next/dynamic";
import ReactCountryFlag from "react-country-flag";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SelectNoSSR = dynamic(() => import("react-select"), { ssr: false });

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 0 1em;

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

const PortfolioLayout = ({ children }) => {
  const router = useRouter();
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
      <Nav>
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
    </>
  );
};

export default PortfolioLayout;
