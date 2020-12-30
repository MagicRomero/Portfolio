import styled from "styled-components";
import ContactForm from "@/components/ContactForm/ContactForm";
import { useRouter } from "next/router";
import { PortfolioLayout } from "@/components/layouts";
import { availableLocale } from "@/locales";
import { NextSeo } from "next-seo";

const ContactContainer = styled.section`
  & h3 {
    text-align: center;
  }
`;

const ContactPage = () => {
  const router = useRouter();

  const translations = availableLocale(router.locale || router.defaultLocale);

  return (
    <>
      <NextSeo
        title={`Daniel Romero - ${translations.contact_seo_title}`}
        description={`Daniel Romero - ${translations.contact_seo_description}`}
      />
      <ContactContainer>
        <h3 className="">{translations["get_in_touch"]}</h3>
        <ContactForm translations={translations} />
      </ContactContainer>
    </>
  );
};

ContactPage.getLayout = (page) => {
  return <PortfolioLayout {...page.props}>{page}</PortfolioLayout>;
};

export default ContactPage;
