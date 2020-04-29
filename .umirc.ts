import { defineConfig } from 'umi';

export default defineConfig({
  history: { type: 'hash' },
  publicPath: './',
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/index2', component: '@/pages/index2' },
    { path: '/index3', component: '@/pages/EditableTree' },
  ],
});