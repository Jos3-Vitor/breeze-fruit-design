import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import polpaMorango from "@/assets/polpa-morango.jpg";
import polpaManga from "@/assets/polpa-manga.jpg";
import polpaMaracuja from "@/assets/polpa-maracuja.jpg";
import { toast } from "@/hooks/use-toast";

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    { id: "2", name: "Polpa de Morango", image: polpaMorango, price: "R$ 14,99", weight: "300g" },
    { id: "1", name: "Polpa de Manga", image: polpaManga, price: "R$ 12,99", weight: "300g" },
    { id: "3", name: "Polpa de Maracujá", image: polpaMaracuja, price: "R$ 11,99", weight: "300g" },
  ]);

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter(item => item.id !== id));
    toast({
      title: "Removido dos favoritos",
      description: "O produto foi removido da sua lista de favoritos.",
    });
  };

  const addToCart = (name: string) => {
    toast({
      title: "Adicionado ao carrinho",
      description: `${name} foi adicionado ao seu carrinho.`,
    });
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-16 flex items-center justify-center">
          <div className="text-center space-y-6 max-w-md">
            <div className="w-32 h-32 mx-auto bg-secondary/30 rounded-full flex items-center justify-center">
              <Heart className="w-16 h-16 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h2 className="font-heading text-2xl font-bold">
                Sua lista de favoritos está vazia
              </h2>
              <p className="text-muted-foreground">
                Adicione produtos aos favoritos para encontrá-los facilmente depois!
              </p>
            </div>
            <Link to="/catalog">
              <Button size="lg">Explorar produtos</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="space-y-8">
          <div>
            <h1 className="font-heading text-4xl font-bold mb-2">Favoritos</h1>
            <p className="text-muted-foreground">
              {favorites.length} {favorites.length === 1 ? "produto" : "produtos"} na sua lista
            </p>
          </div>
          
          <div className="space-y-4">
            {favorites.map((product) => (
              <Card key={product.id} className="p-4">
                <div className="flex items-center gap-6">
                  <Link to={`/product/${product.id}`}>
                    <div className="w-24 h-24 bg-gradient-to-b from-white to-secondary/10 rounded-lg flex items-center justify-center p-3">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </Link>
                  
                  <div className="flex-1">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-heading text-lg font-semibold hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">{product.weight}</p>
                    <p className="text-xl font-bold text-primary mt-1">{product.price}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Button 
                      variant="success"
                      onClick={() => addToCart(product.name)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Adicionar ao carrinho
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeFavorite(product.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Heart className="h-5 w-5 fill-current" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Favorites;
