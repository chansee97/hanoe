import { RefObject, useState, useEffect } from 'react'

type Size = { width: number; height: number };

export function useSize(targetRef: RefObject<HTMLElement>) {
  const [state, setState] = useState<Size | undefined>(() => {
    const el = targetRef.current
    return el ? { width: el.clientWidth, height: el.clientHeight } : undefined
  });

  useEffect(() => {
    const el = targetRef.current

    if(!el) return

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setState({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        })
      })
    })

    resizeObserver.observe(el)

    return () => {
      // 清除监听
      resizeObserver.disconnect()
    }
  }, [targetRef])

  return state
}