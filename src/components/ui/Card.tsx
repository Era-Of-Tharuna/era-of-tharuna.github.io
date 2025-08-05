import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  glass = false
}) => {
  const baseClasses = 'rounded-xl shadow-lg border border-neutral-200/20 transition-all duration-300'
  
  const variants = glass
    ? 'bg-white/10 backdrop-blur-lg border-white/20 shadow-xl'
    : 'bg-white border-neutral-200'
  
  const hoverEffects = hover
    ? 'hover:shadow-2xl hover:-translate-y-2 hover:border-primary-200/40'
    : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(baseClasses, variants, hoverEffects, className)}
    >
      {children}
    </motion.div>
  )
}

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => (
  <div className={cn('p-6 pb-3', className)}>
    {children}
  </div>
)

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => (
  <div className={cn('p-6 pt-3', className)}>
    {children}
  </div>
)

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => (
  <div className={cn('p-6 pt-3 border-t border-neutral-100', className)}>
    {children}
  </div>
)