import { setItem } from "../helper/persistanceStorage"
import AuthServise from "../service/auth"
const state = {
    isLoading: false,
    user: null,
    errors: null,
}
const mutations = {
    registerStart(state) {
        state.isLoading = true
        state.user = null
            // bu yerda ozi qavslar yoq save qilganimda auto qavs berdi
        state.errors = null
    },
    registerSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
    },
    registerFailure(state, payload) {
        state.isLoading = false
        state.errors = payload
    }, //bu uchala function registerni bosgan buttonni disable qilish uchun yozildi
}
const actions = {
    register(context, user) {
        return new Promise((resolve, reject) => {
            context.commit("registerStart")
                // promioseni ishlatishdan maqsad serverga sorov yuborilganda success bolsa responseni. error bolsa errorni ushlab olish ucun ishlatamiz.
            AuthServise.register(user)
                .then((response) => {
                    console.log("Response", response.data.user)
                    context.commit("registerSuccess", response.data.user)
                    setItem("token", response.data.user.token)
                    resolve(response.data.user)
                })
                .catch((error) => {
                    console.log("error", error.response.data)
                    context.commit("registerFailure", error.response.data)
                    reject(error.response.data)
                })
        })
    },
}
export default {
    state,
    mutations,
}
//bu component state mutationlarimizni modullarga bolib olishga xizmat qiladi