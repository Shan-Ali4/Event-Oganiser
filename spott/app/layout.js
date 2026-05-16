
import "./globals.css";

export const metadata = {
  title: "SPOTT",
  description: "Discover and create your own amazing events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning
    >
      <body className={`bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white`}>
        {/* {Header} */}

        <main className="relative min-h-screen container mx-auto pt-40 md:pt-32">{children}</main>

        {/* {Footer} */}
      </body>
    </html>
  );
}
