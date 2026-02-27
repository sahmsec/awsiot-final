import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-[#5a0014]">
        <img
          src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />

        {/* Strong Bottom → Top Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a0008]/100 via-[#5a0014]/95 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-start">
          <div className="inline-block border border-white/20 rounded-full px-4 py-1 mb-6 bg-white/5 backdrop-blur-md">
            <span className="text-[#bb1133] text-xs font-bold tracking-widest uppercase">
              INFORMATION / CONTACT US
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif font-black mb-6 leading-tight tracking-tight text-white max-w-3xl">
            Contact Arena Institute
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
            Get in touch with Arena Web Security Institute of Technology. Our team is ready to assist you.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8 text-gray-900">Get In Touch</h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Our Location</h3>
                  <p className="text-gray-600 leading-relaxed">
                    House No: 1, Block: B<br />
                    Banasree, Main Road, Rampura,<br />
                    Dhaka - 1219
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600 leading-relaxed">
                    +880 1310 333 444<br />
                    +880 1885 841 489
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600 leading-relaxed">
                    info@arenawebsecurity.net <br />
                    dh@arenawebsecurity.edu.bd
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-gray-600">Thank you for contacting us. We will reach out to you via email shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="name@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Write your message here..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 flex justify-center items-center">
                  <Send className="w-5 h-5 mr-2" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}