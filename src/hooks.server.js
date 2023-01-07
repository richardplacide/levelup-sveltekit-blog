import { sequence } from "@sveltejs/kit/hooks";
import auth from "$db/fake_auth";


function logger({event, resolve}) {
    const start_time = Date.now();
    return resolve(event);
}

function authorize({event, resolve}) {
    const user = auth();
    event.locals.user = user;
    event.cookies.set('checked','true');
    return resolve(event);
}

export const handle = sequence(logger, authorize);

// single hook example. Above we use a sequence of 2 hooks instead
/* export async function handle({event, resolve}) {
    const user = auth();
    event.locals.user = user;
    event.cookies.set('checked','true');
    return resolve(event);
} */