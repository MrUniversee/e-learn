import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '../ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { useState } from 'react'

const contactSchema = z.object({
  email: z.string().email(),
  fullName: z.string(),
  password: z.string(),
})

type FormSchemaType = z.infer<typeof contactSchema>

function EmailForm() {
  const [next, setNext] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)

  const {
    getValues,
    watch,
    handleSubmit,
    register,
    trigger,
    formState: { errors },
  } = useForm<FormSchemaType>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
    },
    resolver: zodResolver(contactSchema),
  })

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data)
  }

  const toggleEmailField = async () => {
    const isEmailValid = await trigger('email')
    if (isEmailValid) {
      //fake db check to verify email
      const result = await new Promise((resolve) =>
        setTimeout(() => resolve(true), 1000)
      )

      return result ? setIsRegistered(true) : setNext(true)
    }

    return
  }

  const emailValue = getValues('email')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border border-neutral-500 p-8 rounded-md flex flex-col gap-y-4">
        {isRegistered ? (
          <div className="form-control flex items-center p-2 justify-between  ">
            <p>{emailValue}</p>
            <Button variant={'outline'} onClick={() => setIsRegistered(false)}>
              logout
            </Button>
          </div>
        ) : (
          <div className="form-control flex flex-col gap-y-2 ">
            <label
              htmlFor="email"
              className="font-medium text-sm text-neutral-700"
            >
              Email
            </label>
            <Input
              {...register('email')}
              placeholder="email@email.com"
              className="py-5"
            />
            {errors.email && (
              <p role="error" className="text-sm text-destructive">
                {errors.email.message}
              </p>
            )}
          </div>
        )}

        {next && (
          <>
            {/* full name */}
            <motion.div
              initial={{ y: '-4px', opacity: 0 }}
              animate={{ y: '4px', opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="form-control flex flex-col gap-y-2"
            >
              <label
                htmlFor="fullName"
                className="font-medium text-sm text-neutral-700"
              >
                Full Name
              </label>
              <Input
                {...register('fullName')}
                placeholder="full name"
                className="py-5 "
              />
            </motion.div>
            {/* PASSWORD FORM */}
            <motion.div
              initial={{ y: '-4px', opacity: 0 }}
              animate={{ y: '4px', opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="form-control flex flex-col gap-y-2"
            >
              <label
                htmlFor="password"
                className="font-medium text-sm text-neutral-700"
              >
                Password
              </label>
              <Input
                type="password"
                {...register('password')}
                className="py-5"
                placeholder="Password"
              />
              {errors.password && (
                <p role="error" className="text-sm text-destructive">
                  {errors.password.message}
                </p>
              )}
            </motion.div>
            <Button type="submit">Proceed</Button>
          </>
        )}
        {(!next || isRegistered) && (
          <Button
            disabled={isRegistered}
            type="button"
            onClick={toggleEmailField}
          >
            Continue
          </Button>
        )}

        {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
      </div>
    </form>
  )
}
export default EmailForm
