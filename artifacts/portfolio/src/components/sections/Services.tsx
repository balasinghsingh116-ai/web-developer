import { motion } from "framer-motion";
import { Monitor, Smartphone, Briefcase, Zap, PenTool, Code } from "lucide-react";

const services = [
  {
    title: "Business Websites",
    description: "Professional online presence for your local business.",
    icon: Briefcase,
  },
  {
    title: "Salon Websites",
    description: "Elegant platforms for booking and service showcases.",
    icon: PenTool,
  },
  {
    title: "Portfolio Websites",
    description: "Personal sites to highlight your work and resume.",
    icon: Monitor,
  },
  {
    title: "Landing Pages",
    description: "High-converting single pages for campaigns or products.",
    icon: Zap,
  },
  {
    title: "Website Redesign",
    description: "Giving your outdated site a modern, fresh look.",
    icon: Code,
  },
  {
    title: "Responsive Development",
    description: "Ensuring your site looks perfect on all devices.",
    icon: Smartphone,
  }
];

const whyMe = [
  {
    title: "Affordable Solutions",
    description: "High-quality web design that fits small business budgets.",
  },
  {
    title: "Mobile-Friendly Design",
    description: "Every website looks stunning on phones and tablets.",
  },
  {
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality.",
  },
  {
    title: "Modern User Interface",
    description: "Clean, attractive designs that engage your visitors.",
  },
  {
    title: "Strong Learning Mindset",
    description: "Dedicated to utilizing the latest tools and best practices.",
  }
];

export function Services() {
  return (
    <>
      <section id="services" className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 flex items-center gap-4">
              <span className="w-12 h-1 bg-secondary rounded-full"></span>
              I Can Help With
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass p-6 rounded-2xl border border-white/5 hover:border-secondary/30 transition-colors group"
                >
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-primary/5 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Why Choose Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I bring a fresh perspective, dedication, and a commitment to delivering value to every project I take on.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {whyMe.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl border border-white/5 flex items-start gap-4 hover:bg-white/[0.08] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold mb-1 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
