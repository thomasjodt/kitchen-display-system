import { useState } from 'react'

interface UseForm<T> {
  form: T
  reset: () => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const useForm = <T>(initialForm: T): UseForm<T> => {
  const [form, setForm] = useState<T>(initialForm)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  const reset = (): void => {
    setForm(initialForm)
  }

  return { form, handleChange, reset }
}
