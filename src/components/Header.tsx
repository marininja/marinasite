"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoHorizontal from "@/assets/logo-horizontal.png";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = usePathname();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Approach", path: "/#approach" },
    { label: "Who This Is For", path: "/#who-is-it-for" },
    { label: "Sessions", path: "/#sessions" },
    { label: "About Me", path: "/#about" },
    { label: "Contact", path: "/contact" },
  ];

  const scrollToSection = (path: string) => {
    if (path.startsWith("/#")) {
      const sectionId = path.replace("/#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80; // Account for fixed header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto max-w-8x1 px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src={logoHorizontal} 
              alt="Marina Moscon - Psychologist" 
              className="h-50 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path.startsWith("/#") ? "/" : item.path}
                onClick={() => item.path.startsWith("/#") && scrollToSection(item.path)}
                className={`font-body text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                  location === item.path
                    ? "text-primary"
                    : "text-body"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button size="sm" className="ml-4 rounded-full font-display font-semibold">
                Check Availability
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path.startsWith("/#") ? "/" : item.path}
                  onClick={() => {
                    if (item.path.startsWith("/#")) {
                      scrollToSection(item.path);
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                  className={`font-body text-lg font-medium tracking-wide transition-colors hover:text-primary ${
                    location === item.path
                      ? "text-primary"
                      : "text-body"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full mt-4 rounded-full font-display font-semibold">
                  Check Availability
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
