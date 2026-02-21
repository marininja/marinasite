import { Eye, Waypoints, HandHeart } from "lucide-react";

const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 bg-section-alt">
      <div className="container items-center mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-4">
              My Approach
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-display mb-6">
              Body-Oriented
              <span className="text-secondary"> Psychology</span>
            </h2>
          </div>
          
          <div className="space-y-8 animate-fade-in">
            <p className="text-body font-body text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Body-oriented psychology is a therapeutic approach that integrates 
              verbal psychotherapy with attention to the body. Rather than focusing 
              solely on thoughts and emotions through conversation, this approach 
              invites awareness of bodily sensations, posture, breath, and physical 
              experience as part of the therapeutic process.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-card p-8 rounded-2xl border-2 border-border text-center">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-display mb-3">
                  Awareness
                </h3>
                <p className="font-body text-body text-sm leading-relaxed">
                  Developing awareness of how experiences are held and expressed 
                  in the body.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-2xl border-2 border-border text-center">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waypoints className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-display mb-3">
                  Integration
                </h3>
                <p className="font-body text-body text-sm leading-relaxed">
                  Connecting verbal exploration with bodily experience at your 
                  own pace.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-2xl border-2 border-border text-center">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-display mb-3">
                  Respect
                </h3>
                <p className="font-body text-body text-sm leading-relaxed">
                  Always respecting your boundaries and individual rhythm 
                  throughout the process.
                </p>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-2xl border-2 border-primary/20 mt-12">
              <p className="text-body font-body text-base leading-relaxed text-center italic">
                "The invitation is to reconnect with the body—this body that 
                accompanies you throughout your life. In a world that often 
                disconnects us from ourselves, reconnecting with the body can 
                be a way to feel present and alive."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
