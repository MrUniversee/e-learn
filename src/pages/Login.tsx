import LoginForm from '@/components/login/LoginForm'

function Login() {
  return (
    <section className="flex justify-center pt-12 px-8">
      {/*  */}
      <div className="border-2 flex items-center justify-center max-w-4xl w-full py-12 px-6 rounded">
        <div className="max-w-lg w-full">
          <LoginForm />
        </div>
      </div>
    </section>
  )
}
export default Login
