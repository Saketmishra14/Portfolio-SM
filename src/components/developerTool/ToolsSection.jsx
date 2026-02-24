import React from 'react';
import { 
  Shuffle, Hash, Lock, Fingerprint,EyeOff, 
  SortAsc, ShieldCheck, List, Key, Heart 
} from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link

// Added 'slug' to each tool to define the URL path
const tools = [
  { title: "Token generator",
    slug: "token-generator",
     desc: "Generate random string with the chars you want, uppercase or lowercase...",
      icon: <Shuffle size={24} />
     },
  { title: "Hash text",
    slug: "hash-text",
     desc: "Hash a text string using the function you need : MD5, SHA1, SHA256,...",
      icon: <EyeOff size={24} /> 
    },
  { title: "Bcrypt",
    slug: "bcrypt", 
    desc: "Hash and compare text string using bcrypt. Bcrypt is a password-hashing...", 
    icon: <Lock size={24} /> 
},
  { title: "UUIDs generator", 
    slug: "uuid-generator",
    desc: "A Universally Unique Identifier (UUID) is a 128-bit number used to identify...", 
    icon: <Fingerprint size={24} /> 
},
  { title: "ULID generator",
    slug: "ulid-generator",
     desc: "Generate random Universally Unique Lexicographically Sortable Identifier...", 
     icon: <SortAsc size={24} />
     },
  { title: "Encrypt / decrypt text",
     desc: "Encrypt clear text and decrypt ciphertext using crypto algorithms like...", 
     icon: <ShieldCheck size={24} /> 
    },
  { title: "BIP39 passphrase generator", 
    desc: "Generate a BIP39 passphrase from an existing or random mnemonic, or get...", 
    icon: <List size={24} /> 
},
  { title: "Hmac generator", 
    desc: "Computes a hash-based message authentication code (HMAC) using a...", 
    icon: <Key size={24} /> 
},
];

const ToolGrid = () => {
  return (
   <div className="p-4 md:p-8 bg-white-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-xl font-bold mb-8 text-gray-800 dark:text-white">
          All the tools
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            /* Wrapped in Link for SPA navigation */
            <Link 
              to={`/tool/${tool.slug}`} 
              key={index} 
              className="group relative flex flex-col p-6 rounded-xl transition-all duration-300 cursor-pointer
                         bg-white dark:bg-[#1e1e1e] 
                         border border-gray-200 dark:border-transparent 
                         hover:border-blue-600 dark:hover:border-gray-700
                         shadow-sm hover:shadow-xl dark:shadow-none"
            >
              <div className="flex justify-between items-start mb-5">
                <div className="text-blue-600 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {tool.icon}
                </div>
                {/* StopPropagation prevents navigation when clicking the heart */}
                <button 
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                  className="text-gray-300 dark:text-gray-600 hover:text-red-500 transition-colors focus:outline-none z-10"
                >
                  <Heart size={18} />
                </button>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                {tool.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-500 leading-relaxed line-clamp-2">
                {tool.desc}
              </p>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full rounded-b-xl" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolGrid;