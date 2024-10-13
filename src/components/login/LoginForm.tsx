import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TloginSchema, loginSchema } from '@/lib/types'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

function SignInForm() {
  const form = useForm<TloginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const isSubmitting = form.formState.isSubmitting

  function onSubmit(data: TloginSchema) {
    // use Zod to validate data
    const validatedData = loginSchema.safeParse(data)
    if (!validatedData.success) {
      console.log(validatedData.error)
    }
    //use validated data
    console.log(validatedData.data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder={'Enter Email'} {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="disabled:bg-primary/90 w-full"
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}
export default SignInForm
