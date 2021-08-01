import React from 'react'
import ReactDOM from 'react-dom'

const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
            Editing he expense with id of {props.match.params.id}
        </div>
    )
}

export default EditExpensePage