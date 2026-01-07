import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL, // Firebase Realtime DB URL
});

export default instance;
