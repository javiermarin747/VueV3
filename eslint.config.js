import { defineConfig } from 'eslint-define-config';
import pluginVue from 'eslint-plugin-vue';

export default defineConfig({
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [pluginVue],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
});
