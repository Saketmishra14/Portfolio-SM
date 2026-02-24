import { useRef } from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Newsletter from "../components/blogpage/Newsletter";
import { Helmet } from "react-helmet";

const TagBox = ({ name }) => {
  return (
    <div className="bg-slate-200 dark:bg-slate-950 dark:text-slate-300 px-7 py-1 rounded-full text-xs mx-3 my-3 font-poppins">
      {name}
    </div>
  );
};

const SingleBlogPage = () => {
  const { slug } = useParams();


  const changeHowMuchReaded = (e) => {
    let readed = (window.scrollY / containerRef.current.scrollHeight) * 100;
    if (readed > 90) readed = 100;
    howMuchReadBarRef.current.style.width = readed + "%";
  };



  return (
    <div>hello tool page</div>
  );
};

export default SingleBlogPage;