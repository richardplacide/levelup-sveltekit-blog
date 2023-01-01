<script>
    export let data;
    $: ({episode} = data);
</script>

<h2>Syntax Podcast # {episode.number}: {episode.title}</h2>
<p>Date: {episode.date}</p>
<p><a href={episode.url}>show link</a></p>
{@html episode.html}