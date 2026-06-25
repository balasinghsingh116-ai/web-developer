import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    title: "Luxa Hair Salon Website",
    description: "A modern salon website designed and developed for showcasing salon services, pricing, booking information, and business branding. The website features a premium design, responsive layout, and smooth user experience.",
    image: "/images/luxa-salon.png",
    tags: ["Fully Responsive", "Modern UI Design", "Mobile Friendly", "Fast Loading", "Business Focused"],
    liveUrl: null,
  },
  {
    title: "FitZone Gym Website",
    description: "A dynamic fitness center website featuring class schedules, membership plans, trainer profiles, and workout gallery. Bold design built to inspire and convert visitors.",
    image: "/images/fitzone-gym.png",
    tags: ["Responsive Design", "Bold UI", "Membership Plans", "Image Gallery"],
    liveUrl: null,
  },
  {
    title: "Savoria Restaurant",
    description: "An elegant restaurant website with menu showcase, reservation system, gallery, and location details. Clean, appetizing design optimized for local search.",
    image: "/images/savoria-restaurant.png",
    tags: ["Mobile Friendly", "Menu Display", "Reservation Ready", "Local SEO"],
    liveUrl: null,
  }
];

export function Portfolio() {
  return (
    <section id="projects" className="py-24 bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">My Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of recent websites I've built. Each project is crafted with care, focusing on performance and user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group h-full"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      disabled 
                      className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-muted-foreground font-medium flex items-center justify-center gap-2 cursor-not-allowed opacity-70"
                    >
                      View Live Website
                      <ExternalLink size={16} />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Demo project - Not deployed yet</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
