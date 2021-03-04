import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoutes = ({
    component:Component,
    ...rest
}) => {

    const token = localStorage.getItem('token'); 
        
    return (
        <Route {...rest}
            component={(props) =>(
                (token!==null)
                    ?(<Component {...props} />)
                    :(<Redirect to='/account/login'/>)
                    
            )}
        />
    )
}
