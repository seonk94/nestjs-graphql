import React, { ReactChild, useEffect, useState } from 'react';
import { auth } from 'src/firebase';

interface ContextType {
  user : null | firebase.default.User;
  error : null | string;
  loadingAuthState : boolean;
}

export const firebaseAuth = React.createContext<ContextType>({} as ContextType);

interface Props {
  children : ReactChild
}

function AuthProvider({ children } : Props) {
  const [user, setUser] = useState<null | firebase.default.User>(null);
  const [loadingAuthState, setLoadingAuthState] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) setUser(authUser);
      setLoadingAuthState(false);
    });
  }, []);

  return (
    <firebaseAuth.Provider value={{
      user,
      error,
      loadingAuthState,
    }}
    >
      {children}
    </firebaseAuth.Provider>
  );
}
export default AuthProvider;