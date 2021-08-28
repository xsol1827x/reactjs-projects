import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        textAlign: 'center'
    }
})

export const SingleBlog = ({ post }) => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography color="textPrimary" variant="h5">{post.title}</Typography>
            <Typography color="textSecondary" variant="h6">{post.author}</Typography>
            <Typography color="textPrimary" variant="body2" component="p">{post.text}</Typography>
        </div>
    )
}
