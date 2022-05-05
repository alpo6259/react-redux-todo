import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../../actions/actionsCreate';
import { CONSTANT_VALIDATION_SCHEMA } from '../../utils/validationShema';

import styles from './Todo.module.scss';

function Todo (props) {
  const { create, isValid } = props;

  const initialValues = { name: '' };

  const handleSubmit = (values, formikBag) => {
    formikBag.resetForm();
    create(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={CONSTANT_VALIDATION_SCHEMA}
    >
      {formikProps => (
        <Form className={styles.inputAdd}>
          <div className={styles.inputAddDiv}>
            <Field
              className={styles.inputAddValue}
              name='name'
              type='text'
              placeholder='todo'
              autoFocus
            />
            <button className={styles.inputAddBtn} type='submit'>
              +
            </button>
          </div>

          <ErrorMessage
            className={styles.inputAddError}
            name='name'
            component='span'
          />
        </Form>
      )}
    </Formik>
  );
}
const mapStateToProps = ({ todoData }) => todoData;

const mapDispatchToProps = dispatch => ({
  create: values => {
    dispatch(createTodo(values));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
