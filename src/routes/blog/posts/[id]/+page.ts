// src/routes/posts/[id]/+page.ts
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { posts } from '$lib/data/posts';
import { marked } from 'marked';

export const load: PageLoad = async ({ params, fetch }) => {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    throw error(404, 'Post not found');
  }

  const response = await fetch(post.content);
  if (!response.ok) {
    throw error(500, 'Failed to load content');
  }

  const markdown = await response.text();
  const html = marked(markdown);

  return {
    post,
    content: html
  };
};
