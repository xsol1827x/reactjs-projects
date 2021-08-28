import React, { useState, useContext, Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { InputContext } from '../Contexts/InputContext'
import { TextareaAutosize } from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid';
import { Box, TextField, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
})

export const WriteBlogPost = () => {
    const classes = useStyles();

    const [blog, setBlog] = useState({
        id: '',
        title: '',
        author: '',
        text: ''
    });

    const history = useHistory();

    const { setBlogPost } = useContext(InputContext);
    const { allBlogPosts, setAllBlogPosts } = useContext(InputContext)

    const handleBlogPost = () => {
        if (blog.id === "" || blog.title === "" || blog.author === "" || blog.text === "") {
            alert('All fields must be filled!')
        }
        else {
            setBlogPost(blog);
            setAllBlogPosts([...allBlogPosts, blog]);
            history.push("/blogs")
        }
    }

    const handleChange = (e) => {
        const value = e.target.value
        setBlog({
            ...blog,
            id: uuidv4(),
            [e.target.name]: value
        })
    }

    return (
        <Fragment>
            <Box className={classes.root}>
                <div>
                    <TextField id="standard-basic" onChange={handleChange} value={blog.title} name="title" label="Title" />

                </div>

                <div>
                    <TextField id="standard-basic" onChange={handleChange} value={blog.author} name="author" label="Author" />
                </div>

                <div>
                    <TextareaAutosize aria-label="minimum height" minRows={20} style={{ width: '70%' }} placeholder="Your blog post"
                        onChange={handleChange}
                        value={blog.text}
                        name="text" />
                </div>

                <div>
                    <Button variant="contained" color="primary" onClick={handleBlogPost}>
                        Submit</Button>
                </div>
            </Box>
        </Fragment>
    )
}
