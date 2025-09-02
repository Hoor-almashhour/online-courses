import { mockUsers } from "@/data/Users";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  name: string;
};

type AuthState = {
  users: User[];
  currentUser: User | null;
  isAuthenticated: boolean;
  error: string | null;
};

const initialState: AuthState = {
  users: [...mockUsers], 
  currentUser: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    login: (
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) => {
      const user = state.users.find(
        (u) =>
          u.username === action.payload.username &&
          u.password === action.payload.password
      );
      if (user) {
        state.currentUser = user;
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.error = "Invalid credentials";
      }
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;

