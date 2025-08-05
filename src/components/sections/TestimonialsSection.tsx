'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from 'lucide-react'
import { Card, CardContent, Section } from '../ui'
import { Testimonial } from '@/types'

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Marketing Director',
    company: 'TechFlow Inc.',
    content: 'ADmyBRAND AI completely transformed our marketing strategy. We saw a 300% increase in qualified leads within the first month. The AI-generated content is indistinguishable from our best human copywriters.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CEO',
    company: 'GrowthLab',
    content: 'The predictive analytics feature helped us identify our best-performing campaigns before they even launched. Our ROI improved by 250% and we cut our marketing spend by 40%. This is the future of marketing.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    name: 'Emily Foster',
    role: 'Growth Marketing Manager',
    company: 'Startup Studio',
    content: 'As a small team, we needed automation that actually worked. ADmyBRAND AI handles our entire content pipeline and A/B testing. It\'s like having a senior marketing team at a fraction of the cost.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    name: 'David Park',
    role: 'VP of Marketing',
    company: 'Scale Dynamics',
    content: 'The multi-channel automation saved us 20+ hours per week. Our campaigns are now perfectly coordinated across all platforms, and the AI insights help us make data-driven decisions instantly.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    name: 'Lisa Thompson',
    role: 'Digital Marketing Lead',
    company: 'Innovation Hub',
    content: 'The customer journey mapping feature revealed insights we never knew existed. We optimized our funnel and increased conversions by 180%. ADmyBRAND AI pays for itself within days.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    name: 'James Wilson',
    role: 'Marketing Operations',
    company: 'Enterprise Solutions',
    content: 'We manage campaigns for 50+ clients, and ADmyBRAND AI helps us deliver consistent results at scale. The white-label options are perfect for our agency model.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  }
]

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-neutral-300'
        }`}
      />
    ))
  }

  return (
    <Section id="testimonials" background="default" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full mb-6"
        >
          <Sparkles className="w-4 h-4 text-primary-600" />
          <span className="text-sm font-medium text-primary-700">Customer Success</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold font-display text-neutral-900 mb-6"
        >
          Loved by Marketing
          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            {' '}Professionals
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
        >
          Join thousands of marketing professionals who have transformed their results with ADmyBRAND AI. Here's what they have to say about their experience.
        </motion.p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Main Testimonial */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Card className="bg-white shadow-2xl border-white/20">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center justify-between mb-8">
                    <Quote className="w-12 h-12 text-primary-300" />
                    <div className="flex space-x-1">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-8 font-medium">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-neutral-900 text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-neutral-600">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-primary-600 font-medium">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-neutral-50 transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6 text-neutral-600" />
        </button>
        
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-neutral-50 transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6 text-neutral-600" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary-600' : 'bg-neutral-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
      >
        {[
          { value: '50,000+', label: 'Happy Customers' },
          { value: '4.9/5', label: 'Average Rating' },
          { value: '99.9%', label: 'Customer Satisfaction' },
          { value: '300%', label: 'Average ROI Increase' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="text-center"
          >
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {stat.value}
            </div>
            <div className="text-neutral-600 text-sm">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}