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


  const handleFormSubmit = async (event) => {
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
  };

  return (
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Character not created.
        </Alert>
        <Form.Group className="formbox">
          <Form.Label htmlFor='userName'>What's your name?</Form.Label>
          <Form.Control
            type='text'
            placeholder="Name your character!"
            name='userName'
            onChange={handleInputChange}
            value={userFormData.userName}
            required
          />
        </Form.Group>

        <Form.Group className="formbox">
          <Form.Label htmlFor='email'>Your Email?</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter a valid e-mail'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
        </Form.Group>

        <Form.Group className="formbox">
          <Form.Label htmlFor='password'>Set a Password!</Form.Label>
          <Form.Control
            type='password'
            placeholder='Write it down somewhere!'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
        </Form.Group>
        <Button
          disabled={!(userFormData.userName && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'
          >
          Create and Raid!
        </Button>
      </Form>
  );
};

export default Signup;