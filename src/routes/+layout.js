export async function load({ fetch }) {
    const res_episodes = await fetch('https://syntax.fm/api/shows');
    const data_episodes = await res_episodes.json();

    return {
        all_episodes: data_episodes
    }
}