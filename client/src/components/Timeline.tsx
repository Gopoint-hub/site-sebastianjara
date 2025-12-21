import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  number: string;
  title: string;
  description: string;
  points: string[];
  isLast?: boolean;
  index: number;
}

const TimelineItem = ({ number, title, description, points, isLast, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0;
  
  // Variantes para el efecto de revelado de texto (Blur Reveal)
  const textReveal = {
    hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
    visible: { 
      filter: "blur(0px)", 
      opacity: 1, 
      y: 0
    }
  };

  return (
    <div className={cn(
      "relative flex flex-col md:flex-row gap-8 md:gap-0",
      isEven ? "md:flex-row-reverse" : ""
    )}>
      {/* Content Side */}
      <div className="flex-1 md:w-1/2">
        <motion.div 
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            "flex flex-col gap-4 p-6 md:p-8 rounded-2xl border border-white/5 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors",
            isEven ? "md:mr-12" : "md:ml-12"
          )}
        >
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            <motion.div 
              variants={textReveal} 
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-bold text-primary/20 font-mono mb-2"
            >
              {number}
            </motion.div>
            
            <motion.h3 
              variants={textReveal} 
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl font-bold font-display mb-3"
            >
              {title}
            </motion.h3>
            
            <motion.p 
              variants={textReveal} 
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-muted-foreground mb-4 leading-relaxed"
            >
              {description}
            </motion.p>
            
            <ul className="space-y-2 text-sm font-medium">
              {points.map((point, i) => (
                <motion.li 
                  key={i} 
                  variants={textReveal}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  <span className="text-foreground/90">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Center Line & Dot */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 flex flex-col items-center justify-start">
        {/* The Dot */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="w-4 h-4 rounded-full bg-background border-2 border-primary z-10 mt-8 md:mt-12 shadow-[0_0_10px_rgba(252,80,0,0.5)]"
        />
        
        {/* The Line Segment */}
        {!isLast && (
          <div className="w-px h-full bg-gradient-to-b from-primary/50 to-transparent md:to-primary/20 absolute top-12" />
        )}
      </div>

      {/* Empty Side for Balance */}
      <div className="hidden md:block flex-1 md:w-1/2" />
    </div>
  );
};

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      number: "01",
      title: "Diagnóstico antes de ejecutar",
      description: "No ejecuto sin entender el negocio. El primer paso siempre es identificar qué funciona, qué no y dónde se pierde valor. Datos, procesos y objetivos claros antes de cualquier acción.",
      points: [
        "Revisión de métricas reales",
        "Identificación de cuellos de botella",
        "Priorización por impacto, no por moda"
      ]
    },
    {
      number: "02",
      title: "Decisiones basadas en datos",
      description: "El marketing sin medición es opinión. Las decisiones se toman con información concreta, no con suposiciones.",
      points: [
        "Definición de KPIs relevantes",
        "Lectura correcta de resultados",
        "Ajustes continuos según evidencia"
      ]
    },
    {
      number: "03",
      title: "Automatización con criterio",
      description: "No todo se automatiza. La tecnología se integra cuando reduce fricción, mejora eficiencia o libera tiempo operativo.",
      points: [
        "Automatización de procesos repetitivos",
        "Uso de IA en tareas donde aporta valor real",
        "Integración con sistemas existentes"
      ]
    },
    {
      number: "04",
      title: "IA aplicada a operación real",
      description: "La inteligencia artificial no es un discurso. Es una herramienta operativa cuando está bien implementada.",
      points: [
        "Agentes conversacionales",
        "Sistemas de contenido y distribución",
        "Flujos conectados a procesos del negocio"
      ]
    }
  ];

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto pl-8 md:pl-0">
      {/* Main Vertical Line Background */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden md:block" />
      
      {/* Animated Progress Line */}
      <motion.div 
        style={{ height }}
        className="absolute left-0 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-primary to-transparent -translate-x-1/2 hidden md:block origin-top"
      />

      <div className="flex flex-col gap-12 md:gap-24 relative z-10">
        {steps.map((step, index) => (
          <TimelineItem 
            key={index}
            {...step}
            index={index}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
