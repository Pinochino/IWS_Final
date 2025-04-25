const { default: axiosClient } = require("./AxiosClient")

const handleAPI = (url, method='get', data) => {
    return axiosClient({
        url,
        method,
        data
    })
}

export default handleAPI;