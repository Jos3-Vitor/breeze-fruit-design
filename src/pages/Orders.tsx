import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

const Orders = () => {
  const orders = [
    {
      id: "1235",
      date: "15 Out 2025",
      status: "delivered",
      statusText: "Entregue",
      total: "€ 27,00",
      items: 2,
    },
    {
      id: "1234",
      date: "10 Out 2025",
      status: "shipped",
      statusText: "Enviado",
      total: "€ 42,97",
      items: 3,
    },
    {
      id: "1233",
      date: "05 Out 2025",
      status: "processing",
      statusText: "Em preparo",
      total: "€ 14,99",
      items: 1,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-accent text-accent-foreground";
      case "shipped":
        return "bg-primary text-primary-foreground";
      case "processing":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h1 className="font-heading text-4xl font-bold mb-2">Meus pedidos</h1>
            <p className="text-muted-foreground">
              Acompanhe o status dos seus pedidos
            </p>
          </div>
          
          <div className="space-y-4">
            {orders.map((order) => (
              <Link key={order.id} to={`/orders/${order.id}`}>
                <Card className="p-6 hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-heading text-xl font-semibold">
                          Pedido #{order.id}
                        </h3>
                        <Badge className={getStatusColor(order.status)}>
                          {order.statusText}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span>{order.date}</span>
                        <span>•</span>
                        <span>{order.items} {order.items === 1 ? "item" : "itens"}</span>
                        <span>•</span>
                        <span className="font-semibold text-primary">{order.total}</span>
                      </div>
                    </div>
                    
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Orders;
