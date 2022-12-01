import { createContext, ReactNode } from "react";

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  async function signIn() {
    console.log("Vamos logar");
  }
  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: {
          name: "Diego",
          avatarUrl: "https://github.com/DiegoSousaSilva.png",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
