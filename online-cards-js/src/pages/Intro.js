import React, { Fragment } from 'react'
import { Typography, Button } from '@material-ui/core'
import { useHistory } from 'react-router'

export const Intro = () => {
    const history = useHistory();

    const redirect = () => {
        history.push('/login')
    }

    return (
        <Fragment>
            <Typography variant="h3">The Digital ID for a new Era.</Typography>
            <div>
                <Typography variant="subtitle2" gutterBottom>
                    Say no more to paper business cards.
                </Typography>
            </div>

            <div>
                <Typography variant="body1" gutterBottom>
                    Save the planet and create your digital ID today!
                    Easy to send, easy to make.
                </Typography>
            </div>

            <div>
                <Button variant="contained" color="primary" onClick={redirect}>Create yours today</Button>
            </div>
        </Fragment>
    )
}
