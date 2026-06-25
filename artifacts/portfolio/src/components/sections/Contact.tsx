import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Let's Build Your Website</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to start your next project? Reach out and let's discuss how we can bring your vision to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 space-y-8"
            >
              <div className="glass p-8 rounded-2xl border border-white/5 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-6">Contact Information</h3>
                  <p className="text-muted-foreground mb-8">
                    I'm currently available for freelance work and internship opportunities.
                  </p>
                  
                  <div className="space-y-4">
                    <a href="mailto:balasinghsingh116@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground">
                        <Mail size={18} />
                      </div>
                      <span>balasinghsingh116@gmail.com</span>
                    </a>
                    <a href="tel:+919205191336" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground">
                        <Phone size={18} />
                      </div>
                      <span>+91 92051 91336</span>
                    </a>
                  </div>
                </div>

                <div className="pt-12">
                  <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">Connect with me</p>
                  <div className="flex gap-4">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-primary hover:-translate-y-1 transition-all">
                      <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-primary hover:-translate-y-1 transition-all">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-3"
            >
              <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-2xl border border-white/5 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
