import { Check } from "lucide-react";

const considerations = [
  "People experiencing anxiety, depression, or emotional difficulties",
  "Those who feel disconnected from their body or emotions",
  "Adults interested in the bodily dimension of psychological experience",
  "People seeking a reflective space without prescriptive approaches",
  "Those navigating significant life transitions or challenges",
];

const WhoIsItForSection = () => {
  return (
    <section id="who-is-it-for" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-4">
              Is This For You?
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-display mb-6">
              Who May Benefit From
              <br />
              <span className="text-secondary">This Approach</span>
            </h2>
            <p className="text-body font-body text-lg leading-relaxed max-w-2xl mx-auto">
              Body-oriented psychology may be suitable for adults who are open 
              to exploring their experience through both verbal and bodily awareness.
            </p>
          </div>

          <div className="space-y-4 animate-fade-in">
            {considerations.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-card p-5 rounded-xl border-2 border-border hover:border-secondary transition-colors"
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
              <strong className="text-display">Please note:</strong> Psychological 
              services are not a substitute for medical treatment. If you are 
              experiencing a mental health crisis, please seek immediate professional 
              help or contact emergency services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
