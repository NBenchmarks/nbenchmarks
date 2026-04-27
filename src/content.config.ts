import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const benchmarks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/benchmarks' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string().optional(),
    heroImage: z.string().optional(),
    thumb: z.string(),
    tags: z.array(z.string()).optional(),
    videoUrl: z.string().optional(),
  }),
});

export const collections = {
  benchmarks,
};
