import React from "react";
import { NavLink } from "react-router-dom";
import Friend from "./Friend/Friend";
import s from './Nav.module.css'

const Navbar = (props) => {
    let friendItems = props.friendsData.map((el) => <Friend name={el.name} key={el.id} id_img = {el.id_img} />)
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
            <div className={s.listFriend}>
                {friendItems}
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.activeLink : ''} to="/users">Find Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar