import React from 'react'
import ReactDOM  from 'react-dom'

const Info = (props) => {
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
}

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p> This is private info!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}
//required authentication
const requiredAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please login to view info</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)

const AuthInfo = requiredAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are details" />, document.getElementById('app'))
// ReactDOM.render(<AdminInfo isAdmin={true} info="There are details" />, document.getElementById('app'))