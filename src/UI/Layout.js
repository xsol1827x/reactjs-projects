import React, { Fragment } from 'react'
import { Box } from '@material-ui/core'
import { NavBar } from './NavBar'
export const Layout = (props) => {
    return (
        <Fragment>
            <Box justifyContent="center" alignItems="center" textAlign="center">
                <NavBar />
                {props.children}
            </Box>
        </Fragment>
    )
}