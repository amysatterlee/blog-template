<script>
  import "../app.css";
  import NavBar from '$lib/components/NavBar.svelte';
</script>

<NavBar />
<div class="mt-20 lg:max-w-[1200px] mx-auto p-4">
  <slot/>
</div>