import { Download } from "lucide-react";
import { Link } from "wouter";

export default function CourseModule() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-32 overflow-hidden bg-[#3a000d]">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
          alt="Course Modules"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#5a0014] via-[#3a000d]/95 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-start">
          <Link
            href="/"
            className="text-gray-300 hover:text-white text-sm mb-6 inline-flex items-center group transition-colors"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">
              &larr;
            </span>
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-6xl font-serif font-black mb-6 leading-tight tracking-tight text-white max-w-3xl">
            Professional Diploma in Cyber Security (1 Year)
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed font-light">
            Build a global cybersecurity career from fundamentals to
            professional level with Arena Web Security's trusted
            career-focused diploma program.
          </p>
        </div>
      </section>

      {/* PROGRAM SUMMARY */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-serif font-bold">
            Program Overview
          </h2>

          <p className="text-muted-foreground">
            This 1-year Professional Diploma in Cyber Security is designed to
            equip students with hands-on skills in ethical hacking, digital
            forensics, OSINT, Linux server security, API security, Django
            backend development, and real-world freelancing.
          </p>
        </div>
      </section>

      {/* MODULE BREAKDOWN */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-12">

          <h2 className="text-3xl font-serif font-bold">
            Course Modules
          </h2>

          {/* Module 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Cyber Security & Ethical Hacking
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Footprinting & Network Scanning</li>
              <li>Website Penetration Testing</li>
              <li>System Hacking & Malware Analysis</li>
              <li>SQL Injection & DoS Attacks</li>
              <li>Evading IDS & Firewalls</li>
              <li>Linux OS Security</li>
              <li>Social Engineering</li>
            </ul>
          </div>

          {/* Module 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Advanced Python with Django & Scraping
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Python Fundamentals & OOP</li>
              <li>Django Backend Development</li>
              <li>Building REST APIs</li>
              <li>Web Automation</li>
              <li>Web Scraping with BeautifulSoup</li>
            </ul>
          </div>

          {/* Module 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Advanced Cyber Security & Digital Forensics
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Vulnerability Scanning (Nessus, OpenVAS)</li>
              <li>Cryptography & Steganography</li>
              <li>Burp Suite Pro & API Hacking</li>
              <li>Digital & Memory Forensics</li>
              <li>Threat Hunting & SIEM</li>
              <li>Active Directory Attacks & Hardening</li>
            </ul>
          </div>

        </div>
      </section>

      {/* WHAT YOU WILL MASTER */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-serif font-bold">
            What You Will Master
          </h2>

          <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
            <li>Cyber Security & Network Defense</li>
            <li>Linux Administration & Server Hardening</li>
            <li>Digital Forensics & Threat Response</li>
            <li>Open Source Intelligence (OSINT)</li>
            <li>Real-World Freelancing Strategy</li>
            <li>Career Grooming & Global Job Readiness</li>
          </ul>
        </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">
            Download Full Course Module
          </h2>

          <a
            href="https://drive.google.com/uc?export=download&id=1zUvuT2YHsbMWECLM0eCmvTh3nMh1GM2g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg hover:opacity-90 transition"
          >
            <Download className="w-5 h-5" />
            <span>Download PDF</span>
          </a>
        </div>
      </section>
    </>
  );
}