import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "./registerServiceWorker";
import "./assets/styles/styles.scss";

const app = createApp(App);

app.use(store);
app.use(router);
app.use("VueAxios", axios);
app.mount("#app");
