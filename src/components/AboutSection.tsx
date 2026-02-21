import marinaPortrait from "@/assets/marina-portrait.jpg";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/30 rounded-3xl -rotate-3" />
                <Image 
                  src={marinaPortrait} 
                  alt="Marina Moscon, Licensed Psychologist" 
                  className="relative w-72 h-80 md:w-80 md:h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-4">
                About Me
              </p>
              
              <h2 className="font-display text-4xl md:text-5xl font-bold text-display mb-6">
                Hello, I'm
                <span className="text-secondary"> Marina</span>
              </h2>
              
              <p className="text-body font-body text-lg leading-relaxed mb-6">
                I am a licensed psychologist registered with the Regional Council 
                of Psychology (CRP 16/8885) in Brazil. My work is grounded in 
                body-oriented psychology, an approach that integrates verbal 
                psychotherapy with attention to bodily experience.
              </p>
              
              <p className="text-body font-body text-lg leading-relaxed mb-6">
                I offer online sessions for adults in Portuguese and English. 
                My practice is available internationally.
              </p>

              <p className="text-body font-body text-lg leading-relaxed mb-8">
                The therapeutic space I offer is one of respect, confidentiality, 
                and professional ethics. Each person's rhythm and boundaries are 
                central to the work we do together.
              </p>

              <div className="inline-flex items-center gap-3 bg-card px-6 py-4 rounded-full border-2 border-border">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-body text-body text-sm">
                  Languages: Portuguese & English
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
