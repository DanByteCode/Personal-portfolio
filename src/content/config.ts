import { defineCollection, z } from 'astro:content'

const projectSchema = z.object({
  title: z.string(),
  preview: z.string(),
  img: z.string(),
  live: z.string(),
  code: z.string(),
  tecnology: z.array(z.string())
})

const projects = defineCollection({
  type: 'content',
  schema: projectSchema
})
export const collections = { projects }
export type Project = { data: z.infer<typeof projectSchema>; body: string }
