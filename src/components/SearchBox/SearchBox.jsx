import React from "react";
import { Field, Form, Formik } from "formik";
import style from "../SearchBox/SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <Formik initialValues={{ search: value }} onSubmit={() => {}}>
      <Form>
        <div className={style.wrapSB}>
          <label htmlFor="name">Find contacts by name</label>
          <Field
            type="text"
            id="search"
            name="search"
            placeholder="Search contacts..."
            value={value}
            onChange={onChange}
          />
        </div>
      </Form>
    </Formik>
  );
};

export default SearchBox;
