import { createSSRApp } from "vue";
//引入flexible
import 'lib-flexible'
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
