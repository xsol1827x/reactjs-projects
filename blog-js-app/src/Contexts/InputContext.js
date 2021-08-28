import React, { useState, createContext, useMemo } from 'react'

//create context
export const InputContext = createContext();

const InputContextProvider = (props) => {
    const [blogPost, setBlogPost] = useState({
        id: '',
        title: '',
        author: '',
        text: ''
    });

    //create an array to push all the blogPosts
    const [allBlogPosts, setAllBlogPosts] = useState([]);

    //put value inside useMemo so that the component only rerenders when there is change in the value
    const value = useMemo(() => ({ blogPost, setBlogPost, allBlogPosts, setAllBlogPosts }), [blogPost, allBlogPosts])

    return (
        <InputContext.Provider value={value}>
            {props.children}
        </InputContext.Provider>
    )
}

export default InputContextProvider;