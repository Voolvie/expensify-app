import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,  Route, Switch, Link, NavLink } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboarPage = () => (
    <div>
        This is from dashboard
    </div>
)
const AddExpensePage = () => (
    <div>
        This add expense
    </div>
)
const EditExpensePage = () => (
    <div>
        This edit expense
    </div>
)
const HelpExpensePage = () => (
    <div>
        This help expense
    </div>
)
const NotFoundPage = () => (
    <div>
        404 not found - <Link to="/">Go home</Link>
    </div>
)
const Header = () => (
    <header>
        <h1>Expensify App</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Main page</NavLink>
        <NavLink to="/create" activeClassName="is-active">create page</NavLink>
        <NavLink to="/edit" activeClassName="is-active">edit page</NavLink>
        <NavLink to="/help" activeClassName="is-active">help page</NavLink>
    </header>
)
const routes = (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
        <Route path="/" component={ExpenseDashboarPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpExpensePage} />
        <Route component={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
