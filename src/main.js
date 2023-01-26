import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import uiComponents from "./components/ui-components"
import "./index.css"
const app = createApp(App)
uiComponents.map((component) => app.component(component.name, component))

app.use(router)

app.mount("#app")