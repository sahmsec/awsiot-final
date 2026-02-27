import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    title: "Academics",
    items: [
      { label: "Diploma in Cybersecurity", href: "/courses/diploma" },
      { label: "Short Course", href: "/courses/short-course" },
      {
        label: "Download Module",
        href: "https://drive.google.com/uc?export=download&id=1zUvuT2YHsbMWECLM0eCmvTh3nMh1GM2g",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Gallery", href: "/gallery" },
      { label: "Library", href: "/library" },
    ],
  },
  { label: "Admissions", href: "/apply" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavItem = (item: any, isMobile = false) => {
    const baseClass = isMobile
      ? "block px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
      : "block px-4 py-2.5 text-[15px] text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors";

    if (item.href.startsWith("http")) {
      return (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
        >
          {item.label}
        </a>
      );
    }

    return (
      <Link key={item.href} href={item.href} className={baseClass}>
        {item.label}
      </Link>
    );
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-3" : "bg-white py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <img
            src="/assets/logo.png"
            alt="Arena Web Security Logo"
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-gray-900 text-xl leading-tight tracking-wide">
              Arena Web Security
            </span>
            <span className="text-primary text-[0.65rem] font-bold uppercase tracking-widest">
              Institute of Technology
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
          {NAVIGATION.map((navItem) => {
            if ("items" in navItem) {
              return (
                <div
                  key={navItem.title}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(navItem.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={cn(
                      "px-3 py-2 rounded-md text-[15px] font-medium flex items-center space-x-1 transition-all",
                      activeDropdown === navItem.title
                        ? "text-primary bg-gray-50"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    )}
                  >
                    <span>{navItem.title}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeDropdown === navItem.title
                          ? "rotate-180 text-primary"
                          : "text-gray-400"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === navItem.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden py-1"
                      >
                        {navItem.items.map((item) =>
                          renderNavItem(item, false)
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={navItem.label}
                href={navItem.href}
                className={cn(
                  "px-3 py-2 rounded-md text-[15px] font-medium transition-all",
                  location === navItem.href
                    ? "text-primary bg-gray-50"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                )}
              >
                {navItem.label}
              </Link>
            );
          })}
        </nav>

        {/* Apply Now Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <Link
            href="/apply"
            className="px-6 py-2.5 bg-primary text-white font-bold rounded-full hover:bg-red-700 transition-colors text-[15px] shadow-lg shadow-primary/20"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-600 hover:text-primary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col space-y-1">
              {NAVIGATION.map((navItem) => {
                if ("items" in navItem) {
                  return (
                    <div key={navItem.title} className="py-2">
                      <div className="text-gray-400 text-[11px] font-bold uppercase tracking-wider px-3 mb-1">
                        {navItem.title}
                      </div>
                      {navItem.items.map((item) =>
                        renderNavItem(item, true)
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={navItem.label}
                    href={navItem.href}
                    className="px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                  >
                    {navItem.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}