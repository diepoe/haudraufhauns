import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import footnotes from 'remark-footnotes';

const config = {
    disableDependencyReinclusion: ['@roxi/routify'],

    preprocess: [
        preprocess(
            mdsvex({
                extensions: ['.svx', '.md'],
                layout: {
                    imprint: "./src/layouts/Imprint.svelte",
                    post: "./src/layouts/Post.svelte"
                },
                remarkPlugins: [[footnotes]]
            })
        )
    ]
};

export default config;
