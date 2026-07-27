import { Mail, MapPin, Phone, Code2, MessageCircle, Camera, Briefcase } from "lucide-react"

const Footer = () => (
  <footer className="bg-[#0F172A] border-t border-[#1E293B] mt-20">
    <div className="max-w-7xl mx-auto px-6 py-14">

      {/* Top Grid */}
      <div className="grid gap-12 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Image<span className="text-[#2563EB]">Compressor</span>
          </h3>
          <p className="mt-3 text-sm text-[#94A3B8] max-w-sm leading-relaxed">
            Compress images without losing quality.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-5 text-sm">
          <h4 className="font-semibold text-white">
            Contact
          </h4>

          <div className="flex items-start gap-3 text-[#94A3B8]">
            <Mail size={18} className="mt-0.5 text-[#38BDF8]" />
            <span>ansariabash2004@gmail.com</span>
          </div>

          <div className="flex items-start gap-3 text-[#94A3B8]">
            <MapPin size={18} className="mt-0.5 text-[#38BDF8]" />
            <span>Global (Remote)</span>
          </div>

          <div className="flex items-start gap-3 text-[#94A3B8]">
            <Phone size={18} className="mt-0.5 text-[#38BDF8]" />
            <span>+91 81672 59866</span>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-white mb-4"> Follow Us</h4>

          <div className="flex gap-4">
            <a href="https://github.com/Abashansari" className="p-2 rounded-lg bg-[#1E293B] border border-[#334155] hover:bg-[#2563EB] hover:border-[#2563EB] transition" >
              <Code2 className="text-[#94A3B8] hover:text-white" />
            </a>

            <a href="https://x.com/Abash_Ansari21" className="p-2 rounded-lg bg-[#1E293B] border border-[#334155] hover:bg-[#2563EB] hover:border-[#2563EB] transition" >
              <MessageCircle className="text-[#94A3B8] hover:text-white" />
            </a>

            <a href="https://www.instagram.com/abash_21ansari" className="p-2 rounded-lg bg-[#1E293B] border border-[#334155] hover:bg-[#2563EB] hover:border-[#2563EB] transition" >
              <Camera className="text-[#94A3B8] hover:text-white" />
            </a>

            <a href="https://www.linkedin.com/in/abash-ansari" className="p-2 rounded-lg bg-[#1E293B] border border-[#334155] hover:bg-[#2563EB] hover:border-[#2563EB] transition">
              <Briefcase className="text-[#94A3B8] hover:text-white" />
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-[#1E293B]" />

      {/* Bottom */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#94A3B8]">
        <div>
          © {new Date().getFullYear()} Image<span className="text-[#2563EB]">Compressor</span>. All rights reserved.
        </div>
        <div className="mt-2 md:mt-0">
          Built-by Abash Ansari
        </div>
      </div>

    </div>
  </footer>
)

export default Footer
