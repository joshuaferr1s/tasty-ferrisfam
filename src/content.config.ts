import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().default('Dinner'),
    cookTime: z.string(), // ISO 8601 format, e.g., "PT10M"
    servings: z.string(),
    credit: z.string().optional(),
    ingredients: z.array(z.string()),
    instructions: z.array(z.string()),
  }),
});

export const collections = { recipes };
