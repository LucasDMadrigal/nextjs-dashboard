import { montserrat } from "./ui/fonts";
import "./ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <h1>Holis soy un titulo</h1>
        {children}
        <footer className="py-8 flex justify-center align-center bg-gray-100">
          Hecho con ♥ por el equipo de Next.js 
        </footer>
      </body>
    </html>
  );
}
