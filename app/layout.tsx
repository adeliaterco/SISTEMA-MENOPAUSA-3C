import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "SOS Menopausa - Reconecte Cérebro e Ovários em 21 Dias",
  description:
    "Descubra o protocolo natural que restaura a conexão cérebro-ovário e elimina os sintomas da menopausa em 21 dias. Pare de esquecer palavras, controle os fogachos e recupere sua vida.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <head>
        {/* UTM Tracking */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          strategy="afterInteractive"
        />

        {/* Pixel Utmify */}
        <Script
          id="utmify-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "68a3be6476648f3b8032cfe4";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `,
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
