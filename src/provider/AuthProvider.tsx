import { useMutation } from '@apollo/client';
import React, { ReactChild, useEffect, useState } from 'react';
import { auth } from 'src/firebase';
import { CreateUserResponse, CREATE_USER, User } from 'src/graphql/user';

interface ContextType {
  user : null | firebase.default.User;
  mongoUser: null | User;
  error : null | string;
  loadingAuthState : boolean;
}

export const firebaseAuth = React.createContext<ContextType>({} as ContextType);

interface Props {
  children : ReactChild
}

function AuthProvider({ children } : Props) {
  const [user, setUser] = useState<null | firebase.default.User>(null);
  const [mongoUser, setMongoUser] = useState<User | null>(null);
  const [loadingAuthState, setLoadingAuthState] = useState(true);
  const [error] = useState(null);
  const [createUser] = useMutation<CreateUserResponse>(CREATE_USER);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        createUser({
          variables: {
            userInput: {
              name: authUser.displayName,
              uid: authUser.uid,
            },
          },
        }).then((res) => {
          if (res.data) {
            setMongoUser({
              ...res.data.createUser,
            });
          }
        });
        setUser(authUser);
      }
      setLoadingAuthState(false);
    });
  }, []);

  return (
    <firebaseAuth.Provider value={{
      user,
      mongoUser,
      error,
      loadingAuthState,
    }}
    >
      {children}
    </firebaseAuth.Provider>
  );
}
export default AuthProvider;