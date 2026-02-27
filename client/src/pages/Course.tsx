import { BookOpen, Clock, Shield, Download } from "lucide-react";
import { Link, useRoute } from "wouter";


export default function Course() {
  const [, params] = useRoute("/courses/:type");
  const type = params?.type;

  // Only allow diploma
  if (type !== "diploma") {
  return (
    <div className="py-20 text-center text-3xl font-bold">
      404 – Course Not Found
    </div>
  );
}

  const title = "Diploma in Cybersecurity";
  const duration = "1 Year";
  const desc =
    "Build a Global Cybersecurity Career, From Fundamentals to Professional.";

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-[#5a0014]">
        <img
          src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop"
          alt="Course"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#2a0008]/100 via-[#5a0014]/95 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-start">
          <div className="inline-block border border-white/20 rounded-full px-4 py-1 mb-6 bg-white/5 backdrop-blur-md">
            <span className="text-[#bb1133] text-xs font-bold tracking-widest uppercase">
              ACADEMICS / DIPLOMA IN CYBERSECURITY
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif font-black mb-6 leading-tight tracking-tight text-white max-w-3xl">
            {title}
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
            {desc}
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-serif font-black mb-8 text-gray-900 tracking-tight">
              Course Overview
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed text-lg font-light">
              Step into the frontline of digital defense with Bangladesh’s
              trusted 1-year Professional Diploma in Cyber Security,
              powered by Arena Web Security.
            </p>

            <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">
              Core Modules
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-10">
              <li>Footprinting & Website Penetration Testing</li>
              <li>SQL Injection & System Hacking</li>
              <li>Linux Server Security</li>
              <li>Burp Suite & API Security</li>
              <li>Digital & Memory Forensics</li>
              <li>Threat Hunting & SIEM</li>
            </ul>

            <a
              href="https://drive.google.com/uc?export=download&id=1zUvuT2YHsbMWECLM0eCmvTh3nMh1GM2g"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-4 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              <Download className="w-5 h-5" />
              <span>Download Full Course Module</span>
            </a>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm sticky top-24">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-4">
                Course Details
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-sm text-gray-500 font-medium">
                      Duration
                    </div>
                    <div className="font-bold text-gray-900">{duration}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-sm text-gray-500 font-medium">
                      Mode
                    </div>
                    <div className="font-bold text-gray-900">
                      Online + Offline (Hybrid)
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Shield className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-sm text-gray-500 font-medium">
                      Language
                    </div>
                    <div className="font-bold text-gray-900">
                      Bangla & English
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/apply"
                className="block w-full py-4 bg-primary text-white text-center font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                Apply for Diploma
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}