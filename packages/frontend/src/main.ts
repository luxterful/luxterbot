import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";

createApp(App).use(router).mount("#app");

console.log("Service 1: ", process.env.VUE_APP_SERVICE_1_URL);
