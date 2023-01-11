export const actions = {
    default: async ({locals, request}) => {
        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const message = data.get('message');
        console.log('form name: ', name, ' - form email: ', email, ' - message: ', message);

        return {
            message: 'Email sent!'
        };
    }
}