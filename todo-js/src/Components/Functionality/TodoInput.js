import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid } from '@material-ui/core';
import { TodoCards } from '../UI/TodoCards';
import { Progress } from '../UI/Progress';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            textAlign: 'center'
        },
    },
}));

export default function TodoInput() {
    const classes = useStyles();

    const [userInput, setUserInput] = useState({
        id: '',
        task: ''
    });

    const [todos, setTodos] = useState([])
    //state for error
    const [error, setError] = useState({
        errorMessage: '',
        error: false
    })

    //add the user todo with the button
    const submitUserInput = (e) => {
        e.preventDefault();

        //add the user input to array
        //task is undefined
        if (userInput.task === "") {
            //render visual warning for text input
            setError({ errorMessage: 'Cannot be blank', error: true })
            console.log('null')
        } else {
            setTodos([...todos, userInput])
            console.log(todos)
            setError({ errorMessage: '', error: false })
        }
        console.log(loadedTodos)
    }

    //set the todo card to the user input
    const handleUserInput = function (e) {
        //make a new todo object
        setUserInput({
            ...userInput,
            id: uuidv4(),
            task: e.target.value
        })
        //setUserInput(e.target.value)
        //console.log(userInput)
    }

    const loadedTodos = [];
    for (const key in todos) {
        loadedTodos.push({
            id: key,
            taskName: todos[key].task
        })
    }

    return (
        <div>
            <Progress taskCount={loadedTodos.length} />
            <Grid container justifyContent="center">
                <Grid item>
                    <form className={classes.root} noValidate autoComplete="off" onSubmit={submitUserInput}>
                        {error.error ? <TextField id="outlined-error-helper-text" label="Today's task" variant="outlined" type="text" onChange={handleUserInput} error={error.error} helperText={error.errorMessage} />
                            : <TextField id="outlined-basic" label="Today's task" variant="outlined" type="text" onChange={handleUserInput} />}
                        <Grid item>
                            <Button variant="contained" color="primary" type="submit">Submit</Button>
                        </Grid>
                        {userInput && <TodoCards taskValue={todos} />}
                    </form>
                </Grid>
            </Grid>
        </div>

    );
}
