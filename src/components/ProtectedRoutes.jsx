import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { GifContext } from '../context/GifContext'
import { UserContext } from '../context/UserContext'
import LoginPage from './LoginPage'

function ProtectedRoutes({ isPrivate, children }) {
  const { user } = useContext(UserContext)
  const redirectTo = isPrivate ? '/login': '/search'
  if(( user && isPrivate ) || ( !user && !isPrivate )){
    return <div>{children}</div>
  }
  else{
    return <Navigate to={redirectTo} />
  }
}

export default ProtectedRoutes