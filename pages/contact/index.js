import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import ContactForm from "@/components/ContactForm/ContactForm";
import { PortfolioLayout } from "@/components/layouts";
import { availableLocale } from "@/locales";

const ContactContainer = styled.section`
  & h3 {
    text-align: center;
  }
`;

const ContactPage = () => {
  const router = useRouter();

  const translations = availableLocale(router.locale || router.defaultLocale);

  return (
    <ContactContainer>
      <h3 className="">{translations["get_in_touch"]}</h3>
      <Link href="/">{translations["go_back"]}</Link>

      <ContactForm translations={translations} />
    </ContactContainer>
  );
};

ContactPage.getLayout = (page) => {
  return <PortfolioLayout {...page.props}>{page}</PortfolioLayout>;
};

export default ContactPage;
