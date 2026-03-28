'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Zap, Crown, Rocket, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader, Button, Section, Badge } from '../ui'
import { PricingTier } from '@/types'
import { formatCurrency } from '@/lib/utils'

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 29,
    period: 'month',
    description: 'Perfect for small businesses and solopreneurs getting started with AI marketing.',
    features: [
      'AI Content Generation (100 credits/month)',
      'Basic Analytics Dashboard',
      'Email Campaign Automation',
      '2 Social Media Integrations',
      'Basic A/B Testing',
      'Email Support',
      '1 User Account'
    ],
    cta: 'Start Free Trial'
  },
  {
    name: 'Professional',
    price: 99,
    period: 'month',
    description: 'Ideal for growing businesses that need advanced AI features and better insights.',
    features: [
      'AI Content Generation (500 credits/month)',
      'Advanced Analytics & Reporting',
      'Multi-Channel Campaign Automation',
      '10 Social Media Integrations',
      'Advanced A/B Testing & Optimization',
      'Predictive Analytics',
      'Customer Journey Mapping',
      'Priority Support',
      '5 User Accounts',
      'Custom Integrations'
    ],
    cta: 'Get Professional',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 299,
    period: 'month',
    description: 'For large organizations requiring unlimited AI power and premium support.',
    features: [
      'Unlimited AI Content Generation',
      'Enterprise Analytics Suite',
      'Omnichannel Automation',
      'Unlimited Integrations',
      'AI-Powered Audience Segmentation',
      'Real-time Predictive Insights',
      'Advanced Customer Journey Analytics',
      'Dedicated Account Manager',
      'Unlimited User Accounts',
      'White-label Options',
      'Custom AI Model Training',
      '99.9% SLA Guarantee'
    ],
    cta: 'Contact Sales'
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const getIcon = (tierName: string) => {
    switch (tierName) {
      case 'Starter':
        return Zap
      case 'Professional':
        return Crown
      case 'Enterprise':
        return Rocket
      default:
        return Zap
    }
  }

  const getPrice = (tier: PricingTier) => {
    const basePrice = tier.price
    const annualPrice = Math.round(basePrice * 0.8) // 20% discount for annual
    return isAnnual ? annualPrice : basePrice
  }

  return (
    <Section id="pricing" background="gradient" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary-200/50"
        >
          <Sparkles className="w-4 h-4 text-primary-600" />
          <span className="text-sm font-medium text-primary-700">Simple Pricing</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold font-display text-neutral-900 mb-6"
        >
          Choose Your
          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            {' '}AI Marketing
          </span>
          <br />
          Power Level
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-8"
        >
          Start free and scale as you grow. All plans include our core AI features with different usage limits and advanced capabilities.
        </motion.p>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center space-x-4"
        >
          <span className={`text-sm font-medium ${!isAnnual ? 'text-neutral-900' : 'text-neutral-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isAnnual ? 'bg-primary-600' : 'bg-neutral-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? 'text-neutral-900' : 'text-neutral-500'}`}>
            Annual
          </span>
          {isAnnual && (
            <Badge variant="success" size="sm">
              Save 20%
            </Badge>
          )}
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {pricingTiers.map((tier, index) => {
          const IconComponent = getIcon(tier.name)
          return (
            <motion.div
              key={tier.name}
              variants={cardVariants}
              className={`relative ${tier.highlighted ? 'md:-mt-8' : ''}`}
            >
              <Card 
                hover 
                className={`h-full ${
                  tier.highlighted 
                    ? 'bg-gradient-to-br from-primary-600 to-secondary-600 text-white border-primary-500 ring-4 ring-primary-200/50' 
                    : 'bg-white/80 backdrop-blur-sm border-white/20'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="secondary" className="bg-secondary-500 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                    tier.highlighted 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : 'bg-gradient-to-br from-primary-500 to-secondary-500'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${tier.highlighted ? 'text-white' : 'text-white'}`} />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-2 ${
                    tier.highlighted ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {tier.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${
                      tier.highlighted ? 'text-white' : 'text-neutral-900'
                    }`}>
                      {formatCurrency(getPrice(tier))}
                    </span>
                    <span className={`text-sm ${
                      tier.highlighted ? 'text-white/80' : 'text-neutral-500'
                    }`}>
                      /{tier.period}
                    </span>
                    {isAnnual && (
                      <div className={`text-xs ${
                        tier.highlighted ? 'text-white/60' : 'text-neutral-400'
                      }`}>
                        {formatCurrency(tier.price)} billed monthly
                      </div>
                    )}
                  </div>
                  
                  <p className={`text-sm leading-relaxed ${
                    tier.highlighted ? 'text-white/90' : 'text-neutral-600'
                  }`}>
                    {tier.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          tier.highlighted ? 'bg-white/20' : 'bg-green-100'
                        }`}>
                          <Check className={`w-3 h-3 ${
                            tier.highlighted ? 'text-white' : 'text-green-600'
                          }`} />
                        </div>
                        <span className={`text-sm ${
                          tier.highlighted ? 'text-white/90' : 'text-neutral-600'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className={`w-full ${
                      tier.highlighted 
                        ? 'bg-white text-primary-600 hover:bg-white/90' 
                        : ''
                    }`}
                    variant={tier.highlighted ? undefined : 'primary'}
                    size="lg"
                  >
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Bottom Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <p className="text-neutral-600 mb-8">All plans include:</p>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            '30-day free trial',
            'No setup fees',
            'Cancel anytime',
            '24/7 support'
          ].map((feature, index) => (
            <div key={index} className="flex items-center justify-center space-x-2 text-sm text-neutral-600">
              <Check className="w-4 h-4 text-green-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}