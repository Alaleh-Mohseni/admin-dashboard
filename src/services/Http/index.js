import axios from "axios"

export const instance = axios.create({
  baseURL: `https://admin-dashboard-e34fb-default-rtdb.firebaseio.com/`,
})