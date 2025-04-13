import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000"
  //baseURL: "https://planera-back.herokuapp.com",
});


export const postarExercicio = async (habitData)=> {
  return api.post(`/exercicio`, habitData );
}
// --h1Menu:#cbe577;