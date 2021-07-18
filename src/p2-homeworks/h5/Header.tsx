import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Routes";

function Header() {
    return (
        <div>


            <ul className={s.testMenu}>
                <li>
                    <a >Menu</a>
                    <ul>
                        <li><NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active}>Pre-Junior</NavLink></li>
                        <li><NavLink to={PATH.JUNIOR} activeClassName={s.active}>Junior</NavLink></li>
                        <li><NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>Junior-Plus</NavLink></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Header
