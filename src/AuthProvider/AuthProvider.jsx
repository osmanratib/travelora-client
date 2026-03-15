import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createContext } from 'react';
import auth from '../FirebaseAuth/FirebaseAuth';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

 
 const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
 }


 const userInfo = {
  createUser
 }
 return (
  <AuthContext.Provider value={userInfo} >
   {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;