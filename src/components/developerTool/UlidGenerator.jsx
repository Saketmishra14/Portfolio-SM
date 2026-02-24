import React, { useState, useCallback } from 'react';
import { ulid } from 'ulid';

const UlidGenerator = () => {
  const [quantity, setQuantity] = useState(1);
  const [format, setFormat] = useState('Raw');
  const [ulids, setUlids] = useState([ulid()]);
  const [copied, setCopied] = useState(false);

  // Generate new ULIDs based on current quantity
  const generateUlids = useCallback(() => {
    const newUlids = Array.from({ length: Math.max(1, quantity) }, () => ulid());
    setUlids(newUlids);
    setCopied(false);
  }, [quantity]);

  const handleCopy = () => {
    const textToCopy = format === 'JSON' 
      ? JSON.stringify(ulids, null, 2) 
      : ulids.join('\n');
    
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  dark:bg-[#18181b] p-4 transition-colors duration-200">
      <div className="w-full max-auto max-w-2xl bg-white dark:bg-[#18181b] rounded-xl p-8 shadow-sm border border-gray-200 dark:border-transparent">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-4xl  text-gray-800 dark:text-gray-200">ULID generator</h1>
          
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </button>
        </div>
        <div className="h-[2px] w-1/2 bg-gray-300 dark:bg-gray-700 mt-2 rounded-full" />
        <p className="text-grey-400 dark:text-gray-400 mb-10 pt-2">
         Generate random Universally Unique Lexicographically Sortable Identifier (ULID).
        </p>

        {/* Controls */}
        <div className="space-y-6">
          <div className="flex items-center">
            <label className="w-24 text-gray-700 dark:text-gray-300 text-lg">Quantity:</label>
            <div className="flex flex-1 items-center bg-gray-100 dark:bg-[#2a2a2a] rounded-md px-3 py-2 border border-gray-300 dark:border-transparent">
              <input 
                type="number" 
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="bg-transparent w-full outline-none text-gray-800 dark:text-gray-200"
              />
              <div className="flex gap-4 ml-4 text-gray-400">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="hover:text-gray-600 dark:hover:text-gray-200">—</button>
                <button onClick={() => setQuantity(q => q + 1)} className="hover:text-gray-600 dark:hover:text-gray-200">+</button>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <label className="w-24 text-gray-700 dark:text-gray-300 text-lg">Format:</label>
            <div className="flex gap-2">
              {['Raw', 'JSON'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFormat(f)}
                  className={`px-4 py-1.5 rounded text-sm font-medium transition-all ${
                    format === f 
                    ? 'bg-green-800/20 text-green-600 dark:bg-green-900/30 dark:text-[#4ade80]' 
                    : 'bg-gray-200 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Output Area */}
        <div className="mt-10 mb-8 p-6 bg-gray-100 dark:bg-[#252525] rounded-lg min-h-[80px] flex items-center justify-center overflow-x-auto border border-gray-200 dark:border-transparent">
          <code className="text-gray-800 dark:text-gray-300 font-mono text-center whitespace-pre break-all">
            {format === 'JSON' ? JSON.stringify(ulids, null, 2) : ulids.join('\n')}
          </code>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <button 
            onClick={generateUlids}
            className="px-6 py-2 bg-gray-200 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-[#333] transition-colors"
          >
            Refresh
          </button>
          <button 
            onClick={handleCopy}
            className="px-8 py-2 bg-gray-200 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-[#333] transition-colors"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UlidGenerator;