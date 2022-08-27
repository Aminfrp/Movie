import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "@vuepic/vue-datepicker/dist/main.css";
import Datepicker from "@vuepic/vue-datepicker";
import { SnackbarService, Vue3Snackbar } from "vue3-snackbar";
import "vue3-snackbar/dist/style.css";

const app = createApp(App).use(router);
app.use(SnackbarService);
app.component("vue3-snackbar", Vue3Snackbar);
app.component("DatePicker", Datepicker);
app.mount("#app");
