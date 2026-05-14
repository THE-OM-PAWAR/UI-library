import CodeSnippetShowcase from '@/components/home/CodeSnippetShowcase'
import ComponentShowcase from '@/components/home/ComponentShowcase'
import EndBrand from '@/components/home/EndBrand'
import FAQ from '@/components/home/FAQ'
import Footer from '@/components/home/Footer'
import Hero from '@/components/home/Hero'
import PerformanceDX from '@/components/home/PerformanceDX'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <ComponentShowcase />
      <PerformanceDX />
      <CodeSnippetShowcase />
      <FAQ />
      <EndBrand />
      <Footer />
    </>
  )
}

export default page
