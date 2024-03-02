import axios from "axios"

export const api = axios.create({
    baseURL: "https://foodexplorer-backend-eqrz.onrender.com"
})
