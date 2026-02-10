import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Remove the # from the hash to get the element ID
      const elementId = location.hash.substring(1)

      // Use setTimeout to ensure the DOM is fully rendered
      setTimeout(() => {
        const element = document.getElementById(elementId)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }, 100)
    } else {
      // Smooth scroll to top when route changes (no hash)
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }, [location.pathname, location.hash])

  return null
}
