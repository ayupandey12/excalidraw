import {z} from "zod"
export const Signinschema=z.object({
    email: z.email(),
    password: z.string()
})
export const Signupschema=z.object({
    email: z.email(),
    password: z.string().min(5,{message:"password length should be greated than 4"}),
    name:     z.string(),
    image: z.string().optional()
})
export const Roomschema=z.object({
   room:z.string()
})