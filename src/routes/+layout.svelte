<script>
    export const prerender = true;

    let navLinks = [
        {
            "name": "Home",
            "url": "/"
        },
        {
            "name": "Hello",
            "url": "/hello"
        },
        {
            "name": "SSR",
            "url": "/ssr"
        }
    ];
</script>

<ul>
    {#each navLinks as navLink}
        <li>
            <a href={navLink.url}>{navLink.name}</a>
        </li>
    {/each}
</ul>

<slot></slot>
