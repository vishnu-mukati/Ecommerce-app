import { useState, useRef ,useContext} from 'react';
import AuthContext from "../Store/auth-context";

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx =useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;


    setIsLoading(true);

    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA7KB5CBDaD9KLz18uxYk-F85I2UmMThP0'

    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7KB5CBDaD9KLz18uxYk-F85I2UmMThP0'

    };
    fetch(url,{
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(res => {
      setIsLoading(false);
      if (res.ok) {
        return res.json();
      } else {
       return res.json().then((data) => {
          const errorMessage = 'Authentication error';
          throw new Error(errorMessage);
        })
      }
    }).then((data) => {
      authCtx.login(data.idToken,data.email);
    }).catch((error) => {
      alert(error.message);
    })

   
  };


  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'signup' }</h1>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>

        <div className={classes.actions}>
          {!isLoading && <button type='submit' className={classes.actions} >{isLogin ? 'Login' : 'signup' }</button>}
          {isLoading && <p>Sending request...</p>}
        </div>

        <div className={classes.actions}>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
             {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
