// import React, { children } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({isLogIn,children}) => {
    if(isLogIn){
        return children
    }else{
       return <Navigate to ="/"/>
    }

}

export default PrivateRoute