import axios from "axios"


export const fetchList = () => {
    return axios.get('https://api.github.com/orgs/godaddy/repos')
}