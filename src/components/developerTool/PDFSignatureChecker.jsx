import React, { useState } from 'react';
import { Upload, FileCheck, AlertCircle, X, ShieldCheck } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind classes safely.
 */
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const PDFSignatureChecker = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'verifying' | 'success' | 'error'
  const [result, setResult] = useState(null);

  const handleFile = async (selectedFile) => {
    // Basic validation
    if (!selectedFile || selectedFile.type !== 'application/pdf') {
      alert('Please upload a valid PDF file.');
      return;
    }

    setFile(selectedFile);
    setStatus('verifying');

    // Simulated verification logic
    setTimeout(() => {
      const hasSignature = Math.random() > 0.3; 
      if (hasSignature) {
        setStatus('success');
        setResult('Signature is valid. Document has not been altered since signing.');
      } else {
        setStatus('error');
        setResult('No digital signature found or signature is invalid.');
      }
    }, 1500);
  };

  // Event Handlers
  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => setIsDragging(false);

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) handleFile(droppedFile);
  };

  const resetUpload = () => {
    setFile(null);
    setStatus('idle');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#181818] text-slate-900 dark:text-slate-100 transition-colors duration-200 p-8 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        
        {/* Header */}
        <header className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl tracking-tight mb-4">
                PDF signature checker
              </h1>
               <div className="h-[2px] w-[50%] bg-gray-300 dark:bg-gray-700 mt-2 rounded-full mb-2" />
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                Verify the signatures of a PDF file. A signed PDF file contains one or more signatures 
                that may be used to determine whether the contents of the file have been altered 
                since the file was signed.
              </p>
            </div>
            <div className="text-rose-500 pt-2">
              <ShieldCheck size={28} />
            </div>
          </div>
        </header>

        {/* Dropzone Container */}
        <div
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          className={cn(
            "relative border-2 rounded-xl p-12 flex flex-col items-center justify-center transition-all duration-300 min-h-[340px]",
            "bg-slate-50/50 dark:bg-[#1e1e1e]/50",
            isDragging ? "border-blue-500 bg-blue-50/10 scale-[1.01]" : "border-slate-300 dark:border-slate-800",
            file ? "border-solid" : "border-dashed"
          )}
        >
          {!file ? (
            <div className="text-center animate-in fade-in zoom-in duration-300">
              <div className="mb-6 flex justify-center">
                <Upload className="text-slate-400 dark:text-slate-600" size={48} />
              </div>
              <p className="text-xl text-slate-500 dark:text-slate-400 mb-8 font-light">
                Drag and drop a PDF file here, or click to select a file
              </p>
              
              <div className="flex items-center gap-4 mb-8 justify-center">
                <div className="h-px w-16 bg-slate-300 dark:bg-slate-800"></div>
                <span className="text-sm text-slate-400 uppercase tracking-widest">or</span>
                <div className="h-px w-16 bg-slate-300 dark:bg-slate-800"></div>
              </div>

              <label className="cursor-pointer bg-slate-900 dark:bg-[#2a2a2a] hover:bg-slate-800 dark:hover:bg-[#3a3a3a] text-white px-10 py-3 rounded-lg transition-all active:scale-95 inline-block font-medium">
                Browse files
                <input 
                  type="file" 
                  className="hidden" 
                  accept=".pdf" 
                  onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} 
                />
              </label>
            </div>
          ) : (
            /* File Display & Verification State */
            <div className="w-full animate-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between bg-white dark:bg-black/40 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <FileCheck className="text-blue-500" size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold truncate max-w-[200px] md:max-w-md">{file.name}</span>
                    <span className="text-xs text-slate-500 uppercase">{(file.size / 1024).toFixed(1)} KB</span>
                  </div>
                </div>
                <button 
                  onClick={resetUpload}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-400 transition-colors"
                  title="Remove file"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Status Results */}
              <div className="mt-12 flex flex-col items-center text-center">
                {status === 'verifying' && (
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-slate-500 animate-pulse">Analyzing digital signatures...</p>
                  </div>
                )}
                
                {status === 'success' && (
                  <div className="text-emerald-500 flex flex-col items-center animate-in zoom-in duration-500">
                    <div className="bg-emerald-500/10 p-4 rounded-full mb-4">
                      <ShieldCheck size={56} />
                    </div>
                    <p className="font-semibold text-xl mb-2">Verification Successful</p>
                    <p className="text-slate-600 dark:text-slate-400 max-w-sm">{result}</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="text-rose-500 flex flex-col items-center animate-in zoom-in duration-500">
                    <div className="bg-rose-500/10 p-4 rounded-full mb-4">
                      <AlertCircle size={56} />
                    </div>
                    <p className="font-semibold text-xl mb-2">Verification Failed</p>
                    <p className="text-slate-600 dark:text-slate-400 max-w-sm">{result}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <p className="mt-6 text-center text-sm text-slate-400 dark:text-slate-600">
          Your file is processed in the browser and never leaves your device.
        </p>
      </div>
    </div>
  );
};

export default PDFSignatureChecker;