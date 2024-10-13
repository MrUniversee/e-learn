import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { countries } from '@/lib/countries.json'
import { useForm, UseFormRegister } from 'react-hook-form'
import { billingFormSchema, BillingSchema } from '../checkout/form/BillingForm'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
// {
//   register,
// }: {
//   register: UseFormRegister<BillingSchema>
// }
function CountrySelect() {
  const form = useForm<BillingSchema>({
    resolver: zodResolver(billingFormSchema),
  })

  return (
    <>
      <Form {...form}>
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={countries[0].name}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={countries[0].name}
                      ></SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.name}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )
          }}
        />
      </Form>
    </>
  )
}
export default CountrySelect
