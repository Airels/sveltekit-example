<svelte:head>
    <title>Pre-Render</title>
</svelte:head>

<script>
    export let data;
</script>

<h1>This page is pre-rendered</h1>
<h2>{ data.random }</h2>
