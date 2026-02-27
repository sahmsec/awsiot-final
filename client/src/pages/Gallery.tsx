import { useState } from "react";
import { Link } from "wouter";
import { Maximize2, X } from "lucide-react";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", alt: "Cybersecurity Lab" },
  { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop", alt: "Students Coding" },
  { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc91?q=80&w=2070&auto=format&fit=crop", alt: "Network Hardware" },
  { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop", alt: "Hackathon Event" },
  { src: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2069&auto=format&fit=crop", alt: "Server Room" },
  { src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop", alt: "Data Analysis" },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
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
              RESOURCES / GALLERY
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif font-black mb-6 leading-tight tracking-tight text-white max-w-3xl">
            Campus Gallery
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
            A glimpse into life at Arena Web Security Institute of Technology.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="relative group rounded-xl overflow-hidden cursor-pointer aspect-square bg-gray-100"
              onClick={() => setSelectedImg(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4" onClick={() => setSelectedImg(null)}>
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white"
            onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
          >
            <X className="w-8 h-8" />
          </button>
          <img src={selectedImg} className="max-w-full max-h-[90vh] object-contain rounded-md" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}