import axios from 'axios'

// const baseURL = `http://localhost:3200`
const baseURL = `https://dashboard-ui-new.onrender.com`

export const axiosGet = async (route) => {
    return await axios.get(`${baseURL}/${route}`)
}