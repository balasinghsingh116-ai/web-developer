import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "919205191336";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-black/40"
        style={{ background: "#25D366" }}
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
        >
          <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.658 4.897 1.906 7.02L2 30l7.187-1.883A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.538a11.488 11.488 0 0 1-5.86-1.605l-.42-.25-4.267 1.118 1.138-4.156-.274-.427A11.516 11.516 0 0 1 4.46 16.003c0-6.37 5.174-11.543 11.543-11.543 6.37 0 11.543 5.173 11.543 11.543 0 6.37-5.173 11.535-11.543 11.535zm6.33-8.64c-.347-.174-2.055-1.013-2.374-1.129-.32-.116-.553-.174-.786.174-.233.347-.9 1.129-1.103 1.362-.203.232-.406.26-.753.086-.347-.174-1.464-.54-2.788-1.72-1.03-.917-1.726-2.05-1.929-2.397-.202-.347-.021-.534.152-.708.156-.155.347-.405.52-.608.174-.202.232-.347.348-.578.116-.232.058-.434-.029-.608-.087-.174-.786-1.895-1.077-2.594-.283-.682-.57-.59-.786-.6l-.668-.012a1.28 1.28 0 0 0-.927.434c-.32.347-1.21 1.183-1.21 2.883 0 1.7 1.239 3.343 1.412 3.575.174.232 2.44 3.726 5.91 5.224.826.356 1.47.569 1.972.728.828.263 1.583.226 2.179.137.665-.1 2.055-.84 2.346-1.652.29-.812.29-1.508.203-1.652-.086-.145-.32-.232-.667-.406z" />
        </svg>

        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: "rgba(37,211,102,0.35)" }}
        />
      </motion.a>
    </div>
  );
}
