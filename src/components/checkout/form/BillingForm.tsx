import { Button } from '@/components/ui/button'
import CountrySelect from '@/components/ui/CountrySelect'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

export const billingFormSchema = z.object({
  country: z.string(),
  postalCode: z.string(),
  state: z.string(),
  city: z.string(),
  address: z.string(),
})

export type BillingSchema = z.infer<typeof billingFormSchema>

function BillingForm() {
  const { handleSubmit, register, watch } = useForm<BillingSchema>({
    resolver: zodResolver(billingFormSchema),
  })

  const onSubmit: SubmitHandler<BillingSchema> = (data) => {
    console.log(data)
  }

  return (
    <section className="border border-neutral-500 p-8 rounded-md">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <h3 className="mb-4">Billing</h3>
        {/* COUNTRY SELECT */}
        <div className="form-inputs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="form-control flex flex-col items-start w-full max-w-xs gap-2 ">
            <CountrySelect />
          </div>
          {/* STATE */}
          <div className="form-control flex flex-col items-start w-full max-w-xs gap-2  ">
            <Label htmlFor="email">Postal Code</Label>
            <Input placeholder="" />
          </div>
          {/* STATE */}
          <div className="form-control flex flex-col items-start w-full max-w-xs gap-2  ">
            <Label htmlFor="email">State</Label>
            <Input />
          </div>
          {/* STATE */}
          <div className="form-control flex flex-col items-start w-full max-w-xs gap-2  ">
            <Label htmlFor="email">City</Label>
            <Input />
          </div>
          <div className="form-control flex flex-col items-start w-full max-w-xs gap-2  ">
            <Label htmlFor="email">Address</Label>
            <Input />
          </div>
        </div>
        <Button type="submit">Save & Continue</Button>
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </form>
    </section>
  )
}
export default BillingForm
