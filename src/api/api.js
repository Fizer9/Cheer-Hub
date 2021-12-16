import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'bec2d1fe-f220-4cf0-aade-79bfda67666f'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                return response.data
            })
    }
}


//Set up for refactoring follow, unfollow requests 
export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        })
        .then(response => {
            return response.data
        })
}