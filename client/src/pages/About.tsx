import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Briefcase, GraduationCap, Users, Globe, TrendingUp } from "lucide-react";
import SEO from "@/components/SEO";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const milestones = [
    {
      year: "2010",
      title: "Fundación de Gopoint Agency",
      description: "A los 25 años, fundó su primera agencia digital (F5 Group), pionera en estrategias de Growth Marketing en Chile."
    },
    {
      year: "2011",
      title: "Líder en Redes Sociales",
      description: "Reconocido como uno de los 140 líderes de redes sociales en Chile en el evento 140SCL de Movistar."
    },
    {
      year: "2023",
      title: "Lanzamiento de MarketingHoy.com",
      description: "Fundador y editor de un portal líder en noticias y tendencias de marketing digital en español."
    },
    {
      year: "Actualidad",
      title: "Expansión Internacional",
      description: "Liderando operaciones en Chile, Perú, Colombia y México, con un enfoque en IA y automatización."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Sobre Mí - Trayectoria y Visión"
        description="Conoce a Sebastián Jara, emprendedor serial y consultor con más de 15 años liderando la transformación digital en Latinoamérica. Fundador de Gopoint Agency y Academia F5."
        keywords={["Biografía", "Trayectoria", "Emprendedor", "Gopoint Agency", "Academia F5", "Sebastián Jara"]}
        type="profile"
      />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
          <img 
            src="/images/hero-bg-orange.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <Badge variant="outline" className="mb-6 border-primary/50 text-primary bg-primary/10 px-4 py-1 text-sm font-mono tracking-wider uppercase">
                Sobre Mí
              </Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Más de una década <br/>
                <span className="text-primary">Transformando Negocios</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Soy Sebastián Jara, emprendedor y estratega digital con más de 15 años de experiencia. 
                Mi misión es clara: ayudar a empresas a escalar mediante la integración de tecnología, 
                datos y creatividad estratégica.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Presencia Global</h3>
                    <p className="text-sm text-muted-foreground">Operaciones en Latam y EE.UU.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Mentoría</h3>
                    <p className="text-sm text-muted-foreground">Formando a la próxima generación</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-md mx-auto">
                <img 
                  src="/images/profile.webp" 
                  alt="Sebastián Jara" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-display font-bold text-xl">Sebastián Jara</p>
                  <p className="text-white/80 text-sm">CEO & Fundador</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trayectoria Section */}
      <section className="py-20 bg-card/30 border-y border-white/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Trayectoria y Visión</h2>
            <p className="text-muted-foreground text-lg">
              Desde mis inicios como consultor hasta liderar múltiples iniciativas digitales, 
              mi carrera ha estado marcada por la innovación constante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-background/50 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <Briefcase className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Emprendimiento Serial</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Fundador de <strong>Gopoint Agency</strong> (anteriormente F5 Group), una agencia que ha evolucionado 
                  para atender clientes en toda Latinoamérica, España y Estados Unidos. Además, he creado el holding 
                  <strong> Neftis</strong>, gestionando múltiples e-commerce exitosos en la región.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <GraduationCap className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Educación y Formación</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A través de <strong>Academia F5</strong>, he formado a cientos de emprendedores en estrategias digitales. 
                  He sido conferencista invitado en instituciones como el IMEF en México y el Ministerio de Economía en Perú, 
                  compartiendo conocimientos sobre la revolución digital.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Hitos Clave</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/50 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-white/10 bg-card/50 backdrop-blur-sm shadow-lg hover:border-primary/30 transition-colors">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-foreground">{milestone.title}</div>
                      <time className="font-mono text-xs text-primary">{milestone.year}</time>
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {milestone.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reconocimientos */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 text-center md:text-left">
                <Award className="h-16 w-16 text-primary mb-6 mx-auto md:mx-0" />
                <h3 className="text-2xl font-bold mb-2">Reconocimientos</h3>
                <p className="text-muted-foreground">Destacado en medios y rankings internacionales.</p>
              </div>
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Top CMO en Twitter</h4>
                    <p className="text-sm text-muted-foreground">Incluido en la lista global de los "68 Top Chief Marketing Officers".</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Influencer Digital</h4>
                    <p className="text-sm text-muted-foreground">Top 50 cuentas más influyentes de Chile según TwitterGrader.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Prensa Nacional</h4>
                    <p className="text-sm text-muted-foreground">Entrevistado por La Tercera, TVN y AméricaEconomía.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
