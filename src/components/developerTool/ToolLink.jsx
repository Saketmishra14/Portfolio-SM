import React from "react";
import { Link } from 'react-router-dom'; // Import Link

 const ToolLink = ({ path,icon, label }) => (
  <li>
  <Link 
     to={`/tool/${path}`} 
    className="group flex items-center gap-3   px-3 py-2.5 text-sm font-medium text-gray-700 transition-all hover:border-blue-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
  >
    {/* The group-hover on the parent ensures the icon scales AND changes color */}
    <span className="flex h-5 w-5 items-center justify-center text-lg opacity-80 transition-transform group-hover:scale-110 group-hover:text-blue-600 dark:group-hover:text-blue-400">
      {icon}
    </span>
    
    <span className="truncate group-hover:text-blue-600 dark:group-hover:text-blue-400">
      {label}
    </span>
  </Link>
</li>
); 
export default ToolLink;