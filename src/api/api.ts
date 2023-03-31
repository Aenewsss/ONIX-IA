import axios from "axios";

export const api = axios.create({
    baseURL: "onixia-backend.vercel.app/",
    headers: {
        "Content-Type": "application/json",
    }
})