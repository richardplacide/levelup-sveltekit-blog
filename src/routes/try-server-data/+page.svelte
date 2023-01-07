<script>
    export let data;
</script>

<h2>Let's try Server side data</h2>
<p>The following data is served from array of objects inside page.js</p>
{#each data.people as person}
<p>ID: {person.id} - Name: {person.name} - Division: {person.division}</p>
{/each}
<br>
<h2>Data from server Hooks</h2>
<p>Here we have a  fake auth system (auth.js file) that create data about a fake logged user</p>
<p>Auth user: {data.user.id} - name: {data.user.name} - roles: {data.user.roles}</p>
<h3>This page also serves cookies</h3>
<p>THe cookie parameter 'checked' have been set to true in hooks.server.js</p>
<p>checked: {data.checked}</p>
