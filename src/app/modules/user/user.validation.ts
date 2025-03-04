import {z} from 'zod'

const UserZodSchema= z.object({
    id:z.string(),
    password: z.string().min(8,{message:'Password must be of minimum length 8'}).max(20,{message:'Password cannot be more than 20 characters'}),
    needsPasswordChange:z.boolean().default(true),
    role:z.enum(['admin','faculty','student']),
    status:z.enum(['in-progress','blocked']).default('in-progress'),
    isDeleted:z.boolean().default(false)
})

export const UserZodSchemaValidation={
     UserZodSchema
}