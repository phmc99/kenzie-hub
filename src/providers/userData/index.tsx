import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import axios from "axios";
import toast from "react-hot-toast";
import { TechProps, WorkProps } from "../../types";
import { useAuth } from "../auth";

interface UserData {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
}

interface UserProviderProps {
  children: ReactNode;
}

interface UserProviderData {
  userData?: UserData;
  userTechs: TechProps[];
  userWorks: WorkProps[];
  setUserTechs: (techs: any) => void;
  setUserWorks: (works: any) => void;
  getUserData: () => void;
}

const UserDataContext = createContext<UserProviderData>({} as UserProviderData);

export const UserDataProvider = ({ children }: UserProviderProps) => {
  const [userData, setUserData] = useState<UserData>();
  const [userTechs, setUserTechs] = useState<TechProps[]>([]);
  const [userWorks, setUserWorks] = useState<WorkProps[]>([]);

  const { userId } = useAuth();

  const getUserData = async () => {
    if (userId) {
      await axios
        .get(`https://kenziehub.me/users/${userId}`)
        .then((response) => {
          setUserData(response.data);
          setUserTechs(response.data.techs);
          setUserWorks(response.data.works);
        })
        .catch(() => toast.error("Ops, algo de errado aconteceu"));
    }
  };
  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <UserDataContext.Provider
      value={{
        userData,
        userTechs,
        setUserTechs,
        getUserData,
        userWorks,
        setUserWorks,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
