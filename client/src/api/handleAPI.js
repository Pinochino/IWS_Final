import axiosClient from "./axiosClient"
export const handleAPI = (url, method = 'get', data ) => {
    return axiosClient({
        url,
        method,
        data
    })
}