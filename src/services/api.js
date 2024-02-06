import axios from "axios"

export const api = axios.create({
    baseURL: "https://docemaria-api.onrender.com"
})
