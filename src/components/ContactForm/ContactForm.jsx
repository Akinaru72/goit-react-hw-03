import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .required('The "Name" is required field!')
    .min(3, `The "Name" is too short!`)
    .max(50, `The "Name" is too long!`),
  number: Yup.string()
    .required('The "Number" is required field!')
    .min(3, `The "Number" is too short!`)
    .max(50, `The "Number" is too long!`),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    onAdd({
      ...values,
      id: nanoid(),
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <Field className={css.input} type="text" name="name" />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label className={css.label} htmlFor="number">
          Number
        </label>
        <Field className={css.input} type="tel" name="number" />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
