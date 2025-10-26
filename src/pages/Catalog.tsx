import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import polpaManga from "@/assets/polpa-manga.jpg";
import polpaMorango from "@/assets/polpa-morango.jpg";
import polpaMaracuja from "@/assets/polpa-maracuja.jpg";
import polpaMirtilo from "@/assets/polpa-mirtilo.jpg";

const Catalog = () => {
  const [sortBy, setSortBy] = useState("relevance");
  
  const products = [
    { id: "1", name: "Polpa de Manga", image: polpaManga, weight: "300g", price: "R$ 12,99" },
    { id: "2", name: "Polpa de Morango", image: polpaMorango, weight: "300g", price: "R$ 14,99" },
    { id: "3", name: "Polpa de Maracujá", image: polpaMaracuja, weight: "300g", price: "R$ 11,99" },
    { id: "4", name: "Polpa de Mirtilo", image: polpaMirtilo, weight: "300g", price: "R$ 16,99" },
    { id: "5", name: "Polpa de Manga", image: polpaManga, weight: "500g", price: "R$ 19,99" },
    { id: "6", name: "Polpa de Morango", image: polpaMorango, weight: "500g", price: "R$ 22,99" },
    { id: "7", name: "Polpa de Maracujá", image: polpaMaracuja, weight: "500g", price: "R$ 18,99" },
    { id: "8", name: "Polpa de Mirtilo", image: polpaMirtilo, weight: "500g", price: "R$ 26,99" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="font-heading text-4xl font-bold">Nossas Polpas</h1>
            
            <div className="flex flex-wrap items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Sabores" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os sabores</SelectItem>
                  <SelectItem value="manga">Manga</SelectItem>
                  <SelectItem value="morango">Morango</SelectItem>
                  <SelectItem value="maracuja">Maracujá</SelectItem>
                  <SelectItem value="mirtilo">Mirtilo</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Peso" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os pesos</SelectItem>
                  <SelectItem value="300g">300g</SelectItem>
                  <SelectItem value="500g">500g</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevância</SelectItem>
                  <SelectItem value="price-asc">Menor preço</SelectItem>
                  <SelectItem value="price-desc">Maior preço</SelectItem>
                  <SelectItem value="name">Nome</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;
