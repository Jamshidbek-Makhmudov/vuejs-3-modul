import { createStore } from "vuex"
import auth from "../modules/auth"
const store = createStore({
    state: {
        //state bizdagi xolatlar
    },
    mutations: {
        // mutations qilinaduigan ozgarishlar ya'ni actionlar
        //mutations bizda synxron functionlar uchun ishga tushadi
        //mutation ichidagi methodsda biz statni olamiz actionsda esa contexni olamiz va uni commit qilamiz
    },
    actions: {
        //actionslar mutationslar bilan deyarli bir xil farqi, stateni mutation qilishorniga commit qiladi
        //yana bitta qulayligi biz actionsni ichida ozimizni asinxronlarimizni ishlatsek boladi yani serverdan API olib
        // unga sorov yuborsak boladi.
        //action bizda asynxron functionlar uchun ishga tushadi
        //yana farqi mutationsni componentda chaqirganimizda commit qilib ishga tushurardik lekin actionlarni dispatch qilib ishga tushuramiz.
        //reactda va reduxda biz synxron va asynxrona functionlarni bitta actionda ishlatamniz
        // VUE da esa bularni 2ga bolib ishlatamiz.
    },
    modules: {
        auth,
        //modul nimaga kerak? bizda katta projectlarda stat va mutationl;ar juda kopayib ketadi modula shularni guruhlarga bolib sartirovka qilib beradi
    },
})
export default store
//mutation ichiga ishlidigan function statelarimizni yozib tashqarida commit buyrugi bn ishlatamiz.
//buyerda statelar global hisoblanadi, biz Vuejsda iloji boricha qlobal ozgaruchilarni localga ozgartirishimiz kerak
// buni qilish uchun bu statelarni ishlatadigan componentimizda compute objectini ishlatishimiz kerak boladi.
//shunda bu global ozgaruvchilar comuteni ichida bolib localga aylanadi