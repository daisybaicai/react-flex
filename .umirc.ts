import { defineConfig } from 'umi';

export default defineConfig({
  history: { type: 'hash' },
  publicPath: './',
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  //   { path: '/index2', component: '@/pages/index2' },
  //   { path: '/index3', component: '@/pages/index3' },
  //   { path: '/create_screen', component: '@/pages/createScreen' },
  //   { path: '/preview/blue_chain', component: '@/components/theme/blueChain' },
  // ],
  proxy: {
    "/api": {
      "target": "http://localhost:3000/api/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
});