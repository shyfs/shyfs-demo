import { useCallback, useState } from 'react'

export interface DispatcherResponse<T> {
  isLoading: boolean
  data?: T | undefined
  error?: any
  call(): void
}

export function useDispatcher<T>(
  _fn: () => Promise<T>,
  deps?: any[]
): DispatcherResponse<T> {
  const [data, setData] = useState<T>()
  const [error, setError] = useState<any>()
  const [isLoading, setLoading] = useState(false)

  const call = useCallback(() => {
    setLoading(() => true)
    _fn?.()
      .then(setData)
      .catch(setError)
      .finally(() => {
        setLoading(() => false)
      })
  }, [_fn, ...(deps || [])])

  return { data, call, isLoading, error }
}
