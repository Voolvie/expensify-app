import { createStore } from "redux"

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 5} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count}) => ({
    type: 'RESET',
    count
})

const resetCount = ({count = 0} = {}) => ({
    type: 'RESET',
    count
})

//Reducers
//1.Reducers are pure functions
//2.Never change state or action


const countReducer  = (state = { count : 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
            count: state.count + action.incrementBy
        }
        case 'DECREMENT':
            return {
            count: state.count - action.decrementBy
            }
        case 'SET':
            return {
               count: action.count
            } 
        case 'RESET':
            return {
                count: action.count
            }
        default: 
        return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=> {
  console.log(store.getState())  
})

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })
store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(decrementCount({ decrementBy: 10 }))

// unsubscribe()

store.dispatch(setCount({count: 100}))

store.dispatch(resetCount())



