import { CloudUpload, PlusCircle } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface UploadZoneProps {
  onUpload: (files: File[]) => void;
  disabled?: boolean;
  compact?: boolean;
}

export const UploadZone = ({ onUpload, disabled, compact = false }: UploadZoneProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onUpload(acceptedFiles);
      }
    },
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp'],
    },
    disabled,
  });

  if (compact) {
    return (
      <div
        {...getRootProps()}
        className={`w-full border-2 border-dashed rounded-xl p-6 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all cursor-pointer ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <input {...getInputProps()} />
        <PlusCircle className="w-8 h-8 text-blue-500" />
        <p className="text-gray-600 font-medium">Add more images</p>
      </div>
    );
  }

  return (
    <div
      {...getRootProps()}
      className={`w-full border-2 border-dashed rounded-3xl p-12 flex flex-col items-center justify-center transition-all cursor-pointer min-h-[300px] ${
        isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white hover:bg-gray-50 hover:border-gray-400'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <input {...getInputProps()} />
      <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
        <CloudUpload className="w-10 h-10 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">Drag & drop your images here</h3>
      <p className="text-gray-500 mb-8 text-center max-w-sm">
        Support for JPG, JPEG, PNG, and WEBP. Upload multiple files at once.
      </p>
      <button 
        type="button" 
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-50"
        disabled={disabled}
      >
        Select Files
      </button>
    </div>
  );
};
