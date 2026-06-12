import React from 'react'
import HeroSection from '../components/blogpage/HeroSection';
import LatestBlog from '../components/blogpage/LatestBlog';
import SEO from "../components/SEO";


const BlogPage = () => {
   
  return (
  
    
        <>
 {/* Meta data of the blog page */}
      <SEO
        title="Technical Blogs | Saket Mishra"
        description="Read technical blogs by Saket Mishra on web development, backend engineering, GitHub, Salesforce, cloud technologies, and developer productivity."
        path="/blog"
      />

        <HeroSection/>
        <LatestBlog/>

        </>
  );
};


export default BlogPage;
