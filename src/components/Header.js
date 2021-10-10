import React from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify App</h1>
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Main page</NavLink>
        <NavLink to="/create" activeClassName="is-active">create page</NavLink>
        <NavLink to="/help" activeClassName="is-active">help page</NavLink>
    </header>
)

export default Header