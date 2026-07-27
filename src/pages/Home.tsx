import { ArrowDownToLine, Zap, Shield, Image, DownloadCloud, Lock } from 'lucide-react';
import { useCompression } from '../hooks/useCompression';
import { Header } from '../components/Header';
import { UploadZone } from '../components/UploadZone';
import { ImageList } from '../components/ImageList';
import { BatchResults } from '../components/BatchResults';
import { CompressionDropdown } from '../components/CompressionDropdown';
import Footer from '../components/Footer';

export const Home = () => {
  const {
    files,
    isCompressing,
    compressionLevel,
    setCompressionLevel,
    handleFileUpload,
    handleRemoveFile,
    handleCompressAll,
    clearAll,
  } = useCompression();

  // Scroll to upload section when clicking CTA
  const scrollToUpload = () => {
    document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f3f4f6]">
      <Header />
      
      <main className="flex-grow flex flex-col items-center pt-12 sm:pt-20 px-4 pb-12 w-full">
        
        {/* 1. Hero Section */}
        <section className="text-center mb-20 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Compress Images Instantly
          </h1>
          <p className="text-gray-500 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Reduce image size directly in your browser. Fast, secure, and completely private.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToUpload}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg text-lg"
            >
              Upload Images
            </button>
            <a 
              href="/about" 
              className="w-full sm:w-auto bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-3.5 rounded-full font-semibold transition-all shadow-sm text-lg"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* 2. Features Section */}
        <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
             <div className="bg-blue-50 p-3 rounded-xl text-blue-600"><Lock size={24}/></div>
             <div>
               <h3 className="font-bold text-gray-900 mb-1">Privacy First</h3>
               <p className="text-sm text-gray-500">Processing happens locally.</p>
             </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
             <div className="bg-blue-50 p-3 rounded-xl text-blue-600"><Zap size={24}/></div>
             <div>
               <h3 className="font-bold text-gray-900 mb-1">Lightning Fast</h3>
               <p className="text-sm text-gray-500">Zero network latency.</p>
             </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
             <div className="bg-blue-50 p-3 rounded-xl text-blue-600"><Image size={24}/></div>
             <div>
               <h3 className="font-bold text-gray-900 mb-1">Multiple Images</h3>
               <p className="text-sm text-gray-500">Batch process efficiently.</p>
             </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
             <div className="bg-blue-50 p-3 rounded-xl text-blue-600"><DownloadCloud size={24}/></div>
             <div>
               <h3 className="font-bold text-gray-900 mb-1">Batch Download</h3>
               <p className="text-sm text-gray-500">Download all as a ZIP.</p>
             </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
             <div className="bg-blue-50 p-3 rounded-xl text-blue-600"><Shield size={24}/></div>
             <div>
               <h3 className="font-bold text-gray-900 mb-1">No Uploads Required</h3>
               <p className="text-sm text-gray-500">Files stay on your device.</p>
             </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
             <div className="bg-blue-50 p-3 rounded-xl text-blue-600"><div className="w-6 h-6 border-2 border-current rounded-full" /></div>
             <div>
               <h3 className="font-bold text-gray-900 mb-1">100% Browser-Based</h3>
               <p className="text-sm text-gray-500">No backend needed.</p>
             </div>
          </div>
        </section>

        {/* 3. Compression Section */}
        <section id="upload-section" className="w-full max-w-4xl bg-white rounded-[2rem] p-6 md:p-10 card-shadow border border-gray-100 mb-20 scroll-mt-24">
          <UploadZone 
            onUpload={handleFileUpload} 
            disabled={isCompressing} 
            compact={files.length > 0}
          />

          {files.length > 0 && (
            <>
              <div className="mt-8 flex flex-col md:flex-row gap-4 items-end">
                <CompressionDropdown
                  value={compressionLevel}
                  onChange={setCompressionLevel}
                  disabled={isCompressing}
                />
                <button
                  onClick={handleCompressAll}
                  disabled={isCompressing || files.every(f => f.status === 'completed')}
                  className="w-full md:w-auto flex-shrink-0 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 text-white px-8 py-3 rounded-xl font-medium transition-colors shadow-sm h-[46px]"
                >
                  <ArrowDownToLine size={18} />
                  {isCompressing ? 'Compressing...' : 'Compress All'}
                </button>
              </div>

              {/* Progress Summary */}
              {isCompressing && (
                <div className="mt-6 p-4 bg-blue-50 text-blue-800 rounded-xl flex items-center justify-between">
                  <span className="font-medium text-sm">
                    Compressing {files.filter(f => f.status === 'compressing' || f.status === 'completed').length} of {files.length} images...
                  </span>
                  <div className="w-1/2 bg-blue-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-blue-600 h-full transition-all duration-300"
                      style={{ width: `${(files.filter(f => f.status === 'completed').length / files.length) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              <ImageList 
                files={files} 
                onRemove={handleRemoveFile} 
                disabled={isCompressing} 
              />
            </>
          )}

          {/* 4. Results Section */}
          <BatchResults files={files} onClear={clearAll} />
        </section>
      </main>

      <Footer />
    </div>
  );
};
