import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../ContactForm/ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const contactSchema = Yup.object({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required")
      .trim(),
    number: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required")
      .trim(),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={styles.wrap}>
          <div className={styles.wraper}>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>
          <div className={styles.wraper}>
            <label htmlFor="number">Number</label>
            <Field type="text" id="number" name="number" />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.error}
            />
          </div>
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
