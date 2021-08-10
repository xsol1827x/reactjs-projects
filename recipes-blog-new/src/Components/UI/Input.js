import React, { useState } from 'react'
import { TextField, Grid } from '@material-ui/core';
import GetRecipes from '../APICalls/GetRecipes';

const Input = () => {
    const [queryType, setQueryType] = useState('');
    //handle the query changes
    const handleQueryChange = (e) => (
        setQueryType(e.target.value)
    )
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <TextField id="standard-basic" label="search a recipe!" onChange={handleQueryChange} />
            <GetRecipes input={queryType} />
        </Grid>

    )
}

export default Input
