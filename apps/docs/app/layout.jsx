import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "UI Library - Documentation",
    description: "A modern React UI component library",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
