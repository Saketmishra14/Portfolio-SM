import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import { Lock, Unlock, Key, Settings } from 'lucide-react';

const CryptoTool = () => {
  const [encryptData, setEncryptData] = useState({
    text: 'Lorem ipsum dolor sit amet',
    key: 'my secret key',
    algo: 'AES',
    result: ''
  });

  const [decryptData, setDecryptData] = useState({
    cipher: '',
    key: 'my secret key',
    algo: 'AES',
    result: ''
  });

  const algorithms = ['AES', 'TripleDES', 'Rabbit', 'RC4'];

  // Encryption Logic
  useEffect(() => {
    try {
      if (encryptData.text && encryptData.key) {
        const encrypted = CryptoJS[encryptData.algo].encrypt(encryptData.text, encryptData.key).toString();
        setEncryptData(prev => ({ ...prev, result: encrypted }));
        // Sync with Decrypt input for demo purposes like the screenshot
        setDecryptData(prev => ({ ...prev, cipher: encrypted }));
      }
    } catch (e) {
      setEncryptData(prev => ({ ...prev, result: 'Encryption Error' }));
    }
  }, [encryptData.text, encryptData.key, encryptData.algo]);

  // Decryption Logic
  useEffect(() => {
    try {
      if (decryptData.cipher && decryptData.key) {
        const bytes = CryptoJS[decryptData.algo].decrypt(decryptData.cipher, decryptData.key);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        setDecryptData(prev => ({ ...prev, result: originalText || 'Invalid Key/Cipher' }));
      }
    } catch (e) {
      setDecryptData(prev => ({ ...prev, result: 'Decryption Error' }));
    }
  }, [decryptData.cipher, decryptData.key, decryptData.algo]);

  const inputClass = "w-full bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all";
  const labelClass = "block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300";

  return (
    <div className="min-h-screen bg-white dark:bg-[#181818] text-gray-900 dark:text-gray-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl  mb-4">Encrypt / decrypt text</h1>
          <div className="h-[2px] w-[30%] bg-gray-300 dark:bg-gray-700 mt-2 rounded-full mb-2" />
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
            Encrypt clear text and decrypt ciphertext using crypto algorithms like AES, TripleDES, Rabbit or RC4.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Encrypt Section */}
          <section className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-xl border border-gray-200 dark:border-zinc-800">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Lock size={20} className="text-blue-500" /> Encrypt
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Your text:</label>
                <textarea 
                  className={`${inputClass} h-32 resize-none`}
                  value={encryptData.text}
                  onChange={(e) => setEncryptData({...encryptData, text: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Your secret key:</label>
                  <input 
                    type="text" 
                    className={inputClass}
                    value={encryptData.key}
                    onChange={(e) => setEncryptData({...encryptData, key: e.target.value})}
                  />
                </div>
                <div>
                  <label className={labelClass}>Encryption algorithm:</label>
                  <select 
                    className={inputClass}
                    value={encryptData.algo}
                    onChange={(e) => setEncryptData({...encryptData, algo: e.target.value})}
                  >
                    {algorithms.map(a => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass}>Your text encrypted:</label>
                <textarea 
                  readOnly 
                  className={`${inputClass} h-24 bg-gray-200/50 dark:bg-zinc-900 cursor-not-allowed`}
                  value={encryptData.result}
                />
              </div>
            </div>
          </section>

          {/* Decrypt Section */}
          <section className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-xl border border-gray-200 dark:border-zinc-800">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Unlock size={20} className="text-green-500" /> Decrypt
            </h2>

            <div className="space-y-4">
              <div>
                <label className={labelClass}>Your encrypted text:</label>
                <textarea 
                  className={`${inputClass} h-32 resize-none`}
                  value={decryptData.cipher}
                  onChange={(e) => setDecryptData({...decryptData, cipher: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Your secret key:</label>
                  <input 
                    type="text" 
                    className={inputClass}
                    value={decryptData.key}
                    onChange={(e) => setDecryptData({...decryptData, key: e.target.value})}
                  />
                </div>
                <div>
                  <label className={labelClass}>Encryption algorithm:</label>
                  <select 
                    className={inputClass}
                    value={decryptData.algo}
                    onChange={(e) => setDecryptData({...decryptData, algo: e.target.value})}
                  >
                    {algorithms.map(a => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass}>Your decrypted text:</label>
                <textarea 
                  readOnly 
                  className={`${inputClass} h-24 bg-gray-200/50 dark:bg-zinc-900 cursor-not-allowed`}
                  value={decryptData.result}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CryptoTool;