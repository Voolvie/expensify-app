import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

//add expense

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: { 
        id: uuid(),
        description,
        note,
        amount,
        createdAt 
    }
})

//remove expense

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//edit expense

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

//set text filter

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// sort by date and amount

const sortByAmount = () => ({
    type: 'SET_SORTBY_AMOUNT',
  
})
const sortByDate = () => ({
    type: 'SET_SORTBY_DATE',

})

//set start and end date

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})

//Expense reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state
    }

}

//Filters reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SET_SORTBY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_SORTBY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }

}
//Get visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text)

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b)=>{
        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

//Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
})
)

store.subscribe(()=> {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense( { description: 'rent', amount: 400, createdAt: -21000 } ))
const expenseTwo = store.dispatch(addExpense( { description: 'coffee', amount: 300, createdAt: -1000 } ))

// // store.dispatch(removeExpense ( {id: expenseOne.expense.id}))

// // store.dispatch (editExpense (expenseTwo.expense.id, { amount: 500 }))

store.dispatch(setTextFilter('rent'))
// // store.dispatch (setTextFilter())

// store.dispatch(sortByAmount())
// // store.dispatch(sortByDate())

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1000))


