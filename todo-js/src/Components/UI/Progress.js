import React from 'react'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center'
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: '20px',
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
}));

export const Progress = ({ taskCount }) => {
    const classes = useStyles();
    return (
        <Grid container justifyContent="center">
            <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>
                    <SentimentSatisfiedOutlinedIcon fontSize="large" />
                    <Typography variant="h6">
                        Total tasks: {taskCount}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}
