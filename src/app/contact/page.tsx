import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Mail, Instagram, Clock, Globe } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5527992337083";
  const whatsappMessage = encodeURIComponent(
    "Hello Marina, I would like to know more about your availability for sessions."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-brand-gradient-soft">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center animate-slide-up">
              <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-4">
                Contact
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-display mb-6">
                Get in
                <span className="text-secondary"> Touch</span>
              </h1>
              <p className="text-body font-body text-lg leading-relaxed">
                If you have any questions about my approach or would like to 
                discuss your needs, feel free to reach out through any of the 
                channels below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* WhatsApp - Primary CTA */}
              <div className="lg:col-span-3 animate-fade-in">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-primary text-primary-foreground p-10 rounded-3xl text-center hover:shadow-2xl transition-all duration-300 group retro-shadow-pink hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                    <div className="w-20 h-20 bg-secondary/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <MessageCircle className="h-10 w-10" />
                    </div>
                    <h2 className="font-display text-2xl font-bold mb-3">
                      WhatsApp
                    </h2>
                    <p className="text-primary-foreground/80 font-body mb-6">
                      The most direct way to get in touch. I aim to respond within 48 hours.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-display font-semibold group-hover:scale-105 transition-transform">
                      <span>+55 27 99233-7083</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Email */}
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <a
                  href="mailto:marinamcout@gmail.com"
                  className="block h-full"
                >
                  <div className="bg-card border-2 border-border p-8 rounded-2xl text-center hover:border-secondary hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="w-16 h-16 bg-secondary/30 rounded-xl flex items-center justify-center mx-auto mb-5">
                      <Mail className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-display mb-2">
                      Email
                    </h3>
                    <p className="text-body font-body text-sm mb-4 flex-grow">
                      For written communication or formal inquiries.
                    </p>
                    <p className="text-primary font-body font-semibold text-sm">
                      marinamcout@gmail.com
                    </p>
                  </div>
                </a>
              </div>

              {/* Instagram */}
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <a
                  href="https://instagram.com/marinamoscon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="bg-card border-2 border-border p-8 rounded-2xl text-center hover:border-secondary hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="w-16 h-16 bg-secondary/30 rounded-xl flex items-center justify-center mx-auto mb-5">
                      <Instagram className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-display mb-2">
                      Instagram
                    </h3>
                    <p className="text-body font-body text-sm mb-4 flex-grow">
                      Follow for content and reflections.
                    </p>
                    <p className="text-primary font-body font-semibold text-sm">
                      @marinamoscon
                    </p>
                  </div>
                </a>
              </div>

              {/* Availability */}
              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="bg-card border-2 border-border p-8 rounded-2xl text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-secondary/30 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <Globe className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-display mb-2">
                    Sessions
                  </h3>
                  <p className="text-body font-body text-sm mb-4 flex-grow">
                    Online sessions available internationally.
                  </p>
                  <p className="text-primary font-body font-semibold text-sm">
                    Portuguese & English
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-24 bg-section-alt">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6 bg-primary/10 px-4 py-2 rounded-full inline-flex">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-primary font-body text-sm font-semibold">
                  Response within 48 hours
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-display mb-6">
                Initial <span className="text-secondary">Conversation</span>
              </h2>
              <p className="text-body font-body text-lg leading-relaxed">
                An initial conversation allows us to discuss your needs and 
                determine if my approach would be suitable for you. There is 
                no obligation to proceed after this initial contact.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
