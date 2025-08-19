"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Brain, Heart, Zap, Users, CheckCircle, Award, BookOpen } from "lucide-react"

export default function MenopausaLanding() {
  const checkoutUrl = "https://pay.cakto.com.br/3992hmw_531473"
  const [vagasRestantes, setVagasRestantes] = useState(47)

  const handleCheckout = () => {
    window.open(checkoutUrl, "_blank")
  }

  useEffect(() => {
    const vagasTimer = setInterval(() => {
      setVagasRestantes((prev) => {
        if (prev > 15) {
          // Diminui vagas aleatoriamente entre 1-3 a cada 30-60 segundos
          const shouldDecrease = Math.random() < 0.1 // 10% de chance a cada segundo
          if (shouldDecrease) {
            const decrease = Math.floor(Math.random() * 3) + 1
            return Math.max(15, prev - decrease)
          }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(vagasTimer)
  }, [])

  useEffect(() => {
    // Carregar script principal da Wistia
    const script1 = document.createElement("script")
    script1.src = "https://fast.wistia.com/player.js"
    script1.async = true
    document.head.appendChild(script1)

    // Carregar script específico do vídeo
    const script2 = document.createElement("script")
    script2.src = "https://fast.wistia.com/embed/djq84v9yue.js"
    script2.async = true
    script2.type = "module"
    document.head.appendChild(script2)

    // Adicionar estilos CSS para o player
    const style = document.createElement("style")
    style.textContent = `
      wistia-player[media-id='djq84v9yue']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/djq84v9yue/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top: 56.25%; 
      }
    `
    document.head.appendChild(style)

    return () => {
      // Cleanup
      if (document.head.contains(script1)) document.head.removeChild(script1)
      if (document.head.contains(script2)) document.head.removeChild(script2)
      if (document.head.contains(style)) document.head.removeChild(style)
    }
  }, [])

  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      <div>
        <section className="bg-gradient-to-b from-muted to-background py-6 px-3 md:py-12 md:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl text-primary mb-3 md:mb-6 font-[family-name:var(--font-space-grotesk)] leading-tight px-1">
              Por Que Você Esquece Palavras Básicas e Explode de Raiva: A Descoberta Científica Que Está Salvando
              Casamentos (E Como Reverter em 21 Dias)
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground mb-4 md:mb-8 font-semibold leading-relaxed px-1">
              Se você acorda às 3h pensando 'será que eu tô ficando louca?', não é hormônio - é seu cérebro pedindo
              socorro
            </h2>

            <div className="mb-4 md:mb-8 max-w-3xl mx-auto px-1">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  borderRadius: "8px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                }}
              >
                <wistia-player
                  media-id="djq84v9yue"
                  aspect="1.7777777777777777"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>

            <div className="mb-6 md:mb-8 max-w-2xl mx-auto px-1">
              <img
                src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/prova-1.png"
                alt="Prova de resultados do método"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-card p-3 md:p-6 rounded-lg shadow-lg mb-4 md:mb-8 mx-1">
              <p className="text-sm md:text-lg mb-2 md:mb-4 leading-relaxed">
                A neurocientista Lisa Mosconi descobriu que o cérebro feminino precisa de 3 combustíveis específicos
                para funcionar após os 45 anos.
              </p>
            </div>

            <div className="flex justify-center gap-1 mb-4 md:mb-8 flex-wrap px-1">
              <Badge className="bg-green-500 text-white text-xs md:text-sm px-2 py-1">
                ✅ Combustível 1: Estrogênio Cerebral
              </Badge>
              <Badge className="bg-green-500 text-white text-xs md:text-sm px-2 py-1">
                ✅ Combustível 2: Glicose Neural
              </Badge>
              <Badge className="bg-green-500 text-white text-xs md:text-sm px-2 py-1">
                ✅ Combustível 3: Neurotransmissores
              </Badge>
              <Badge className="bg-green-500 text-white text-xs md:text-sm px-2 py-1">✅ Resultados em 21 Dias</Badge>
            </div>

            <Button
              onClick={handleCheckout}
              size="lg"
              className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base md:text-xl px-4 md:px-8 py-3 md:py-4 pulse-glow mx-1 max-w-full"
            >
              <span className="truncate">REATIVAR MEUS 3 COMBUSTÍVEIS AGORA</span>
            </Button>
          </div>
        </section>

        <section className="py-8 md:py-16 px-3 md:px-4 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-6 md:mb-12 font-[family-name:var(--font-space-grotesk)] px-1">
              Sua Transformação Dia a Dia: O Cronograma Científico
            </h2>
            <h3 className="text-base md:text-xl text-center text-accent mb-6 md:mb-12 font-semibold px-1">
              Baseado em 15.000 mulheres que já reativaram seus combustíveis cerebrais
            </h3>

            <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-12">
              <Card className="p-4 md:p-6 border-l-4 border-green-500 bg-green-50">
                <CardContent className="p-0">
                  <div className="text-center mb-4">
                    <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-xl font-bold">
                      7
                    </div>
                    <h3 className="font-bold text-lg text-green-700">PRIMEIROS 7 DIAS</h3>
                    <p className="text-sm text-green-600 font-semibold">Combustível 1 Ativado</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Para de esquecer palavras no meio da frase</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Consegue terminar os pensamentos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Menos "brancos na mente"</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Família nota que você "voltou"</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6 border-l-4 border-blue-500 bg-blue-50">
                <CardContent className="p-0">
                  <div className="text-center mb-4">
                    <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-xl font-bold">
                      14
                    </div>
                    <h3 className="font-bold text-lg text-blue-700">ATÉ 14 DIAS</h3>
                    <p className="text-sm text-blue-600 font-semibold">Combustível 2 Ativado</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Concentração melhor que aos 40</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Lembra onde colocou as coisas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Consegue focar em tarefas complexas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Produtividade no trabalho dispara</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6 border-l-4 border-purple-500 bg-purple-50">
                <CardContent className="p-0">
                  <div className="text-center mb-4">
                    <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-xl font-bold">
                      21
                    </div>
                    <h3 className="font-bold text-lg text-purple-700">ATÉ 21 DIAS</h3>
                    <p className="text-sm text-purple-600 font-semibold">Combustível 3 Ativado</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span>Controle emocional total</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span>Dorme 8 horas seguidas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span>Não explode mais por bobagem</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span>Casamento e família harmoniosos</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card p-4 md:p-6 rounded-lg text-center">
              <p className="text-base md:text-lg font-bold text-primary mb-2">
                "Minha vida mudou completamente. Em 21 dias, meu marido disse: 'A mulher que me casei voltou.'"
              </p>
              <p className="text-sm text-muted-foreground">- Ana Paula, 52 anos, Campinas</p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16 px-3 md:px-4 bg-accent/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-6 md:mb-12 font-[family-name:var(--font-space-grotesk)] px-1">
              Meu Cérebro Está Sem Combustível?
            </h2>
            <h3 className="text-base md:text-xl text-center text-accent mb-6 md:mb-12 font-semibold px-1">
              Os 3 Sinais de Que Seus Combustíveis Cerebrais Acabaram
            </h3>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
              <div className="px-1">
                <div className="space-y-3 md:space-y-6">
                  <div className="flex items-start gap-2 p-3 bg-card rounded-lg">
                    <Brain className="w-5 h-5 md:w-6 md:h-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-secondary mb-1 text-sm md:text-base">COMBUSTÍVEL 1 em falta:</h4>
                      <p className="text-xs md:text-base">Você esquece palavras básicas e tem "brancos na mente"</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-3 bg-card rounded-lg">
                    <Zap className="w-5 h-5 md:w-6 md:h-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-secondary mb-1 text-sm md:text-base">COMBUSTÍVEL 2 em falta:</h4>
                      <p className="text-xs md:text-base">
                        Não consegue se concentrar e esquece onde colocou as coisas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-3 bg-card rounded-lg">
                    <Heart className="w-5 h-5 md:w-6 md:h-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-secondary mb-1 text-sm md:text-base">COMBUSTÍVEL 3 em falta:</h4>
                      <p className="text-xs md:text-base">Explode de raiva por bobagem e acorda às 3h da manhã</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-3 md:p-6 rounded-lg mx-1">
                <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4 text-primary">
                  A Descoberta Que Mudou Tudo
                </h3>
                <p className="text-sm md:text-lg mb-2 md:mb-4 leading-relaxed">
                  Não é 'coisa da sua cabeça'. Não é 'normal da idade'. É seu cérebro literalmente sem combustível. E
                  quando você reabastecer os 3 combustíveis em 21 dias, vai voltar a se sentir normal novamente.
                </p>
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-200 p-4 md:p-6 rounded-lg mb-6 md:mb-8 mx-1">
                          <div className="mb-6 md:mb-8">
                <img
                  src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/professional-split-screen-photograph-of-_M5O74O7yTjyI0tzxI_80gg_uqncdrQmQVe1ju5ZLoyRQA.jpeg"
                  alt="Imagem personalizada 16:9"
                  className="w-full h-auto rounded-lg shadow-lg aspect-video object-cover"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-red-700 mb-4 text-center">
                💔 O QUE REALMENTE ESTÁ ACONTECENDO NA SUA CASA
              </h3>
              <p className="text-sm md:text-base text-red-800 mb-4 text-center">
                Enquanto seu cérebro fica sem combustível:
              </p>
              <div className="space-y-2 text-sm md:text-base text-red-800">
                <div className="flex items-center gap-2">
                  <span>👨‍👩‍👧‍👦</span>
                  <span>Seu marido não entende por que você "mudou tanto"</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>👶</span>
                  <span>Seus filhos evitam conversar com você</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🏠</span>
                  <span>O clima em casa fica pesado, tenso</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>💼</span>
                  <span>No trabalho, você disfarça, mas todos percebem</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>😴</span>
                  <span>Você deita pensando: "Será que vou ficar assim para sempre?"</span>
                </div>
              </div>
              <div className="bg-red-100 p-3 md:p-4 rounded-lg mt-4">
                <p className="text-sm md:text-base font-semibold text-red-900 text-center">
                  Não é culpa sua. É seu cérebro pedindo socorro.
                  <br />E quando você reabastecer os 3 combustíveis, sua família vai dizer:
                  <br />
                  <strong>"A mãe/esposa que conhecíamos voltou."</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16 px-3 md:px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold text-center text-primary mb-6 md:mb-8 font-[family-name:var(--font-space-grotesk)]">
              Especialista PHD
            </h2>

            <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <img
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/especialista-medica-profissional.png"
                    alt="Dra. Fabiana B."
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-secondary"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">Dra. Fabiana B.</h3>
                  <p className="text-secondary font-semibold mb-4">Especialista em Neuromenopausa</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-secondary" />
                      <span>15+ anos especializando em menopausa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-secondary" />
                      <span>Pós-graduação em Neurociência</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-secondary" />
                      <span>15.000+ mulheres atendidas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span>Membro da Sociedade Brasileira de Climatério</span>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-secondary/10 rounded-lg">
                    <p className="text-sm md:text-base italic">
                      "Dediquei minha carreira a entender por que as mulheres sofrem tanto na menopausa. A descoberta
                      dos 3 combustíveis cerebrais mudou tudo. Agora posso devolver a vida que elas pensavam ter perdido
                      para sempre."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16 px-3 md:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8 font-[family-name:var(--font-space-grotesk)] px-2">
              MÉTODO DOS 3 COMBUSTÍVEIS CEREBRAIS
            </h2>
            <h3 className="text-lg md:text-xl text-accent mb-8 md:mb-12 font-semibold px-2">
              O Único Sistema Que Reabastece Seu Cérebro em 21 Dias
            </h3>

            <div className="grid gap-4 md:grid-cols-3 md:gap-8 mb-6 md:mb-12">
              <Card className="p-3 md:p-6 border-l-4 border-secondary mx-1">
                <CardContent className="p-0">
                  <Brain className="w-10 h-10 md:w-16 md:h-16 text-secondary mx-auto mb-3" />
                  <h3 className="font-bold text-base md:text-xl mb-2 text-primary">COMBUSTÍVEL 1</h3>
                  <h4 className="font-bold text-secondary mb-2 text-sm md:text-base">Estrogênio Cerebral</h4>
                  <p className="text-xs md:text-sm mb-2">
                    <strong>O que é:</strong> Estrogênio produzido pelo próprio cérebro (diferente do dos ovários)
                  </p>
                  <p className="text-xs md:text-sm mb-2">
                    <strong>Quando falta:</strong> "Brancos na mente", esquece palavras básicas
                  </p>
                  <p className="text-xs md:text-sm font-bold text-green-600">
                    <strong>Resultado em 7 dias:</strong> Volta a lembrar das palavras
                  </p>
                </CardContent>
              </Card>

              <Card className="p-3 md:p-6 border-l-4 border-secondary mx-1">
                <CardContent className="p-0">
                  <Zap className="w-10 h-10 md:w-16 md:h-16 text-secondary mx-auto mb-3" />
                  <h3 className="font-bold text-base md:text-xl mb-2 text-primary">COMBUSTÍVEL 2</h3>
                  <h4 className="font-bold text-secondary mb-2 text-sm md:text-base">Glicose Neural</h4>
                  <p className="text-xs md:text-sm mb-2">
                    <strong>O que é:</strong> Açúcar específico que alimenta a memória e concentração
                  </p>
                  <p className="text-xs md:text-sm mb-2">
                    <strong>Quando falta:</strong> Não consegue se concentrar, esquece onde colocou as coisas
                  </p>
                  <p className="text-xs md:text-sm font-bold text-green-600">
                    <strong>Resultado em 14 dias:</strong> Concentração e memória melhores que aos 40
                  </p>
                </CardContent>
              </Card>

              <Card className="p-3 md:p-6 border-l-4 border-secondary mx-1">
                <CardContent className="p-0">
                  <Heart className="w-10 h-10 md:w-16 md:h-16 text-secondary mx-auto mb-3" />
                  <h3 className="font-bold text-base md:text-xl mb-2 text-primary">COMBUSTÍVEL 3</h3>
                  <h4 className="font-bold text-secondary mb-2 text-sm md:text-base">Neurotransmissores</h4>
                  <p className="text-xs md:text-sm mb-2">
                    <strong>O que é:</strong> Serotonina, dopamina e GABA equilibrados
                  </p>
                  <p className="text-xs md:text-sm mb-2">
                    <strong>Quando falta:</strong> Explode de raiva, acorda às 3h, ansiedade
                  </p>
                  <p className="text-xs md:text-sm font-bold text-green-600">
                    <strong>Resultado em 21 dias:</strong> Controle emocional total
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-accent/10 p-3 md:p-6 rounded-lg mx-1">
              <p className="text-base md:text-xl font-bold text-primary leading-relaxed">
                Enquanto outros métodos tratam sintomas... Nós reabastecemos seu cérebro com os 3 combustíveis
                essenciais
              </p>
            </div>

            <Button
              onClick={handleCheckout}
              size="lg"
              className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base md:text-xl px-4 md:px-8 py-3 md:py-4 pulse-glow mx-1 max-w-full mt-6"
            >
              <span className="truncate">QUERO REATIVAR MEUS 3 COMBUSTÍVEIS</span>
            </Button>
          </div>
        </section>

        <section className="py-8 md:py-16 px-3 md:px-4 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="mb-6 md:mb-8 flex justify-center">
            <div className="relative">
              <img
                src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/capa-produto.png"
                alt="Método dos 3 Combustíveis Cerebrais - Produto"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-2xl shadow-2xl mx-auto"
              />
              <div className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs md:text-sm font-bold animate-pulse">
                SISTEMA 3C!
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold text-center text-primary mb-4 md:mb-8 font-[family-name:var(--font-space-grotesk)]">
              O QUE VOCÊ VAI RECEBER
            </h2>
            <h3 className="text-base md:text-xl text-center text-accent mb-6 md:mb-10 font-semibold px-2">
              Sistema Completo dos 3 Combustíveis Cerebrais
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              <Card className="p-3 md:p-4 text-left">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    <Brain className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                    <h3 className="font-bold text-sm md:text-base">COMBUSTÍVEL 1: Reativação do Estrogênio Cerebral</h3>
                  </div>
                  <ul className="space-y-1 text-xs md:text-sm">
                    <li>• Protocolo de 7 dias que reativa a produção cerebral</li>
                    <li>• 5 alimentos que "ligam" os neurônios produtores</li>
                    <li>• Técnica de respiração para oxigenar áreas cerebrais</li>
                    <li>• Horários exatos para consumir os ativadores neurais</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-3 md:p-4 text-left">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    <Zap className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                    <h3 className="font-bold text-sm md:text-base">COMBUSTÍVEL 2: Protocolo da Glicose Neural</h3>
                  </div>
                  <ul className="space-y-1 text-xs md:text-sm">
                    <li>• Como ensinar seu cérebro a usar açúcar eficientemente</li>
                    <li>• Os 3 tipos de açúcar que o cérebro precisa</li>
                    <li>• Timing perfeito para alimentar a memória</li>
                    <li>• Combinações que potencializam absorção neural</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-3 md:p-4 text-left">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    <Heart className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                    <h3 className="font-bold text-sm md:text-base">
                      COMBUSTÍVEL 3: Reequilíbrio dos Neurotransmissores
                    </h3>
                  </div>
                  <ul className="space-y-1 text-xs md:text-sm">
                    <li>• Protocolo de reequilíbrio químico natural</li>
                    <li>• 5 aminoácidos que restauram serotonina</li>
                    <li>• Técnica dos "3 respiros" que libera dopamina</li>
                    <li>• Ritual noturno que produz GABA natural</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-3 md:p-4 text-left">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                    <h3 className="font-bold text-sm md:text-base">MANUTENÇÃO: Como Manter os 3 Combustíveis Ativos</h3>
                  </div>
                  <ul className="space-y-1 text-xs md:text-sm">
                    <li>• Protocolo de manutenção semanal</li>
                    <li>• Como identificar quando um combustível está baixo</li>
                    <li>• Ajustes para cada fase da vida</li>
                    <li>• Prevenção de recaídas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-accent p-3 md:p-6 rounded-lg mx-1">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-accent-foreground text-center">
                BÔNUS EXCLUSIVOS (Valor: R$ 397)
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3">
                <div className="bg-accent-foreground text-accent p-2 md:p-3 rounded text-center">
                  <CheckCircle className="w-4 h-4 md:w-6 md:h-6 mx-auto mb-1" />
                  <p className="font-bold text-xs md:text-sm">BÔNUS 1</p>
                  <p className="text-xs">Checklist dos 3 Combustíveis</p>
                </div>
                <div className="bg-accent-foreground text-accent p-2 md:p-3 rounded text-center">
                  <BookOpen className="w-4 h-4 md:w-6 md:h-6 mx-auto mb-1" />
                  <p className="font-bold text-xs md:text-sm">BÔNUS 2</p>
                  <p className="text-xs">Guia "Como Falar com Seu Médico"</p>
                </div>
                <div className="bg-accent-foreground text-accent p-2 md:p-3 rounded text-center">
                  <Users className="w-4 h-4 md:w-6 md:h-6 mx-auto mb-1" />
                  <p className="font-bold text-xs md:text-sm">BÔNUS 3</p>
                  <p className="text-xs">Cardápio dos 3 Combustíveis</p>
                </div>
                <div className="bg-accent-foreground text-accent p-2 md:p-3 rounded text-center">
                  <Shield className="w-4 h-4 md:w-6 md:h-6 mx-auto mb-1" />
                  <p className="font-bold text-xs md:text-sm">BÔNUS 4</p>
                  <p className="text-xs">SOS Família</p>
                </div>
                <div className="bg-accent-foreground text-accent p-2 md:p-3 rounded text-center">
                  <Award className="w-4 h-4 md:w-6 md:h-6 mx-auto mb-1" />
                  <p className="font-bold text-xs md:text-sm">BÔNUS 5</p>
                  <p className="text-xs">Kit Emergência</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16 px-3 md:px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold text-center text-primary mb-6 md:mb-12 font-[family-name:var(--font-space-grotesk)]">
              A Ciência Por Trás dos 3 Combustíveis
            </h2>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  {/* IMAGEM HARVARD INSERIDA AQUI */}
                  <div className="mb-4">
                    <img
                      src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/professional-medical-journal-article-lay_CIBmaWyDTOi8w2jaW-xshA_-gqPZ9T2RTCtlx6l2mpJwQ.jpeg"
                      alt="Estudo Harvard - Pesquisa Científica"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-secondary">Estudo Harvard - 2023</h3>
                  <p className="text-sm mb-3">
                    "Mulheres na menopausa que reativaram a produção cerebral de estrogênio mostraram melhora de 73% na
                    memória verbal em apenas 7 dias."
                  </p>
                  <p className="text-xs text-muted-foreground">Journal of Neurological Sciences</p>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  {/* IMAGEM STANFORD INSERIDA AQUI */}
                  <div className="mb-4">
                    <img
                      src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/professional-scientific-publication-disp_ObGWPGxWQdurGC618eH1gw_L1kTv4BqT7WLNl9qg4LU8Q.jpeg"
                      alt="Universidade Stanford - Publicação Científica"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-secondary">Universidade de Stanford - 2024</h3>
                  <p className="text-sm mb-3">
                    "O protocolo de glicose neural mostrou reversão completa dos déficits cognitivos em 89% das
                    participantes em 14 dias."
                  </p>
                  <p className="text-xs text-muted-foreground">Neuroscience Research International</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card p-4 md:p-6 rounded-lg text-center">
              <p className="text-base md:text-lg font-bold text-primary mb-2">
                15.000 mulheres já comprovaram: os 3 combustíveis funcionam
              </p>
              <p className="text-sm text-muted-foreground">
                Taxa de sucesso: 94% das mulheres relatam melhora significativa em 21 dias
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16 px-3 md:px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold text-center text-primary mb-6 md:mb-12 font-[family-name:var(--font-space-grotesk)]">
              O Que Nossas Clientes Estão Dizendo
            </h2>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src="https://nutricaoalimentos.shop/wp-content/uploads/2025/06/01.png"
                      alt="Maria Santos"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold">Maria Santos, 54 anos</h4>
                      <p className="text-sm text-muted-foreground">São Paulo</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3">
                    "Em 7 dias parei de esquecer as palavras. Em 21 dias, meu marido disse: 'A mulher que me casei
                    voltou.' Minha vida mudou completamente."
                  </p>
                  <div className="flex text-yellow-400">★★★★★</div>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src="https://nutricaoalimentos.shop/wp-content/uploads/2025/06/02.png"
                      alt="Ana Paula"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold">Ana Paula, 52 anos</h4>
                      <p className="text-sm text-muted-foreground">Campinas</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3">
                    "Não explodo mais por bobagem. Durmo 8 horas seguidas. Meus filhos voltaram a conversar comigo.
                    Valeu cada centavo."
                  </p>
                  <div className="flex text-yellow-400">★★★★★</div>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src="https://nutricaoalimentos.shop/wp-content/uploads/2025/06/1-DEPOIMENTO.png"
                      alt="Carla Oliveira"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold">Carla Oliveira, 49 anos</h4>
                      <p className="text-sm text-muted-foreground">Rio de Janeiro</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3">
                    "Minha concentração no trabalho melhorou 300%. Não esqueço mais onde coloco as coisas. Me sinto
                    inteligente novamente."
                  </p>
                  <div className="flex text-yellow-400">★★★★★</div>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src="https://nutricaoalimentos.shop/wp-content/uploads/2025/06/8db332e349f045c0e1949cb88c6096d4.jpg"
                      alt="Lucia Ferreira"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold">Lucia Ferreira, 56 anos</h4>
                      <p className="text-sm text-muted-foreground">Belo Horizonte</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3">
                    "Pensei que ia ficar assim para sempre. Em 21 dias, voltei a ser eu mesma. Meu casamento foi salvo."
                  </p>
                  <div className="flex text-yellow-400">★★★★★</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16 px-3 md:px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold text-center text-primary mb-6 md:mb-12 font-[family-name:var(--font-space-grotesk)]">
              Superando Suas Dúvidas
            </h2>

            <div className="space-y-4 md:space-y-6">
              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <h3 className="font-bold text-lg mb-3 text-red-600">"Já tentei de tudo, nada funciona comigo..."</h3>
                  <p className="text-sm md:text-base mb-3">
                    <strong>Entendo sua frustração.</strong> Você provavelmente tentou tratar os sintomas, não a causa.
                    Os 3 combustíveis cerebrais atacam a RAIZ do problema. É por isso que 94% das mulheres veem
                    resultados em 21 dias.
                  </p>
                  <p className="text-sm font-bold text-green-600">
                    ✅ Diferente de tudo que você já tentou - trata a causa, não os sintomas
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <h3 className="font-bold text-lg mb-3 text-red-600">"Será que funciona na minha idade?"</h3>
                  <p className="text-sm md:text-base mb-3">
                    <strong>Funciona dos 45 aos 65 anos.</strong> Nossa cliente mais velha tinha 63 anos e teve
                    resultados incríveis. O cérebro tem capacidade de regeneração em qualquer idade quando recebe os
                    combustíveis certos.
                  </p>
                  <p className="text-sm font-bold text-green-600">✅ Testado e aprovado em mulheres de 45 a 65 anos</p>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <h3 className="font-bold text-lg mb-3 text-red-600">"E se eu não conseguir seguir?"</h3>
                  <p className="text-sm md:text-base mb-3">
                    <strong>É mais simples do que parece.</strong> São apenas 15 minutos por dia. Tudo explicado
                    passo-a-passo, com horários e quantidades exatas. Mais de 15.000 mulheres já conseguiram.
                  </p>
                  <p className="text-sm font-bold text-green-600">
                    ✅ Apenas 15 minutos por dia + protocolo passo-a-passo
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <h3 className="font-bold text-lg mb-3 text-red-600">"Meu médico disse que é normal da idade..."</h3>
                  <p className="text-sm md:text-base mb-3">
                    <strong>Não é normal sofrer.</strong> Incluímos o bônus "Como Falar com Seu Médico" para você
                    mostrar as pesquisas científicas. Muitos médicos ainda não conhecem os 3 combustíveis cerebrais.
                  </p>
                  <p className="text-sm font-bold text-green-600">
                    ✅ Bônus: Guia para conversar com seu médico sobre os combustíveis
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16 px-3 md:px-4 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl md:text-3xl font-bold text-primary mb-6 md:mb-8 font-[family-name:var(--font-space-grotesk)]">
              GARANTIA TRIPLA BLINDADA
            </h2>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <Card className="p-4 md:p-6 border-2 border-green-500">
                <CardContent className="p-0 text-center">
                  <Shield className="w-12 h-12 md:w-16 md:h-16 text-green-500 mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2 text-green-700">GARANTIA 1</h3>
                  <h4 className="font-bold text-sm md:text-base mb-2">Resultados em 7 dias</h4>
                  <p className="text-xs md:text-sm">
                    Se em 7 dias você não parar de esquecer palavras básicas, devolvemos 100% do seu dinheiro.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6 border-2 border-blue-500">
                <CardContent className="p-0 text-center">
                  <Shield className="w-12 h-12 md:w-16 md:h-16 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2 text-blue-700">GARANTIA 2</h3>
                  <h4 className="font-bold text-sm md:text-base mb-2">Concentração em 14 dias</h4>
                  <p className="text-xs md:text-sm">
                    Se em 14 dias sua concentração não melhorar significativamente, devolvemos 100% + R$ 50 pelo tempo
                    perdido.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6 border-2 border-purple-500">
                <CardContent className="p-0 text-center">
                  <Shield className="w-12 h-12 md:w-16 md:h-16 text-purple-500 mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2 text-purple-700">GARANTIA 3</h3>
                  <h4 className="font-bold text-sm md:text-base mb-2">Transformação em 21 dias</h4>
                  <p className="text-xs md:text-sm">
                    Se em 21 dias sua família não notar que você "voltou ao normal", devolvemos 100% + R$ 100 de
                    compensação.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card p-4 md:p-6 rounded-lg">
              <p className="text-base md:text-lg font-bold text-primary mb-2">
                TOTAL: Até R$ 247 de garantia além do reembolso completo
              </p>
              <p className="text-sm text-muted-foreground">
                Você não tem nada a perder e sua vida normal para recuperar
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16 px-3 md:px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold text-center text-primary mb-6 md:mb-12 font-[family-name:var(--font-space-grotesk)]">
              Compare: Quanto Você Gastaria Para Resolver Isso?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
              <Card className="p-4 md:p-6 border-2 border-red-500">
                <CardContent className="p-0">
                  <h3 className="font-bold text-lg mb-4 text-red-700 text-center">CAMINHO TRADICIONAL</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Consultas médicas (6 meses)</span>
                      <span className="font-bold">R$ 1.800</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Exames e testes</span>
                      <span className="font-bold">R$ 800</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Medicamentos/mês (12 meses)</span>
                      <span className="font-bold">R$ 2.400</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Terapias complementares</span>
                      <span className="font-bold">R$ 1.200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Suplementos diversos</span>
                      <span className="font-bold">R$ 600</span>
                    </div>
                    <hr className="border-red-300" />
                    <div className="flex justify-between font-bold text-lg">
                      <span>TOTAL NO ANO:</span>
                      <span className="text-red-700">R$ 6.800</span>
                    </div>
                    <p className="text-xs text-red-600 text-center">*Sem garantia de resultados</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6 border-2 border-green-500">
                <CardContent className="p-0">
                  <h3 className="font-bold text-lg mb-4 text-green-700 text-center">MÉTODO DOS 3 COMBUSTÍVEIS</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Sistema completo</span>
                      <span className="font-bold">R$ 97</span>
                    </div>
                    <div className="flex justify-between">
                      <span>5 Bônus exclusivos</span>
                      <span className="font-bold text-green-600">GRÁTIS</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Garantia tripla blindada</span>
                      <span className="font-bold text-green-600">GRÁTIS</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Resultados em 21 dias</span>
                      <span className="font-bold text-green-600">GARANTIDO</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Acesso vitalício</span>
                      <span className="font-bold text-green-600">INCLUÍDO</span>
                    </div>
                    <hr className="border-green-300" />
                    <div className="flex justify-between font-bold text-lg">
                      <span>TOTAL:</span>
                      <span className="text-green-700">R$ 97</span>
                    </div>
                    <p className="text-xs text-green-600 text-center">*Com garantia tripla de resultados</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-accent p-4 md:p-6 rounded-lg text-center">
              <p className="text-lg md:text-xl font-bold text-accent-foreground mb-2">ECONOMIA ANUAL: R$ 6.703</p>
              <p className="text-sm text-accent-foreground">
                Você economiza mais de R$ 6.700 por ano e ainda tem garantia de resultados em 21 dias
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16 px-3 md:px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold text-center text-primary mb-6 md:mb-12 font-[family-name:var(--font-space-grotesk)]">
              Perguntas Frequentes
            </h2>

            <div className="space-y-4">
              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <h3 className="font-bold text-base md:text-lg mb-2">
                    ❓ Quanto tempo leva para ver os primeiros resultados?
                  </h3>
                  <p className="text-sm md:text-base">
                    Os primeiros resultados aparecem em 7 dias (você para de esquecer palavras). Em 14 dias, a
                    concentração melhora significativamente. Em 21 dias, você tem controle emocional total.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <h3 className="font-bold text-base md:text-lg mb-2">❓ Preciso comprar suplementos caros?</h3>
                  <p className="text-sm md:text-base">
                    Não! O Sistema usa alimentos e técnicas naturais. Tudo que você precisa está disponível em qualquer
                    supermercado ou farmácia comum.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <h3 className="font-bold text-base md:text-lg mb-2">❓ Funciona se eu já faço reposição hormonal?</h3>
                  <p className="text-sm md:text-base">
                    Sim! Os 3 combustíveis cerebrais são complementares à reposição hormonal. Muitas clientes que fazem
                    TRH tiveram resultados ainda melhores.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <h3 className="font-bold text-base md:text-lg mb-2">❓ Como funciona a garantia?</h3>
                  <p className="text-sm md:text-base">
                    Você tem 3 garantias: resultados em 7, 14 e 21 dias. Se qualquer uma falhar, devolvemos 100% do seu
                    dinheiro + compensação. Sem perguntas, sem burocracia.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6">
                <CardContent className="p-0">
                  <h3 className="font-bold text-base md:text-lg mb-2">❓ Por quanto tempo tenho acesso?</h3>
                  <p className="text-sm md:text-base">
                    Acesso vitalício! Você pode consultar o material quantas vezes quiser, para sempre. Sem mensalidades
                    ou taxas extras.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="oferta" className="py-8 md:py-16 px-3 md:px-4 bg-gradient-to-r from-secondary/20 to-accent/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-red-100 border-2 border-red-500 p-4 md:p-6 rounded-lg mb-6 md:mb-8">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Users className="w-6 h-6 text-red-600" />
                <h3 className="text-lg md:text-xl font-bold text-red-700">🚨 ÚLTIMAS {vagasRestantes} VAGAS</h3>
              </div>
              <p className="text-sm md:text-base text-red-800 mb-2">Após esgotar, só no próximo mês por R$ 1.200</p>
              <p className="text-xs md:text-sm font-bold text-red-900">
                Limitamos para garantir suporte individualizado
              </p>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4 md:mb-6 font-[family-name:var(--font-space-grotesk)]">
              REATIVE SEUS 3 COMBUSTÍVEIS CEREBRAIS
            </h2>

            <div className="bg-card p-4 md:p-6 rounded-lg mb-6 md:mb-8">
              <div className="text-center mb-4">
                <p className="text-sm text-muted-foreground line-through">De R$ 497 por</p>
                <p className="text-3xl md:text-5xl font-bold text-secondary">R$ 97</p>
                <p className="text-sm text-muted-foreground">ou 12x de R$ 9,70</p>
              </div>

              <div className="space-y-2 text-sm text-left max-w-md mx-auto">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>✅ Sistema completo dos 3 combustíveis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>✅ 5 bônus exclusivos (valor R$ 397)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>✅ Garantia tripla blindada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>✅ Acesso vitalício</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>✅ Resultados em 21 dias</span>
                </div>
              </div>
            </div>

            <Button
              onClick={handleCheckout}
              size="lg"
              className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg md:text-2xl px-6 md:px-12 py-4 md:py-6 pulse-glow mb-4"
            >
              REATIVAR MEUS 3 COMBUSTÍVEIS POR R$ 97
            </Button>

            <p className="text-xs md:text-sm text-muted-foreground mb-4">
              🔒 Compra 100% segura • Garantia tripla blindada • Acesso imediato
            </p>

            <div className="bg-green-50 border border-green-200 p-3 md:p-4 rounded-lg">
              <p className="text-sm md:text-base font-bold text-green-800">
                💚 Mais de 15.000 mulheres já recuperaram sua vida normal
              </p>
              <p className="text-xs md:text-sm text-green-700">
                "Meu marido disse: 'A mulher que me casei voltou'" - Ana Paula, 52 anos
              </p>
            </div>
          </div>
        </section>

        <footer className="bg-muted py-6 md:py-8 px-3 md:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs md:text-sm text-muted-foreground mb-2">
              © 2024 Método dos 3 Combustíveis Cerebrais. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              Este produto não substitui o acompanhamento médico. Consulte sempre seu médico.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
