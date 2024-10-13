import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().min(6, 'email must be at least 6 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export type TloginSchema = z.infer<typeof loginSchema>

export const registerSchema = z.object({
  email: z.string().email('Invalid email address').min(6),
  fullName: z.string().min(6, 'Name must be at least 6 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export type T_RegisterSchema = z.infer<typeof registerSchema>
