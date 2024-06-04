import { Providers } from "./providers";
import { Navbar } from "@/components/navbar/Navbar";
import "./globals.css";
import { getCurrentUser } from "./action";

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body>
        <Providers>
          <div className="relative flex flex-col h-screen">
            <Navbar currentUser={currentUser} />
            <main className="container mx-auto max-w-7xl pt-16 px-2 flex-grow">{children}</main>
            <footer className="w-full flex items-center justify-center py-3"></footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
