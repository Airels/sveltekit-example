<script>
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>{$page.status} - {$page.error.message}</title>
</svelte:head>

<div class="container bg-dark p-5 border rounded text-center text-light">
    <h1 class="display-1">{$page.status} - {$page.error.message} 😢</h1>
</div>
