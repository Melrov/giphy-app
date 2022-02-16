import React from 'react'
import LoginPage from './LoginPage'

function ProtectedRoutes({user, isPrivate, children}) {
  return (
      <>
          {isPrivate && user ? children : <LoginPage />}
      </>
  )
}

export default ProtectedRoutes