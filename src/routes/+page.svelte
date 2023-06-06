<script>
    import Counter from '$lib/Counter.svelte';
    import { fade, crossfade, fly, slide, blur } from "svelte/transition";
    import { flip } from "svelte/animate";
    import { countStore, timeStore, derivedStore } from "$lib/store.ts";
    import Component from "$lib/Component.svelte";
    import { onDestroy } from "svelte";

    let promise = randomNumber();

    function randomNumber() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Math.random());
            }, 5000);
        });
    }

    // ---

    let count = 0;
    $: double = count * 2;

    // ---
    let countStoreValue;
    const unsubscribe = countStore.subscribe(v => countStoreValue = v);
    onDestroy(unsubscribe);

    // ---

    let toggle = false;

    let incremented = false;

    // ---

    let items = [
        { name: 'foo', selected: false },
        { name: 'bar', selected: false },
        { name: 'baz', selected: false }
    ];

    // ---

    let message = 'Hello, world!';
    let messageVisible = true;

    // ---

    let time;
    timeStore.subscribe(v => time = v);

    // --
    let derived
    derivedStore.subscribe(v => derived = v);
</script>

<div class="block">
    {#await promise}
        Loading number...
    {:then number}
        {number}
    {/await}

    <br />

    <button on:click={() => promise = randomNumber()}>Refresh</button>
</div>

<div class="block">
    <h1>{count}</h1>
    <h2>Double: {double}</h2>
    <button on:click={() => count++}>Increment</button>
</div>

<div class="block">
    <div class="block">
        <h1>Store count : {countStoreValue}</h1>
        <button on:click={() => countStore.update(v => v + 1)}>Increment</button>
    </div>

    <div class="block">
        <Component />
    </div>
</div>

<div class="block">
    <button on:click={() => toggle = !toggle}>{ toggle ? 'Close' : 'Open' } text</button>

    {#if toggle}
        <div class="block">
            Hello, world!
        </div>
    {/if}
</div>

<div class="block">
    {#each items as item}
        <div class="block">
            {item.name}
        </div>
    {/each}
</div>

<div class="block">
    {#each items as item}
        <div class="block" class:selected={item.selected} on:click={() => item.selected = !item.selected}>
            {item.name}
        </div>
    {/each}
</div>

<div class="block">
    <div class="inline">
        <h3>Selected</h3>
        {#each items.filter(i => i.selected) as item (item.name)}
            <div class="block" class:selected={item.selected} on:click={() => item.selected = !item.selected} animate:flip transition:slide>
                {item.name}
            </div>
        {/each}
    </div>

    <div class="inline">
        <h3>Not selected</h3>
        {#each items.filter(i => !i.selected) as item (item.name)}
            <div class="block" class:selected={item.selected} on:click={() => item.selected = !item.selected} animate:flip transition:slide>
                {item.name}
            </div>
        {/each}
    </div>
</div>

<Counter count={10} increment={2} on:increment|once={() => incremented = true}>
    A counter
</Counter>

<div class="block">
    <div>
        <button on:click={() => messageVisible = !messageVisible}>Toggle message</button>
    </div>

    {#if messageVisible}
        <div out:fade={{duration: 200}}>
            {#each message.split('') as char, i}
                <span in:fade="{{delay: 200 + i * 100, duration: 100 }}">{char}</span>
            {/each}
        </div>
    {/if}
</div>

{#if incremented}
    <div class="block">
        Value incremented!
    </div>
{/if}

<div class="block">
    {#key time}
        <span out:blur={{delay:0, duration: 200}} in:blur={{delay: 200, duration: 200}}>
            {time}
        </span>
    {/key}

    <br />

    <span>Démarré depuis {derived}s</span>
</div>

<style>
    .selected {
        background: orangered;
    }

    .inline {
        display: inline-block;
        vertical-align: top;
    }

    .block {
        display: block;
        border-style: solid;
        border-width: 1px;
        border-color: black;
        margin: 1vw;
        padding: 0.5vw;
    }
</style>


