<script lang="ts">
  export let data;
</script>

<div>
  <article class="prose max-w-none">
    <h1 class="text-4xl font-extrabold text-gray-900">{data.post.title}</h1>
    <p class="text-gray-500">{data.post.date} | {data.post.author}</p>
    <img src={data.post.image} alt={data.post.title} class="w-full max-h-96 object-cover rounded-lg mt-4">
    <div class="article-content prose prose-lg mt-4">       
      {@html data.content}
    </div>
  </article>
</div>
