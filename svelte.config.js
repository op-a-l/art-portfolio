import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.md']
}

const config = {
  extensions: ['.svelte', '.md'],
  kit: {
    adapter: adapter()
  },
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
};
export default config;