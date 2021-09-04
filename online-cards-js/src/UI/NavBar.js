import React, { useContext } from 'react'
import { AppBar, Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import AuthContext from '../store/auth-context'
import { useHistory } from 'react-router'
import classes from './NavBar.module.css'

export const NavBar = () => {
    const authContext = useContext(AuthContext);
    const isLoggedIn = authContext.isLoggedIn;
    const history = useHistory();

    //logout
    const logoutHandler = () => {
        authContext.logout();
        history.push("/")
    }

    return (
        <div>
            <AppBar position="sticky" style={{ background: '#2E3B55' }}>
                <header>
                    <nav className={classes.nav}>
                        <ul>
                            <li>
                                <NavLink to="/" activeClassName={classes.active}>
                                    Home
                                </NavLink>
                            </li>

                            {!isLoggedIn && (
                                <li>
                                    <NavLink to="/login" activeClassName={classes.active}>
                                        Login
                                    </NavLink>
                                </li>)}

                            {isLoggedIn && (
                                <li>
                                    <Button color="secondary" onClick={logoutHandler}>Logout</Button>
                                </li>
                            )}

                            {isLoggedIn && (
                                <li>
                                    <NavLink to="/create-card" activeClassName={classes.active}>
                                        Create Card
                                    </NavLink>
                                </li>
                            )}

                            {isLoggedIn && (
                                <li>
                                    <NavLink to="/my-card">
                                        My Card
                                    </NavLink>
                                </li>
                            )}

                        </ul>
                    </nav>
                </header>
            </AppBar>
        </div>
    )
}
