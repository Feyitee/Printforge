import "./globals.css";
import { Albert_Sans } from "next/font/google";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={albertSans.className}>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <div className="relative">
              {/* Desktop logo */}
              <img
                src="/printforge-logo.svg"
                alt="PrintForge Logo"
                className="w-[200px] h-auto hidden md:block"
              />
              {/* Mobile logo */}
              <img
                src="/printforge-logo-icon.svg"
                alt="PrintForge Logo"
                className="w-[40px] h-auto block md:hidden"
              />
            </div>
            <ul className="flex items-center gap-2.5">
              <p>3D Models</p>
              <p>About</p>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
