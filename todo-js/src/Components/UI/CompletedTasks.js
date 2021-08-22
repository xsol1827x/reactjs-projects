import React from 'react'
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: '20px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const CompletedTasks = ({ completed }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <InsertEmoticonOutlinedIcon fontSize="large" />
            <Typography variant="h6">
                Completed tasks:{completed}
            </Typography>
        </div>
    )
}
