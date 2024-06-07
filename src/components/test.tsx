import { useState, useRef, useEffect } from 'react'

interface Props {
  value?: string
  defaultValue?: string
  onChange?: (value: string ) => void
}
export function Test(props: Props) {
  const { value: propsValue, defaultValue, onChange } = props

  const [value, setValue] = useState(() => {
    if (defaultValue !== undefined) {
      return defaultValue
    } else {
      return propsValue
    }
  })

  const isFirstRender = useRef(true)

  useEffect(() => {
    if (propsValue && !isFirstRender.current) {
      setValue(propsValue)
    }
    isFirstRender.current = false
  }, [propsValue])

  const mergedValue = propsValue === undefined ? value : propsValue

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target
    
    if (propsValue === undefined) {
      setValue(value)
    }
    onChange?.(value)
  }

  return (
    <input
      value={mergedValue}
      onChange={ handleChange }
    />
  )
}
