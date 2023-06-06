<script>
    import { countStore } from "$lib/store.ts";

    let count;
    countStore.subscribe(v => count = v);
</script>

<h1>Count store value : {count}</h1>
