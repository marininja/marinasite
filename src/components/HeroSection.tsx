"use client";
import Link  from "next/link";
import Image from "next/image";
import heroImage from "@/assets/hero-therapy-objects.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center bg-brand-gradient-soft relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-32 left-10 w-3 h-3 bg-secondary rounded-full opacity-40" />
      <div className="absolute bottom-32 right-20 w-4 h-4 bg-primary rounded-full opacity-20" />
      
      <div className="container mx-auto px-6 lg:px-12 padding-0.8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-slide-up">
            <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-4">
              Body-Oriented Psychology
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-display leading-[1] mb-6">
              Online Psychological
              <br />
              <span className="text-secondary">Sessions for Adults</span>
            </h1>
            <p className="text-body font-body text-lg leading-relaxed mb-8 max-w-lg">
              A space for reflection and self-awareness. Through body-oriented 
              psychotherapy, I offer a grounded approach that integrates verbal 
              exploration with attention to bodily experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-semibold text-base hover:brightness-110 active:brightness-95 transition-all">
                  Check Availability
                </button>
              </Link>
              <button 
                onClick={() => {
                  const el = document.getElementById('approach');
                  if (el) {
                    const offset = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                  }
                }}
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-display font-semibold text-base hover:bg-primary/5 transition-colors"
              >
                Learn More
              </button>
            </div>
            
            {/* Credentials Badge */}
            <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-full border-2 border-border">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="font-body text-body text-sm">
                CRP 16/8885 · Licensed Psychologist (Brazil)
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative flex justify-center">
              <Image
                src={heroImage}
                alt="Body-oriented psychology therapy objects - stool, pilates ball, and glass marbles"
                className="w-full max-w-sm mx-auto lg:max-w-md object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
