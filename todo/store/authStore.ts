import { User } from "@/types/User";
import { create } from "zustand";
import AsyncStorage from '@react-native-async-storage/async-storage';
interface AuthStore {
  user: User | null;
  isAuthenticated: () => boolean;
  token: string | null;
  setToken: (token: string | null) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (email: string, password: string) => void;
  isRegisterLoading : boolean;
  setIsRegisterLoading: (isRegisterLoading: boolean) => void;
  isLoginLoading: boolean;
  setIsLoginLoading: (isLoginLoading: boolean) => void;
  
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  isAuthenticated: () => !!get().token,
  token: null,
  setToken: (token) => set({ token }),
  isRegisterLoading: false,
  setIsRegisterLoading: (isRegisterLoading) => set({ isRegisterLoading }),
  isLoginLoading: false,
  setIsLoginLoading: (isLoginLoading) => set({ isLoginLoading }),
  register: async(email, password) => {
    set({ isRegisterLoading: true });
    try {
        const response = await fetch("http://localhost:3000/api/v1/register", {
            method: "POST",
            body: JSON.stringify({ email, password }),
        });
        if(response.ok){
            const data = await response.json();
            set({ token: data.token });
            set({ user: data });
        }
    } catch (error) {
        console.error(error, "Error registering user");
    } finally {
      set({ isRegisterLoading: false });
    }
  },
  logout: () => set({ user: null, token: null }),
  login: async (email, password) => {
    set({ isLoginLoading: true });
    try {
      const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      if(response.ok){
        const data = await response.json();
        await AsyncStorage.setItem("token", data.token);
        set({ token: data.token });
        set({ user: data });
      }
    } catch (error) {
      console.error(error, "Error logging in");
    } finally {
      set({ isLoginLoading: false });
    }
  },
  
  
}));

