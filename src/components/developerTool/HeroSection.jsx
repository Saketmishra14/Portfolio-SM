import React from 'react'
import toolHeroImg from "../../assets/tool-page-hero-image.webp";


const HeroSection = () => {
  return (
<div className="flex flex-col lg:flex-row min-h-[300px] lg:h-[400px] overflow-hidden bg-white ">
  {/* Left Side: Text Content */}
  <div className="flex-[0.5] p-8 md:p-12 lg:p-16 flex flex-col justify-center font-poppins dark:bg-[#18181b] dark:text-white">
    <div className="max-w-2xl">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        Tools I’ve Built for 
        <span className="text-blue-600 block lg:inline"> Developers & Businesses</span>
      </h1>
      
      <div className="w-full lg:w-[85%] py-6">
        <p className="text-sm md:text-base lg:text-lg font-light text-gray-600 dark:text-gray-300">
          Production-ready tools, AI-powered utilities, and scalable systems built with modern technologies.
        </p>
      </div>

      <p className="text-sm md:text-base font-bold opacity-80 mt-4">
        by Saket Mishra
      </p>
    </div>
  </div>

  {/* Right Side: Image */}
  <div className="flex-[0.5] relative 
  h-40 
  sm:h-56 
  md:h-72 
  lg:h-full 
  w-full 
  flex items-center justify-center
">
  <img
    src={toolHeroImg}
    alt="Binary numbers banner"
    className="
      w-full 
      h-full 
      object-contain 
      sm:object-contain 
      md:object-cover 
      lg:object-cover 
    "
    loading="eager"
  />
</div>
</div>
  )
}

export default HeroSection
