import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import type { FileData } from '../hooks/useCompression';

export const downloadSingleFile = (fileData: FileData) => {
  if (!fileData.compressedFile) return;
  const originalName = fileData.file.name;
  const nameWithoutExt = originalName.substring(0, originalName.lastIndexOf('.')) || originalName;
  const ext = originalName.substring(originalName.lastIndexOf('.'));
  
  saveAs(fileData.compressedFile, `${nameWithoutExt}-compressed${ext}`);
};

export const downloadAllAsZip = async (files: FileData[]) => {
  const zip = new JSZip();
  const completedFiles = files.filter(f => f.status === 'completed' && f.compressedFile);

  if (completedFiles.length === 0) return;

  completedFiles.forEach(fileData => {
    const originalName = fileData.file.name;
    const nameWithoutExt = originalName.substring(0, originalName.lastIndexOf('.')) || originalName;
    const ext = originalName.substring(originalName.lastIndexOf('.'));
    const fileName = `${nameWithoutExt}-compressed${ext}`;
    
    zip.file(fileName, fileData.compressedFile!);
  });

  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, 'compressed-images.zip');
};
