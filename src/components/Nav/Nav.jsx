import React from "react";
import { NavLink } from "react-router-dom";
import s from './Nav.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={(navData) => navData.isActive ? s.activeLink : ''}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.activeLink : ''} to="/dialogs">Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.activeLink : ''} to="/news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.activeLink : ''} to="/music">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.activeLink : ''} to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar