import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  server: {
    // 监听的IP地址 默认值：localhost
    // host:'localhost',

    // 监听端口号 默认值：5173
    port: 80,

    // 服务启动后是否自动打开浏览器
    // 若为字符串则为指定打开的URL
    // open: '/docs/index.html'
    open: false
  }
});
