import BillingForm from '@/components/checkout/form/BillingForm'
import EmailForm from './EmailForm'

function CheckoutForm() {
  return (
    <section className="flex flex-col gap-y-8">
      {/* <ContactForm /> */}
      <EmailForm />
      <BillingForm />
    </section>
  )
}
export default CheckoutForm
