import { library } from "@fortawesome/fontawesome-svg-core";
import {   faAngleDown,faAngleUp,faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "@/App.vue";
import "@/index.css";
import router from "@/router";

library.add(faSearch);
library.add(faAngleDown);
library.add(faAngleUp);

const pinia = createPinia();
createApp(App)
  .use(pinia)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
