import { Link } from "wouter";
import { ShieldAlert, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0b0b0f] text-gray-300 pt-16 pb-8 border-t-[6px] border-[#bb1133]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#bb1133] rounded flex items-center justify-center">
                <ShieldAlert className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-white text-xl leading-tight tracking-wide">
                  Arena Web Security
                </span>
                <span className="text-gray-400 text-[0.65rem] font-bold uppercase tracking-widest">
                  Institute of Technology
                </span>
              </div>
            </Link>

            {/* <p className="text-sm text-gray-400 leading-relaxed">
              Empowering the next generation of cybersecurity leaders through practical, industry-aligned education and rigorous professional training programs.
            </p> */}

            <ul className="space-y-4 text-sm mt-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#bb1133] shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  House No: 1, Block: B, Banasree, Main Road, Rampura, Dhaka - 1219
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#bb1133] shrink-0" />
                <span className="text-gray-400">
                  +880 1310 333 444, +880 1885 841 489
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#bb1133] shrink-0" />
                <span className="text-gray-400">
                  info@arenawebsecurity.net
                </span>
              </li>
            </ul>
          </div>

          {/* Academics Col */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6 relative inline-block">
              Academics
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#bb1133]"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/courses/diploma" className="text-gray-400 hover:text-[#bb1133] transition-colors">Diploma Programs</Link></li>
              <li><Link href="/courses/short-course" className="text-gray-400 hover:text-[#bb1133] transition-colors">Short Courses</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#bb1133] transition-colors">Professional Certifications</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#bb1133] transition-colors">Course Modules</Link></li>
              <li><Link href="/library" className="text-gray-400 hover:text-[#bb1133] transition-colors">E-Library</Link></li>
            </ul>
          </div>

          {/* Information Col */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6 relative inline-block">
              Information
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#bb1133]"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about-us" className="text-gray-400 hover:text-[#bb1133] transition-colors">About the Institute</Link></li>
              <li><Link href="/apply" className="text-gray-400 hover:text-[#bb1133] transition-colors">Admissions Process</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#bb1133] transition-colors">Tuition & Financial Aid</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#bb1133] transition-colors">Campus News</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#bb1133] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#bb1133]"></span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to receive updates on new programs and campus events.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border border-gray-700 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#bb1133] w-full"
              />
              <button 
                type="button" 
                className="bg-[#bb1133] hover:bg-[#9e0e2b] text-white font-bold rounded px-4 py-2.5 transition-colors w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; 2026 Arena Web Security Institute of Technology. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#bb1133] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#bb1133] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[#bb1133] transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}