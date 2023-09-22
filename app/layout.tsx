import Header from "./Header";
import Footer from "./Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="m-auto bg-gray-100 p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
