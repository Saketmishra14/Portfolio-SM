import React, { useState, useEffect, useCallback } from 'react';
import { v1 as uuidv1, v3 as uuidv3, v4 as uuidv4, v5 as uuidv5, NIL as NIL_UUID } from 'uuid';

// Standard Namespace UUIDs
const NAMESPACES = {
  DNS: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
  URL: '6ba7b811-9dad-11d1-80b4-00c04fd430c8',
  OID: '6ba7b812-9dad-11d1-80b4-00c04fd430c8',
  X500: '6ba7b814-9dad-11d1-80b4-00c04fd430c8',
};

const UuidGenerator = () => {
  const [version, setVersion] = useState('v5');
  const [quantity, setQuantity] = useState(1);
  const [namespace, setNamespace] = useState('URL');
  const [customNamespace, setCustomNamespace] = useState(NAMESPACES.URL);
  const [name, setName] = useState('');
  const [results, setResults] = useState([]);

  // Deterministic generation logic
  const generateUUIDs = useCallback(() => {
    const newUuids = [];
    for (let i = 0; i < quantity; i++) {
      try {
        if (version === 'NIL') newUuids.push(NIL_UUID);
        else if (version === 'v1') newUuids.push(uuidv1());
        else if (version === 'v3') newUuids.push(uuidv3(name || '', customNamespace));
        else if (version === 'v4') newUuids.push(uuidv4());
        else if (version === 'v5') newUuids.push(uuidv5(name || '', customNamespace));
      } catch (err) {
        newUuids.push('Invalid Namespace UUID');
      }
    }
    setResults(newUuids);
  }, [version, quantity, customNamespace, name]);

  useEffect(() => {
    generateUUIDs();
  }, [generateUUIDs]);

  const copyToClipboard = () => {
    const text = results.join('\n');
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
   <div className="min-h-screen bg-white dark:bg-[#18181b] text-gray-800 dark:text-[#cccccc] p-6 font-sans flex flex-col items-center transition-colors duration-300">
  <div className="w-full max-w-2xl">
    <header className="mb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">UUIDs generator</h1>
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          
          <span className="text-gray-400 hover:text-red-500 cursor-pointer text-xl">♥</span>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
        A Universally Unique Identifier (UUID) is a 128-bit number used to identify information in computer systems. The number of possible UUIDs is 16^32, which is 2^128 or about 3.4x10^38 (which is a lot!).
      </p>
    </header>

    <div className="space-y-6">
      {/* Version Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <label className="w-32 text-sm font-medium">UUID version</label>
        <div className="flex gap-2 bg-gray-100 dark:bg-[#2d2d2d] p-1 rounded">
          {['NIL', 'v1', 'v3', 'v4', 'v5'].map((v) => (
            <button
              key={v}
              onClick={() => setVersion(v)}
              className={`px-4 py-1.5 rounded transition-all text-sm ${
                version === v 
                ? 'bg-green-700 dark:bg-[#2e5c36] text-white shadow-sm' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#3d3d3d]'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Input */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <label className="w-32 text-sm font-medium">Quantity</label>
        <div className="flex flex-1 items-center bg-gray-100 dark:bg-[#2d2d2d] rounded overflow-hidden border border-transparent focus-within:border-green-600">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="bg-transparent flex-1 px-4 py-2 outline-none border-none text-gray-900 dark:text-white"
          />
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-[#3d3d3d] border-l border-gray-300 dark:border-gray-700">-</button>
          <button onClick={() => setQuantity(q => q + 1)} className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-[#3d3d3d] border-l border-gray-300 dark:border-gray-700">+</button>
        </div>
      </div>

      {/* Conditional V3/V5 Fields */}
      {(version === 'v3' || version === 'v5') && (
        <div className="space-y-4 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <label className="w-32 text-sm font-medium">Namespace</label>
            <div className="flex gap-2 flex-wrap">
              {Object.keys(NAMESPACES).map((ns) => (
                <button
                  key={ns}
                  onClick={() => {
                    setNamespace(ns);
                    setCustomNamespace(NAMESPACES[ns]);
                  }}
                  className={`px-4 py-1.5 rounded transition-colors text-sm ${
                    namespace === ns 
                    ? 'bg-green-700 dark:bg-[#2e5c36] text-white' 
                    : 'bg-gray-100 dark:bg-[#2d2d2d] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#3d3d3d]'
                  }`}
                >
                  {ns}
                </button>
              ))}
            </div>
          </div>
          <input
            type="text"
            value={customNamespace}
            onChange={(e) => setCustomNamespace(e.target.value)}
            className="w-full sm:ml-36 sm:w-[calc(100%-9rem)] bg-gray-100 dark:bg-[#2d2d2d] p-2 rounded outline-none border border-gray-200 dark:border-transparent focus:border-green-600 dark:focus:border-green-800"
            placeholder="Namespace UUID"
          />
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <label className="w-32 text-sm font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 bg-gray-100 dark:bg-[#2d2d2d] p-2 rounded outline-none border border-gray-200 dark:border-transparent focus:border-green-600 dark:focus:border-green-800"
              placeholder="Name"
            />
          </div>
        </div>
      )}

      {/* Result Area */}
      <div className="mt-8">
        <textarea
          readOnly
          rows={Math.min(quantity, 10)}
          value={results.join('\n')}
          className="w-full bg-gray-50 dark:bg-[#2d2d2d] p-4 rounded-md font-mono text-sm text-center resize-none outline-none border border-gray-200 dark:border-transparent text-gray-800 dark:text-gray-200"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={copyToClipboard}
          className="px-8 py-2 bg-gray-200 dark:bg-[#2d2d2d] hover:bg-gray-300 dark:hover:bg-[#3d3d3d] rounded transition-colors text-sm font-medium"
        >
          Copy
        </button>
        <button
          onClick={generateUUIDs}
          className="px-8 py-2 bg-gray-200 dark:bg-[#2d2d2d] hover:bg-gray-300 dark:hover:bg-[#3d3d3d] rounded transition-colors text-sm font-medium"
        >
          Refresh
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default UuidGenerator;