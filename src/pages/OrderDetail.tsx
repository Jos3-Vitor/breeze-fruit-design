import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import polpaMorango from "@/assets/polpa-morango.jpg";
import polpaManga from "@/assets/polpa-manga.jpg";

const OrderDetail = () => {
  const { id } = useParams();
  
  const order = {
    id: id || "1235",
    date: "15 Out 2025",
    status: "delivered",
    statusText: "Entregue",
    trackingCode: "BR1234567899",
    items: [
      { id: "2", name: "Polpa de Morango", image: polpaMorango, weight: "200g", quantity: 1, price: 10.00 },
      { id: "1", name: "Polpa de Manga", image: polpaManga, weight: "300g", quantity: 1, price: 12.00 },
    ],
    subtotal: 22.00,
    shipping: 5.00,
    total: 27.00,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-heading text-4xl font-bold mb-2">
                Pedido #{order.id}
              </h1>
              <p className="text-muted-foreground">Realizado em {order.date}</p>
            </div>
            <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
              {order.statusText}
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <Card className="p-6">
                <h2 className="font-heading text-xl font-semibold mb-4">Itens do pedido</h2>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-4 pb-4 border-b last:border-0 last:pb-0">
                      <div className="w-20 h-20 bg-gradient-to-b from-white to-secondary/10 rounded-lg flex items-center justify-center p-3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.weight}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Quantidade: {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">
                          R$ {item.price.toFixed(2).replace('.', ',')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Link to="/catalog">
                <Button variant="default" size="lg" className="w-full">
                  Comprar novamente
                </Button>
              </Link>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 space-y-4">
                <h3 className="font-heading text-lg font-semibold">Entrega</h3>
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Código de rastreio</p>
                  <p className="text-sm text-muted-foreground font-mono">
                    {order.trackingCode}
                  </p>
                </div>
              </Card>
              
              <Card className="p-6 space-y-4">
                <h3 className="font-heading text-lg font-semibold">Pagamento</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">
                      R$ {order.subtotal.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Frete</span>
                    <span className="font-semibold">
                      R$ {order.shipping.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg pt-3 border-t">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary">
                      R$ {order.total.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderDetail;
