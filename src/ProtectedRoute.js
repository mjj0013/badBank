import React, {useContext} from 'react';
import {Route, Navigate} from 'react-router-dom';
import {UserContext} from './index.js'


export const ProtectedRoute = (props) =>{
    const auth = useContext(UserContext);
    

}