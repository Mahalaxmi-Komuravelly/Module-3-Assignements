import axios from "axios";

const BASE_URL = "https://identitytoolkit.googleapis.com/v1";

export const signUp = (data) =>
  axios.post(`${BASE_URL}/accounts:signUp`, data, {
    params: { key: import.meta.env.VITE_FIREBASE_API_KEY },
  });

export const signIn = (data) =>
  axios.post(`${BASE_URL}/accounts:signInWithPassword`, data, {
    params: { key: import.meta.env.VITE_FIREBASE_API_KEY },
  });
