import React from 'react'
import HeroSection from '../components/blogpage/HeroSection';
import LatestBlog from '../components/blogpage/LatestBlog';
import { Helmet } from "react-helmet";


const BlogPage = () => {
   
  return (
  
    
        <>
 {/* Meta data of the blog page */}
      <Helmet>
        <title>Saket Mishra: Blogs</title>
        <meta
          name="description"
          content="All the technical blogs written by Saket Mishra. On the topics like Web Dev, Mobile Dev, Backend, Docker, Kubernetes, GitHub, Salesforce,Cloud as well as Daily Tech news etc"
        />
      </Helmet>

        <HeroSection/>
        {/* <SearchBlog/> */}
        <LatestBlog/>
        {/* <MoreBlog/> */}

        </>
  );
};


export default BlogPage;
