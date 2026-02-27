import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Admissions() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does the admission process take?",
      answer:
        "Typically 2–4 weeks after all required documents are submitted.",
    },
    {
      question: "Are scholarships available?",
      answer:
        "Yes, merit-based and need-based scholarships are available for qualified students.",
    },
    {
      question: "Can international students apply?",
      answer:
        "Absolutely. We welcome students from all countries and provide guidance for visa processing.",
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

      {/* HERO SECTION */}
      <section className="relative py-24 overflow-hidden bg-[#5a0014]">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />

        {/* Strong Bottom → Top Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a0008]/100 via-[#5a0014]/95 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-start">
          <div className="inline-block border border-white/20 rounded-full px-4 py-1 mb-6 bg-white/5 backdrop-blur-md">
            <span className="text-[#bb1133] text-xs font-bold tracking-widest uppercase">
              Admissions
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif font-black mb-6 leading-tight tracking-tight text-white max-w-3xl">
            Admission
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
            Join a future-focused institution committed to innovation,
            academic excellence, and real-world impact.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {/* WHY CHOOSE US */}
        <section className="space-y-10">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry-Focused Curriculum",
                desc: "Designed with real industry partners to prepare you for high-demand careers.",
              },
              {
                title: "Global Recognition",
                desc: "International partnerships and accredited programs.",
              },
              {
                title: "Modern Campus",
                desc: "State-of-the-art labs, research centers, and digital learning tools.",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section className="space-y-6">
          <h2 className="text-4xl font-serif font-bold text-gray-900">
            Admission Requirements
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-gray-600 text-lg">
            <li>Completed online application form</li>
            <li>Official academic transcripts</li>
            <li>Statement of purpose</li>
            <li>Two recommendation letters</li>
            <li>Proof of English proficiency (if applicable)</li>
          </ul>
        </section>

        {/* TIMELINE */}
        <section className="space-y-6">
          <h2 className="text-4xl font-serif font-bold text-gray-900">
            Application Timeline
          </h2>

          <div className="text-gray-600 text-lg space-y-2">
            <p><strong>Fall Intake:</strong> Jan 1 – June 30</p>
            <p><strong>Spring Intake:</strong> Aug 1 – Nov 30</p>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="space-y-10">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFAQ(openFAQ === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-50 transition text-left"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${openFAQ === index ? "rotate-180 text-primary" : "text-gray-400"
                      }`}
                  />
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </motion.div>
  );
}