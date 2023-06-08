import axios from 'axios'

const baseURL = `http://localhost:3200`

export const axiosGet = async (route) => {
    return await axios.get(`${baseURL}/${route}`)
}