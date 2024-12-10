import { Inter } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../AuthContext";
import SessionProvider from "./SessionProvider";

const inter = Inter({ subsets: ["latin"] });

const raleway_init = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Wizzy | Learn in a Flash!",
  description: "AI Flashcards App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway_init.variable}>
        <SessionProvider>
          <AuthProvider>{children}</AuthProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
