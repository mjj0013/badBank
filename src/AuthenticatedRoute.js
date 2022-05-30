import { useAuthState } from 'react-admin';
import {Route} from 'react-router-dom'
export const AuthenticatedRoute = ({component:C,  ...props}) => {
    const {isAuthenticated} = useAuthState();
    return (
        <Route 
            {...props} 
            render={
                    routeProps=> isAuthenticated? <C {...routeProps} /> : <Redirect to="/login" />
            }
        />     
    )
}