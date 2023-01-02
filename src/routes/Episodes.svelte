<script>
    export let episodes;
</script>

<nav>
    <ul>
    {#each episodes as episode}
        <li>
            <a href={`/show/${episode.number}`}>{episode.title}</a>
        </li>
    {/each}
    </ul>
</nav>

<style>
    li {
      list-style: none;
      margin-bottom: 0.7em;  
    }

    li > a {
        text-decoration: none;
        color: rgb(61, 4, 4);
    }
</style>