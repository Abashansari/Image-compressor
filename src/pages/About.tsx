import { Header } from '../components/Header';
import Footer from '../components/Footer';

export const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f3f4f6]">
      <Header />
      
      <main className="flex-grow flex flex-col items-center pt-16 px-4 pb-20 w-full max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            About Image Compressor
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Our Image Compressor leverages modern browser technologies, including the native Canvas API and Web Workers, to deliver fast, secure image compression directly within your browser. Images are processed entirely on your device—never uploaded to external servers—ensuring complete privacy, instant performance, and a seamless experience.
          </p>
        </div>

        <div className="w-full space-y-12 text-left bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Why We Built This</h2>
            <p className="text-gray-600 leading-relaxed">
              Image-Compressor started as an internal tool. We were tired of relying on slow, server-based solutions that compromised our users' privacy, required uploads/downloads, and ate up bandwidth. By leveraging modern browser capabilities, we created a utility that runs entirely on your machine. The result? Unprecedented speed, absolute privacy, and a cleaner web ecosystem for everyone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Privacy First</h2>
            <p className="text-gray-600 leading-relaxed">
              Your files never leave your device. All compression happens securely within your browser, ensuring absolute data privacy. There are no databases storing your images, no temporary storage servers, and no trackers monitoring your uploads. 
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Technology Stack</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-600">
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> React</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> TypeScript</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Tailwind CSS</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> browser-image-compression</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> react-dropzone</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> JSZip</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Vite</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Is there a limit to the number of images I can compress?</h3>
                <p className="text-gray-600 text-sm">No artificial limits. However, since processing happens in your browser, performance depends on your device's memory and CPU.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Do you keep a copy of my images?</h3>
                <p className="text-gray-600 text-sm">Absolutely not. The images are processed in your browser memory and are immediately cleared when you refresh the page or click "Clear All".</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Does this work offline?</h3>
                <p className="text-gray-600 text-sm">Once the application is loaded, it can function completely offline without any active internet connection.</p>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};
