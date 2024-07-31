import type { Metadata } from "next";
import { Inter, DM_Sans, Arizonia  } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";
import clsx from "clsx";
import { AuthProvider } from "@/components/authContext";
import "./globals.css";
import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { Banner } from "@/components/Banner";


const dmsans = DM_Sans({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Kleon",
  description: "An AI driven SQL query interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmsans.className, "antialiased")}>
      <Head>
        <link rel="icon" href="/next.svg" type="image/svg+xml" />
      </Head>
        <AuthProvider>
          <Banner />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
