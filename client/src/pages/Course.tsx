import { BookOpen, CheckCircle, Clock, Shield, Download } from "lucide-react";
import { Link, useRoute } from "wouter";

export default function Course() {
  const [, params] = useRoute("/courses/:type");
  const type = params?.type;

  const isDiploma = type === "diploma";

  const title = isDiploma ? "Diploma in Cybersecurity" : "Short Course";
  const duration = isDiploma ? "1 Year" : "3 Months";

  const desc = isDiploma
    ? "Build a Global Cybersecurity Career, From Fundamentals to Professional."
    : "An intensive short program focused on cybersecurity fundamentals.";

  const shortModules = [
    "Introduction to Cybersecurity",
    "Basic Networking & Linux",
    "Web Vulnerabilities (OWASP Top 10)",
    "Security Best Practices",
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-[#5a0014]">
        <img
          src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop"
          alt="Course"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />

        {/* Strong Bottom → Top Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a0008]/100 via-[#5a0014]/95 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-start">
          <div className="inline-block border border-white/20 rounded-full px-4 py-1 mb-6 bg-white/5 backdrop-blur-md">
            <span className="text-[#bb1133] text-xs font-bold tracking-widest uppercase">
              ACADEMICS / {title.toUpperCase()}
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

            {isDiploma ? (
              <>
                {/* Marketing Intro */}
                <p className="text-gray-600 mb-6 leading-relaxed text-lg font-light">
                  Step into the frontline of digital defense with Bangladesh’s
                  trusted 1-year Professional Diploma in Cyber Security,
                  powered by Arena Web Security. This career-focused program
                  equips you with hands-on skills in ethical hacking, digital
                  forensics, OSINT, Linux server security, and enterprise-grade
                  threat defense.
                </p>

                <p className="text-gray-600 mb-10 leading-relaxed text-lg font-light">
                  From fundamentals to advanced enterprise security operations,
                  this structured curriculum prepares you for global
                  cybersecurity careers, freelancing platforms, and corporate
                  security roles.
                </p>

                {/* Module 1 */}
                <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">
                  Cyber Security & Ethical Hacking
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
                  <li>Footprinting & Website Penetration Testing</li>
                  <li>SQL Injection (All Methods)</li>
                  <li>System Hacking & Malware Threats</li>
                  <li>Denial-of-Service & IDS Evasion</li>
                  <li>Linux OS & Web Server Scanning</li>
                  <li>Social Engineering</li>
                  <li>Freelancing (Fiverr, Upwork, HackerOne)</li>
                </ul>

                {/* Module 2 */}
                <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">
                  Advanced Python with Django & Scraping
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
                  <li>Python Fundamentals & OOP</li>
                  <li>Django Backend & REST API Development</li>
                  <li>Automation & Web Scraping (BeautifulSoup)</li>
                  <li>Secure Web Application Deployment</li>
                </ul>

                {/* Module 3 */}
                <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">
                  Advanced Cyber Security & Digital Forensics
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-10">
                  <li>Vulnerability Scanning (Nessus, OpenVAS)</li>
                  <li>MITM, ARP Spoofing & EternalBlue Exploits</li>
                  <li>Burp Suite Pro & API Security</li>
                  <li>Digital & Memory Forensics (Autopsy, FTK, Volatility)</li>
                  <li>Threat Hunting & SIEM (Splunk, ELK, QRadar)</li>
                  <li>Active Directory Attacks & Hardening</li>
                </ul>

                {/* Mastery Section */}
                <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900">
                  What You Will Master
                </h3>
                <ul className="grid sm:grid-cols-2 gap-4 text-gray-600 mb-10">
                  <li>Cyber Security & Network Defense</li>
                  <li>Linux Administration & Server Hardening</li>
                  <li>Open Source Intelligence (OSINT)</li>
                  <li>Digital Forensics & Threat Response</li>
                  <li>Real-World Freelancing Strategies</li>
                  <li>Career Grooming & Global Job Readiness</li>
                </ul>

                {/* Why Diploma */}
                <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900">
                  Why This Diploma?
                </h3>
                <ul className="space-y-3 text-gray-600 mb-10">
                  <li>• Trained by Top Cybersecurity Experts</li>
                  <li>• Practical Lab Environment & Live Projects</li>
                  <li>• Roadmap for Freelancing & International Jobs</li>
                  <li>• Certificate with Career Support & Job Guidance</li>
                  <li>• Structured for Beginners to Advanced Learners</li>
                </ul>

                {/* Download Button */}
                <a
                  href="https://drive.google.com/uc?export=download&id=1zUvuT2YHsbMWECLM0eCmvTh3nMh1GM2g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-4 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Full Course Module</span>
                </a>
              </>
            ) : (
              <>
                <p className="text-gray-600 mb-10 leading-relaxed text-xl font-light">
                  This short course provides a fast-track introduction to
                  cybersecurity fundamentals with practical exposure.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {shortModules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg border border-gray-100"
                    >
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{mod}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
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
                Apply for {isDiploma ? "Diploma" : "Course"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}