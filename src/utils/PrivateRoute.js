import {Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({children, ...rest}) => {
    console.log("Private Route Invoke.....")
    return(
        <Route {...rest}>
            {children}
        </Route>
    )
}

export default PrivateRoute