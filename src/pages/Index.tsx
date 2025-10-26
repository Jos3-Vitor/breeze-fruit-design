import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-fruits.jpg";
import polpaManga from "@/assets/polpa-manga.jpg";
import polpaMorango from "@/assets/polpa-morango.jpg";
import polpaMaracuja from "@/assets/polpa-maracuja.jpg";
import polpaMirtilo from "@/assets/polpa-mirtilo.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  const products = [
    { id: "1", name: "Polpa de Manga", image: polpaManga, weight: "300g", price: "R$ 12,99" },
    { id: "2", name: "Polpa de Morango", image: polpaMorango, weight: "300g", price: "R$ 14,99" },
    { id: "3", name: "Polpa de Maracujá", image: polpaMaracuja, weight: "300g", price: "R$ 11,99" },
    { id: "4", name: "Polpa de Mirtilo", image: polpaMirtilo, weight: "300g", price: "R$ 16,99" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden gradient-hero">
          <div className="container py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight">
                  Polpas 100% fruta,
                  <br />
                  <span className="text-primary">100% frescor</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Saboreie a natureza em cada colherada. Frutas tropicais selecionadas, sem conservantes nem açúcar adicionado.
                </p>
                <div className="flex gap-4">
                  <Link to="/catalog">
                    <Button variant="hero">
                      Experimente o frescor
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative h-[400px] md:h-[500px]">
                <img 
                  src={heroImage} 
                  alt="Frutas frescas"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container py-16">
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Nossas Polpas
              </h2>
              <p className="text-muted-foreground">
                Descubra sabores autênticos e vibrantes
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/catalog">
                <Button variant="outline" size="lg">
                  Ver catálogo completo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Login Section */}
        <section className="bg-gradient-to-br from-secondary/30 to-primary/10 py-16">
          <div className="container">
            <div className="max-w-md mx-auto bg-card rounded-2xl p-8 shadow-lg space-y-6">
              <div className="text-center space-y-2">
                <h2 className="font-heading text-2xl font-bold">
                  Entre para sentir a brisa!
                </h2>
                <p className="text-muted-foreground">
                  Acesse sua conta para aproveitar ofertas exclusivas
                </p>
              </div>
              
              <div className="space-y-4">
                <Input 
                  type="email" 
                  placeholder="nome@exemplo.com"
                  className="h-12"
                />
                <Link to="/auth">
                  <Button variant="default" size="lg" className="w-full">
                    Entrar
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button variant="outline" size="lg" className="w-full">
                    Criar conta
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
