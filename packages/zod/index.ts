import {z} from "zod"
export const Signinschema=z.object({
    username: z.string(),
    password: z.string()
})
export const Signupschema=z.object({
    username: z.string(),
    password: z.string(),
    name:     z.string()
})
export const Roomschema=z.object({
   room:z.string()
})