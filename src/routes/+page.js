//sveltekit variant of fetch bring in niceties vs standard js fetch
export async function load({ fetch }) {
    const res = await fetch('https://syntax.fm/api/shows/latest');
    const res_episodes = await fetch('https://syntax.fm/api/shows');
    const data = await res.json();
    const data_episodes = await res_episodes.json();

    return {
        all_episodes: data_episodes,
        latest_episode: data
    }
}