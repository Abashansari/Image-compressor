import { useState, useCallback } from 'react';
import { compressImage } from '../utils/compressImage';

export type FileStatus = 'idle' | 'compressing' | 'completed' | 'error';

export interface FileData {
  id: string;
  file: File;
  previewUrl: string;
  size: number;
  width: number;
  height: number;
  status: FileStatus;
  progress: number;
  compressedFile?: File;
  compressedSize?: number;
  compressedWidth?: number;
  compressedHeight?: number;
}

interface UseCompressionReturn {
  files: FileData[];
  isCompressing: boolean;
  compressionLevel: number;
  setCompressionLevel: (level: number) => void;
  handleFileUpload: (newFiles: File[]) => Promise<void>;
  handleRemoveFile: (id: string) => void;
  handleCompressAll: () => Promise<void>;
  clearAll: () => void;
}

export const useCompression = (): UseCompressionReturn => {
  const [files, setFiles] = useState<FileData[]>([]);
  const [isCompressing, setIsCompressing] = useState(false);
  const [compressionLevel, setCompressionLevel] = useState(0.25);

  const getImageDimensions = (file: File): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
        URL.revokeObjectURL(img.src);
      };
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  };

  const handleFileUpload = useCallback(async (newFiles: File[]) => {
    const newFileDataPromises = newFiles.map(async (file) => {
      const dimensions = await getImageDimensions(file).catch(() => ({ width: 0, height: 0 }));
      return {
        id: crypto.randomUUID(),
        file,
        previewUrl: URL.createObjectURL(file),
        size: file.size,
        width: dimensions.width,
        height: dimensions.height,
        status: 'idle' as FileStatus,
        progress: 0,
      };
    });

    const newFileData = await Promise.all(newFileDataPromises);
    setFiles((prev) => [...prev, ...newFileData]);
  }, []);

  const handleRemoveFile = useCallback((id: string) => {
    setFiles((prev) => {
      const fileToRemove = prev.find(f => f.id === id);
      if (fileToRemove?.previewUrl) URL.revokeObjectURL(fileToRemove.previewUrl);
      if (fileToRemove?.compressedFile) {
        const compressedUrl = URL.createObjectURL(fileToRemove.compressedFile);
        URL.revokeObjectURL(compressedUrl); // Best effort cleanup
      }
      return prev.filter(f => f.id !== id);
    });
  }, []);

  const handleCompressAll = useCallback(async () => {
    if (files.length === 0) return;
    setIsCompressing(true);

    const updatedFiles = [...files];
    
    // Reset statuses for anything that was already compressed or errored if re-running
    updatedFiles.forEach(f => {
       if (f.status !== 'compressing') {
          f.status = 'idle';
          f.progress = 0;
       }
    });
    setFiles([...updatedFiles]);

    for (let i = 0; i < updatedFiles.length; i++) {
      const fileData = updatedFiles[i];
      if (fileData.status === 'completed') continue;

      fileData.status = 'compressing';
      setFiles([...updatedFiles]);

      try {
        const result = await compressImage(fileData.file, {
          targetPercentage: compressionLevel,
          onProgress: (p) => {
            updatedFiles[i].progress = p;
            setFiles([...updatedFiles]);
          },
        });

        const dimensions = await getImageDimensions(result).catch(() => ({ width: 0, height: 0 }));
        
        updatedFiles[i].compressedFile = result;
        updatedFiles[i].compressedSize = result.size;
        updatedFiles[i].compressedWidth = dimensions.width;
        updatedFiles[i].compressedHeight = dimensions.height;
        updatedFiles[i].status = 'completed';
        updatedFiles[i].progress = 100;

      } catch (error) {
        console.error(`Compression failed for ${fileData.file.name}`, error);
        updatedFiles[i].status = 'error';
      }
      
      setFiles([...updatedFiles]);
    }

    setIsCompressing(false);
  }, [files, compressionLevel]);

  const clearAll = useCallback(() => {
    files.forEach(f => {
      if (f.previewUrl) URL.revokeObjectURL(f.previewUrl);
    });
    setFiles([]);
  }, [files]);

  return {
    files,
    isCompressing,
    compressionLevel,
    setCompressionLevel,
    handleFileUpload,
    handleRemoveFile,
    handleCompressAll,
    clearAll,
  };
};
