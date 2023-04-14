import axios from "axios"
import {UpdateUserType} from "redux/ProfileReducer"


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
    // getProfile(id: string){
    //     console.warn('Obsolete method. Please profileAPI object')
    //     return profileAPI.getProfile(id)
    // }
}
export const profileAPI = {
    getProfile(id: number){
        return instance.get(`profile/${id}`)
    },
    getStatus(id: string) {
        return instance.get(`profile/status/` + id)
    },
    updateStatus(status: string){
       return instance.put(`profile/status`,{status: status})
    },
    updatePhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
    },
    updateProfile(profile: UpdateUserType) {
        return instance.put('profile', profile)
    }
}
export const authAPI = {
    me() {
       return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe= false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}
