import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Minus, Plus, Trash2, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import polpaMorango from "@/assets/polpa-morango.jpg";
import polpaManga from "@/assets/polpa-manga.jpg";
import { toast } from "@/hooks/use-toast";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: "2", name: "Polpa de Morango", image: polpaMorango, price: 14.99, weight: "300g", quantity: 2 },
    { id: "1", name: "Polpa de Manga", image: polpaManga, price: 12.99, weight: "300g", quantity: 1 },
  ]);
  
  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Produto removido",
      description: "O produto foi removido do seu carrinho.",
    });
  };

  const applyCoupon = () => {
    if (couponCode.trim()) {
      toast({
        title: "Cupom inválido",
        description: "O cupom inserido não é válido.",
        variant: "destructive",
      });
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Frete grátis
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-16 flex items-center justify-center">
          <div className="text-center space-y-6 max-w-md">
            <div className="w-32 h-32 mx-auto bg-secondary/30 rounded-full flex items-center justify-center">
              <svg className="w-16 h-16 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="space-y-2">
              <h2 className="font-heading text-2xl font-bold">
                Seu carrinho está vazio
              </h2>
              <p className="text-muted-foreground">
                Adicione produtos ao carrinho para continuar comprando!
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
        <h1 className="font-heading text-4xl font-bold mb-8">Carrinho</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="p-6">
                <div className="flex gap-6">
                  <Link to={`/product/${item.id}`}>
                    <div className="w-24 h-24 bg-gradient-to-b from-white to-secondary/10 rounded-lg flex items-center justify-center p-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </Link>
                  
                  <div className="flex-1">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-heading text-lg font-semibold hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">{item.weight}</p>
                    <p className="text-lg font-bold text-primary mt-2">
                      € {item.price.toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-end justify-between">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    
                    <div className="flex items-center gap-2 border rounded-lg">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 space-y-4">
              <h2 className="font-heading text-xl font-semibold">Resumo do pedido</h2>
              
              <div className="space-y-3 pb-4 border-b">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">€ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Frete</span>
                  <span className="font-semibold text-accent">Grátis</span>
                </div>
              </div>
              
              <div className="flex justify-between text-lg">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-primary">€ {total.toFixed(2).replace('.', ',')}</span>
              </div>
              
              <Link to="/checkout">
                <Button size="lg" className="w-full">
                  Finalizar compra
                </Button>
              </Link>
            </Card>
            
            <Card className="p-6 space-y-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Tag className="h-4 w-4" />
                Cupom de desconto
              </h3>
              <div className="flex gap-2">
                <Input 
                  placeholder="Código do cupom"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <Button variant="outline" onClick={applyCoupon}>
                  Aplicar
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
