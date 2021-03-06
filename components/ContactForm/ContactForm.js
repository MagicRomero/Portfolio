import { useState } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";
import { SuccessAlert, DangerAlert, Alert } from '@/components/Common/StyledComponents'


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
  padding: 0.8em;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.borderColor};
  font-size: 14px;
`;

const InputField = styled.input.attrs((props) => ({
  autoFocus: props.autoFocus || false,
  id: props.id,
  required: props.required || false,
  type: props.type || "text",
  name: props.name,
  disabled: props.disabled || false,
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

  padding:0.4em 0.5em;
  resize: none;
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

const FormErrorMessage = styled.span`
  margin: 0.3em 0.5em;
  color: red;
  font-size: 0.8em;
`;

const ContactForm = ({ translations }) => {
  const { register, handleSubmit, formState, errors } = useForm();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' })

  const showAlert = () => {
    switch (alert.type) {
      case 'simple':
        return <Alert><p>{alert.message}</p></Alert>
      case 'danger':
        return <DangerAlert><p>{alert.message}</p></DangerAlert>
      case 'success':
        return <SuccessAlert><p>{alert.message}</p></SuccessAlert>
      default:
        return ''
    }


    return null;
  }
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setAlert({ type: '', message: '' });

      if (executeRecaptcha) {
        const token = await executeRecaptcha("homepage");

        if (!token) {
          return setAlert({ type: 'danger', message: translations.captcha_error })
        }

        const result = await fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        const response = await result.json();

        if (response.success) {
          setAlert({ type: 'success', message: translations.contact_success })
        }

        if (response.errors && response.errors.length) {
          setAlert({ type: 'danger', message: 'errors everywhere' })
        }
      }

      setLoading(false);

    } catch (error) {
      setLoading(false);
      setAlert({ type: 'danger', message: error })
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {showAlert()}

      <label htmlFor="name">{translations.name}</label>
      <FormErrorMessage>{errors.name?.message}</FormErrorMessage>

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
      <label htmlFor="subject">{translations.subject}</label>
      <FormErrorMessage>{errors.subject?.message}</FormErrorMessage>
      <InputField
        ref={register({
          required: "Invalid subject",
          pattern: /^[\w\s]*$/,
        })}
        id="subject"
        type="text"
        name="subject"
      />

      <label htmlFor="email">{translations.email}</label>
      <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      <InputField
        ref={register({
          required: false,
          pattern: {
            value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            message: "El email no tiene un formato correcto",
          },
        })}
        id="email"
        type="email"
        name="email"
      />

      <label htmlFor="message">{translations.contact_message}</label>
      <FormErrorMessage>{errors.body?.message}</FormErrorMessage>

      <TextAreaField
        ref={register({
          required: "Message is required",
          pattern: {
            value: /^[\w\s,.-_'+\(\)¡!¿?€ñÑ]*$/,
            message: "El mensaje tiene caracteres no permitidos",
          },
        })}
        rows="15"
        id="message"
        name="body"
      />

      <SubmitInputField
        type="submit"
        value={
          formState.isSubmitting || loading
            ? `${translations.sending}...`
            : translations.send
        }
        disabled={formState.isSubmitting || loading}
      />
    </Form>
  );
};



export default ContactForm;
