import axios from "axios"

const api = axios.create({
  baseURL:'http://localhost:4000'
})
export const getComidas = async () => {
  return api.get(`/comidas`)
}