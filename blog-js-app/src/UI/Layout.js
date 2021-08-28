import React, { Fragment } from 'react'
import { Navigation } from './Navigation'
import { Box } from '@material-ui/core'
export const Layout = (props) => {
    return (
        <Fragment>
            <Box justifyContent="center" alignItems="center">
                <Navigation />
                {props.children}
            </Box>
        </Fragment>
    )
}
