'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle } from 'lucide-react'
import { Button, Input, Textarea, Section, Card, CardContent } from '../ui'
import { ContactFormData } from '@/types'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

export const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    setIsLoading(false)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  if (isSubmitted) {
    return (
      <Section id="contact" background="gradient" padding="xl">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-neutral-900">
              Thank you for your interest!
            </h2>
            <p className="text-xl text-neutral-600">
              We've received your message and will get back to you within 24 hours.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
            >
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </Section>
    )
  }

  return (
    <Section id="contact" background="gradient" padding="xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary-200/50"
          >
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">Get Started</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-display text-neutral-900 mb-6"
          >
            Ready to Transform
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {' '}Your Marketing?
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
          >
            Get in touch with our team to learn how ADmyBRAND AI can help you achieve your marketing goals. Start your free trial today!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  Send us a message
                </h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      placeholder="John Doe"
                      {...register('name')}
                      error={errors.name?.message}
                    />
                    <Input
                      label="Company (Optional)"
                      placeholder="Your Company"
                      {...register('company')}
                      error={errors.company?.message}
                    />
                  </div>
                  
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="john@company.com"
                    {...register('email')}
                    error={errors.email?.message}
                  />
                  
                  <Textarea
                    label="Message"
                    placeholder="Tell us about your marketing goals and how we can help..."
                    rows={5}
                    {...register('message')}
                    error={errors.message?.message}
                  />
                  
                  <Button
                    type="submit"
                    loading={isLoading}
                    className="w-full group"
                    size="lg"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Get in touch
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Have questions about our AI marketing platform? Our team of experts is here to help you understand how ADmyBRAND AI can transform your marketing strategy.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: 'Email Us',
                  content: 'hello@admybrand.ai',
                  subtitle: 'We respond within 24 hours'
                },
                {
                  icon: Phone,
                  title: 'Call Us',
                  content: '+1 (555) 123-4567',
                  subtitle: 'Mon-Fri 9AM-6PM EST'
                },
                {
                  icon: MapPin,
                  title: 'Visit Us',
                  content: '123 Innovation Drive',
                  subtitle: 'San Francisco, CA 94105'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-neutral-900 font-medium">
                      {item.content}
                    </p>
                    <p className="text-neutral-500 text-sm">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/40"
            >
              <h4 className="font-semibold text-neutral-900 mb-4">
                Why choose ADmyBRAND AI?
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-neutral-600">30-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-neutral-600">No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-neutral-600">24/7 support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-neutral-600">Cancel anytime</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}