import { Video, Clock, Globe, User } from "lucide-react";

const sessionDetails = [
  {
    icon: Video,
    title: "Online Sessions",
    description: "Sessions are conducted via Google Meet, providing a secure and accessible format.",
  },
  {
    icon: Clock,
    title: "Duration",
    description: "Each session lasts approximately 50 minutes.",
  },
  {
    icon: User,
    title: "Individual Sessions",
    description: "One-on-one sessions focused on your personal experience and needs.",
  },
  {
    icon: Globe,
    title: "Available Worldwide",
    description: "Sessions are offered in Portuguese and English, available internationally.",
  },
];

const SessionsSection = () => {
  return (
    <section id="sessions" className="py-24 bg-section-alt">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-4">
              Sessions
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-display mb-6">
              How Sessions
              <span className="text-secondary"> Work</span>
            </h2>
            <p className="text-body font-body text-lg leading-relaxed max-w-2xl mx-auto">
              Online sessions offer flexibility while maintaining a professional 
              and confidential therapeutic setting.
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
