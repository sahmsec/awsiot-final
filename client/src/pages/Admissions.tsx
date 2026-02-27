import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Admissions() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does the admission process take?",
      answer:
        "The admission review process typically takes 2–4 weeks after all required documents have been submitted.",
    },
    {
      question: "Are scholarships available?",
      answer:
        "Yes. We offer merit-based and need-based scholarships for eligible students.",
    },
    {
      question: "Can international students apply?",
      answer:
        "Absolutely. International applicants are welcome and will receive guidance throughout the admission process.",
    },
  ];

  return (
    <div className="w-full bg-white">



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

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {/* WHY CHOOSE US */}
        <section>
          <h2 className="text-4xl font-serif font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="font-bold text-lg mb-3">
                  Industry-Focused Curriculum
                </h3>
                <p className="text-gray-600 text-sm">
                  Designed with industry partners to prepare you for
                  high-demand cybersecurity careers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="font-bold text-lg mb-3">
                  Global Recognition
                </h3>
                <p className="text-gray-600 text-sm">
                  Accredited programs with international academic
                  partnerships.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="font-bold text-lg mb-3">
                  Modern Campus
                </h3>
                <p className="text-gray-600 text-sm">
                  Advanced labs, digital resources, and hands-on
                  training environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section>
          <h2 className="text-4xl font-serif font-bold mb-6">
            Admission Requirements
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-gray-600 text-lg">
            <li>Completed online application form</li>
            <li>Official academic transcripts</li>
            <li>Statement of purpose</li>
            <li>Two recommendation letters</li>
            <li>Proof of English proficiency (if required)</li>
          </ul>
        </section>

        {/* TIMELINE */}
        <section>
          <h2 className="text-4xl font-serif font-bold mb-6">
            Application Timeline
          </h2>

          <div className="text-gray-600 text-lg space-y-2">
            <p><strong>Fall Intake:</strong> January 1 – June 30</p>
            <p><strong>Spring Intake:</strong> August 1 – November 30</p>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section>
          <h2 className="text-4xl font-serif font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-xl">
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <span className="font-semibold">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${open === index ? "rotate-180 text-primary" : ""
                      }`}
                  />
                </button>

                {open === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}