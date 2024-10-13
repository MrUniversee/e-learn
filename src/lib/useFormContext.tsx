import { createContext, useContext } from 'react'

export const formContext = createContext<string | null>(null)

export const useFormContext = () => {
  const context = useContext(formContext)
  if (context === null) {
    throw new Error('Form context should be used within form provider')
  }
  return context
}

export default function FormContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const hello = 'value'

  return <formContext.Provider value={hello}>{children}</formContext.Provider>
}
