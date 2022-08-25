import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "@vuepic/vue-datepicker/dist/main.css";
import Datepicker from "@vuepic/vue-datepicker";

const app = createApp(App).use(router);
app.component("DatePicker", Datepicker);
app.mount("#app");
