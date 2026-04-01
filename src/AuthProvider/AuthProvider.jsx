import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../FirebaseAuth/FirebaseAuth'; 


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const Provider = new GoogleAuthProvider() ;

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser)
      setLoading(false);
    })
    return () => unSubscribe();
  }, [])

  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }  

  const CreateUserWithGoogle =  () =>{
   return signInWithPopup(auth , Provider) ; 
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const userInfo = {
    createUser,
    login,
    logOut,
    CreateUserWithGoogle ,
    user,
    loading
  }
  return (
    <AuthContext.Provider value={userInfo} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;