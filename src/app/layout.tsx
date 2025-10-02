// app/layout.tsx
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Providers } from "@/components/providers/Providers";
import { ThemeToggle } from "@/components/themeToggle/ThemeToggle";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <html lang="pt-BR" className="h-full" suppressHydrationWarning>
  <body className="min-h-screen bg-surface dark:bg-surface-dark text-ink antialiased">
    <Providers>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>

      {/* Botão flutuante global */}
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle />
      </div>
    </Providers>
  </body>
</html>
  );
}
