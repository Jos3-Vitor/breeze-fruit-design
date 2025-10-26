import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card mt-16">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <svg className="h-6 w-6 text-primary-foreground" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 2 L12 22 M2 12 L22 12 M6 6 L18 18 M6 18 L18 6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <p className="font-heading font-bold">Breeze Fruit</p>
              <p className="text-sm text-muted-foreground">Polpas 100% fruta, 100% frescor</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Breeze Fruit. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
