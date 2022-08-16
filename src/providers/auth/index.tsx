import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../../services/api";
import { SignIn } from "../../types";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthProviderData {
  isLogged: boolean;
  token: string;
  userId: string;
  handleLogin: (data: SignIn) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const tokenStorage = localStorage.getItem("@kenziehub:token");
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [token, setToken] = useState<string>(tokenStorage || "");
  const [userId, setUserId] = useState<string>("");

  const handleLogin = async (data: SignIn) => {
    await api
      .post("sessions", data)
      .then((response) => {
        setToken(response.data.token);
        setIsLogged(true);
        setUserId(response.data.user.id);
        localStorage.setItem("@kenziehub:token", response.data.token);
        localStorage.setItem("@kenziehub:id", response.data.user.id);
        toast.success(`Bem-vindx de volta ${response.data.user.name}`, {
          duration: 2000,
        });
      })
      .catch(() => toast.error("Ops, algo de errado aconteceu"));
  };

  return (
    <AuthContext.Provider value={{ isLogged, token, handleLogin, userId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
