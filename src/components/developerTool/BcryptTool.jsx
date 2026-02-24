import React, { useState, useEffect } from 'react';
import bcrypt from 'bcryptjs';

const BcryptTool = () => {
  const [inputString, setInputString] = useState('');
  const [saltCount, setSaltCount] = useState(10);
  const [generatedHash, setGeneratedHash] = useState('');
  const [compareString, setCompareString] = useState('');
  const [compareHash, setCompareHash] = useState('');
  const [matchResult, setMatchResult] = useState(null);

  useEffect(() => {
    if (inputString) {
      try {
        const salt = bcrypt.genSaltSync(saltCount);
        const hash = bcrypt.hashSync(inputString, salt);
        setGeneratedHash(hash);
      } catch (err) { setGeneratedHash('Error'); }
    } else { setGeneratedHash(''); }
  }, [inputString, saltCount]);

  useEffect(() => {
    if (compareString && compareHash) {
      try {
        setMatchResult(bcrypt.compareSync(compareString, compareHash));
      } catch (err) { setMatchResult(false); }
    } else { setMatchResult(null); }
  }, [compareString, compareHash]);

  return (
   /* Container: White in light mode, Dark Zinc in dark mode */
    <div className="min-h-screen bg-white dark:bg-[#18181b] text-slate-900 dark:text-[#e0e0e0] p-6 md:p-16 font-sans transition-colors duration-300">
      
      {/* Header */}
      <header className="max-w-6xl mx-auto border-b border-gray-200 dark:border-gray-800 pb-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-light mb-4 text-slate-900 dark:text-white transition-colors">Bcrypt</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Hash and compare text string using bcrypt. Bcrypt is a password-hashing function based on the Blowfish cipher.
        </p>
      </header>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Hash Column */}
        <section className="bg-gray-50 dark:bg-[#1e1e1e] p-6 md:p-8 rounded-xl shadow-lg dark:shadow-2xl border border-gray-200 dark:border-gray-800/50 flex flex-col transition-colors">
          <h2 className="text-xl font-medium mb-8 text-slate-800 dark:text-white">Hash</h2>
          
          <div className="space-y-6 flex-grow">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 group">
              <label className="w-28 text-sm text-gray-500 dark:text-gray-400 group-focus-within:text-blue-600 dark:group-focus-within:text-white transition-colors">Your string:</label>
              <input 
                type="text"
                placeholder="Your string to bcrypt..."
                className="flex-1 bg-white dark:bg-[#2a2a2a] border border-gray-300 dark:border-gray-700 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:border-blue-500 hover:border-gray-400 dark:hover:border-gray-500 transition-all text-slate-900 dark:text-white"
                value={inputString}
                onChange={(e) => setInputString(e.target.value)}
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <label className="w-28 text-sm text-gray-500 dark:text-gray-400">Salt count:</label>
              <div className="flex items-center bg-white dark:bg-[#2a2a2a] border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:border-gray-400 dark:hover:border-gray-500 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                <input 
                  type="number"
                  className="w-full bg-transparent p-2.5 focus:outline-none text-slate-900 dark:text-white "
                  value={saltCount}
                  onChange={(e) => setSaltCount(parseInt(e.target.value) || 0)}
                />
                <div className="flex border-l border-gray-300 dark:border-gray-700">
                  <button onClick={() => setSaltCount(s => Math.max(0, s - 1))} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-red-900/20 text-gray-500 dark:text-gray-400 transition-colors border-r border-gray-300 dark:border-gray-700">−</button>
                  <button onClick={() => setSaltCount(s => s + 1)} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-900/20 text-gray-500 dark:text-gray-400 transition-colors">+</button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="bg-gray-100 dark:bg-[#0f0f0f] p-4 rounded-lg text-sm font-mono break-all min-h-[60px] flex items-center text-slate-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 shadow-inner transition-colors">
                {generatedHash || <span className="text-gray-400 dark:text-gray-600 italic font-sans opacity-50">Generated hash will appear here...</span>}
              </div>
              <button 
                onClick={() => { navigator.clipboard.writeText(generatedHash); }}
                className="mt-4 bg-slate-800 dark:bg-[#333] hover:bg-slate-700 dark:hover:bg-[#444] text-white px-6 py-2.5 rounded-lg text-sm transition-all active:scale-95 disabled:opacity-30 border border-transparent dark:border-gray-700 shadow-md"
                disabled={!generatedHash}
              >
                Copy hash
              </button>
            </div>
          </div>
        </section>

        {/* Compare Column */}
        <section className="bg-gray-50 dark:bg-[#1e1e1e] p-6 md:p-8 rounded-xl shadow-lg dark:shadow-2xl border border-gray-200 dark:border-gray-800/50 flex flex-col transition-colors">
          <h2 className="text-xl font-medium mb-8 text-slate-800 dark:text-white">Compare string with hash</h2>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 group">
              <label className="w-28 text-sm text-gray-500 dark:text-gray-400 group-focus-within:text-blue-600 dark:group-focus-within:text-white transition-colors">Your string:</label>
              <input 
                type="text"
                placeholder="Your string to compare..."
                className="flex-1 bg-white dark:bg-[#2a2a2a] border border-gray-300 dark:border-gray-700 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                value={compareString}
                onChange={(e) => setCompareString(e.target.value)}
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 group">
              <label className="w-28 text-sm text-gray-500 dark:text-gray-400 group-focus-within:text-blue-600 dark:group-focus-within:text-white transition-colors">Your hash:</label>
              <input 
                type="text"
                placeholder="Your hash to compare..."
                className="flex-1 bg-white dark:bg-[#2a2a2a] border border-gray-300 dark:border-gray-700 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                value={compareHash}
                onChange={(e) => setCompareHash(e.target.value)}
              />
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center text-sm">
              <span className="text-black-500 dark:text-gray-400 uppercase tracking-tighter ">Match Status:</span>
              <span className={`ml-4 font-black uppercase tracking-widest text-lg ${matchResult === true ? 'text-green-600' : matchResult === false ? 'text-red-600' : 'text-gray-300 dark:text-gray-700'}`}>
                {matchResult === null ? '' : matchResult ? 'Verified' : 'Mismatch'}
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default BcryptTool;