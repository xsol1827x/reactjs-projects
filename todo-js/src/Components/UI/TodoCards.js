import React, { useState } from 'react'
import { Card, CardContent, Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import { CompletedTasks } from './CompletedTasks';

/*Use an object to hold the completed "done" checked values, 
then count the number of values that are checked (i.e. true) 
after each state update and rerender. Use the task's id as the key in the checked state.*/
/*https://stackoverflow.com/questions/68870276/push-values-in-to-new-array-only-when-material-ui-checkbox-is-checked/68870387?noredirect=1#comment121722953_68870387*/
export const TodoCards = ({ taskValue = [] }) => {
    const [checked, setChecked] = useState({});

    const handleChecked = id => e => {
        const { checked } = e.target;
        setChecked((values) => ({
            ...values,
            [id]: checked
        }));
    };

    return (
        <div>
            <CompletedTasks
                completed={Object.values(checked).filter(Boolean).length}
            />
            <Card>
                {taskValue.map(({ id, task }) => {
                    return (
                        <CardContent key={id}>
                            <Typography variant="body1">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="primary"
                                            checked={checked[id]}
                                            onClick={handleChecked(id)}
                                        />
                                    }
                                    label={task}
                                />
                            </Typography>
                        </CardContent>
                    )
                })}
            </Card>
        </div >
    )
}