import CheckoutForm from '@/components/checkout/CheckoutForm'

function Cart() {
  return (
    <section>
      {/* Checkout Layout */}
      <div className="grid grid-cols-1  lg:grid-cols-12 gap-12 overflow-hidden py-12">
        {/* Checkout Details */}
        <div className="flex flex-col lg:col-span-8  h-fit  ">
          {/* Contact Info */}
          <CheckoutForm />
        </div>
        {/* Checkout Item */}
        <div className="lg:col-span-4">
          <div className="img w-full h-[360px]  bg-primary"></div>
        </div>
      </div>
    </section>
  )
}
export default Cart
