import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form className={styles["contact-form"]}>
      <label htmlFor="name">Name</label>
      <input
        autoFocus
        required
        id="name"
        className={styles["input-field"]}
        type="text"
        name="name"
      />

      <label htmlFor="subject">Subject</label>
      <input
        required
        id="subject"
        className={styles["input-field"]}
        type="text"
        name="subject"
      />

      <label htmlFor="email">Email</label>
      <input
        required
        id="email"
        className={styles["input-field"]}
        type="email"
        name="email"
      />

      <label htmlFor="message">Message</label>
      <textarea
        rows="15"
        id="message"
        className={styles["input-field"]}
        name="message"
      ></textarea>

      <input
        required
        id="submit-btn"
        className={styles["submit-btn"]}
        type="submit"
        value="Send"
      />
    </form>
  );
};

export default ContactForm;
