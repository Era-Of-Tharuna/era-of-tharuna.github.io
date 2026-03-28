'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Target, 
  TrendingUp, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  Users, 
  Globe,
  Sparkles
} from 'lucide-react'
import { Card, CardContent, Section } from '../ui'
import { Feature } from '@/types'

const features: Feature[] = [
  {
    icon: Brain,
    title: 'AI Content Generation',
    description: 'Generate high-converting ad copy, social media posts, and email campaigns using advanced AI algorithms trained on millions of successful marketing campaigns.'
  },
  {
    icon: Target,
    title: 'Smart Audience Targeting',
    description: 'Identify and target your ideal customers with precision using AI-powered audience analysis and behavioral pattern recognition.'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Forecast campaign performance and market trends with machine learning models that analyze historical data and real-time signals.'
  },
  {
    icon: MessageSquare,
    title: 'Automated A/B Testing',
    description: 'Continuously optimize your campaigns with intelligent A/B testing that automatically discovers winning variations and scales them.'
  },
  {
    icon: BarChart3,
    title: 'Real-time Performance Insights',
    description: 'Monitor campaign performance in real-time with AI-powered dashboards that highlight opportunities and recommend optimizations.'
  },
  {
    icon: Zap,
    title: 'Campaign Automation',
    description: 'Automate your entire marketing workflow from lead generation to conversion with intelligent triggers and personalized customer journeys.'
  },
  {
    icon: Users,
    title: 'Customer Journey Mapping',
    description: 'Visualize and optimize every touchpoint in your customer journey with AI-driven insights and personalization recommendations.'
  },
  {
    icon: Globe,
    title: 'Multi-Channel Integration',
    description: 'Connect and manage all your marketing channels from a single platform with seamless API integrations and unified reporting.'
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const featureVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export const FeaturesSection: React.FC = () => {
  return (
    <Section id="features" background="muted" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full mb-6"
        >
          <Sparkles className="w-4 h-4 text-primary-600" />
          <span className="text-sm font-medium text-primary-700">Powerful Features</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold font-display text-neutral-900 mb-6"
        >
          Everything You Need to
          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            {' '}Dominate Marketing
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
        >
          Our AI-powered suite combines cutting-edge machine learning with intuitive design to deliver marketing tools that actually move the needle for your business.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={featureVariants}
            className="group"
          >
            <Card 
              hover 
              className="h-full bg-white/80 backdrop-blur-sm border-white/20 group-hover:bg-white transition-all duration-300"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to revolutionize your marketing?
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Join thousands of marketers who are already using AI to 10x their results. Start your free trial today and see the difference intelligent automation can make.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
          >
            Start Free Trial
          </motion.button>
        </div>
      </motion.div>
    </Section>
  )
}