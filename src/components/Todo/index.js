import classNames from 'classnames';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { createTodoAction } from '../../actions/actionsCreate';
import { CONSTANT_VALIDATION_SCHEMA } from '../../utils/validationShema';
import styles from './Todo.module.scss';


function Todo (props) {
  const { create } = props;

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
      {formikProps => {
        const inputClassNames = classNames(styles.inputAddValue, {
          [styles.inputValid]:
            !formikProps.errors.name && !formikProps.touched.name,
          [styles.inputInvalid]:
            formikProps.errors.name && formikProps.touched.name,
        });

        return (
          <Form className={styles.inputAdd}>
            <div className={styles.inputAddDiv}>
              <Field
                className={inputClassNames}
                name='name'
                type='text'
                placeholder='todo'
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
        );
      }}
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  create: values => {
    dispatch(createTodoAction(values));
  },
});

export default connect(null, mapDispatchToProps)(Todo);
