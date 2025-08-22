"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Brain, Heart, Zap, Users, CheckCircle, Award, BookOpen, Gift } from "lucide-react"
import Image from "next/image"

export default function MenopausaLanding() {
  const checkoutUrl = "https://pay.cakto.com.br/3992hmw_531473"
  const [pessoasComprando, setPessoasComprando] = useState(357)

  const handleCheckout = () => {
    window.open(checkoutUrl, "_blank")
  }

  useEffect(() => {
    const comprandoTimer = setInterval(() => {
      setPessoasComprando((prev) => {
        const variacao = Math.floor(Math.random() * 7) - 3
        let novoNumero = prev + variacao
        if (novoNumero < 330) novoNumero = 333
        if (novoNumero > 390) novoNumero = 388
        return novoNumero
      })
    }, 3000)

    return () => clearInterval(comprandoTimer)
  }, [])

  // Notificações de compra dinâmicas
  useEffect(() => {
    const names = [
      "Maria Helena", "Elisabete", "Sônia Regina", "Marlene", "Vera Lúcia",
      "Rosângela", "Márcia Aparecida", "Cláudia Cristina", "Cecília", "Adriana Souza",
      "Neide", "Marta", "Tereza", "Ângela", "Irene", "Regina Célia",
      "Débora", "Rosa Maria", "Cristina", "Valéria"
    ]

    const showNotification = (name: string) => {
      const notification = document.createElement('div')
      notification.className = 'fixed bottom-4 left-2 right-2 sm:left-5 sm:right-auto bg-white text-gray-800 border-l-4 border-green-500 p-3 rounded-lg shadow-lg max-w-sm sm:max-w-80 z-50 opacity-0 transform -translate-x-5 transition-all duration-400'
      notification.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span class="text-white text-xs">✓</span>
          </div>
          <div class="text-xs sm:text-sm">
            <strong>${name}</strong> acabou de comprar o <strong>Protocolo Menopausa Leve</strong>
          </div>
        </div>
      `
      
      document.body.appendChild(notification)
      
      setTimeout(() => {
        notification.classList.remove('opacity-0', '-translate-x-5')
        notification.classList.add('opacity-100', 'translate-x-0')
      }, 100)
      
      setTimeout(() => {
        notification.classList.add('opacity-0', '-translate-x-5')
        setTimeout(() => {
          if (document.body.contains(notification)) {
            document.body.removeChild(notification)
          }
        }, 400)
      }, 4500)
    }

    const scheduleNotification = () => {
      const delay = Math.floor(Math.random() * 8000) + 10000 // 10-18 segundos
      setTimeout(() => {
        const randomName = names[Math.floor(Math.random() * names.length)]
        showNotification(randomName)
        scheduleNotification()
      }, delay)
    }

    const initialDelay = Math.floor(Math.random() * 3000) + 2000 // 2-5 segundos
    setTimeout(scheduleNotification, initialDelay)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER COM URGÊNCIA OTIMIZADO PARA MOBILE */}
      <div className="bg-red-600 text-white py-2 px-2 text-center">
        <p className="text-xs sm:text-sm md:text-base font-bold animate-pulse leading-tight">
          🚨 ÚLTIMAS 48H: Apenas {pessoasComprando} vagas restantes para o Protocolo Menopausa Leve
        </p>
      </div>

      {/* SEÇÃO "ESTE MÉTODO É PARA VOCÊ SE..." OTIMIZADA */}
      <section className="py-6 sm:py-8 md:py-16 px-2 sm:px-3 md:px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-center text-primary mb-4 sm:mb-6 md:mb-12 font-[family-name:var(--font-space-grotesk)] px-2">
            "Este Protocolo Foi Criado Especialmente Para Você Se..."
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
            {/* DOR 1 - Suores Noturnos */}
            <Card className="p-3 sm:p-4 md:p-6 border-l-4 border-red-500 bg-red-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-full h-32 sm:h-40 md:h-48 lg:h-56 mb-3 sm:mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/b0db51ea-cc21-4391-866c-70bd8c3aa936.png"
                    alt="Mulher acordando suada de madrugada"
                    width={300}
                    height={128}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 text-base sm:text-lg flex-shrink-0">❌</span>
                  <span className="text-xs sm:text-sm md:text-base font-medium leading-tight">Você acorda de madrugada encharcada de suor (enquanto seu marido dorme tranquilo)</span>
                </div>
              </CardContent>
            </Card>

            {/* DOR 2 - Ondas de Calor */}
            <Card className="p-3 sm:p-4 md:p-6 border-l-4 border-red-500 bg-red-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-full h-32 sm:h-40 md:h-48 lg:h-56 mb-3 sm:mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/60d984dd-f481-4686-a58a-b4c22a98cc23.png"
                    alt="Mulher com ondas de calor"
                    width={300}
                    height={128}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 text-base sm:text-lg flex-shrink-0">❌</span>
                  <span className="text-xs sm:text-sm md:text-base font-medium leading-tight">Sente ondas de calor que sobem do nada e te deixam vermelha na frente de todo mundo</span>
                </div>
              </CardContent>
            </Card>

            {/* DOR 3 - Ganho de Peso */}
            <Card className="p-3 sm:p-4 md:p-6 border-l-4 border-red-500 bg-red-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-full h-32 sm:h-40 md:h-48 lg:h-56 mb-3 sm:mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/c7673c1f-cc20-4edc-980c-578fa566410f.png"
                    alt="Mulher triste na balança"
                    width={300}
                    height={128}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 text-base sm:text-lg flex-shrink-0">❌</span>
                  <span className="text-xs sm:text-sm md:text-base font-medium leading-tight">Subiu na balança hoje e quase chorou com o número que viu</span>
                </div>
              </CardContent>
            </Card>

            {/* DOR 4 - Perda da Libido */}
            <Card className="p-3 sm:p-4 md:p-6 border-l-4 border-red-500 bg-red-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-full h-32 sm:h-40 md:h-48 lg:h-56 mb-3 sm:mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/4c49adc8-f2a3-4501-8c1c-4eb313326ecc.png"
                    alt="Casal distante na cama"
                    width={300}
                    height={128}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 text-base sm:text-lg flex-shrink-0">❌</span>
                  <span className="text-xs sm:text-sm md:text-base font-medium leading-tight">Perdeu completamente a vontade de fazer sexo (e isso te deixa triste e culpada)</span>
                </div>
              </CardContent>
            </Card>

            {/* DOR 5 - Irritabilidade */}
            <Card className="p-3 sm:p-4 md:p-6 border-l-4 border-red-500 bg-red-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-full h-32 sm:h-40 md:h-48 lg:h-56 mb-3 sm:mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/ba02d339-23da-4b61-bcc0-095cd13dc7ba.png"
                    alt="Mulher irritada explodindo"
                    width={300}
                    height={128}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 text-base sm:text-lg flex-shrink-0">❌</span>
                  <span className="text-xs sm:text-sm md:text-base font-medium leading-tight">Explode por qualquer bobagem e depois se arrepende</span>
                </div>
              </CardContent>
            </Card>

            {/* DOR 6 - Autoestima Baixa */}
            <Card className="p-3 sm:p-4 md:p-6 border-l-4 border-red-500 bg-red-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-full h-32 sm:h-40 md:h-48 lg:h-56 mb-3 sm:mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/e337b404-f2dc-4feb-a4be-a56b47feacf0.png"
                    alt="Mulher triste olhando no espelho"
                    width={300}
                    height={128}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 text-base sm:text-lg flex-shrink-0">❌</span>
                  <span className="text-xs sm:text-sm md:text-base font-medium leading-tight">Olha no espelho e não reconhece mais quem você é</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-green-100 border-2 border-green-500 p-3 sm:p-4 md:p-6 rounded-lg text-center">
            <p className="text-base sm:text-lg md:text-xl font-bold text-green-800 mb-2">
              Se você pensou "meu Deus, ela está falando exatamente de mim"...
            </p>
            <p className="text-sm sm:text-base md:text-lg text-green-700 font-semibold">
              O <strong>Protocolo Menopausa Leve</strong> vai mudar sua vida nos próximos 14 dias.
            </p>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS OTIMIZADOS */}
      <section className="py-6 sm:py-8 md:py-16 px-2 sm:px-3 md:px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-center text-primary mb-4 sm:mb-6 md:mb-12 font-[family-name:var(--font-space-grotesk)] px-2">
            Veja mulheres que usaram o <strong>Protocolo Menopausa Leve</strong> e transformaram sua saúde em apenas 14 dias
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <Card className="p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/06/01.png"
                    alt="Ana Paula Santos"
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">Ana Paula Santos, 48 anos</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Brasília</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm mb-3 leading-relaxed">
                  "Estava gastando R$ 800 por mês em hormônios. Com o protocolo, em 10 dias os suores pararam e economizei uma fortuna. Meu ginecologista ficou impressionado com meus exames."
                </p>
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
              </CardContent>
            </Card>

            <Card className="p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/06/02.png"
                    alt="Fernanda Lima"
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">Fernanda Lima, 52 anos</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Porto Alegre</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm mb-3 leading-relaxed">
                  "Tentei 3 tratamentos diferentes. Nada funcionou. Este protocolo foi diferente: em 1 semana dormia a noite toda. Em 15 dias, 5kg a menos sem dieta maluca."
                </p>
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
              </CardContent>
            </Card>

            <Card className="p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/06/1-DEPOIMENTO.png"
                    alt="Roberta Oliveira"
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">Roberta Oliveira, 45 anos</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Salvador</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm mb-3 leading-relaxed">
                  "Meu casamento estava acabando. Não tinha mais prazer em nada. Depois do protocolo, voltei a me sentir desejada. Meu marido disse que tem a esposa dele de volta."
                </p>
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
              </CardContent>
            </Card>

            <Card className="p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/06/8db332e349f045c0e1949cb88c6096d4.jpg"
                    alt="Patricia Rocha"
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">Patricia Rocha, 49 anos</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Curitiba</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm mb-3 leading-relaxed">
                  "Era escrava do ar condicionado. Não saía de casa com medo dos calorões. Hoje uso qualquer roupa, vou a qualquer lugar. Me sinto livre de novo."
                </p>
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DIFERENCIAÇÃO OTIMIZADA */}
      <section className="py-6 sm:py-8 md:py-16 px-2 sm:px-3 md:px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-primary mb-4 sm:mb-6 px-2">
            "Por Que Este Protocolo É Diferente de Tudo Que Você Já Tentou?"
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <Card className="p-4 sm:p-6 bg-white">
              <h3 className="font-bold text-base sm:text-lg mb-3 text-red-600">❌ OUTROS MÉTODOS</h3>
              <ul className="text-xs sm:text-sm space-y-2 text-left">
                <li>• Focam apenas nos sintomas</li>
                <li>• Usam hormônios sintéticos</li>
                <li>• Resultados temporários</li>
                <li>• Efeitos colaterais</li>
              </ul>
            </Card>
            
            <Card className="p-4 sm:p-6 bg-green-50 border-2 border-green-500">
              <h3 className="font-bold text-base sm:text-lg mb-3 text-green-600">✅ PROTOCOLO RESET</h3>
              <ul className="text-xs sm:text-sm space-y-2 text-left">
                <li>• Ataca a raiz hormonal</li>
                <li>• 100% natural e seguro</li>
                <li>• Resultados permanentes</li>
                <li>• Zero efeitos colaterais</li>
              </ul>
            </Card>
            
            <Card className="p-4 sm:p-6 bg-white">
              <h3 className="font-bold text-base sm:text-lg mb-3 text-blue-600">🎯 RESULTADO</h3>
              <ul className="text-xs sm:text-sm space-y-2 text-left">
                <li>• 72h para primeiros sinais</li>
                <li>• 14 dias para transformação</li>
                <li>• Método cientificamente validado</li>
                <li>• Aprovado por médicos</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE AGITAÇÃO EMOCIONAL OTIMIZADA */}
      <section className="py-6 sm:py-8 md:py-16 px-2 sm:px-3 md:px-4 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-center text-red-700 mb-4 sm:mb-6 md:mb-8 font-[family-name:var(--font-space-grotesk)] px-2">
            "Eu Sei... A Menopausa Roubou Quem Você Era, Não Foi?"
          </h2>

          <div className="bg-red-100 border-2 border-red-200 p-3 sm:p-4 md:p-6 rounded-lg mb-4 sm:mb-6 md:mb-8">
            <div className="mb-4 sm:mb-6 md:mb-8">
              <Image
                src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/split-screen-dramatic-before-after-of-br_SYoEg1MsT7aEb8YiaVVSwQ_aUzlre9sTuuEoIIYDw4Srw.jpeg"
                alt="Mulher sofrendo com menopausa"
                width={800}
                height={450}
                className="w-full h-auto rounded-lg shadow-lg aspect-video object-cover"
              />
            </div>
            
            <div className="text-center mb-4 sm:mb-6">
              <p className="text-sm sm:text-base md:text-lg text-red-800 font-medium mb-3 sm:mb-4 leading-relaxed">
                Você acorda e já se sente derrotada antes mesmo do dia começar.<br/>
                Olha no espelho e pensa: "Quem é essa mulher?"<br/>
                Seu corpo não obedece mais você.<br/>
                Sua mente não é mais a mesma.<br/>
                Você se sente invisível, esquecida, como se tivesse perdido sua essência.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl font-bold text-red-900 mb-3 sm:mb-4">
                E o pior: todo mundo fala que "é normal", que "faz parte da idade".
              </p>
              
              <p className="text-lg sm:text-xl md:text-2xl font-black text-red-900 mb-4 sm:mb-6">
                MENTIRA.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-red-800 font-medium mb-4 sm:mb-6 leading-relaxed">
                Você não nasceu para ser refém dos seus hormônios.<br/>
                Você não nasceu para se sentir prisioneira do próprio corpo.<br/>
                Você não nasceu para aceitar uma vida pela metade.
              </p>
            </div>

            <div className="bg-red-200 p-3 sm:p-4 md:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-red-900 text-center mb-3 sm:mb-4">
                Agora me responda com sinceridade:
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-bold text-red-900 text-center mb-3 sm:mb-4 leading-relaxed">
                Se eu te mostrasse um caminho 100% natural para você voltar a se sentir MULHER de novo... 
                Para acordar disposta, dormir tranquila, se olhar no espelho e gostar do que vê...
                Para voltar a ter prazer, energia, autoestima...
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-black text-red-900 text-center">
                Isso mudaria sua vida?
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-base sm:text-lg md:text-xl font-bold text-primary px-2">
              Se sua resposta for <strong className="text-green-600">SIM,</strong> continue lendo...
            </p>
          </div>
        </div>
      </section>

      {/* MÉTODO OTIMIZADO - 3 PASSOS */}
      <section className="py-6 sm:py-8 md:py-16 px-2 sm:px-3 md:px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6 md:mb-8 font-[family-name:var(--font-space-grotesk)] px-2">
            "Os 3 Passos Que Vão Te Libertar da Menopausa em 14 Dias"
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            <Card className="p-3 sm:p-4 md:p-6 border-l-4 border-secondary shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-2xl font-bold">
                  1
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/151fac30-03bd-4410-a3c2-a454182eda4c.png"
                    alt="Reset Hormonal Natural"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2 text-primary">RESET HORMONAL NATURAL</h3>
                <p className="text-xs sm:text-sm leading-relaxed">
                  Protocolo de 72h que 'reseta' seu sistema endócrino usando alimentos termogênicos específicos. Você vai seguir um protocolo natural que funciona como um "extintor" para os calorões.
                </p>
              </CardContent>
            </Card>

            <Card className="p-3 sm:p-4 md:p-6 border-l-4 border-secondary shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-2xl font-bold">
                  2
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/b022a12c-babb-4c9b-b90d-df5b9a08a60c.png"
                    alt="Ativação Metabólica"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2 text-primary">ATIVAÇÃO METABÓLICA</h3>
                <p className="text-xs sm:text-sm leading-relaxed">
                  Sequência de chás e suplementos naturais que aceleram seu metabolismo em 40%. Um chá específico que você toma 1x por dia e que funciona como um "reset" no seu sistema hormonal.
                </p>
              </CardContent>
            </Card>

            <Card className="p-3 sm:p-4 md:p-6 border-l-4 border-secondary shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-2xl font-bold">
                  3
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/d9ee0045-db11-45e8-83e5-eba8d0773429.png"
                    alt="Blindagem Anti-Sintomas"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2 text-primary">BLINDAGEM ANTI-SINTOMAS</h3>
                <p className="text-xs sm:text-sm leading-relaxed">
                  Rotina de manutenção que mantém você protegida para sempre. Receitas deliciosas que fazem seu metabolismo lembrar como funcionar direito.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-accent/10 p-3 sm:p-4 md:p-6 rounded-lg">
            <p className="text-sm sm:text-base md:text-xl font-bold text-primary leading-relaxed px-2">
              Enquanto outros métodos apenas mascaram os sintomas... Nós eliminamos a raiz hormonal da menopausa
            </p>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS FINAIS OTIMIZADOS */}
      <section className="py-6 sm:py-8 md:py-16 px-2 sm:px-3 md:px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-center text-primary mb-4 sm:mb-6 md:mb-12 font-[family-name:var(--font-space-grotesk)] px-2">
            "Depois de Concluir o Protocolo Menopausa Leve, Você Finalmente Vai:"
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <Card className="p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-3 sm:mb-4">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/ac01a8ac-7387-4b9e-8203-c493dd2e7cec.png"
                    alt="Dormir a noite inteira"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2">✅ Dormir a noite inteira sem acordar suando</h3>
              </CardContent>
            </Card>

            <Card className="p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-3 sm:mb-4">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/ae9b5790-efa1-40f9-9438-e1229ce7b6d8.png"
                    alt="Usar qualquer roupa"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2">✅ Usar qualquer roupa sem medo dos calorões</h3>
              </CardContent>
            </Card>

            <Card className="p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-3 sm:mb-4">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/924352cd-fa82-44be-8a8d-03e03aa8930e.png"
                    alt="Ver o número da balança diminuir"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2">✅ Ver o número da balança diminuir naturalmente</h3>
              </CardContent>
            </Card>

            <Card className="p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-3 sm:mb-4">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/bcb3830f-050c-46d1-9854-cd771d43e2a3.png"
                    alt="Sentir vontade de fazer sexo"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2">✅ Sentir vontade de fazer sexo de novo</h3>
              </CardContent>
            </Card>

            <Card className="p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-3 sm:mb-4">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/71a87a4a-43fa-4a2c-b237-e5769a5e530b.png"
                    alt="Ter energia para brincar"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2">✅ Ter energia para brincar com os netos</h3>
              </CardContent>
            </Card>

            <Card className="p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-3 sm:mb-4">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/f85eea43-65d3-488c-9f90-be56d83db683.png"
                    alt="Se olhar no espelho e sorrir"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2">✅ Se olhar no espelho e sorrir para si mesma</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* OFERTA COMPLETA OTIMIZADA */}
      <section className="py-6 sm:py-8 md:py-16 px-2 sm:px-3 md:px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-center text-primary mb-3 sm:mb-4 md:mb-8 font-[family-name:var(--font-space-grotesk)] px-2">
            E tem muito mais!
          </h2>
          <h3 className="text-sm sm:text-base md:text-xl text-center text-accent mb-4 sm:mb-6 md:mb-10 font-semibold px-2">
            Veja tudo que você vai receber para eliminar definitivamente a menopausa
          </h3>

          <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            {/* Produto Principal 1 OTIMIZADO */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                <Image
                  src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/64878600-d0fd-48fb-a67d-7a54bea3302c.png"
                  alt="Reset Hormonal em 14 Dias"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Protocolo Menopausa Leve</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 leading-relaxed">
                  Você receberá um plano simples e prático, com orientações personalizadas e diárias durante 14 dias para eliminar os sintomas da menopausa.
                </p>
                <span className="text-green-600 font-bold">Valor: R$ 97,00</span>
              </div>
            </div>

            {/* Produto Principal 2 OTIMIZADO */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                <Image
                  src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/mockup-pml-02.png"
                  alt="80 Receitas Termogênicas Anti-Menopausa"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold mb-2">80 Receitas Termogênicas Anti-Menopausa</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 leading-relaxed">
                  80 receitas simples e nutritivas que ajudam a equilibrar os hormônios, combater calorões e melhorar o metabolismo.
                </p>
                <span className="text-green-600 font-bold">Valor: R$ 67,00</span>
              </div>
            </div>

            {/* Produto Principal 3 OTIMIZADO */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                <Image
                  src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/mockup-pml-03.png"
                  alt="40 Chás Detox Hormonal"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold mb-2">40 Chás Detox Hormonal</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 leading-relaxed">
                  Descubra os chás naturais mais poderosos para desinchar, acelerar o metabolismo e derreter gordura abdominal, tudo direto da sua cozinha.
                </p>
                <span className="text-green-600 font-bold">Valor: R$ 67,00</span>
              </div>
            </div>
          </div>

          {/* BÔNUS EXCLUSIVOS OTIMIZADOS */}
          <div className="bg-yellow-50 border-2 border-yellow-300 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-yellow-800 mb-4 sm:mb-6">
              AINDA NÃO ACABOU! Você também vai receber...
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-start gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-lg">
                <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Cardápio Reset com Alimentos Funcionais</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Descubra o que colocar (e o que tirar) do seu prato para reduzir os sintomas naturalmente sem dietas malucas.</p>
                  <span className="text-green-600 font-bold text-xs sm:text-sm">Valor: R$ 47,00</span>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-lg">
                <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Protocolo da Libido Renovada</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Ative o desejo sexual com pequenos hábitos que restauram o prazer, sem cremes, sem química, sem tabu.</p>
                  <span className="text-green-600 font-bold text-xs sm:text-sm">Valor: R$ 67,00</span>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-lg">
                <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Diário da Transformação 50+</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Roteiro simples para aplicar o protocolo no seu ritmo, com marcações de progresso e lembretes práticos.</p>
                  <span className="text-green-600 font-bold text-xs sm:text-sm">Valor: R$ 47,00</span>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-lg">
                <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Manual do Sono Reparador</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">O Manual do Sono Reparador revela as estratégias naturais e cientificamente comprovadas para acabar com a insônia, o sono picado e o cansaço crônico que a menopausa traz.</p>
                  <span className="text-green-600 font-bold text-xs sm:text-sm">Valor: R$ 47,00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECAPITULAÇÃO COM PREÇOS OTIMIZADA */}
      <section className="py-6 sm:py-8 md:py-16 px-2 sm:px-3 md:px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-center text-primary mb-4 sm:mb-6 md:mb-8 font-[family-name:var(--font-space-grotesk)] px-2">
            Veja tudo que você vai receber com o **Protocolo Menopausa Leve**
          </h2>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">Protocolo Menopausa Leve</span>
                </div>
                <span className="line-through text-gray-500 text-sm sm:text-base">R$ 97,00</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">80 Receitas Termogênicas Anti-Menopausa</span>
                </div>
                <span className="line-through text-gray-500 text-sm sm:text-base">R$ 67,00</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">40 Chás Detox Hormonal</span>
                </div>
                <span className="line-through text-gray-500 text-sm sm:text-base">R$ 67,00</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-2">
                  <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">Cardápio Reset com Alimentos Funcionais</span>
                </div>
                <span className="line-through text-gray-500 text-sm sm:text-base">R$ 47,00</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-2">
                  <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">Protocolo da Libido Renovada</span>
                </div>
                <span className="line-through text-gray-500 text-sm sm:text-base">R$ 67,00</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-2">
                  <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">Diário da Transformação 50+</span>
                </div>
                <span className="line-through text-gray-500 text-sm sm:text-base">R$ 47,00</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-2">
                  <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">Manual do Sono Reparador</span>
                </div>
                <span className="line-through text-gray-500 text-sm sm:text-base">R$ 47,00</span>
              </div>
              
              <hr className="border-gray-300" />
              
              <div className="flex items-center justify-between text-base sm:text-lg font-bold">
                <span>Tudo isso deveria custar:</span>
                <span className="line-through text-red-500">R$ 486,00</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-2xl font-bold mb-4 px-2">
              Mas somente hoje você pode ter acesso ao <strong>"Protocolo Menopausa Leve"</strong> junto com todos os bônus por apenas
            </p>
          </div>
        </div>
      </section>

      {/* OFERTA FINAL COM PREÇO OTIMIZADA */}
      <section className="py-6 sm:py-8 md:py-16 px-2 sm:px-3 md:px-4 bg-gradient-to-r from-secondary/20 to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-red-100 border-2 border-red-500 p-3 sm:p-4 md:p-6 rounded-lg mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-red-700 mb-2">
              Essa oferta não vai ficar disponível por muito tempo, então aproveite agora!
            </h3>
          </div>

          <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg mb-4 sm:mb-6 md:mb-8 shadow-lg">
            <div className="text-center mb-4 sm:mb-6">
              <p className="text-base sm:text-lg mb-2">Por apenas 8x de:</p>
              <p className="text-4xl sm:text-6xl md:text-8xl font-bold text-secondary mb-2">
                R$<span className="text-5xl sm:text-7xl md:text-9xl">5</span>,34
              </p>
              <p className="text-base sm:text-lg md:text-xl">ou R$ 37,00 à vista</p>
            </div>

            <Button
              onClick={handleCheckout}
              size="lg"
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base sm:text-lg md:text-xl px-4 sm:px-6 md:px-12 py-3 sm:py-4 md:py-6 pulse-glow mb-4 min-h-[48px] sm:min-h-[56px] md:min-h-[64px]"
            >
              <span className="text-center leading-tight">QUERO COMEÇAR O RESET HORMONAL HOJE</span>
            </Button>

            <div className="text-center">
              <Image
                src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/compra-segura-1024x147-1.png"
                alt="Compra Segura"
                width={1024}
                height={147}
                className="mx-auto max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSO DE COMPRA OTIMIZADO */}
      <section className="py-6 sm:py-8 md:py-16 px-2 sm:px-3 md:px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-primary mb-6 sm:mb-8 px-2">
            Compre agora e receba seu acesso no e-mail imediatamente!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-2xl">📧</span>
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-2">ACESSE SEU E-MAIL</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Assim que finalizar sua compra, você vai receber seu acesso no email.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-2xl">⬇️</span>
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-2">ACESSE O PRODUTO</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Você vai receber todos os entregáveis junto com os bônus imediatamente para usar quando e como quiser.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-2xl">✅</span>
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-2">TUDO PRONTO!</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Agora é só aplicar o Reset Hormonal em 14 Dias e retomar sua qualidade de vida
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DUAS OPÇÕES - OBJEÇÃO HANDLING OTIMIZADA */}
      <section className="py-6 sm:py-8 md:py-16 px-2 sm:px-3 md:px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-center text-primary mb-6 sm:mb-8 font-[family-name:var(--font-space-grotesk)] px-2">
            "Agora Você Tem Duas Escolhas:"
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <Card className="p-4 sm:p-6 border-2 border-red-300 bg-red-50">
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-white text-lg sm:text-2xl">❌</span>
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-red-700">ESCOLHA 1: Continuar Sofrendo</h3>
                <p className="text-xs sm:text-sm md:text-base text-red-800 leading-relaxed">
                  Ignorar tudo que acabou de ler e continuar acordando cansada, vivendo irritada, se sentindo invisível, pesando mais a cada mês, evitando intimidade... Aceitar que "é assim mesmo" e viver uma vida pela metade.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 border-2 border-green-300 bg-green-50">
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-white text-lg sm:text-2xl">✅</span>
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-green-700">ESCOLHA 2: Retomar Sua Vida</h3>
                <p className="text-xs sm:text-sm md:text-base text-green-800 leading-relaxed">
                  Começar HOJE o Reset Hormonal em 14 Dias e estar se sentindo mulher de novo. Acordar disposta, dormir tranquila, ter energia, autoestima, prazer... Voltar a ser VOCÊ.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-base sm:text-lg md:text-xl font-bold text-primary mb-4 sm:mb-6 px-2">
              Eu sei qual escolha faz mais sentido. E você também sabe.
            </p>
          </div>
        </div>
      </section>

      {/* AUTORIDADE - DRA. MARIANA FERNANDES OTIMIZADA */}
      <section className="py-6 sm:py-8 md:py-16 px-2 sm:px-3 md:px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-center text-primary mb-4 sm:mb-6 md:mb-8 font-[family-name:var(--font-space-grotesk)] px-2">
            Quem criou o Protocolo Menopausa Leve?
          </h2>

          <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
<div className="flex-shrink-0">
  <Image
    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/0be4d422-17fb-4469-94c1-65abb89c28df.png"
    alt="Dra. Mariana Fernandes"
    width={320}
    height={400}
    className="w-48 h-60 sm:w-56 sm:h-70 md:w-80 md:h-96 object-cover border-4 border-secondary shadow-lg"
  />
</div>
              <div className="text-center md:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2">Dra. Mariana Fernandes</h3>
                <p className="text-secondary font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Especialista em Medicina Integrativa e Fitoterapia</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
                    <span>15+ anos de experiência</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
                    <span>Criadora do Método Protocolo Menopausa Leve</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
                    <span>15.000+ mulheres transformadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
                    <span>Método natural comprovado</span>
                  </div>
                </div>

                <div className="bg-secondary/10 p-3 sm:p-4 rounded-lg">
                  <p className="text-xs sm:text-sm md:text-base italic leading-relaxed">
                    "Médica especialista em Medicina Integrativa e Fitoterapia com mais de 15 anos de experiência que já ajudou mais de 28 mil mulheres a aliviar os sintomas da menopausa. Ela acredita que o intestino é essencial para a regulação hormonal e, com base nisso, criou o Método Protocolo Menopausa Leve — um protocolo natural, sem hormônios, que usa alimentos termogênicos e ajustes de rotina para equilibrar o corpo. Milhares de mulheres já têm vivido com mais leveza, autonomia e bem-estar."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA OTIMIZADA */}
      <section className="py-6 sm:py-8 md:py-16 px-2 sm:px-3 md:px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-primary mb-4 sm:mb-6 md:mb-8 font-[family-name:var(--font-space-grotesk)] px-2">
            "Garantia Blindada: Funciona ou Seu Dinheiro Volta"
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="flex-1">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-green-700 mb-3 sm:mb-4">
                GARANTIA BLINDADA DE 7 DIAS
              </h3>
              <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed">
                Você tem <strong>7 dias para testar tudo no conforto da sua casa</strong>. Se não ficar 100% satisfeita - se não sentir diferença, se não gostar, se achar que não vale a pena - é só mandar um email e devolvemos <strong>cada centavo</strong>.
              </p>
              <p className="text-xs sm:text-sm md:text-base font-bold text-green-800">
                Sem pergunta. Sem burocracia. Sem enrolação.<br/>
                O risco é todo nosso. O benefício é todo seu.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/garantiaPrancheta-1-1.png"
                alt="Garantia de 7 dias"
                width={192}
                height={192}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover"
              />
            </div>
          </div>

          <div className="bg-green-100 border-2 border-green-500 p-3 sm:p-4 md:p-6 rounded-lg mt-6 sm:mt-8">
            <p className="text-sm sm:text-base md:text-lg font-bold text-green-800">
              VOCÊ NÃO TEM NADA A PERDER E SUA VIDA NORMAL PARA RECUPERAR
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL OTIMIZADO */}
      <section className="py-6 sm:py-8 md:py-16 px-2 sm:px-3 md:px-4 bg-gradient-to-r from-secondary/20 to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-red-100 border-2 border-red-500 p-3 sm:p-4 md:p-6 rounded-lg mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-red-700 mb-2">
              Essa oferta não vai ficar disponível por muito tempo, então aproveite agora!
            </h3>
          </div>

          <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg mb-4 sm:mb-6 md:mb-8 shadow-lg">
            <div className="text-center mb-4 sm:mb-6">
              <p className="text-base sm:text-lg mb-2">Por apenas 8x de:</p>
              <p className="text-4xl sm:text-6xl md:text-8xl font-bold text-secondary mb-2">
                R$<span className="text-5xl sm:text-7xl md:text-9xl">5</span>,34
              </p>
              <p className="text-base sm:text-lg md:text-xl">ou R$ 37,00 à vista</p>
            </div>

            <Button
              onClick={handleCheckout}
              size="lg"
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base sm:text-lg md:text-xl px-4 sm:px-6 md:px-12 py-3 sm:py-4 md:py-6 pulse-glow mb-4 min-h-[48px] sm:min-h-[56px] md:min-h-[64px]"
            >
              <span className="text-center leading-tight">QUERO COMEÇAR O RESET HORMONAL HOJE</span>
            </Button>

            <div className="text-center">
              <Image
                src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/compra-segura-1024x147-1.png"
                alt="Compra Segura"
                width={1024}
                height={147}
                className="mx-auto max-w-full h-auto"
              />
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 p-3 sm:p-4 rounded-lg">
            <p className="text-sm sm:text-base font-bold text-green-800">
              💚 Mais de 15.000 mulheres já se libertaram dos sintomas da menopausa
            </p>
            <p className="text-xs sm:text-sm text-green-700 leading-relaxed">
              "Estava gastando R$ 800 por mês em hormônios. Em 10 dias os suores pararam e economizei uma fortuna!" - Ana Paula Santos, 48 anos
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER OTIMIZADO */}
      <footer className="bg-muted py-4 sm:py-6 md:py-8 px-2 sm:px-3 md:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs md:text-sm text-muted-foreground mb-2 leading-relaxed">
            <strong>Aviso Legal:</strong> As informações disponibilizadas neste site têm caráter exclusivamente educacional e informativo. O produto apresentado não garante resultados específicos, uma vez que estes podem variar conforme as particularidades de cada indivíduo. Recomenda-se a consulta com um profissional qualificado para orientações complementares.
          </p>
          <p className="text-xs text-muted-foreground">
            © 2024 Protocolo Menopausa Leve. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}