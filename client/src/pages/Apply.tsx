import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Apply() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setIsSubmitted(true), 500);
  };

  return (
    <div className="w-full bg-white flex flex-col min-h-screen">
      <section className="relative py-24 overflow-hidden bg-[#5a0014]">
        <img
          src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop"
          alt="Apply Now"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a0008]/100 via-[#5a0014]/95 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-start">
          <div className="inline-block border border-white/20 rounded-full px-4 py-1 mb-6 bg-white/5 backdrop-blur-md">
            <span className="text-[#bb1133] text-xs font-bold tracking-widest uppercase">
              ADMISSIONS / APPLY NOW
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif font-black mb-6 leading-tight tracking-tight text-white max-w-3xl">
            Apply Now
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
            Take the first step towards a career in cybersecurity. Fill out the application below.
          </p>
        </div>
      </section>

      <div className="w-full bg-gray-50 py-16 flex-grow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-xl p-12 text-center border-t-8 border-green-500"
            >
              <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Application Received!</h2>
              <p className="text-gray-600 text-lg mb-8">
                Thank you for applying to Arena Web Security Institute of Technology. Our admissions team will review your information and contact you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-primary font-bold hover:underline"
              >
                Submit another application
              </button>
            </motion.div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-[#1a1a1a] px-8 py-6 border-b-4 border-primary">
                <h2 className="text-white font-serif text-xl font-bold">General Admissions Application</h2>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">First Name <span className="text-primary">*</span></label>
                    <input required type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Last Name <span className="text-primary">*</span></label>
                    <input required type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email Address <span className="text-primary">*</span></label>
                  <input required type="email" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white" placeholder="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Program of Interest <span className="text-primary">*</span></label>
                  <select required className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white">
                    <option value="" disabled selected>Select a program...</option>
                    <option value="undergrad">Undergraduate - B.S. Cybersecurity</option>
                    <option value="grad">Graduate - M.S. Information Security</option>
                    <option value="cert">Professional Certification - Ethical Hacking</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Why Arena Web Security? (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white resize-none" placeholder="Tell us about your goals..."></textarea>
                </div>

                <div className="pt-4 flex items-center justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary text-white font-bold rounded shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5 transition-all w-full md:w-auto"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
