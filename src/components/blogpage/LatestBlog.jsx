import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const LatestBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const query = `query Publication {
    publication(host: "yashmishra.hashnode.dev") {
        posts(first: 50) {
            edges {
                node {
                    title
                    brief
    								views
                    slug
                  	coverImage{
                      url
                    }
                    url
                }
            }
        }
    }
  }`;
   const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };
  useEffect(() => {
    fetch("https://gql.hashnode.com", options)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.data.publication.posts.edges);
        // console.log(data.data.publication.posts.edges);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div className="lg:mt-28 mt-5 py-10" id="Blog Section">
  {/* Heading */}
  <div className="flex items-center justify-center mb-10">
    <p className="lg:text-3xl text-xl font-poppins text-black dark:text-white">
      Latest Blogs
    </p>
  </div>

  {/* Centered Blog Card */}
  <div className="flex justify-center items-center w-full px-3">
    <Link
    to={`https://yashmishra.hashnode.dev/${blogs[0]?.node.slug}`}
     title={blogs[0]?.node.title}
      className="
        w-full
        sm:w-10/12
        md:w-8/12
        lg:w-7/12
        bg-slate-100 dark:bg-black
        rounded-md
        overflow-hidden
        cursor-pointer
        transition-transform duration-300 hover:scale-[1.02]
      "
    >
      {/* Image */}
      <img
        src={blogs[0]?.node.coverImage.url}
        alt="Blog Banner"
        className="
          w-full
          h-[200px]
          sm:h-[280px]
          lg:h-[340px]
          object-cover
        "
      />

      {/* Content */}
      <div className="p-4 dark:text-white">
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
         {blogs[0]?.node.views}  Views
        </p>

        <h1 className="mt-1 text-base sm:text-xl lg:text-2xl font-medium">
         {blogs[0]?.node.title}
        </h1>

        <p className="mt-2 text-xs sm:text-sm lg:text-base font-light text-gray-700 dark:text-gray-300">
          {blogs[0]?.node.brief}
        </p>
      </div>
    </Link>
  </div>
  <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        px-3 sm:px-6 lg:px-16
        mt-10
      "
    >
      {[1, 2, 3].map((value, index) => (
        <Link
        to={`https://yashmishra.hashnode.dev/${blogs[value]?.node.slug}`}
          key={index}
          title={blogs[value]?.node.title}
          className="
            group
            bg-slate-50 dark:bg-black
            rounded-xl
            overflow-hidden
            shadow-sm hover:shadow-lg
            transition-all duration-300
            flex flex-col
          "
        >
          {/* Image */}
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={blogs[value]?.node.coverImage.url}
              alt="Blog Banner"
              className="
                w-full h-full object-cover
                group-hover:scale-105
                transition-transform duration-300
              "
            />
          </div>

          {/* Content */}
          <div className="p-4 dark:text-white flex flex-col flex-1">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
               {blogs[value]?.node.views}  Views
              </p>
            <h1 className="text-sm sm:text-base md:text-lg font-bold line-clamp-2">
              {blogs[value]?.node.title}
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
              {blogs[value]?.node.brief}
            </p>
          </div>
        </Link>
      ))}
    </div>
</div>

  )
}

export default LatestBlog
