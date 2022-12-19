import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'dc8162ea-151f-40b7-8429-784631a92f82'}
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    follow(id: number) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data
        })
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    },
    getProfile(id: string){
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(id)
    }
}
export const profileAPI = {
    getProfile(id: string){
        return instance.get(`profile/${id}`)
    },
    getStatus(id: string) {
        return instance.get(`profile/status/` + id)
    },
    updateStatus(status: string){
       return instance.put(`profile/status`,{status: status})
    }
}
export const authAPI = {
    me() {
       return instance.get(`auth/me`)
    }
}
