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
   name:z.string().min(5,{message:"room name length should be greated than 4"}).max(15,{message:"room name length should be less than 16"}),
   createdAt:z.date().optional()
})