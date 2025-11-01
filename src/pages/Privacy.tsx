import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Shield className="h-8 w-8 text-primary" />
                <h1 className="text-4xl font-heading font-bold">Política de Privacidade</h1>
              </div>
              
              <p className="text-muted-foreground mb-8">
                Última atualização: Janeiro de 2025
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Informações que Coletamos</h2>
                  <p className="text-muted-foreground mb-4">
                    A Breeze Fruit coleta informações necessárias para processar seus pedidos e 
                    melhorar sua experiência de compra:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Dados de identificação (nome, email, telefone)</li>
                    <li>Endereço de entrega e faturamento</li>
                    <li>Informações de pagamento (processadas de forma segura)</li>
                    <li>Histórico de compras e preferências</li>
                    <li>Dados de navegação e cookies</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Como Usamos Suas Informações</h2>
                  <p className="text-muted-foreground mb-4">
                    Utilizamos seus dados para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Processar e entregar seus pedidos</li>
                    <li>Comunicar sobre o status do pedido</li>
                    <li>Melhorar nossos produtos e serviços</li>
                    <li>Enviar ofertas e promoções (com seu consentimento)</li>
                    <li>Prevenir fraudes e garantir segurança</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. Compartilhamento de Dados</h2>
                  <p className="text-muted-foreground">
                    Não vendemos suas informações pessoais. Compartilhamos dados apenas com:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                    <li>Processadores de pagamento seguros</li>
                    <li>Empresas de logística para entrega</li>
                    <li>Prestadores de serviços essenciais (suporte técnico, marketing)</li>
                    <li>Autoridades legais quando exigido por lei</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Seus Direitos</h2>
                  <p className="text-muted-foreground mb-4">
                    Você tem direito a:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Acessar seus dados pessoais</li>
                    <li>Corrigir informações incorretas</li>
                    <li>Solicitar exclusão de seus dados</li>
                    <li>Revogar consentimento</li>
                    <li>Exportar seus dados</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Segurança</h2>
                  <p className="text-muted-foreground">
                    Implementamos medidas técnicas e organizacionais para proteger suas informações, 
                    incluindo criptografia SSL, armazenamento seguro e controle de acesso rigoroso.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
                  <p className="text-muted-foreground">
                    Utilizamos cookies para melhorar sua experiência, lembrar preferências e 
                    analisar o uso do site. Você pode gerenciar cookies nas configurações do navegador.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">7. Contato</h2>
                  <p className="text-muted-foreground">
                    Para questões sobre privacidade, entre em contato através do nosso{" "}
                    <a href="/contact" className="text-primary hover:underline">
                      formulário de contato
                    </a>.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;