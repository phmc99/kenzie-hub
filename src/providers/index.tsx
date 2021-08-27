import { ReactNode } from "react";
import { AuthProvider } from "./auth";
import { UserDataProvider } from "./userData";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <AuthProvider>
      <UserDataProvider>{children}</UserDataProvider>
    </AuthProvider>
  );
};

export default Providers;
