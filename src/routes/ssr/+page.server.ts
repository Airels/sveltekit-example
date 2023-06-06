import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = ({ params }) => {
    return {
        user: {
            name: "John",
            age: 42
        }
    };
}
