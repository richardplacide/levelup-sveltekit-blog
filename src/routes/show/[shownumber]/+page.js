import {error} from '@sveltejs/kit';

export async function load({fetch, params}) {
    const res = await fetch(`https://syntax.fm/api/shows/${params.shownumber}`);
    const data = await res.json();
    console.log(data);

    if(data.message) {
        throw error(404,
            {message: data.message});
    };

    return {
        episode: data
    }
}