import { Link } from "react-router-dom";
import { Search, User, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="Breeze Fruit Logo" 
            className="h-12 w-12 object-contain"
          />
          <span className="font-heading text-xl font-bold">Breeze Fruit</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/catalog" className="text-sm font-medium hover:text-primary transition-colors">
            Catálogo
          </Link>
          <Link to="/favorites" className="text-sm font-medium hover:text-primary transition-colors">
            Favoritos
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contato
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Buscar">
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/profile">
            <Button variant="ghost" size="icon" aria-label="Perfil">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/favorites">
            <Button variant="ghost" size="icon" aria-label="Favoritos">
              <Heart className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon" aria-label="Carrinho">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
