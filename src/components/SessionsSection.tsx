import { Video, Clock, Globe, User } from "lucide-react";

const sessionDetails = [
  {
    icon: Video,
    title: "Sessões online",
    description: "Realizadas via Google Meet, proporcionando flexibilidade e segurança para adultos que preferem o atendimento remoto.",
  },
  {
    icon: Clock,
    title: "Duração",
    description: "Cada sessão tem a duração aproximada de 50 minutos.",
  },
  {
    icon: User,
    title: "Sessões presenciais",
    description: "Realizadas em consultório estruturado em Vitória/ES, oferecendo um ambiente seguro, acolhedor e dinâmico, ideal para o trabalho corporal e lúdico",
  },
  {
    icon: Globe,
    title: "Disponível em Vitória, ou online",
    description: "Atendimento para crianças e adolescentes de forma presencial e adultos de forma online e presencial.",
  },
];

const SessionsSection = () => {
  return (
    <section id="sessions" className="pt-24 pb-5 bg-section-alt">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-4">
              Sessões
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-display mb-6">
              Como as sessões 
              <span className="text-secondary"> funcionam?</span>
            </h2>
            <p className="text-body font-body text-lg leading-relaxed max-w-2xl mx-auto">
              Os processos terapêuticos são desenhados respeitando a individualidade e o momento de cada cliente, oferecidos em dois formatos:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in">
            {sessionDetails.map((detail, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl border-2 border-border"
              >
                <div className="w-14 h-14 bg-secondary/30 rounded-xl flex items-center justify-center mb-5">
                  <detail.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-display mb-3">
                  {detail.title}
                </h3>
                <p className="font-body text-body text-sm leading-relaxed">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionsSection;
