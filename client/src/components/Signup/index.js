import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';

import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Signup = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ userName: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };


  /*const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserFormData({
      userName: '',
      email: '',
      password: '',
    });
  };*/
  const handleFormSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    const mutationResponse = await addUser({
      variables: {
        userName: userFormData.userName, email: userFormData.email, password: userFormData.password,

      }
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  }

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
         {/* Small thing We may want to edit the newb part. Its funny but may come off as less profesional.*/}
          Your character wasn't created, sorry newb!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor='userName'>userName</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your userName'
            name='userName'
            onChange={handleInputChange}
            value={userFormData.userName}
            required
          />
          <Form.Control.Feedback type='invalid'>Character name is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='email'>Your Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required, hero!</Form.Control.Feedback>
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
          <Form.Control.Feedback type='invalid'>I could guess that one! Try again!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.userName && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Create and Raid!
        </Button>
      </Form>
    </>
  );
};

export default Signup;