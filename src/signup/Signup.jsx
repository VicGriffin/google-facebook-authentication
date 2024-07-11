import React, { useEffect, useState } from 'react';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import Home from '../page/home/Home';

function Signup() {
  const [value, setValue] = useState(null);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
    });
  };

  const handleFacebookLogin = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
    });
  };

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      setValue(email);
    }
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="container">
          {value ? (
            <Home />
          ) : (
            <>
              <button className="btn-primary" onClick={handleFacebookLogin}>
                Sign in with Facebook
              </button>
              <button onClick={handleGoogleLogin}>
                Sign in with Google
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Signup;
