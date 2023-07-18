import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './mainNavigation.module.css'
export default function MainNavigation() {
    return (
        <header className={classes.header}>

            <ul className={classes.list}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? classes.active : undefined
                        }
                        // style={({ isActive }) => ({
                        //   textAlign: isActive ? 'center' : 'left',
                        // })}
                        end
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive ? classes.active : undefined
                        }
                    >
                        Products
                    </NavLink>
                </li> </ul>

        </header>
    )
}
