import { createContext, useContext } from "react";

// Estructura del usuario
export interface User {
  id: number;
  name: string;
  email: string;
}

// Interfaz para el contexto
export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

// Creación del contexto
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

// Hook personalizado para consumir el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
  }
  return context;
};
