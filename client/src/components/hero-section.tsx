import { Calendar, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Animações simplificadas e responsivas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="hero-gradient pt-24 pb-20 px-4 relative overflow-hidden">
      {/* Background subtle animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-primary-green/5 via-transparent to-gold-primary/5"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            {/* Simple animated title */}
            <motion.h1 
              variants={fadeInUpVariants}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-primary-green mb-6 leading-tight"
            >
              Dra. Ana Carolina Salles
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.h2 
              variants={fadeInUpVariants}
              className="font-montserrat text-xl md:text-2xl text-gold-primary font-semibold mb-8"
            >
              Oncologista Clínica | Cuidado Incansável, Respeito e Paixão pela Vida
            </motion.h2>

            {/* Animated Description */}
            <motion.p 
              variants={fadeInUpVariants}
              className="text-lg text-gray-700 mb-10 leading-relaxed"
            >
              Bem-vindo(a) ao espaço digital da Dra. Ana Carolina Salles, uma oncologista clínica dedicada e apaixonada por sua missão. Com uma trajetória sólida e um compromisso inabalável com a ciência e o cuidado humanizado, oferece um atendimento personalizado, pautado nas mais recentes evidências científicas e no profundo respeito por cada paciente.
            </motion.p>

            {/* Simple animated buttons */}
            <motion.div 
              variants={fadeInUpVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-green text-white font-montserrat font-semibold rounded-xl hover:bg-secondary-green transition-all duration-300 shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Agende sua Consulta
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToAbout}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold-primary text-gold-primary font-montserrat font-semibold rounded-xl hover:bg-gold-primary hover:text-white transition-all duration-300"
              >
                <UserCheck className="w-5 h-5 mr-3" />
                Conheça a Doutora
              </motion.button>
            </motion.div>
          </div>

          {/* Simple visual element */}
          <motion.div 
            variants={fadeInUpVariants}
            className="lg:text-right relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="relative z-10 p-8 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg"
            >
              
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
