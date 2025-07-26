const apiUrl = import.meta.env.VITE_API_URL;

import { useEffect } from 'react'

export default function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
