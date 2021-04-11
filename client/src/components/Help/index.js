import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
//Add in utils folder later
import { validateEmail } from '../../utils/helpers';
/* Select a font with group to match theme
import '../../fonts/NewTegomin-Regular.ttf';*/

function Help() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Electronic pigeon needs a home.');
      } else {
        setErrorMessage('');
      }
    } else if (e.target.name === 'name' && !e.target.value.length) {
        setErrorMessage(`No, really, what's your name?`);
    } else if (e.target.name === 'message' && !e.target.value.length) {
      setErrorMessage(`You're going to send an empty message?`);
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <h1 data-testid="h1tag">Need Help?</h1>
      <h4>Reach out to ask the Retro Raid Dev Team!</h4>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Your (Real) Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">What's up?</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button variant="outline-light" type="submit">Release the Electronic Carrier Pigeon!</Button>
      </form>
    </section>
  );
}

export default Help;