import marinaPortrait from "@/assets/marina-portrait.jpg";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="pt-24 pb-5 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/30 rounded-3xl -rotate-3" />
                <Image 
                  src='/about-me-marina-moscon.jpeg' 
                  width={959}
                  height={1280}
                  alt="Marina Moscon, Licensed Psychologist"
                  className="relative w-72 h-80 md:w-80 md:h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-4">
                Sobre mim
              </p>
              
              <h2 className="font-display text-4xl md:text-5xl font-bold text-display mb-6">
                Olá,sou
                <span className="text-secondary"> Marina Moscon</span>
              </h2>
              
              <p className="text-body font-body text-lg leading-relaxed mb-6">
              Sou psicóloga clínica registrada no Conselho Regional de Psicologia (CRP 16/8885). Meu trabalho é fundamentado na Psicologia Corporal, uma abordagem que integra a psicoterapia verbal à atenção minuciosa com a experiência viva do corpo.
              </p>
              
              <p className="text-body font-body text-lg leading-relaxed mb-6">
                Ofereço um espaço terapêutico baseado no respeito absoluto, no sigilo e na ética profissional.
              </p>

              <p className="text-body font-body text-lg leading-relaxed mb-8">
                O ritmo, os limites e as necessidades de cada indivíduo, seja uma criança, um jovem ou um adulto, são a base de todo o caminho que construímos juntos.
              </p>

              {/* 
              <div className="inline-flex items-center gap-3 bg-card px-6 py-4 rounded-full border-2 border-border">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-body text-body text-sm">
                  Languages: English & Portuguese  
                </span>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
