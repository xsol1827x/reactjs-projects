import React, { useContext } from 'react'
import { InputContext } from '../Contexts/InputContext'
import { Button, Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        textAlign: 'center',
    },
    text: {
        textAlign: 'center'
    }
})

export const AllBlogs = () => {
    const classes = useStyles();
    const { allBlogPosts } = useContext(InputContext)

    return (
        <div>
            <Typography color="textPrimary" variant="h3" className={classes.text}>All blogs</Typography>
            {allBlogPosts.map((post, i) =>
                <Card variant="outlined" key={i} className={classes.root}>
                    <CardContent>
                        <Typography color="textPrimary" variant="h5">
                            {post.title}
                        </Typography>
                        <Typography color="textPrimary" variant="h6">
                            {post.author}
                        </Typography>
                        <Link to={`/blogs/${post.id}`}>
                            <Button>Read blog</Button>
                        </Link>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
