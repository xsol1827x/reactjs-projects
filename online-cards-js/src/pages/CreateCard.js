import { Button, TextareaAutosize, Typography } from '@material-ui/core';
import React, { useContext, useRef, Fragment } from 'react'
import AuthContext from '../store/auth-context';
import { firebase } from '../firebase';
import { useHistory } from 'react-router-dom';
import classes from './CreateCard.module.css'

export const CreateCard = () => {
    const nameInputRef = useRef();
    const jobInputRef = useRef();
    const bioInputRef = useRef();

    const authContext = useContext(AuthContext)

    const history = useHistory();

    //create a reference to the collection
    const ref = firebase.firestore();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredJob = jobInputRef.current.value;
        const enteredBio = bioInputRef.current.value;

        //send the user data to firestore database
        ref.collection("users").doc(authContext.token).set({
            userId: authContext.token,
            name: enteredName,
            occupation: enteredJob,
            bio: enteredBio
        }).then(() => {
            history.push("/my-card")
            alert("information successfully updated!")
        }).catch((err) => {
            alert("Error updating information: ", err)
            console.log(err)
        })
    }

    return (
        <div>
            {authContext.token ?
                <Fragment>
                    <Typography variant="h5">Create Card</Typography>
                    <form onSubmit={submitHandler}>
                        <div>
                            <label><Typography variant="subtitle1">Name</Typography></label>
                            <input name="name" ref={nameInputRef} className={classes.input} />
                        </div>
                        <div>
                            <label><Typography variant="subtitle1">Occupation</Typography></label>
                            <input name="occupation" ref={jobInputRef} className={classes.input} />
                        </div>
                        <div>
                            <label><Typography variant="subtitle1">Bio</Typography></label>
                            <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Bio" ref={bioInputRef} className={classes.input} />
                        </div>

                        <div>
                            <Button type="submit">Submit</Button>
                        </div>
                    </form>
                </Fragment> :

                <Typography variant="body1">You must be logged in to use this feature.</Typography>
            }
        </div>
    )
}
