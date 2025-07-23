
import {useState, useContext, createContext} from 'react'

//create context
const AuthContext =  createContext();

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
      //!! convert to BOOLEAN, if exist value return TRUE, else or exist like(null, '0', undefined) return FALSE
      !!localStorage.getItem('accessToken') 
    );


  return (
    <>
      <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
         {children}  {/* childern means all the components that access this context  */}
      </AuthContext.Provider>
    </>
  )
}

export default AuthProvider
export {AuthContext};