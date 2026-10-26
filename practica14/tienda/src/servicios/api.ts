// La carpeta de servicios es la unica que utilizara Axios
// Y en esta clase es donde va a estar la base de la api donde nos vamos a conectar
import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000
})