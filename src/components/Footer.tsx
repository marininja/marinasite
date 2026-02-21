import  Link  from "next/link";
import  Image  from "next/image";
import { Instagram, Mail, Phone } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image 
              src={logoHorizontal} 
              alt="Marina Moscon - Psychologist" 
              className="h-12 w-auto object-contain mb-4 brightness-0 invert opacity-90"
            />
            <p className="text-primary-foreground/70 text-sm font-body leading-relaxed">
              Body-Oriented Psychology
              <br />
              Online sessions for adults
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-primary-foreground/80 hover:text-secondary transition-colors font-body text-sm"
              >
                Home
              </Link>
              <Link
                href="/#approach"
                className="text-primary-foreground/80 hover:text-secondary transition-colors font-body text-sm"
              >
                Approach
              </Link>
              <Link
                href="/#sessions"
                className="text-primary-foreground/80 hover:text-secondary transition-colors font-body text-sm"
              >
                Sessions
              </Link>
              <Link
                href="/contact"
                className="text-primary-foreground/80 hover:text-secondary transition-colors font-body text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:marinamcout@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors font-body text-sm"
              >
                <Mail className="h-4 w-4" />
                marinamcout@gmail.com
              </a>
              <a
                href="https://wa.me/5527992337083"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors font-body text-sm"
              >
                <Phone className="h-4 w-4" />
                +55 27 99233-7083
              </a>
              <a
                href="https://instagram.com/marinamoscon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors font-body text-sm"
              >
                <Instagram className="h-4 w-4" />
                @marinamoscon
              </a>
            </div>
          </div>
        </div>

        {/* Professional Credentials */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="text-center mb-6">
            <p className="text-primary-foreground font-display font-semibold text-sm mb-2">
              Marina Moscon · CRP 16/8885
            </p>
            <p className="text-primary-foreground/70 text-xs font-body">
              Licensed Psychologist (Brazil) · Body-Oriented Psychology
            </p>
          </div>
          
          {/* Ethical Disclaimer */}
          <div className="bg-primary-foreground/10 p-6 rounded-xl mb-8">
            <p className="text-primary-foreground/80 text-xs font-body leading-relaxed text-center max-w-3xl mx-auto">
              <strong>Disclaimer:</strong> Psychological services are provided in accordance 
              with professional ethical guidelines. Confidentiality, professional boundaries, 
              and responsible practice are central to my work. Online therapy is not a substitute 
              for emergency mental health services. If you are experiencing a crisis, please 
              contact local emergency services or a crisis helpline.
            </p>
          </div>

          <p className="text-primary-foreground/60 text-xs font-body text-center">
            © {new Date().getFullYear()} Marina Moscon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
