<script>
    import { createEventDispatcher } from "svelte";

    export let count = 0;
    export let increment = 1;

    const dispatch = createEventDispatcher();

    function incr() {
        count += increment;
        dispatch('increment', { count });
    }
</script>

<div class="block">
    <slot></slot>

    <h2>Counter: { count }</h2>
    <button on:click={incr}>Increment</button>
</div>

<style>
    .block {
        display: block;
        border-style: solid;
        border-width: 1px;
        border-color: darkred;
        margin: 1vw;
        padding: 0.5vw;
    }
</style>
