import React, {useContext} from 'react';
import {Route, Navigate} from 'react-router-dom';
import {UserContext} from './index.js'


export default PrivateRoute = ({component:RouteComponent, ...rest}) =>{
    const {currentUser} = useContext(UserContext);

    return (
        <Route {...rest}
            render={routeProps => {!!currentUser? 
                (<RouteComponent {...routeProps} />
                ):(
                <Navigate to={"/login"} />
                )    
            }}
            />)

}