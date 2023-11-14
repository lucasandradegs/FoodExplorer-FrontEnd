import axios from "axios"

export const api = axios.create({
    baseURL: "https://doce-maria-api.onrender.com"
})