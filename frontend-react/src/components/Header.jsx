import {useContext} from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import {AuthContext} from '../AuthProvider'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    console.log('Logout Successful')
    navigate('/login')
  }

  return (
    <>
    <nav className="navbar container py-3 align-items-start">
      <Link className='navbar-brand text-light' to='/' >Stock Prediction Portal</Link>
      <div>
        {isLoggedIn ? (
          <>
          <Button text='Dashboard' class='btn-info' url='/dashboard'/>
          &nbsp;
          <button className='text-light btn btn-danger' onClick={handleLogout}>Logout</button>

          </>        ) : (
          <>
          <Button text='Login' class='btn-outline-info' url='/login'/>
          &nbsp;
          <Button text='Register' class='btn-info' url='/register'/> 
          </>  
        )}
        
      </div>
    </nav>
    </>
  )
}

export default Header