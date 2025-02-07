import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import microApp from '@micro-zoe/micro-app'

microApp.start({
  // plugins: {
  //   modules: {
  //     'appname-vite': [
  //       {
  //         loader(code) {
  //           if (process.env.NODE_ENV === 'development') {
  //             // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
  //             code = code.replace(/(from|import)(\s*['"])(\/child\/vite\/)/g, all => {
  //               return all.replace('/child/vite/', 'http://localhost:4007/child/vite/')
  //             })
  //           }

  //           return code
  //         }
  //       }
  //     ],
      
  //   }
  // },
  // prefetchLevel: 2,
  // preFetchApps:[
  //   {name: "appname-vue3", url: `http://localhost:4009/child/vue3`},
  //   // {name: "appname-vite", url: `http://localhost:4007/child/vite/`,iframe: true},
  //   {name: "appname-sidebar", url: `http://localhost:4006/child/sidebar/`},
  // ]
})

const app = createApp(App)

app.use(router).mount('#app')
