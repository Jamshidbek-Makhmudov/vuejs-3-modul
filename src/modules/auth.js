const state = {
    isLoading: false,
}
const mutations = {
    setLoading(state) {
        state.isLoading = true
    },
}
export default {
    state,
    mutations,
}
//bu component state mutationlarimizni modullarga bolib olishga xizmat qiladi