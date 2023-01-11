<script>
    import { page } from "$app/stores";
    $: console.log('page', $page);
</script>

<h1>Oups!</h1>
<h2> ** {$page.status} ** </h2>
<p>{$page.error?.message}</p>