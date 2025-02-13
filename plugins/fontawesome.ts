import { defineNuxtPlugin } from "#app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUser,
  faLock,
  faPlus,
  faImage,
  faTableList,
  faT,
  faMapLocationDot,
  faChartSimple,
  faCloudArrowDown,
  faCode,
  faLink,
  faPlay
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default defineNuxtPlugin((nuxtApp) => {
  // Adiciona os ícones que deseja usar na biblioteca
  library.add(
    faUser,
    faLock,
    faGithub,
    faTwitter,
    faPlus,
    faImage,
    faTableList,
    faT,
    faMapLocationDot,
    faChartSimple,
    faCloudArrowDown,
    faCode,
    faLink,
    faPlay
  );

  // Registra o componente globalmente
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
