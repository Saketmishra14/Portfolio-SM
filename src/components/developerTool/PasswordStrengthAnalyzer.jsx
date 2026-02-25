import React, { useState, useMemo } from 'react';
import { Eye, EyeOff, ShieldCheck, ShieldAlert, Shield } from 'lucide-react';

const PasswordStrengthAnalyzer = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const stats = useMemo(() => {
    if (!password) {
      return { length: 0, charset: 0, entropy: 0, time: 'Instantly', score: 0 };
    }

    // 1. Determine Character Set Size (R)
    let charset = 0;
    if (/[a-z]/.test(password)) charset += 26;
    if (/[A-Z]/.test(password)) charset += 26;
    if (/[0-9]/.test(password)) charset += 10;
    if (/[^a-zA-Z0-9]/.test(password)) charset += 33; // Symbols

    // 2. Calculate Entropy (E = L * log2(R))
    const entropy = password.length * Math.log2(charset);
    
    // 3. Estimate Crack Time (Simplified Brute Force Logic)
    // Assuming 100 billion guesses per second (High-end hardware)
    const combinations = Math.pow(charset, password.length);
    const secondsToCrack = combinations / 100_000_000_000;

    let time = 'Instantly';
    if (secondsToCrack > 31536000) time = `${Math.floor(secondsToCrack / 31536000)} Years`;
    else if (secondsToCrack > 86400) time = `${Math.floor(secondsToCrack / 86400)} Days`;
    else if (secondsToCrack > 3600) time = `${Math.floor(secondsToCrack / 3600)} Hours`;
    else if (secondsToCrack > 60) time = `${Math.floor(secondsToCrack / 60)} Minutes`;
    else if (secondsToCrack > 1) time = `${Math.floor(secondsToCrack)} Seconds`;

    // 4. Normalized Score (0-100) - 128 bits is considered "unbreakable"
    const score = Math.min(Math.round((entropy / 128) * 100), 100);

    return { length: password.length, charset, entropy: Math.round(entropy), time, score };
  }, [password]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-[#181818] text-gray-900 dark:text-gray-100 transition-colors">
      <div className="w-full max-w-lg space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl tracking-tight mb-3">Password strength analyser</h1>
          <div className="h-[2px] w-[80%] bg-gray-300 dark:bg-gray-700 mt-2 rounded-full mb-2" />
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Discover the strength of your password with this client-side-only password strength analyser and crack time estimation tool.
          </p>
        </div>

        {/* Input Field */}
        <div className="relative group">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a password..."
            className="w-full px-4 py-3 bg-white dark:bg-transparent border-2 border-green-500/50 rounded-lg outline-none focus:border-green-500 transition-all font-mono"
          />
          <button 
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-500 transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Crack Time Box */}
        <div className="bg-white dark:bg-[#1e1e1e] p-8 rounded-xl border border-gray-200 dark:border-gray-800 text-center shadow-sm">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Duration to crack this password with brute force</p>
          <h2 className={`text-4xl font-bold ${stats.score > 70 ? 'text-green-500' : stats.score > 40 ? 'text-yellow-500' : 'text-red-500'}`}>
            {stats.time}
          </h2>
        </div>

        {/* Detailed Stats */}
        <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl border border-gray-200 dark:border-gray-800 space-y-4 shadow-sm">
          <div className="grid grid-cols-1 gap-3 font-mono text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Password length:</span>
              <span>{stats.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Entropy:</span>
              <span>{stats.entropy}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Character set size:</span>
              <span>{stats.charset}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Score:</span>
              <span className={stats.score > 70 ? 'text-green-500' : 'text-gray-300'}>
                {stats.score} / 100
              </span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${stats.score > 70 ? 'bg-green-500' : stats.score > 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
              style={{ width: `${stats.score}%` }}
            />
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
          <span className="font-bold">Note:</span> The computed strength is based on the time it would take to crack the password using a brute force approach, it does not take into account the possibility of a dictionary attack.
        </p>
      </div>
    </div>
  );
};

export default PasswordStrengthAnalyzer;