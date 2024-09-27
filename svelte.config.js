import adapter from '@sveltejs/adapter-node'; // 使用 Node.js 适配器
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      out: 'build', // 构建后的输出目录
    }),
  },
  preprocess: vitePreprocess(),
};

export default config;
