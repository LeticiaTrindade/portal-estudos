import Header from "../components/header";
import Footer from "../components/footer";
import './globals.css';


type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow justify-around">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}