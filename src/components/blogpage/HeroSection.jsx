import React from 'react'
import heroImg from "../../assets/blog-page-hero-img.avif";

const HeroSection = () => {
  return <>
  <div>
        <div className="w-full flex flex-1 h-96">
          <div className="flex-[0.5] p-10 flex flex-col justify-center lg:text-5xl text-2xl font-bold font-poppins dark:text-white">
            <p className="leading-snug">Blogs on</p>
            <p className="leading-snug">
              Development, Cloud, Salesforce
              <span className="text-blue-600"> & Technical News</span>
            </p>
            <p className="leading-snug text-base text-right">by Saket Mishra</p>
          </div>

          <div className="flex-[0.5]">
            <img
              src={heroImg}
              alt="Binary numbers banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        </div>
  </>
}

export default HeroSection;
