import { Check } from "lucide-react";

const considerations = [
  "Crianças com dificuldades de regulação emocional: Ansiedade, irritabilidade, agressividade ou timidez excessiva.",
  "Adolescentes que enfrentam insegurança, pressões escolares, crises de identidade, ansiedade ou sentimentos de desconexão com o próprio corpo.",
  "Pessoas que enfrentam estresse, ansiedade, depressão ou sobrecarga emocional.",
  "Quem sente uma desconexão entre a mente e as emoções, ou carrega tensões físicas crônicas.",
  "Pessoas que buscam um espaço seguro de reflexão e autoconhecimento.",
];

const WhoIsItForSection = () => {
  return (
    <section id="who-is-it-for" className="pt-24 pb-5 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-4">
              Isso é pra você?
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-display mb-6">
              A quem se destina
              <br />
              <span className="text-secondary">a psicologia corporal</span>
            </h2>
            <p className="text-body font-body text-lg leading-relaxed max-w-2xl mx-auto">
              A abordagem corporal integra a expressão verbal com a percepção do corpo. É um caminho profundo e gentil, especialmente benéfico para:
            </p>
          </div>

          <div className="space-y-4 animate-fade-in items-center">
            {considerations.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-card p-5 rounded-xl border-2 border-border hover:border-secondary transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-secondary/30 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="font-body text-body text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-section-alt rounded-2xl border-2 border-border">
            <p className="text-body font-body text-sm leading-relaxed text-center">
              <strong className="text-display">Aviso importante: </strong> Este site não oferece atendimento imediato a pessoas em crise suicida. Em caso de crise ligue para o CVV - 188
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
