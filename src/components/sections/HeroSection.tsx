'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Zap, Brain } from 'lucide-react'
import { Button, Section } from '../ui'
import { scrollToSection } from '@/lib/utils'

export const HeroSection: React.FC = () => {
  return (
    <Section
      className="relative overflow-hidden min-h-screen flex items-center"
      background="gradient"
      padding="xl"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-secondary-400/20 to-primary-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200/50 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">
              AI-Powered Marketing Revolution
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-display"
            >
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-800 bg-clip-text text-transparent">
                Transform
              </span>
              <br />
              <span className="text-neutral-900">Your Marketing</span>
              <br />
              <span className="bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent">
                with AI
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl"
            >
              Harness the power of artificial intelligence to create, optimize, and scale your marketing campaigns like never before. ADmyBRAND AI Suite delivers results that matter.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('features')}
              className="group"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center space-x-8 pt-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">50K+</div>
              <div className="text-sm text-neutral-500">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">99.9%</div>
              <div className="text-sm text-neutral-500">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">4.9⭐</div>
              <div className="text-sm text-neutral-500">User Rating</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Main Dashboard Mockup */}
          <div className="relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm text-neutral-500">ADmyBRAND AI Dashboard</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-4 rounded-lg text-white">
                    <Zap className="w-6 h-6 mb-2" />
                    <div className="text-2xl font-bold">847%</div>
                    <div className="text-sm opacity-80">ROI Increase</div>
                  </div>
                  <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 p-4 rounded-lg text-white">
                    <Brain className="w-6 h-6 mb-2" />
                    <div className="text-2xl font-bold">2.4M</div>
                    <div className="text-sm opacity-80">AI Insights</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-lg text-white">
                    <Sparkles className="w-6 h-6 mb-2" />
                    <div className="text-2xl font-bold">99.8%</div>
                    <div className="text-sm opacity-80">Accuracy</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Campaign Performance</span>
                    <span className="text-green-600">+23.4%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '78%' }}
                      transition={{ duration: 2, delay: 1 }}
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                y: [0, -5, 5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-primary-500 text-white p-3 rounded-xl shadow-lg"
            >
              <Zap className="w-6 h-6" />
            </motion.div>
            
            <motion.div
              animate={{ 
                rotate: [0, -5, 5, 0],
                y: [0, 5, -5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-secondary-500 text-white p-3 rounded-xl shadow-lg"
            >
              <Brain className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}