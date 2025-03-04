import ImageSlider from '../components/ImageSlider'
import ServicesGrid from '../components/ServicesGrid'
import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen">
      <ImageSlider />
      <ServicesGrid />
    </div>
  )
}