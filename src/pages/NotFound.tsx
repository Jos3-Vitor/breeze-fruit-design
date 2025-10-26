import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center gradient-hero">
        <div className="text-center space-y-6 animate-fade-in px-4">
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-primary">404</h1>
          <div className="space-y-2">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold">
              Parece que esta fruta rolou pra longe!
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              A página que você está procurando não existe.
            </p>
          </div>
          <Link to="/">
            <Button variant="hero" size="lg">
              Voltar para a Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
