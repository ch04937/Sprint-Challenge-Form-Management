import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'




const RegistrationForm = ({ errors, touched, status }) => {
  const [ users, setUsers ]= useState([]);
  console.log('users', users)

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);


  return (
    <div>
      <h1> Registration Form </h1>
      <Form >
        <Field  type='text' name='name' placeholder='Name' />
        {touched.name && errors.name && <p className>{errors.name}</p>}

        <Field  name='password' placeholder='Password' />
        {touched.password && errors.password && <p className>{errors.password}</p>}

        <button type='submit'> Sign UP  </button>
      </Form>
      {users.map(user => (
      <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};


const FormikRegistrationForm = withFormik({
  mapPropsToValues({ name, password }){
    return{
      name: name ||'',
      password: password || '',
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    password: Yup.string().required(),
  }),

  handleSubmit(values, { setStatus }){
    axios
    .post('http://localhost:5000/api/register', values)
    .then(res => {
      setStatus(res.data);
    })
    .catch(err => console.log(err.message));
  }

})(RegistrationForm); //currying funtions in JavaScript

export default FormikRegistrationForm;
