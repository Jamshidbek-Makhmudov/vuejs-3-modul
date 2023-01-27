import axios from "./axios"
const AuthServise = {
    register(user) {
        return axios.post("/users", { user: user }) //bu yerda 1ta user yozib qoysak ham boladi.
    },
    login(user) {},
}
export default AuthServise