import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="h-8 w-8 text-primary" />
                <h1 className="text-4xl font-heading font-bold">Termos de Uso</h1>
              </div>
              
              <p className="text-muted-foreground mb-8">
                Última atualização: Janeiro de 2025
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
                  <p className="text-muted-foreground">
                    Ao acessar e usar o site da Breeze Fruit, você concorda em cumprir estes 
                    termos de uso. Se você não concordar com qualquer parte destes termos, 
                    não deve usar nosso site ou serviços.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Produtos e Preços</h2>
                  <p className="text-muted-foreground mb-4">
                    Nos esforçamos para fornecer informações precisas sobre nossos produtos:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Os preços estão sujeitos a alterações sem aviso prévio</li>
                    <li>Reservamo-nos o direito de limitar quantidades</li>
                    <li>As imagens são ilustrativas</li>
                    <li>Produtos podem variar devido à natureza orgânica</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. Pedidos e Pagamento</h2>
                  <p className="text-muted-foreground mb-4">
                    Ao realizar um pedido:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Você declara ter capacidade legal para efetuar a compra</li>
                    <li>As informações fornecidas são verdadeiras e precisas</li>
                    <li>O pagamento será processado após a confirmação do pedido</li>
                    <li>Reservamo-nos o direito de recusar ou cancelar pedidos</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Entrega</h2>
                  <p className="text-muted-foreground">
                    Prazos de entrega são estimativas e podem variar. A Breeze Fruit não se 
                    responsabiliza por atrasos causados por transportadoras ou circunstâncias 
                    fora de nosso controle. Produtos perecíveis devem ser recebidos pessoalmente.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Trocas e Devoluções</h2>
                  <p className="text-muted-foreground mb-4">
                    Devido à natureza perecível dos produtos:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Aceitamos devoluções apenas em caso de produtos danificados ou defeituosos</li>
                    <li>Notifique-nos em até 24 horas após o recebimento</li>
                    <li>Fotografias do produto podem ser solicitadas</li>
                    <li>Reembolsos serão processados em até 10 dias úteis</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. Propriedade Intelectual</h2>
                  <p className="text-muted-foreground">
                    Todo o conteúdo do site (textos, imagens, logotipos, marcas) é propriedade 
                    da Breeze Fruit e protegido por leis de propriedade intelectual. O uso não 
                    autorizado é proibido.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">7. Limitação de Responsabilidade</h2>
                  <p className="text-muted-foreground">
                    A Breeze Fruit não se responsabiliza por danos indiretos, incidentais ou 
                    consequenciais decorrentes do uso de nossos produtos ou serviços. Nossa 
                    responsabilidade está limitada ao valor pago pelo produto.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">8. Modificações</h2>
                  <p className="text-muted-foreground">
                    Reservamos o direito de modificar estes termos a qualquer momento. 
                    Alterações entram em vigor imediatamente após publicação no site. 
                    É sua responsabilidade revisar os termos periodicamente.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">9. Lei Aplicável</h2>
                  <p className="text-muted-foreground">
                    Estes termos são regidos pelas leis da União Europeia. Quaisquer disputas 
                    serão resolvidas nos tribunais competentes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">10. Contato</h2>
                  <p className="text-muted-foreground">
                    Para dúvidas sobre estes termos, entre em contato através do nosso{" "}
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

export default Terms;