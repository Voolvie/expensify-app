import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import getTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'

const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00')

    return (
    <div>
        <h1>{expenseCount} {expenseWord} of total value {formattedTotal}</h1>
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