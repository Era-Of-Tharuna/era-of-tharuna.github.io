import React from 'react'
import { cn } from '@/lib/utils'
import { Container } from './Container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  background?: 'default' | 'muted' | 'gradient'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  id?: string
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  containerSize = 'lg',
  background = 'default',
  padding = 'lg',
  id
}) => {
  const backgrounds = {
    default: 'bg-white',
    muted: 'bg-neutral-50',
    gradient: 'bg-gradient-to-br from-primary-50 via-white to-secondary-50'
  }
  
  const paddings = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-24'
  }

  return (
    <section
      id={id}
      className={cn(
        'relative',
        backgrounds[background],
        paddings[padding],
        className
      )}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  )
}