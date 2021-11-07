import React from "react";
import s from './Navbar.module.css';
import t from './../Friends/Friends.module.css'
import {NavLink} from "react-router-dom";
export const Navbar = () => {
    return (

        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/setting' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
                <div className={s.friendsItem}>
                    <div className={s.friend1}><img src="https://www.pngitem.com/pimgs/m/47-475559_png-50-px-taekwondo-transparent-png.png"/></div>
                    <div  className={s.friend2}><img src="https://www.pngitem.com/pimgs/m/47-475559_png-50-px-taekwondo-transparent-png.png"/></div>
                    <div  className={s.friend3}><img src="https://www.pngitem.com/pimgs/m/47-475559_png-50-px-taekwondo-transparent-png.png"/></div>
                </div>
            </div>

        </nav>

    )
}
