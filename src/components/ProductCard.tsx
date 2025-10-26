import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  weight: string;
  price: string;
}

const ProductCard = ({ id, name, image, weight, price }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-none shadow-sm hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${id}`}>
        <div className="aspect-square bg-gradient-to-b from-white to-secondary/10 flex items-center justify-center p-8 relative overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <button 
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-secondary transition-colors"
            aria-label="Adicionar aos favoritos"
            onClick={(e) => {
              e.preventDefault();
              // Handle favorite
            }}
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </Link>
      
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-heading font-semibold text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground">{weight}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <Button size="default" className="rounded-full">
            Adicionar
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
