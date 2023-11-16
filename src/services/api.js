import axios from "axios"

export const api = axios.create({
    baseURL: "https://docemaria-backend-production.up.railway.app"
})
