import Link from "next/link";
import ContactForm from "../../components/ContactForm/ContactForm";

const ContactPage = () => {
  return (
    <section className="contact-container">
      <h3 className="">Get In Touch</h3>
      <ContactForm />

      <Link href="/">Take me back</Link>
    </section>
  );
};

export default ContactPage;
