import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,  Route, Switch } from 'react-router-dom'
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
        404 not found
    </div>
)
const routes = (
    <BrowserRouter>
        <Switch>
        <Route path="/" component={ExpenseDashboarPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpExpensePage} />
        <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
