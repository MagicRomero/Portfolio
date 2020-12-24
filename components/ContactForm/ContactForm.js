import styled from "styled-components";

const Form = styled.form`
  display: block;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid var(--borderColor);
  padding: 15px;
  border-radius: 5px;
  background-color: var(--mainColor);
  margin-bottom: 50px;

  & label {
    line-height: 2.7em;
  }

  & textarea {
    min-height: 100px;
    font-size: 14px;
  }
`;

const InputField = styled.input.attrs((props) => ({
  autofocus: props.autoFocus || false,
  id: props.id,
  required: props.required || true,
  type: props.type || "text",
  name: props.name,
}))`
  width: 100%;
  padding: 0.8em 0.8em;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.borderColor};
  font-size: 14px;
`;

const TextAreaField = styled.textarea.attrs((props) => ({
  rows: props.rows || 15,
  id: props.id,
  required: props.required || true,
  name: props.name,
}))`
  width: 100%;
  padding: 0.8em 0.8em;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.borderColor};
  font-size: 14px;
`;

const SubmitInputField = styled(InputField)`
  margin-top: 10px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  background-color: ${(props) => props.theme.buttonColor};
  border: none;
  cursor: pointer;
  font-size: 1.25em;

  &:hover {
    background-color: ${(props) => props.theme.hoverButtonColor};
  }
`;

const ContactForm = () => {
  return (
    <Form>
      <label htmlFor="name">Name</label>
      <InputField autoFocus required id="name" type="text" name="name" />

      <label htmlFor="subject">Subject</label>
      <InputField required id="subject" type="text" name="subject" />

      <label htmlFor="email">Email</label>
      <InputField required id="email" type="email" name="email" />

      <label htmlFor="message">Message</label>
      <TextAreaField rows="15" id="message" name="message"></TextAreaField>

      <SubmitInputField required id="submit-btn" type="submit" value="Send" />
    </Form>
  );
};

export default ContactForm;
