import "../styles/globals.css";
import { Syne } from "@next/font/google";
import { ThemeProvider } from "./ThemeContex";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne"
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${syne.variable} font-sans`}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
