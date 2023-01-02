//sveltekit variant of fetch bring in niceties vs standard js fetch
export async function load({ fetch, parent }) {
    const res = await fetch('https://syntax.fm/api/shows/latest');
    const data = await res.json();

    // mocking parent data functionality here we're taking data from layout
    const parent_data = await parent();
    console.log(parent_data);
    
    return {
        latest_episode: data
    }
}