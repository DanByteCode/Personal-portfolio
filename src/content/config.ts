import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    preview: z.string(),
    img: z.string(),
    live: z.string(),
    code: z.string(),
    tecnology: z.array( z.string() ),
  })
})

export const collections = { projects }