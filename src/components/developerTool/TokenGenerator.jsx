import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { ArrowLeft, Copy, RefreshCw, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TokenGenerator = () => {
  const navigate = useNavigate();
  const [length, setLength] = useState(30);
  const [token, setToken] = useState("");
  const [copied, setCopied] = useState(false);
  const [options, setOptions] = useState({
    upper: true, lower: true, nums: true, syms: false,
  });

  const charSets = useMemo(() => ({
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    nums: '0123456789',
    syms: '!@#$%^&*()_+-=[]{}|;:,.<>?',
  }), []);

  const generate = useCallback(() => {
    let pool = "";
    if (options.upper) pool += charSets.upper;
    if (options.lower) pool += charSets.lower;
    if (options.nums) pool += charSets.nums;
    if (options.syms) pool += charSets.syms;
    if (!pool) return setToken("Select an option");

    const randomValues = new Uint32Array(length);
    window.crypto.getRandomValues(randomValues);
    let result = "";
    for (let i = 0; i < length; i++) {
      result += pool[randomValues[i] % pool.length];
    }
    setToken(result);
  }, [length, options, charSets]);

  useEffect(() => { generate(); }, [generate]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const Switch = ({ id, label, info }) => (
    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#252525] rounded-lg border border-gray-200 dark:border-gray-800 transition-colors">
      <div className="flex flex-col">
        <span className="text-gray-900 dark:text-gray-100 font-medium text-sm">{label}</span>
        <span className="text-gray-500 dark:text-gray-500 text-xs">{info}</span>
      </div>
      <button
        onClick={() => setOptions(prev => ({ ...prev, [id]: !prev[id] }))}
        className={`w-11 h-6 rounded-full transition-all relative ${options[id] ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-700'}`}
      >
        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${options[id] ? 'left-6' : 'left-1'}`} />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen dark:bg flex flex-col items-center p-4 sm:p-8 transition-colors duration-300">
      <div className="w-full max-w-2xl">
        {/* Header with Back Button */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate('/tool')}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <ArrowLeft className="text-gray-600 dark:text-gray-400" size={24} />
          </button>
          <div>
            <h1 className="text-2xl sm:text-3xl text-gray-900 dark:text-white">Token Generator</h1>
            {/* The half-width gray line */}
          <div className="h-[2px] w-1/2 bg-gray-300 dark:bg-gray-700 mt-2 rounded-full" />
            <p className="text-gray-500 dark:text-gray-400 mt-3 w-3/4 text-xs sm:text-sm">Generate random string with the chars you want, uppercase or lowercase letters, numbers and/or symbols.</p>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-800 rounded-2xl p-5 sm:p-8 shadow-sm dark:shadow-2xl">
          
          {/* Settings Grid - Mobile: 1 col, Desktop: 2 cols */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
            <Switch id="upper" label="Uppercase" info="ABC..." />
            <Switch id="nums" label="Numbers" info="123..." />
            <Switch id="lower" label="Lowercase" info="abc..." />
            <Switch id="syms" label="Symbols" info="!-;..." />
          </div>

          {/* Slider Control */}
          <div className="mb-8 px-2">
            <div className="flex justify-between text-sm mb-4">
              <span className="text-emerald-600 dark:text-emerald-500 font-bold">Length: {length}</span>
              <span className="text-gray-400">4 - 100</span>
            </div>
            <input
              type="range" min="4" max="100" value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none accent-emerald-500 cursor-pointer"
            />
          </div>

          {/* Output Box - Large font on mobile, fixed height to prevent jumping */}
          <div className="bg-gray-50 dark:bg-[#161616] border border-gray-200 dark:border-gray-800 rounded-xl p-4 sm:p-6 mb-8 flex items-center justify-center relative group min-h-[120px]">
            <p className="font-mono text-base sm:text-xl break-all text-gray-800 dark:text-gray-200 text-center leading-relaxed">
              {token}
            </p>
          </div>

          {/* Action Buttons - Stack on mobile, side-by-side on desktop */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              onClick={copyToClipboard} 
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-white dark:bg-[#2a2a2a] border border-gray-300 dark:border-gray-700 rounded-lg hover:border-emerald-500 transition-all font-medium text-gray-700 dark:text-gray-200 shadow-sm"
            >
              {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
              {copied ? "Copied!" : "Copy Token"}
            </button>
            <button 
              onClick={generate} 
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-gray-900 dark:bg-emerald-600 hover:bg-black dark:hover:bg-emerald-500 text-white rounded-lg transition-all font-medium shadow-lg"
            >
              <RefreshCw size={18} />
              Refresh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenGenerator;