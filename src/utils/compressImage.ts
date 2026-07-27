import imageCompression from 'browser-image-compression';

export interface CompressionOptions {
  targetPercentage: number;
  onProgress?: (progress: number) => void;
}

export const compressImage = async (
  file: File,
  options: CompressionOptions
): Promise<File> => {
  const { targetPercentage, onProgress } = options;
  const originalSizeMB = file.size / 1024 / 1024;
  const targetSizeMB = originalSizeMB * targetPercentage;
  
  // Base configuration
  const compressionOptions = {
    maxSizeMB: targetSizeMB,
    maxWidthOrHeight: 4096, // Keep a high resolution initially
    useWebWorker: true,
    initialQuality: 0.8, // Start slightly reduced
    onProgress: (progress: number) => {
       if (onProgress) {
           onProgress(progress);
       }
    }
  };

  try {
    const compressedFile = await imageCompression(file, compressionOptions);
    return compressedFile;
  } catch (error) {
    console.error("Compression error:", error);
    throw error;
  }
};
