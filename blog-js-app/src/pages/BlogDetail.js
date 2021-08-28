import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router';
import { SingleBlog } from './SingleBlog';
import { InputContext } from '../Contexts/InputContext';
import { Typography, makeStyles, Card, CardContent, Button } from '@material-ui/core';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const useStyles = makeStyles({
    root: {
        textAlign: 'center'
    }
})

export const BlogDetail = () => {
    const classes = useStyles();
    const params = useParams();
    const { allBlogPosts } = useContext(InputContext)
    const history = useHistory();

    const findBlog = allBlogPosts.find((post) => post.id === params.blogId)

    if (!findBlog) {
        return <Typography variant="h4" className={classes.root}>No blogs found.</Typography>
    }

    //delete blogs
    const deleteBlogHandler = () => {
        for (let i = 0; i < allBlogPosts.length; i++) {
            if (allBlogPosts[i].id === findBlog.id) {
                allBlogPosts.splice(i, 1)
            }
        }
        history.push('/new-blog')
        alert('entry has been deleted')
    }

    return (
        <div className={classes.root}>
            <Card>
                <CardContent>
                    <Typography color="primary" variant="h4">Blog details</Typography>
                    <SingleBlog post={findBlog} />
                    <Button onClick={deleteBlogHandler}><DeleteForeverOutlinedIcon fontSize="large" /></Button>
                </CardContent>
            </Card>
        </div>
    )
}
