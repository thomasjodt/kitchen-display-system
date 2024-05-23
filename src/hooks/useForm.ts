import { useState } from 'react'

type FormElement = HTMLInputElement | HTMLSelectElement
interface UseForm<T> {
  form: T
  reset: () => void
  handleChange: (e: React.ChangeEvent<FormElement>) => void
}

interface HandleChange {
  (e: React.ChangeEvent<HTMLInputElement>): void
  (e: React.ChangeEvent<HTMLSelectElement>): void
  (e: React.ChangeEvent<FormElement>): void
}

export const useForm = <T>(initialForm: T): UseForm<T> => {
  const [form, setForm] = useState<T>(initialForm)

  const handleChange: HandleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  const reset = (): void => {
    setForm(initialForm)
  }

  return { form, handleChange, reset }
}
