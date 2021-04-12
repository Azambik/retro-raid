// see SignupForm.js for comments
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from "../../utils/mutations"
import Auth from '../../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ username: '', password: '' });
  //const [formState, setFormState] = useState({ email: '', password: '' })
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login] = useMutation(LOGIN);
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  /*const handleFormSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }*/
    const handleFormSubmit = async event => {
      event.preventDefault();
      try {
        const mutationResponse = await login({ variables: { email: userFormData.email, password: userFormData.password } })
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e)
      }
    };
/*
    setValidated(true);

    try {
      const { data } = await login({
        variables: { ...userFormData }
      });  

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      password: '',
    });
  };*/

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Character not found!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='username'>Your Character</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your Character'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>That's not a real hero!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Your Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Wrong password!</Form.Control.Feedback>
        </Form.Group>
        <Button
         // disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;