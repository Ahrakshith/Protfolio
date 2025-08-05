import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Rakshith A H - Portfolio",
  description: "Aspiring Software Engineer | Python Developer | Data Analyst - Creating innovative solutions with modern technologies",
  keywords: ["software engineer", "python developer", "data analyst", "web development", "machine learning", "portfolio", "rakshith"],
  authors: [{ name: "Rakshith A H" }],
  openGraph: {
    title: "Rakshith A H - Portfolio",
    description: "Aspiring Software Engineer | Python Developer | Data Analyst - Creating innovative solutions with modern technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
