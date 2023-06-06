import type { Load } from "@sveltejs/kit";

export const load: Load = ({ params }) => {
    return {
        user: {
            name: "John",
            age: 42
        }
    };
}
