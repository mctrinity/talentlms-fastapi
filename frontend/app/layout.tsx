import "./globals.css";  // ✅ Ensure it's a relative import
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
