/* eslint-disable @typescript-eslint/ban-types */
import { useEffect } from 'react'

export const useDebounce = (value: string, callback: Function, timeOut: number = 300): void => {
  useEffect(() => {
    const timeOutId = setTimeout(callback, timeOut)

    return () => { clearTimeout(timeOutId) }
  }, [value, timeOut, callback])
}
