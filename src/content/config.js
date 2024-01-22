import { z, defineCollection } from "astro:content";

const recipesCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    cookTime: z.number(),
    servings: z.number(),
    ingredients: z.array(z.string()),
    steps: z.array(z.string()),
    credit: z.string().url(),
  }),
});

export const collections = {
  recipes: recipesCollection,
};
