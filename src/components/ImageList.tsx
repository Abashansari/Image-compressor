import { X, CheckCircle2, AlertCircle, Loader2, Download } from 'lucide-react';
import type { FileData } from '../hooks/useCompression';
import { downloadSingleFile } from '../utils/download';

interface ImageListProps {
  files: FileData[];
  onRemove: (id: string) => void;
  disabled?: boolean;
}

export const ImageList = ({ files, onRemove, disabled }: ImageListProps) => {
  if (files.length === 0) return null;

  return (
    <div className="w-full mt-8 flex flex-col gap-3">
      {files.map((fileData) => (
        <div key={fileData.id} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow transition-shadow">
          <div className="flex items-center gap-4 min-w-0">
            <img 
              src={fileData.previewUrl} 
              alt="preview" 
              className="w-14 h-14 object-cover rounded-lg flex-shrink-0 border border-gray-100" 
            />
            <div className="flex flex-col min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate max-w-[150px] sm:max-w-[250px]">
                {fileData.file.name}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                  {(fileData.size / 1024 / 1024).toFixed(2)} MB
                </span>
                {fileData.compressedSize && (
                  <>
                    <span className="text-gray-400 text-xs">→</span>
                    <span className="text-xs text-white bg-green-500 px-2 py-0.5 rounded font-medium">
                      {(fileData.compressedSize / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Status Indicator */}
            <div className="hidden sm:flex items-center gap-2 w-28 justify-end">
              {fileData.status === 'idle' && <span className="text-xs text-gray-400 font-medium">Waiting</span>}
              {fileData.status === 'compressing' && (
                <>
                  <Loader2 size={14} className="animate-spin text-blue-500" />
                  <span className="text-xs text-blue-500 font-medium">{Math.round(fileData.progress)}%</span>
                </>
              )}
              {fileData.status === 'completed' && (
                <>
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span className="text-xs text-green-600 font-medium">Done</span>
                </>
              )}
              {fileData.status === 'error' && (
                <>
                  <AlertCircle size={16} className="text-red-500" />
                  <span className="text-xs text-red-500 font-medium">Failed</span>
                </>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {fileData.status === 'completed' && fileData.compressedFile ? (
                <button
                  onClick={() => downloadSingleFile(fileData)}
                  className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-full transition-colors"
                  title="Download"
                >
                  <Download size={18} />
                </button>
              ) : (
                <button
                  onClick={() => onRemove(fileData.id)}
                  disabled={disabled || fileData.status === 'compressing'}
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors disabled:opacity-50"
                  title="Remove"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
