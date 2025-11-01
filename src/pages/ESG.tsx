import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, Heart, Users, Recycle, Sun, Droplet } from "lucide-react";

const ESG = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Compromisso ESG
              </h1>
              <p className="text-lg text-muted-foreground">
                Na Breeze Fruit, acreditamos que o negócio sustentável é o único caminho para o futuro. 
                Nosso compromisso com o meio ambiente, responsabilidade social e governança transparente 
                guia cada decisão que tomamos.
              </p>
            </div>
          </div>
        </section>

        {/* Environmental Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-heading font-bold">Ambiental</h2>
              </div>
              
              <div className="space-y-8">
                <div className="border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Sun className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Energia Renovável</h3>
                      <p className="text-muted-foreground">
                        100% de nossa produção é alimentada por energia solar, reduzindo nossa pegada de carbono 
                        e contribuindo para um futuro mais limpo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Recycle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Embalagens Sustentáveis</h3>
                      <p className="text-muted-foreground">
                        Todas as nossas embalagens são 100% recicláveis e produzidas com materiais biodegradáveis. 
                        Priorizamos fornecedores comprometidos com práticas sustentáveis.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Droplet className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Gestão de Recursos Hídricos</h3>
                      <p className="text-muted-foreground">
                        Implementamos sistemas de reuso de água e tecnologias de economia hídrica, 
                        reduzindo o consumo em 60% nos últimos 3 anos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-heading font-bold">Social</h2>
              </div>
              
              <div className="space-y-8">
                <div className="border rounded-lg p-6 bg-background">
                  <div className="flex items-start gap-4">
                    <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Agricultura Familiar</h3>
                      <p className="text-muted-foreground">
                        Trabalhamos diretamente com mais de 150 famílias de pequenos agricultores, 
                        garantindo preços justos e relações de longo prazo. 70% de nossas frutas 
                        vêm da agricultura familiar local.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6 bg-background">
                  <div className="flex items-start gap-4">
                    <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Condições de Trabalho</h3>
                      <p className="text-muted-foreground">
                        Garantimos condições dignas de trabalho para todos os colaboradores, 
                        com salários acima da média do setor, benefícios completos e programas 
                        de desenvolvimento profissional.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6 bg-background">
                  <div className="flex items-start gap-4">
                    <Leaf className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Educação Ambiental</h3>
                      <p className="text-muted-foreground">
                        Promovemos workshops e programas educacionais sobre sustentabilidade 
                        nas comunidades onde atuamos, beneficiando mais de 2.000 pessoas anualmente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governance Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-heading font-bold">Governança</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Transparência e Ética</h3>
                  <p className="text-muted-foreground mb-4">
                    Mantemos os mais altos padrões de ética empresarial, com políticas claras 
                    contra corrupção, conflito de interesses e práticas anticompetitivas.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Código de Conduta rigoroso para todos os colaboradores</li>
                    <li>• Canal de denúncias anônimo e independente</li>
                    <li>• Auditorias externas anuais</li>
                    <li>• Relatórios de sustentabilidade públicos</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Rastreabilidade</h3>
                  <p className="text-muted-foreground">
                    Cada produto Breeze Fruit pode ser rastreado desde a origem até a mesa do consumidor, 
                    garantindo qualidade, segurança e responsabilidade em toda a cadeia produtiva.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">Certificações</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-6 bg-background">
                  <p className="font-semibold">ISO 14001</p>
                  <p className="text-sm text-muted-foreground mt-2">Gestão Ambiental</p>
                </div>
                <div className="border rounded-lg p-6 bg-background">
                  <p className="font-semibold">Orgânico</p>
                  <p className="text-sm text-muted-foreground mt-2">Certificação Europeia</p>
                </div>
                <div className="border rounded-lg p-6 bg-background">
                  <p className="font-semibold">Fair Trade</p>
                  <p className="text-sm text-muted-foreground mt-2">Comércio Justo</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ESG;