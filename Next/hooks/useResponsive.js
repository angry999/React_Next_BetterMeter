import { useState, useLayoutEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { MEDIA_QUERY } from '../constants'

const useResponsive = () => {
  const [isClient, setIsClient] = useState(false)

  const isMobile = useMediaQuery(MEDIA_QUERY.MOBILE)

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true)
  }, [])

  return {
    isMobile: isClient ? isMobile : false,
  }
}

export default useResponsive
