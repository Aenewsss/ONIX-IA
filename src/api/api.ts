import axios from "axios";

export const api = axios.create({
    baseURL: "https://onixia-backend.vercel.app/",
    headers: {
        "Content-Type": "application/json",
    }
})