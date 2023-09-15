import Header from "./Header";
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
        <main className="m-auto p-4">{children}</main>
      </body>
    </html>
  );
}
