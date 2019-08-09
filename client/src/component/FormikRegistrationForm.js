import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import './Form.css';


function RegistrationForm({ errors, touched, values, status }) {
  const [ users, setUsers ]= useState([]);
  const [ login, setLogin ]= useState(false);

  useEffect(() => {
    if (status) {
      axios
      .get("http://localhost:5000/api/restricted/data")
      .then(res => setUsers(res.data));
      setUsers([...users, status]);
      setLogin(true)
    }
  }, [status]);
  if(login === false){
    return (
        <Form className='form'>
        <div>
            {touched.username && errors.username && <p>{errors.username}</p>}
            <Field type="username" name="username" placeholder="Username" />
        </div>
        <div>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />
        </div>
        <button>Submit!</button>
        {users.map(user => (
          <h1 key ={user.id}>Welcome: {user.name}</h1>

        ))}

        </Form>
    );

}else{
    console.log("succesfully entered")
    return(
        <div>
            {users.map(user =>(
            <div className='recipes-cards'>
                <h1>Recipes</h1>
                <h3>{user.name}</h3>
                <p>{user.course}</p>
                <p>{user.main}</p>
                <p>{user.technique}</p>
            </div>
        ))}
        </div>
    )
}
}

const FormikRegistrationForm = withFormik({
mapPropsToValues({ username, password }) {
return {
  username: username || "",
  password: password || "",
};
},

validationSchema: Yup.object().shape({
username: Yup.string()
  .required("Username is required"),
password: Yup.string()
  .required("Password is required")
}),

handleSubmit(values,{resetForm, setSubmitting, setStatus}) {
console.log(values);
axios
    .post("http://localhost:5000/api/register", values)
    .then(res => {
    console.log(res);
    setStatus(res.data)
    resetForm();
    setSubmitting(false);
    })
    .catch(err => {
    console.log(err.response); 
    setSubmitting(false);
    });

  }
})(RegistrationForm); 

export default FormikRegistrationForm;
