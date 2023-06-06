<svelte:head>
    <title>Server-Side Rendering</title>
</svelte:head>

<script>
    export let data;
</script>

<h1>This page is SSR only</h1>
<h2>Welcome, {data.user.name} ({data.user.age} y/o)</h2>
