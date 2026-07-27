import { Download, RefreshCw } from 'lucide-react';
import type { FileData } from '../hooks/useCompression';
import { downloadAllAsZip } from '../utils/download';
import { useState } from 'react';

interface BatchResultsProps {
  files: FileData[];
  onClear: () => void;
}

export const BatchResults = ({ files, onClear }: BatchResultsProps) => {
  const [isZipping, setIsZipping] = useState(false);
  const completedFiles = files.filter(f => f.status === 'completed' && f.compressedFile);

  if (completedFiles.length === 0) return null;

  const totalOriginalSize = completedFiles.reduce((acc, f) => acc + f.size, 0) / 1024 / 1024;
  const totalCompressedSize = completedFiles.reduce((acc, f) => acc + (f.compressedSize || 0), 0) / 1024 / 1024;
  const savedPercentage = Math.round((1 - totalCompressedSize / totalOriginalSize) * 100);

  const handleZipDownload = async () => {
    setIsZipping(true);
    try {
      await downloadAllAsZip(completedFiles);
    } catch (e) {
      console.error("Zipping failed", e);
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div className="w-full mt-8 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
      
      <div className="flex items-center gap-6 w-full md:w-auto">
        <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex flex-col items-center justify-center font-bold shadow-md flex-shrink-0">
          <span className="text-lg">{savedPercentage}%</span>
          <span className="text-[10px] font-normal tracking-wide uppercase mt-0.5">Saved</span>
        </div>
        
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-gray-800">
            {completedFiles.length} {completedFiles.length === 1 ? 'Image' : 'Images'} Compressed
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs text-gray-600 mt-1">
            <span className="font-medium">Original: {totalOriginalSize.toFixed(2)} MB</span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span className="font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">
              New: {totalCompressedSize.toFixed(2)} MB
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
        <button
          onClick={handleZipDownload}
          disabled={isZipping}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm disabled:opacity-50"
        >
          <Download size={18} />
          {isZipping ? 'Zipping...' : 'Download All (ZIP)'}
        </button>
        <button
          onClick={onClear}
          className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-500 hover:text-gray-800 px-4 py-2.5 rounded-full transition-colors font-medium text-sm"
        >
          <RefreshCw size={16} />
          Clear All
        </button>
      </div>

    </div>
  );
};
