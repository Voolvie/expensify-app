import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

const NotFoundPage = () => (
    <div>
        404 not found - <Link to="/">Go home</Link>
    </div>
)

export default NotFoundPage