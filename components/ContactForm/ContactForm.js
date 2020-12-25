import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";
import "isomorphic-fetch";

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
const BaseInputFieldStyles = css`
  width: 100%;
  padding: 0.8em 0.8em;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.borderColor};
  font-size: 14px;
`;

const InputField = styled.input.attrs((props) => ({
  autofocus: props.autoFocus || false,
  id: props.id,
  required: props.required || true,
  type: props.type || "text",
  name: props.name,
}))`
  ${BaseInputFieldStyles}
`;

const TextAreaField = styled.textarea.attrs((props) => ({
  rows: props.rows || 15,
  id: props.id,
  required: props.required || true,
  name: props.name,
}))`
  ${BaseInputFieldStyles}
  resize:none;
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
  const { register, handleSubmit, formState, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      console.log(result.json());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <InputField
        autoFocus
        ref={register({
          required: "Invalid name",
          pattern: /^[\w\s]*$/,
        })}
        id="name"
        type="text"
        name="name"
      />

      <label htmlFor="subject">Subject</label>
      <InputField
        ref={register({
          required: "Invalid subject",
          pattern: /^[\w\s]*$/,
        })}
        id="subject"
        type="text"
        name="subject"
      />

      <label htmlFor="email">Email</label>
      <InputField
        ref={register({
          required: "Invalid email",
          pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        })}
        id="email"
        type="email"
        name="email"
      />

      <label htmlFor="message">Message</label>
      <TextAreaField
        ref={register({
          required: "Invalid subject",
          pattern: /^[\w\s]*$/,
        })}
        rows="15"
        id="message"
        name="message"
      ></TextAreaField>

      <SubmitInputField type="submit" value="Send" />
    </Form>
  );
};

export default ContactForm;
