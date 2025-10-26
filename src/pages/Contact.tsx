import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="font-heading text-4xl font-bold">Fale Conosco</h1>
            <p className="text-lg text-muted-foreground">
              Tem alguma dúvida ou precisa de ajuda? Preencha o formulário e entraremos em contato o mais breve possível.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <form className="space-y-4 bg-card p-6 rounded-2xl shadow-sm">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input 
                    id="name"
                    placeholder="Seu nome completo"
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input 
                    id="subject"
                    placeholder="Qual é o assunto?"
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea 
                    id="message"
                    placeholder="Escreva sua mensagem aqui..."
                    className="min-h-[150px] resize-none"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full" variant="success">
                  Enviar mensagem
                </Button>
              </form>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-2xl shadow-sm space-y-4">
                <h3 className="font-heading text-xl font-semibold">Outras formas de contato</h3>
                
                <a 
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border rounded-lg hover:bg-secondary transition-colors"
                >
                  <div className="h-12 w-12 bg-accent rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Fale conosco agora</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:contato@breezefruit.com"
                  className="flex items-center gap-4 p-4 border rounded-lg hover:bg-secondary transition-colors"
                >
                  <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">contato@breezefruit.com</p>
                  </div>
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-secondary/30 to-primary/10 p-6 rounded-2xl">
                <h3 className="font-heading text-xl font-semibold mb-2">Horário de atendimento</h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 9h às 18h<br />
                  Sábado: 9h às 13h
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
