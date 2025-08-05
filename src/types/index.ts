export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface PricingTier {
  name: string
  price: number
  period: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

export interface FAQ {
  question: string
  answer: string
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
}