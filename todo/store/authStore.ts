import { User } from "@/types/User";
import { create } from "zustand";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from "react-native-toast-message";
import { Alert } from "react-native";
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
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
        });
        if(response.ok){
          Toast.show({
            type: "success",
            text1: "Success!",
            text2: "Registered successfully",
          });
            const data = await response.json();
            set({ token: data.token });
            set({ user: data });
          }
    } catch (error) {
        console.error(error, "Error registering user");
        Toast.show({
          type: "error",
          text1: "Error!",
          text2: "Error registering user",
        });
    } finally {
      set({ isRegisterLoading: false });
    }
  },
  logout: async () => {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("user");
      set({ token: null, user: null });
      Alert.alert("Logged out successfully");
    } catch (error) {
      console.error(error, "Error logging out");
    }
  },
  login: async (email, password) => {
    set({ isLoginLoading: true });
    try {
      const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
      });
      if(response.ok){
        Toast.show({
          type: "success",
          text1: "Success!",
          text2: "Logged in successfully",
        });
        const data = await response.json();
        await AsyncStorage.setItem("token", data.token);
        set({ token: data.token });
        set({ user: data });
      }
    } catch (error) {
      console.error(error, "Error logging in");
      Toast.show({
        type: "error",
        text1: "Error!",
        text2: "Error logging in",
      });
    } finally {
      set({ isLoginLoading: false });
    }
  },
  checkAuth: async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if(token){
        set({ token: token });
      }
    } catch (error) {
      console.error(error, "Error in checking auth");
    }
  }
  
}));

