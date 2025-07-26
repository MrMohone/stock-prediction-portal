import {useContext} from 'react'
import {AuthContext} from './AuthProvider'
import {Navigate} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'

const PublicRoute = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext)
  return !isLoggedIn ? (
     children
  ) : (
     <Dashboard />
  ) 
}

export default PublicRoute