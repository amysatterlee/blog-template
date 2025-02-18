<script lang="ts">
  export let data;
</script>

<div class="container mx-auto p-4">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each data.posts as post}
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={post.image} alt={post.title} class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-semibold text-gray-800">{post.title}</h2>
          <p class="text-sm text-gray-500">{post.date} | {post.author}</p>
          <p class="mt-2 text-gray-700">{post.teaser}</p>
          <a href={`/blog/posts/${post.id}`} class="mt-4 inline-block text-blue-600 hover:underline">Read More</a>
        </div>
      </div>
    {/each}
  </div>
</div>
