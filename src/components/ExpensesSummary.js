import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import getTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'
import { Link } from 'react-router-dom'

const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00')

    return (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title"><span>{expenseCount}</span> {expenseWord} of total value <span>{formattedTotal}</span></h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div>
    )
}

const mapStateToProps = (state)=> {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)