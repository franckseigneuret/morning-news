import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import './App.css';
import { Input, Button } from 'antd';

function ScreenHome() {

  const [redirect, setRedirect] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [signUpUsername, setSignUpUsername] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')

  const handleSubmitSignUp = async () => {

    await fetch('/sign-up', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `username=${signUpUsername}&password=${signUpPassword}`
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === true) {
          setRedirect(true)
        } else {
          setErrorMessage(data.message)
        }
      })
  }

  return (
    <div className="Login-page">
      <div className="error">
        {errorMessage}
      </div>
      {/* SIGN-IN */}
      <div className="Sign">
        <Input className="Login-input" placeholder="arthur@lacapsule.com" />
        <Input.Password className="Login-input" placeholder="password" />
        <Link to="/screensource">
          <Button style={{ width: '80px' }} type="primary">Sign-in</Button>
        </Link>
      </div>

      {/* SIGN-UP */}
      <div className="Sign">
        <Input className="Login-input" placeholder="Arthur G" onChange={(e) => setSignUpUsername(e.target.value)} />
        <Input.Password className="Login-input" placeholder="password" onChange={(e) => setSignUpPassword(e.target.value)} />
        <Button style={{ width: '80px' }} type="primary" onClick={() => handleSubmitSignUp()}>Sign-up</Button>
        {
          redirect ? <Redirect to="screensource" /> : ''
        }
      </div>

    </div>
  );
}

export default ScreenHome;
