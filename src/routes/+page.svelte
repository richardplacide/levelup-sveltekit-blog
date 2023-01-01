<script>
    import Testlib from "$lib/Testlib.svelte";
    export let data;
    $: ({latest_episode, all_episodes} = data); // adds reactive destructuring with the reactive $ and remove the need to call data.xxx
</script>

<h1>Welcome to SvelteKit: Levelup Tuts</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/about">About us</a>
<p>Importing something from $Lib:</p>
<Testlib />
<br>
<br>
<h2>Syntax Podcast API</h2>
<h3>Latest episode: {latest_episode.title}</h3>
<h3>All episodes:</h3>
<nav>
    <ul>
    {#each all_episodes as episode}
        <li>
            {episode.title}
            <a href={`/show/${episode.number}`}>{episode.title}</a>
        </li>
    {/each}
    </ul>
</nav>

