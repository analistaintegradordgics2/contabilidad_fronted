import axios from "axios"
import { isProyecto } from "src/core/project"

let baseURL = "http://127.0.0.1:8000/api"

if (isProyecto()) {
  baseURL = "/api"
}

const api = axios.create({
  baseURL
})

export default ({ Vue }) => {
  Vue.prototype.$api = api
}

export { api }