import { createContext } from 'react';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

 return (
  <AuthContext.Provider >
   {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;