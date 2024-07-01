import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

import styles from "./ContactStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import { useTheme } from "../ThemeContext";

const FieldRequired = () => <span role='alert'>This field is required</span>;

const SuccessEmail = (theme) => (
  <span role='status'>
    <img
      src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
      alt='Checkmark icon'
    />
    Email Successfully sent.
  </span>
);

function Contact() {
  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isDisabled, setIsDisabled] = useState(false);
  const [isError, setIsError] = useState("");
  const [isEmailed, setIsEmailed] = useState(false);

  const onSubmit = ({ name, email, message }) => {
    setIsDisabled(true);
    const {
      VITE_SERVICE_ID,
      VITE_TEMPLATE_ID,
      VITE_USER_ID,
      VITE_EMAIL_URL,
      VITE_MSG_DURATION,
    } = import.meta.env;
    const body = {
      service_id: VITE_SERVICE_ID,
      template_id: VITE_TEMPLATE_ID,
      user_id: VITE_USER_ID,
      template_params: {
        from_name: name,
        message: message,
        reply_to: email,
      },
    };
    axios
      .post(VITE_EMAIL_URL, body)
      .then((data) => {
        if (data.status == 200) {
          setIsEmailed(true);
          reset();

          setTimeout(() => {
            setIsEmailed(false);
          }, VITE_MSG_DURATION);
        }
      })
      .catch((error) => {
        if (error) {
          setIsEmailed(false);
          setIsError("Email was not sent, please try again.");

          setTimeout(() => {
            setIsError("");
          }, VITE_MSG_DURATION);
        }
      })
      .finally(() => {
        setIsDisabled(false);
      });
  };
  return (
    <section id='contact' className={styles.container}>
      <h1 className='sectionTitle'>Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='formGroup'>
          <label htmlFor='name' hidden>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            {...register("name", { required: true })}
          />
          <div className={styles.formError}>
            {errors.name && <FieldRequired />}
          </div>
        </div>
        <div className='formGroup'>
          <label htmlFor='email' hidden>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            {...register("email", { required: true })}
          />
          <div className={styles.formError}>
            {errors.email && <FieldRequired />}
          </div>
        </div>
        <div className='formGroup'>
          <label htmlFor='message' hidden>
            Message
          </label>
          <textarea
            name='message'
            id='message'
            placeholder='Message'
            {...register("message", { required: true })}
          />
          <div className={styles.formError}>
            {errors.message && <FieldRequired />}
          </div>
        </div>
        <input
          className={!isDisabled ? "hover btn" : "disabled btn"}
          type='submit'
          value='Submit'
          disabled={isDisabled}
        />
        <div className={styles.formSuccess}>
          {isEmailed ? <SuccessEmail theme={theme} /> : null}
        </div>
        <div className={styles.formError}>
          {isError ? <span>{isError}</span> : null}
        </div>
      </form>
    </section>
  );
}

export default Contact;
