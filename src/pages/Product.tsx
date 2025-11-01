import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import polpaManga from "@/assets/polpa-manga.jpg";
import polpaMorango from "@/assets/polpa-morango.jpg";
import polpaMaracuja from "@/assets/polpa-maracuja.jpg";
import polpaMirtilo from "@/assets/polpa-mirtilo.jpg";
import { toast } from "@/hooks/use-toast";

const Product = () => {
  const { id } = useParams();
  const [weight, setWeight] = useState("300g");
  const [isFavorite, setIsFavorite] = useState(false);
  
  const products = {
    "1": { name: "Polpa de Manga", image: polpaManga, price: "€ 12,99", price500: "€ 19,99" },
    "2": { name: "Polpa de Morango", image: polpaMorango, price: "€ 14,99", price500: "€ 22,99" },
    "3": { name: "Polpa de Maracujá", image: polpaMaracuja, price: "€ 11,99", price500: "€ 18,99" },
    "4": { name: "Polpa de Mirtilo", image: polpaMirtilo, price: "€ 16,99", price500: "€ 26,99" },
  };
  
  const product = products[id as keyof typeof products];
  const currentPrice = weight === "500g" ? product?.price500 : product?.price;
  
  const relatedProducts = [
    { id: "1", name: "Polpa de Manga", image: polpaManga, weight: "300g", price: "€ 12,99" },
    { id: "3", name: "Polpa de Maracujá", image: polpaMaracuja, weight: "300g", price: "€ 11,99" },
    { id: "4", name: "Polpa de Mirtilo", image: polpaMirtilo, weight: "300g", price: "€ 16,99" },
  ];

  const handleAddToCart = () => {
    toast({
      title: "Produto adicionado!",
      description: `${product.name} (${weight}) foi adicionado ao carrinho.`,
    });
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removido dos favoritos" : "Adicionado aos favoritos",
      description: `${product.name} ${isFavorite ? "foi removido dos" : "foi adicionado aos"} favoritos.`,
    });
  };

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-primary">Catálogo</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-b from-white to-secondary/10 rounded-2xl flex items-center justify-center p-12 relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-contain"
              />
              <button 
                onClick={toggleFavorite}
                className={`absolute top-6 right-6 p-3 rounded-full shadow-lg transition-all ${
                  isFavorite ? "bg-primary text-primary-foreground" : "bg-white hover:bg-secondary"
                }`}
                aria-label="Adicionar aos favoritos"
              >
                <Heart className={`h-6 w-6 ${isFavorite ? "fill-current" : ""}`} />
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="font-heading text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground">{weight}</p>
            </div>
            
            <div className="text-4xl font-bold text-primary">{currentPrice}</div>
            
            <div className="space-y-3">
              <label className="text-sm font-medium">Peso</label>
              <Select value={weight} onValueChange={setWeight}>
                <SelectTrigger className="w-full h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="300g">300g</SelectItem>
                  <SelectItem value="500g">500g</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              size="lg" 
              className="w-full" 
              onClick={handleAddToCart}
            >
              Adicionar ao carrinho
            </Button>
            
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="description" className="flex-1">Descrição</TabsTrigger>
                <TabsTrigger value="nutrition" className="flex-1">Informações Nutricionais</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Saboreie o doce e suculento frescor da nossa polpa de {product.name.toLowerCase()}, 
                  feita apenas com frutas 100% frescas e maduras. Sem adição de açúcar, 
                  sem conservantes – apenas o puro sabor da fruta.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ 100% fruta natural</li>
                  <li>✓ Sem conservantes</li>
                  <li>✓ Sem açúcar adicionado</li>
                  <li>✓ Sabor autêntico</li>
                </ul>
              </TabsContent>
              <TabsContent value="nutrition" className="space-y-3">
                <div className="bg-secondary/30 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Valor energético</span>
                    <span>35 kcal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Carboidratos</span>
                    <span>8 g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Açúcares</span>
                    <span>5 g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Fibras alimentares</span>
                    <span>2 g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Proteínas</span>
                    <span>0,5 g</span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <section className="space-y-6">
          <h2 className="font-heading text-3xl font-bold">Você também pode gostar</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Product;
