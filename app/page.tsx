"use client"

import { useEffect, useState, useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, CheckCircle, Award, BookOpen, Gift, Star, Clock, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function MenopausaLanding() {
  const checkoutUrl = "https://pay.cakto.com.br/3992hmw_531473"
  const [pessoasComprando, setPessoasComprando] = useState(357)

  const handleCheckout = useCallback(() => {
    window.open(checkoutUrl, "_blank")
  }, [checkoutUrl])

  useEffect(() => {
    const comprandoTimer = setInterval(() => {
      setPessoasComprando((prev) => {
        const variacao = Math.floor(Math.random() * 7) - 3
        let novoNumero = prev + variacao
        if (novoNumero < 330) novoNumero = 333
        if (novoNumero > 390) novoNumero = 388
        return novoNumero
      })
    }, 15000)

    return () => clearInterval(comprandoTimer)
  }, [])

  const names = useMemo(
    () => [
      "Maria Helena",
      "Elisabete",
      "Sônia Regina",
      "Marlene",
      "Vera Lúcia",
      "Rosângela",
      "Márcia Aparecida",
      "Cláudia Cristina",
      "Cecília",
      "Adriana Souza",
      "Neide",
      "Marta",
      "Tereza",
      "Ângela",
      "Irene",
      "Regina Célia",
      "Débora",
      "Rosa Maria",
      "Cristina",
      "Valéria",
    ],
    [],
  )

  const showNotification = useCallback((name: string) => {
    if (typeof window === "undefined") return

    const notification = document.createElement("div")
    notification.className =
      "fixed bottom-4 left-2 right-2 sm:left-5 sm:right-auto bg-white text-gray-800 border-l-4 border-green-500 p-3 rounded-lg shadow-lg max-w-sm sm:max-w-80 z-50 opacity-0 transform -translate-x-5 transition-opacity duration-300"
    notification.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span class="text-white text-xs">✓</span>
        </div>
        <div>
          <p class="text-sm font-medium">${name} acabou de adquirir</p>
          <p class="text-xs text-gray-600">Protocolo Menopausa Leve</p>
        </div>
      </div>
    `

    document.body.appendChild(notification)

    requestAnimationFrame(() => {
      notification.style.opacity = "1"
      notification.style.transform = "translateX(0)"
    })

    setTimeout(() => {
      notification.style.opacity = "0"
      notification.style.transform = "translateX(-100%)"
      setTimeout(() => notification.remove(), 300)
    }, 4000)
  }, [])

  useEffect(() => {
    const notificationTimer = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)]
      showNotification(randomName)
    }, 20000)

    return () => clearInterval(notificationTimer)
  }, [names, showNotification])

  const problemasData = useMemo(
    () => [
      {
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/e89868bf-9724-454b-a0d1-1505961a5f5d.png",
        alt: "Ondas de calor na menopausa",
        text: "Ondas de calor que chegam do nada e te fazem suar como se estivesse num forno",
      },
      {
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/f4b6efa0-2015-47e2-8fca-e36e65480721.png",
        alt: "Insônia na menopausa",
        text: "Noites em claro, revirada na cama, pensando em mil coisas",
      },
      {
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/440cb8a8-09e8-49ea-922b-ebabbaf52411.png",
        alt: "Ganho de peso na menopausa",
        text: "Ganho de peso inexplicável, mesmo comendo igual ou menos",
      },
      {
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/3a8dd256-05fd-4d86-8ebb-7757801a7328.png",
        alt: "Irritabilidade na menopausa",
        text: "Irritabilidade constante, explodindo por qualquer coisa",
      },
      {
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/8ac2c6c3-9383-4dca-8a1a-613ddd9fe0df.png",
        alt: "Fadiga na menopausa",
        text: "Cansaço extremo que não passa nem dormindo",
      },
      {
        image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/50394c5a-8ecf-4279-899b-88abd54d2214.png",
        alt: "Ressecamento na menopausa",
        text: "Ressecamento íntimo que afeta sua vida conjugal",
      },
    ],
    [],
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* HERO SECTION */}
      <section className="py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4 sm:mb-6">
            <Badge className="bg-red-600 text-white px-3 sm:px-4 py-1 sm:py-2 text-xs font-bold mb-3 sm:mb-4 animate-pulse">
              🔥 OFERTA LIMITADA - ÚLTIMAS HORAS
            </Badge>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-1">
              <span className="text-red-600">PARE DE SOFRER</span> com a Menopausa!
              <br />
              <span className="text-purple-700">Protocolo Científico</span> que já
              <br />
              <span className="bg-yellow-300 px-1 sm:px-2 py-1 rounded text-sm sm:text-base">
                Transformou +15.000 Mulheres
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed px-1">
              Descubra o método natural e científico que elimina ondas de calor, insônia, ganho de peso e irritabilidade
              em apenas 14 dias - sem hormônios sintéticos!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-center">
            <div className="order-2 lg:order-1 space-y-3 sm:space-y-4">
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="text-green-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">O Protocolo dos 3 Pilares que Reequilibra Seus Hormônios em 14 Dias (Sem Depender de Remédios Caros)</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Sem hormônios sintéticos ou medicamentos com efeitos colaterais
                </p>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Resultados em 14 Dias</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Protocolo testado e aprovado por 15.000 mulheres
                </p>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-lg border-l-4 border-purple-500">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="text-purple-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Garantia de 7 dias</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Se não funcionar, devolvemos 100% do seu dinheiro</p>
              </div>

              <div className="bg-red-600 text-white p-3 sm:p-4 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Users className="w-4 h-4" />
                  <span className="font-bold text-sm">{pessoasComprando} pessoas comprando agora!</span>
                </div>
                <p className="text-xs opacity-90">Não perca sua vaga!</p>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative bg-white rounded-2xl shadow-2xl p-3 sm:p-4 transform hover:scale-105 transition-all duration-300">
                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-red-600 text-white px-3 sm:px-4 py-1 text-xs font-bold">
                    TRANSFORMAÇÃO REAL
                  </Badge>
                </div>

                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/1-dobra.webp"
                    alt="Transformação: Antes e Depois do Protocolo Menopausa Leve"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover aspect-[3/2]"
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />

                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 flex items-end justify-start p-1 sm:p-2">
                      <div className="bg-red-600/90 text-white px-1 sm:px-2 py-1 rounded text-xs font-bold">
                        ❌ ANTES: Sofrendo
                      </div>
                    </div>
                    <div className="w-1/2 flex items-end justify-end p-1 sm:p-2">
                      <div className="bg-green-600/90 text-white px-1 sm:px-2 py-1 rounded text-xs font-bold">
                        ✅ DEPOIS: Radiante
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 sm:mt-8 px-2">
            <Button
              onClick={handleCheckout}
              className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse"
            >
              <span className="block sm:hidden">🔥 TRANSFORMAR MINHA VIDA!</span>
              <span className="hidden sm:block">🔥 QUERO TRANSFORMAR MINHA VIDA AGORA!</span>
            </Button>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">⚡ Acesso imediato após a compra</p>
          </div>
        </div>
      </section>

      {/* PROBLEMAS SECTION */}
      <section className="py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-red-700 mb-4 sm:mb-6 px-1">
            Você Reconhece Estes Sintomas Devastadores?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {problemasData.map((item, index) => (
              <Card
                key={index}
                className="p-3 sm:p-4 border-l-4 border-red-500 bg-red-50 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="w-full h-32 sm:h-40 mb-3 rounded-lg overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.alt}
                      width={351}
                      height={192}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 351px"
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 text-base flex-shrink-0">❌</span>
                    <span className="text-xs sm:text-sm font-medium leading-tight">{item.text}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8 px-2">
            <div className="bg-red-100 border-2 border-red-300 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
              <p className="text-sm sm:text-base md:text-lg font-bold text-red-800 mb-2">
                "Se você se identificou com pelo menos 3 desses sintomas..."
              </p>
              <p className="text-xs sm:text-sm text-red-700">
                Então você PRECISA conhecer o Protocolo Menopausa Leve HOJE mesmo!
              </p>
            </div>

            <Button
              onClick={handleCheckout}
              className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span className="block sm:hidden">✅ ACABAR COM OS SINTOMAS</span>
              <span className="hidden sm:block">✅ SIM! QUERO ACABAR COM ESSES SINTOMAS</span>
            </Button>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO SECTION */}
      <section className="py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-green-700 mb-4 sm:mb-6 px-1">
            A Solução Que Vai Mudar Sua Vida Para Sempre!
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-center mb-6 sm:mb-8">
            <div>
              <Image
                src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/64878600-d0fd-48fb-a67d-7a54bea3302c.png"
                alt="Protocolo Menopausa Leve - Capa do Método"
                width={400}
                height={480}
                className="w-full max-w-xs sm:max-w-sm mx-auto h-auto shadow-2xl rounded-lg"
                loading="lazy"
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 400px"
              />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Protocolo Menopausa Leve</h3>

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Um método revolucionário desenvolvido por especialistas que combina nutrição funcional, fitoterapia e
                técnicas naturais para equilibrar seus hormônios de forma segura e eficaz.
              </p>

              <div className="space-y-2">
                {[
                  "✅ Elimina ondas de calor em até 7 dias",
                  "✅ Melhora a qualidade do sono desde a primeira semana",
                  "✅ Reduz a irritabilidade e melhora o humor",
                  "✅ Acelera o metabolismo e facilita a perda de peso",
                  "✅ Aumenta a energia e disposição",
                  "✅ Melhora a saúde íntima e libido",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 p-3 sm:p-4">
            <CardContent className="p-0 text-center">
              <h3 className="text-base sm:text-lg font-bold text-orange-800 mb-3">🎯 O Que Você Vai Receber:</h3>

              <ul className="text-left space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-800 max-w-2xl mx-auto">
                <li>
                  📚 <strong>Guia Completo do Protocolo</strong> - Passo a passo detalhado
                </li>
                <li>
                  🥗 <strong>Cardápio de 14 Dias</strong> - Receitas deliciosas e funcionais
                </li>
                <li>
                  🌿 <strong>Manual de Fitoterapia</strong> - Plantas medicinais específicas
                </li>
                <li>
                  💊 <strong>Guia de Suplementação</strong> - O que realmente funciona
                </li>
                <li>
                  🧘‍♀️ <strong>Técnicas de Relaxamento</strong> - Para controlar o estresse
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SEÇÃO DE AGITAÇÃO EMOCIONAL */}
      <section className="py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-red-700 mb-4 sm:mb-6 px-1">
            "Eu Sei... A Menopausa Roubou Quem Você Era, Não Foi?"
          </h2>

          <div className="bg-red-100 border-2 border-red-200 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
            <div className="mb-4 sm:mb-6">
              <Image
                src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/mpyf2kezwt2hkweuifiw.webp"
                alt="Mulher sofrendo com menopausa"
                width={800}
                height={450}
                className="w-full h-auto rounded-lg shadow-lg aspect-video object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="text-center mb-4">
              <p className="text-xs sm:text-sm md:text-base text-red-800 font-medium mb-3 leading-relaxed">
                Você acorda e já se sente derrotada antes mesmo do dia começar.
                <br />
                Olha no espelho e pensa: "Quem é essa mulher?"
                <br />
                Seu corpo não obedece mais você.
                <br />
                Sua energia sumiu.
                <br />
                Sua paciência acabou.
                <br />
                Sua autoestima despencou.
              </p>

              <p className="text-sm sm:text-base font-bold text-red-900 mb-3">
                E o pior de tudo... você se sente SOZINHA nessa batalha.
              </p>

              <p className="text-xs sm:text-sm text-red-700 leading-relaxed">
                Médicos dizem que é "normal" e que você tem que "aceitar".
                <br />
                Família não entende por que você está sempre irritada.
                <br />
                Amigas acham que você está exagerando.
                <br />
                <strong>Mas EU ENTENDO você. E tenho a solução!</strong>
              </p>
            </div>
          </div>

          <div className="text-center px-2">
            <div className="bg-green-100 border-2 border-green-300 p-3 sm:p-4 rounded-lg mb-4">
              <h3 className="text-base sm:text-lg font-bold text-green-800 mb-3">
                🌟 Imagine Acordar Amanhã e Se Sentir Assim:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-green-700">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>Energia para enfrentar o dia</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>Sono reparador e tranquilo</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>Humor equilibrado e paciência</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>Corpo que obedece você</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>Autoestima lá em cima</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>Relacionamentos harmoniosos</span>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base font-bold text-gray-900 mb-4">
              Isso NÃO é um sonho. É o que acontece quando você segue o Protocolo Menopausa Leve!
            </p>

            <Button
              onClick={handleCheckout}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse"
            >
              <span className="block sm:hidden">💜 VOLTAR A SER EU MESMA!</span>
              <span className="hidden sm:block">💜 QUERO VOLTAR A SER EU MESMA!</span>
            </Button>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-primary mb-4 sm:mb-6 px-1">
            Veja o Que Nossas Alunas Estão Dizendo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              {
                name: "Maria José, 52 anos",
                text: "Em 15 dias as ondas de calor sumiram completamente! Não acreditava que seria tão rápido. Minha vida mudou!",
                image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/05/8db332e349f045c0e1949cb88c6096d4.jpg",
              },
              {
                name: "Ana Paula, 48 anos",
                text: "Perdi 8kg em 30 dias seguindo o protocolo. Meu marido disse que eu voltei a ser a mulher que ele conheceu!",
                image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/06/01.png",
              },
              {
                name: "Rosana, 55 anos",
                text: "Dormia 2-3 horas por noite. Agora durmo 8 horas seguidas! É um milagre! Obrigada Dra. Mariana!",
                image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/06/02.png",
              },
            ].map((depoimento, index) => (
              <Card key={index} className="p-3 sm:p-4 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-3">
                    <Image
                      src={depoimento.image || "/placeholder.svg"}
                      alt={`Foto de ${depoimento.name}`}
                      width={40}
                      height={40}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                      loading="lazy"
                      sizes="48px"
                    />
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-gray-900">{depoimento.name}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">"{depoimento.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8 px-2">
            <div className="bg-yellow-100 border-2 border-yellow-300 p-3 sm:p-4 rounded-lg mb-4">
              <p className="text-sm sm:text-base font-bold text-yellow-800 mb-1">
                🌟 Mais de 15.000 mulheres já transformaram suas vidas!
              </p>
              <p className="text-xs sm:text-sm text-yellow-700">Você será a próxima história de sucesso?</p>
            </div>

            <Button
              onClick={handleCheckout}
              className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span className="block sm:hidden">⭐ SER A PRÓXIMA!</span>
              <span className="hidden sm:block">⭐ SIM! QUERO SER A PRÓXIMA!</span>
            </Button>
          </div>
        </div>
      </section>

      {/* AUTORIDADE - DRA. MARIANA FERNANDES */}
      <section className="py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-primary mb-4 sm:mb-6 px-1">
            Quem criou o Protocolo Menopausa Leve?
          </h2>

          <div className="bg-card p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <Image
                  src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/0be4d422-17fb-4469-94c1-65abb89c28df.webp"
                  alt="Dra. Mariana Fernandes"
                  width={240}
                  height={300}
                  className="w-48 h-60 sm:w-60 sm:h-72 object-cover border-4 border-secondary shadow-lg"
                  loading="lazy"
                  sizes="(max-width: 768px) 192px, 240px"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">Dra. Mariana Fernandes</h3>
                <p className="text-secondary font-semibold mb-3 text-sm sm:text-base">
                  Especialista em Medicina Integrativa e Fitoterapia
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm mb-3">
                  {[
                    { icon: Award, text: "15+ anos de experiência" },
                    { icon: BookOpen, text: "Criadora do Método Protocolo Menopausa Leve" },
                    { icon: Users, text: "+15.000 mulheres atendidas" },
                    { icon: Star, text: "98% de taxa de sucesso" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
                  "Após anos estudando os efeitos da menopausa e testando diferentes abordagens naturais, desenvolvi um
                  protocolo que realmente funciona. Não é sobre aceitar o sofrimento, é sobre recuperar sua qualidade de
                  vida de forma natural e segura."
                </p>

                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <Badge variant="secondary" className="text-xs">
                    CRM 16615-SP
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Pós-graduação USP
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Especialista em Fitoterapia
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA ESPECIAL */}
      <section className="py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 bg-gradient-to-r from-red-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-red-600 text-white px-4 py-1 sm:py-2 text-xs font-bold mb-4 animate-pulse">
            🔥 OFERTA ESPECIAL - ÚLTIMAS HORAS
          </Badge>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            De <span className="line-through text-red-500">R$ 297</span> por apenas
          </h2>

          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-3">R$ 37</div>

          <p className="text-base sm:text-lg text-gray-700 mb-6">Ou 9x de apenas R$ 5,02 no cartão</p>

          <div className="bg-yellow-100 border-2 border-yellow-300 p-4 sm:p-6 rounded-lg mb-6">
            <h3 className="text-base sm:text-lg font-bold text-yellow-800 mb-3">🎁 BÔNUS EXCLUSIVOS (Valor: R$ 347)</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-yellow-700">
              <div className="flex items-center gap-2">
                <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600 flex-shrink-0" />
                <span>E-book: Receitas Anti-Inflamatórias</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600 flex-shrink-0" />
                <span>Guia: Exercícios para Menopausa</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600 flex-shrink-0" />
                <span>Planilha: Controle de Sintomas</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600 flex-shrink-0" />
                <span>Acesso ao Grupo VIP</span>
              </div>
            </div>
          </div>

          <div className="bg-green-100 border-2 border-green-300 p-4 sm:p-6 rounded-lg mb-6">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              <h3 className="text-base sm:text-lg font-bold text-green-800">Garantia Incondicional de 7 Dias</h3>
            </div>
            <p className="text-xs sm:text-sm text-green-700">
              Se você não ficar 100% satisfeita com os resultados, devolvemos todo seu dinheiro. Sem perguntas, sem
              burocracia!
            </p>
          </div>

          <div className="space-y-3 px-2">
            <Button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse"
            >
              <span className="block sm:hidden">🔥 GARANTIR MINHA VAGA!</span>
              <span className="hidden sm:block">🔥 QUERO GARANTIR MINHA VAGA AGORA!</span>
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Acesso imediato após a confirmação do pagamento</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-red-600 font-semibold">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{pessoasComprando} pessoas comprando agora!</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-900 mb-6">
            Perguntas Frequentes
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                q: "O protocolo funciona para qualquer idade?",
                a: "Sim! O protocolo foi desenvolvido para mulheres em pré-menopausa, menopausa e pós-menopausa. Os princípios naturais funcionam independente da idade.",
              },
              {
                q: "Preciso parar meus medicamentos?",
                a: "Não! O protocolo é complementar e natural. Sempre consulte seu médico antes de fazer qualquer alteração em medicamentos.",
              },
              {
                q: "Em quanto tempo vejo resultados?",
                a: "A maioria das mulheres relatam melhoras significativas nos primeiros 7-14 dias, com resultados completos em até 14 dias.",
              },
              {
                q: "E se não funcionar para mim?",
                a: "Você tem 7 dias de garantia total. Se não ficar satisfeita, devolvemos 100% do seu investimento.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-3 sm:p-4">
                <CardContent className="p-0">
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-gray-700">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* URGÊNCIA FINAL */}
      <section className="py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">⏰ Esta Oferta Expira em Breve!</h2>

          <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
            Não deixe a menopausa roubar mais um dia da sua felicidade.
            <br />
            Sua transformação começa AGORA!
          </p>

          <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
            <p className="text-sm sm:text-base font-semibold mb-3">
              🚨 ATENÇÃO: Apenas {pessoasComprando} vagas restantes!
            </p>
            <p className="text-xs sm:text-sm opacity-80">
              Após esgotar, o protocolo só estará disponível novamente por R$ 297
            </p>
          </div>

          <div className="px-2">
            <Button
              onClick={handleCheckout}
              className="w-full bg-white text-red-600 hover:bg-gray-100 px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 animate-bounce"
            >
              <span className="block sm:hidden">🔥 GARANTIR TRANSFORMAÇÃO!</span>
              <span className="hidden sm:block">🔥 GARANTIR MINHA TRANSFORMAÇÃO AGORA!</span>
            </Button>
          </div>

          <p className="text-xs sm:text-sm mt-3 sm:mt-4 opacity-80">
            ✅ Acesso imediato • ✅ Garantia de 7 dias • ✅ Suporte completo
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-4 sm:py-6 px-2 sm:px-4 bg-gray-900 text-white text-center">
        <p className="text-xs sm:text-sm opacity-80">© 2025 Protocolo Menopausa Leve. Todos os direitos reservados.</p>
        <p className="text-xs opacity-60 mt-1 sm:mt-2">
          Este produto não substitui o acompanhamento médico. Consulte sempre um profissional de saúde.
        </p>
      </footer>
    </div>
  )
}
