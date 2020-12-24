import Link from "next/link";
import styled from "styled-components";
import ContactForm from "@/components/ContactForm/ContactForm";

const ContactContainer = styled.section`
  & h3 {
    text-align: center;
  }
`;
const ContactPage = () => {
  return (
    <ContactContainer>
      <h3 className="">Get In Touch</h3>
      <Link href="/"> Take me back</Link>

      <ContactForm />
    </ContactContainer>
  );
};

export default ContactPage;
