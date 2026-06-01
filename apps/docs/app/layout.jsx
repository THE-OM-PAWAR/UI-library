import Navbar from "@/components/globals/Navbar";
import SoundToggle from "@/components/globals/SoundToggle";
import { SoundProvider } from "@/context/SoundContext";
import "./globals.css";

export const metadata = {
    title: "Frost UI",
    description: "A modern React UI component library",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <SoundProvider>
                    <section id="main">
                        <Navbar />
                        {children}
                        <SoundToggle />
                    </section>
                </SoundProvider>
            </body>
        </html>
    );
}
