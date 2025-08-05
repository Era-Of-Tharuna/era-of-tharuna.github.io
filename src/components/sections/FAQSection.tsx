'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Sparkles } from 'lucide-react'
import { Section } from '../ui'
import { FAQ } from '@/types'

const faqs: FAQ[] = [
  {
    question: 'How does ADmyBRAND AI generate marketing content?',
    answer: 'Our AI uses advanced natural language processing and machine learning models trained on millions of successful marketing campaigns. It analyzes your brand voice, target audience, and campaign objectives to generate highly personalized content that resonates with your customers.'
  },
  {
    question: 'Can I integrate ADmyBRAND AI with my existing marketing tools?',
    answer: 'Absolutely! We offer seamless integrations with over 100 popular marketing platforms including HubSpot, Salesforce, Mailchimp, Facebook Ads, Google Ads, and more. Our API also allows for custom integrations with your proprietary tools.'
  },
  {
    question: 'How accurate are the predictive analytics features?',
    answer: 'Our predictive models achieve 85-95% accuracy across different campaign types and industries. The accuracy improves over time as the AI learns from your specific data patterns and campaign performance history.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer a 30-day free trial with full access to all features. No credit card required to start. You can explore the platform, run campaigns, and see results before making any commitment.'
  },
  {
    question: 'How does the pricing work?',
    answer: 'Our pricing is based on the number of AI credits you use per month, which covers content generation, analysis, and automation features. You can start with our Starter plan at $29/month and upgrade as your needs grow. We also offer annual plans with significant discounts.'
  },
  {
    question: 'What kind of customer support do you provide?',
    answer: 'We provide comprehensive support including email support for all plans, priority support for Professional plans, and dedicated account managers for Enterprise customers. We also offer extensive documentation, video tutorials, and weekly webinars.'
  },
  {
    question: 'How secure is my data with ADmyBRAND AI?',
    answer: 'Data security is our top priority. We use enterprise-grade encryption, SOC 2 compliance, and follow strict data privacy regulations including GDPR and CCPA. Your data is never shared with third parties and is stored securely in our certified data centers.'
  },
  {
    question: 'Can I customize the AI to match my brand voice?',
    answer: 'Yes! Our AI learns your brand voice by analyzing your existing content and can be fine-tuned with custom training data. You can set tone preferences, style guidelines, and even upload brand documentation to ensure consistent messaging across all generated content.'
  }
]

interface FAQItemProps {
  faq: FAQ
  isOpen: boolean
  onClick: () => void
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
      >
        <span className="text-lg font-medium text-neutral-900 pr-4">
          {faq.question}
        </span>
        <div className="flex-shrink-0">
          {isOpen ? (
            <Minus className="w-5 h-5 text-primary-600" />
          ) : (
            <Plus className="w-5 h-5 text-neutral-400" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 pt-0">
              <p className="text-neutral-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section id="faq" background="muted" padding="xl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">FAQ</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-display text-neutral-900 mb-6"
          >
            Frequently Asked
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {' '}Questions
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-600 leading-relaxed"
          >
            Everything you need to know about ADmyBRAND AI Suite. Can't find what you're looking for? Contact our support team.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        {/* Contact Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Our support team is here to help. Get in touch with us and we'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}