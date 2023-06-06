import type { ServerLoad } from "@sveltejs/kit";

export const prerender = true;

export const load: ServerLoad = ({ params }) => {
    return {
        random: Math.random()
    };
}
