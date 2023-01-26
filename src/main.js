import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import uiComponents from "./components/ui-components"
import "./index.css"
import store from "./store"
const app = createApp(App)
uiComponents.map((component) => app.component(component.name, component))

app.use(router)
app.use(store)
app.mount("#app")
    //yuqoridagi store bu storda keldi storeni esa VueX dan kochirib oldik VueX bu state manegment pattern degani
    // va u reactda context providerga teng