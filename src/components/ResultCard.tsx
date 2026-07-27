import { Download, RefreshCw, Copy } from 'lucide-react';
import type { FileData } from '../hooks/useCompression';

interface ResultCardProps {
  originalFile: FileData;
  compressedFile: FileData;
  onReset: () => void;
}

export const ResultCard = ({ originalFile, compressedFile, onReset }: ResultCardProps) => {
  const originalSizeMB = originalFile.size / 1024 / 1024;
  const compressedSizeMB = compressedFile.size / 1024 / 1024;
  const savedPercentage = Math.round((1 - compressedFile.size / originalFile.size) * 100);

  const handleDownload = () => {
    const url = URL.createObjectURL(compressedFile.file);
    const link = document.createElement('a');
    link.href = url;
    const nameWithoutExt = originalFile.file.name.substring(0, originalFile.file.name.lastIndexOf('.')) || originalFile.file.name;
    const ext = originalFile.file.name.substring(originalFile.file.name.lastIndexOf('.'));
    link.download = `${nameWithoutExt}-compressed${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copySize = () => {
    navigator.clipboard.writeText(`${compressedSizeMB.toFixed(2)} MB`);
  };

  return (
    <div className="w-full mt-8 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
      
      <div className="flex items-center gap-4 w-full md:w-auto">
        <img
          src={compressedFile.previewUrl}
          alt="Compressed preview"
          className="w-16 h-16 object-cover rounded-lg shadow-sm"
        />
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-800 truncate max-w-[200px]">
            {originalFile.file.name}
          </p>
          <div className="flex items-center text-xs text-gray-500 mt-1 space-x-2">
            <span className="bg-gray-200 px-2 py-1 rounded text-gray-700">
              Original: {originalSizeMB.toFixed(2)} MB
            </span>
            <span>→</span>
            <span className="bg-orange-600 text-white px-2 py-1 rounded shadow-sm flex items-center gap-1 cursor-pointer" onClick={copySize} title="Click to copy size">
              Compressed: {compressedSizeMB.toFixed(2)} MB <Copy size={12}/>
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="bg-blue-600 text-white w-14 h-14 rounded-full flex flex-col items-center justify-center font-bold text-sm shadow-md flex-shrink-0">
          <span>{savedPercentage}%</span>
          <span className="text-[9px] font-normal tracking-wide">Saved</span>
        </div>
        
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <button
            onClick={handleDownload}
            className="w-full flex items-center justify-center gap-2 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2.5 rounded-full font-medium transition-colors"
          >
            <Download size={18} />
            Download
          </button>
          <button
            onClick={onReset}
            className="w-full flex items-center justify-center gap-2 text-gray-500 hover:text-gray-800 text-sm py-1 transition-colors"
          >
            <RefreshCw size={14} />
            Compress Another
          </button>
        </div>
      </div>

    </div>
  );
};
