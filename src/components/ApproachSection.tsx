import { Eye, Waypoints, HandHeart } from "lucide-react";

const ApproachSection = () => {
  return (
    <section id="approach" className="pt-24 pb-5 bg-section-alt">
      <div className="container items-center mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 animate-slide-up">
            <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-4">
              Psicologia Corporal Clínica
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-display mb-6">
              Como 
              <span className="text-secondary"> funciona?</span>
            </h2>
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <p className="text-body font-body text-lg leading-relaxed text-center justify-center max-w-4xl mx-auto">
              A nossa mente e o nosso corpo não funcionam separados. Tensões físicas, ansiedade e bloqueios emocionais andam de mãos dadas. 
              No consultório, utilizamos uma abordagem que acolhe a expressão genuína de cada paciente.
              Seja através do brincar e do movimento com as crianças, seja na escuta atenta e percepção corporal com os adultos, o objetivo é construir caminhos saudáveis para lidar com os desafios da vida.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-card p-8 rounded-2xl border-2 border-border text-center">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-display mb-3">
                  Consciência
                </h3>
                <p className="font-body text-body text-sm leading-relaxed">
                  Desenvolver a consciência de como as experiências são armazenadas e expressas no corpo.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-2xl border-2 border-border text-center">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waypoints className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-display mb-3">
                  Integração
                </h3>
                <p className="font-body text-body text-sm leading-relaxed">
                  Conectar a linguagem através da fala com a experiência corporal.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-2xl border-2 border-border text-center">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-display mb-3">
                  Respeito
                </h3>
                <p className="font-body text-body text-sm leading-relaxed">
                  Respeitando sempre os seus limites e o seu ritmo individual ao longo de todo o processo
                </p>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-2xl border-2 border-primary/20 mt-12">
              <p className="text-body font-body text-base leading-relaxed text-center italic">
                "O convite é para se reconectar com o corpo, este corpo que acompanha você ao longo de toda a sua vida. Em um mundo que frequentemente nos desconecta de nós mesmos, reconectar-se com o corpo pode ser um caminho para se sentir presente e vivo."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
