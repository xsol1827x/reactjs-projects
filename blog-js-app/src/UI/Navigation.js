import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar } from '@material-ui/core'
import classes from './Navigation.module.css'

export const Navigation = () => {
    return (
        <div>
            <AppBar position="sticky">
                <header>
                    <nav className={classes.nav}>
                        <ul>
                            <li>
                                <NavLink to="/blogs" activeClassName={classes.active}>
                                    All Blogs
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/new-blog" activeClassName={classes.active}>
                                    Write a blog
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
            </AppBar>
        </div>

    )
}
