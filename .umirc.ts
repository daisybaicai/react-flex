import { defineConfig } from 'umi';

export default defineConfig({
  history: { type: 'hash' },
  publicPath: './',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});