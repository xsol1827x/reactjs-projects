import React from 'react'
import { AppBar, Typography } from '@material-ui/core';

const Navbar = () => {
    return (
        <div>
            <AppBar position="static">
                <Typography variant="h6">
                    Pokedex
                </Typography>
            </AppBar>
        </div>
    )
}

export default Navbar