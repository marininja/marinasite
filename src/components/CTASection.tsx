import  Link  from "next/link";

const CTASection = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-secondary rounded-full opacity-30" />
      <div className="absolute bottom-10 right-10 w-3 h-3 bg-secondary rounded-full opacity-40" />
      
      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <p className="text-primary-foreground/80 font-body text-sm font-medium tracking-widest uppercase mb-4">
          Get in Touch
        </p>
        
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-slide-up">
          If You Have Any Questions,
          <br />
          <span className="text-secondary">Feel Free to Reach Out</span>
        </h2>
        <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto mb-10 animate-fade-in">
          Whether you'd like to know more about my approach or discuss your needs, 
          I'm available for an initial conversation.
        </p>
        <Link href="/contact">
          <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-display font-semibold text-base hover:brightness-95 active:brightness-90 transition-all">
            Start a Conversation
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
