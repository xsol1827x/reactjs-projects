import React from 'react'
import { AppBar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import classes from './NavBar.module.css'
import { Burger } from './Burger'

export const NavBar = () => {
    return (
        <div>
            <AppBar position="sticky" className={classes.appBar}>
                <header>
                    <nav className={classes.nav}>
                        <ul>
                            <li>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/my-travels">
                                    My travels
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/search">
                                    Search
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/gallery">
                                    Gallery
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
            </AppBar>

            <div className={classes.mobileMenu}>
                <Burger />
            </div>
        </div>
    )
}
