import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = await getCollection('benchmarks');

  const data = posts
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
    .map(p => ({
      id: p.id,
      title: p.data.title,
      thumb: p.data.thumb,
      tags: p.data.tags ?? [],
      date: p.data.date,
      url: `/benchmarks/${p.id}`,
    }));

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};