import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Betafore",
  description: "Simple authentication project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="main-container">
          <div className="w-full max-w-4xl">{children}</div>
        </section>
      </body>
    </html>
  );
}
