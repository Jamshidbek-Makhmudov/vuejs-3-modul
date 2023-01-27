export const getItem = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (error) {
        console.log("get error")
        return null
    }
}
export const setItem = (key, data) => {
        try {
            localStorage.setItem(key, JSON.stringify(data))
        } catch (error) {
            console.log("set error")
        }
    }
    // bu universal function bolib biz buni boshqa loyihalarda ham bemalol ishlatsak boladi