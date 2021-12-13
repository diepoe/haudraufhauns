import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

const config = {
    disableDependencyReinclusion: ['@roxi/routify'],

    preprocess: [
        preprocess(
            mdsvex({
                extensions: ['.svx', '.md'],
                layout: {
                    imprint: "./src/layouts/Imprint.svelte",
                    post: "./src/layouts/Post.svelte"
                }
            })
        )
    ]
};

export default config;
