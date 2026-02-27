import { Link } from "wouter";

export default function AboutUs() {
  return (
    <div className="w-full bg-white">

      {/* HERO */}
      <section className="relative py-24 overflow-hidden bg-[#1a1a1a]">
        <img
          src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop"
          alt="About Arena"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />

        {/* Red Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a0008]/100 via-[#5a0014]/95 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            href="/"
            className="text-gray-300 hover:text-white text-sm mb-6 inline-flex items-center group transition-colors"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">
              &larr;
            </span>
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-6xl font-serif font-black mb-6 leading-tight tracking-tight text-white">
            About AWS Institute Of Technology
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
            Government Recognized Technical Education Institute
          </p>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="text-[#f59e0b] uppercase tracking-widest text-xs font-bold">
              OUR STORY
            </span>

            <h2 className="text-4xl font-serif font-black text-gray-900 mt-4 mb-6 leading-tight">
              Redefining Education for the Modern Workforce
            </h2>

            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              Established in 2012, Arena Web Security was founded on a clear realization: traditional academic pathways were not aligned with the rapidly evolving demands of the Cyber Security industry.
            </p>

            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              We established Arena to bridge that gap by focusing exclusively on a structured Professional Diploma in Cyber Security, designed to deliver practical expertise, real-world defensive capability, and immediate career readiness.
            </p>

            <p className="text-gray-600 text-[15px] leading-relaxed">
              Today, Arena Web Security empowers ambitious individuals who seek industry-focused, hands-on Cyber Security education without the outdated timelines and theoretical limitations of conventional institutions.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative pl-8">
            <img
              src="/assets/aws17.webp"
              alt="Campus Building"
              className="rounded-xl shadow-xl w-full h-[380px] object-cover"
            />

            {/* Floating Years Card */}
            <div className="absolute -bottom-8 left-0 bg-white shadow-xl rounded-xl p-8 w-72">
              <h3 className="text-2xl font-serif font-black text-gray-900 mb-2">
                13+ Years
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Of pioneering practical, industry-first education paradigms.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-50">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-[#f59e0b] mb-6">
                  <div className="w-6 h-6 rounded-full border-2 border-[#f59e0b] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#f59e0b] rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  To provide accessible, high-intensity, and hyper-relevant education that empowers individuals to achieve their professional goals and supplies industries with highly competent, ready-to-work talent.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-50">
                <div className="w-12 h-12 flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  To be the globally recognized benchmark for accelerated professional education, continuously adapting our curriculum to the frontier of technological and business advancements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}