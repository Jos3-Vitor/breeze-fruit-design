import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import polpaMorango from "@/assets/polpa-morango.jpg";
import polpaManga from "@/assets/polpa-manga.jpg";
import { toast } from "@/hooks/use-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  
  const cartItems = [
    { id: "2", name: "Polpa de Morango", image: polpaMorango, price: 14.99, weight: "300g", quantity: 2 },
    { id: "1", name: "Polpa de Manga", image: polpaManga, price: 12.99, weight: "300g", quantity: 1 },
  ];
  
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pedido realizado com sucesso! 🍓",
      description: "Você receberá um email de confirmação em breve.",
    });
    setTimeout(() => {
      navigate("/orders");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/10 to-white">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-heading text-4xl font-bold mb-8">Finalizar compra</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card className="p-6 space-y-6">
                  <h2 className="font-heading text-2xl font-semibold">Informações do cliente</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo</Label>
                      <Input id="name" required placeholder="João Silva" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required placeholder="joao@exemplo.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Endereço de entrega</Label>
                    <Input id="address" required placeholder="Rua, número, complemento" />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade</Label>
                      <Input id="city" required placeholder="São Paulo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">Estado</Label>
                      <Input id="state" required placeholder="SP" maxLength={2} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postal">CEP</Label>
                      <Input id="postal" required placeholder="00000-000" />
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 space-y-6">
                  <h2 className="font-heading text-2xl font-semibold">Forma de pagamento</h2>
                  
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-secondary/50">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex-1 cursor-pointer">
                        Cartão de crédito
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-secondary/50">
                      <RadioGroupItem value="debit-card" id="debit-card" />
                      <Label htmlFor="debit-card" className="flex-1 cursor-pointer">
                        Cartão de débito
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-secondary/50">
                      <RadioGroupItem value="pix" id="pix" />
                      <Label htmlFor="pix" className="flex-1 cursor-pointer">
                        PIX
                      </Label>
                    </div>
                  </RadioGroup>
                  
                  {(paymentMethod === "credit-card" || paymentMethod === "debit-card") && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Número do cartão</Label>
                        <Input id="card-number" placeholder="0000 0000 0000 0000" required />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-expiry">Validade</Label>
                          <Input id="card-expiry" placeholder="MM/AA" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="card-cvv">CVV</Label>
                          <Input id="card-cvv" placeholder="123" maxLength={3} required />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 space-y-6 sticky top-24">
                  <h2 className="font-heading text-xl font-semibold">Resumo do pedido</h2>
                  
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="w-16 h-16 bg-gradient-to-b from-white to-secondary/10 rounded-lg flex items-center justify-center p-2">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.weight} × {item.quantity}</p>
                          <p className="text-sm font-bold text-primary">
                            € {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">€ {subtotal.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Frete</span>
                      <span className="font-semibold text-accent">Grátis</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-lg pt-4 border-t">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary text-2xl">
                      € {total.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full" variant="success">
                    Concluir compra
                  </Button>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
