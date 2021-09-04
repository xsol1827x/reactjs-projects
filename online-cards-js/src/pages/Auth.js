import React, { Fragment, useState, useRef, useContext } from 'react'
import { Typography, Box, Button } from '@material-ui/core'
import { ValidatorForm } from 'react-material-ui-form-validator';
import AuthContext from '../store/auth-context';
import classes from './Auth.module.css'
import { useHistory } from 'react-router';

export const Auth = () => {
    const history = useHistory();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [isLogin, setIsLogin] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const authContext = useContext(AuthContext)

    const switchAuthMode = () => {
        setIsLogin((prevState) => !prevState);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value

        setIsLoading(true)
        let url;

        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC4w1-FrUUxDpo7j6glDOXtAZt7YxMOtGI'
        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC4w1-FrUUxDpo7j6glDOXtAZt7YxMOtGI'
        }

        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => {
            setIsLoading(false)
            if (res.ok) {
                return res.json();
            } else {
                res.json().then(data => {
                    //show an error modal
                    let errorMessage = 'Authentication failed!'
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }
                    throw new Error(errorMessage)
                }).catch((err) => {
                    alert(err)
                });
            }
        }).then(data => {
            //if the signup and the signin has succeeded, the user is authenticated
            authContext.login(data.localId)
            history.push("/create-card")
        })
            .catch((err) => {
                alert(err.message)
            })
    }

    return (
        <Fragment>
            <Box>
                <Typography variant="h5">{isLogin ? 'Login' : 'Sign Up'}</Typography>
                <ValidatorForm onSubmit={handleSubmit}>
                    <div>
                        <label><Typography variant="subtitle1">Email</Typography></label>
                        <input name="email" label="email" ref={emailInputRef} className={classes.input} />
                    </div>
                    <div>
                        <label><Typography variant="subtitle1">Password</Typography></label>
                        <input name="password" label="password" type="password" ref={passwordInputRef} className={classes.input} />
                    </div>
                    <div>
                        {!isLoading && <Button type="submit">{isLogin ? 'Login' : 'Create Account'}</Button>}
                    </div>
                    {isLoading && <p>Sending request...</p>}
                    <div>
                        <Button
                            type='button'
                            onClick={switchAuthMode}
                            color="primary"
                        >
                            {isLogin ? 'Create new account' : 'Login with existing account'}
                        </Button>
                    </div>
                </ValidatorForm>
            </Box>
        </Fragment>
    )
}
