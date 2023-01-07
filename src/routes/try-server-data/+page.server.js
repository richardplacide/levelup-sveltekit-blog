
export function load({params, setHeaders, locals, cookies}) {
    const mockdata = [
        {
            id: 1,
            name: "Nopalam",
            division: "East of Heer"
        },
        {
            id: 2,
            name: "Thorgaster",
            division: "West of Zeer"
        },
        {
            id: 1,
            name: "Dragoon",
            division: "East of Heer"
        }
    ]

    setHeaders({
        'Cache-Control': 'max-age=3600'
    });

    const checked = cookies.get('checked');
    
    return {
        people: mockdata,
        user: locals.user,
        checked: checked
    }
}

    