import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "Responsive Web Design", 
  "Website Deployment", "Replit", "Canva", 
  "Basic AI Tools", "MS Office", "Basic Data Analysis"
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      {/* Skill section ID anchor added as well since they are combined here logically */}
      <span id="skills" className="absolute -top-24"></span>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 flex items-center gap-4">
              <span className="w-12 h-1 bg-primary rounded-full"></span>
              About Me
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                I am a web developer passionate about building professional websites for businesses. 
                My journey into tech started with a curiosity about how the web works, which quickly grew into a drive to build real, impactful products.
              </p>
              <p>
                I work with modern web technologies and AI-powered tools to create attractive, fast, and functional websites. 
                Whether it's a local salon needing an online presence or a portfolio for a creative professional, I approach every project with dedication and attention to detail.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-8 rounded-2xl border border-white/5"
            >
              <h3 className="text-xl font-display font-semibold mb-6 text-foreground">My Tech Stack & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium text-foreground transition-colors shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
