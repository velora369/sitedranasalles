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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]"
        >
          <div className="text-center lg:text-left px-4 lg:px-0">
            {/* Simple animated title */}
            <motion.h1 
              variants={fadeInUpVariants}
              className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-green mb-4 sm:mb-6 leading-tight"
            >
              Dra. Ana Carolina Salles
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.h2 
              variants={fadeInUpVariants}
              className="font-montserrat text-lg sm:text-xl md:text-2xl text-gold-primary font-semibold mb-6 sm:mb-8 leading-relaxed"
            >
              Oncologista Clínica | Cuidado Incansável, Respeito e Paixão pela Vida
            </motion.h2>

            {/* Animated Description */}
            <motion.p 
              variants={fadeInUpVariants}
              className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Bem-vindo(a) ao espaço digital da Dra. Ana Carolina Salles, uma oncologista clínica dedicada e apaixonada por sua missão. Com uma trajetória sólida e um compromisso inabalável com a ciência e o cuidado humanizado, oferece um atendimento personalizado, pautado nas mais recentes evidências científicas e no profundo respeito por cada paciente.
            </motion.p>

            {/* Simple animated buttons */}
            <motion.div 
              variants={fadeInUpVariants}
              className="flex flex-col sm:flex-row gap-4 items-center lg:items-start"
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

          {/* Hero Image Section - Modern and Responsive */}
          <motion.div 
            variants={fadeInUpVariants}
            className="flex justify-center lg:justify-end items-center mt-8 lg:mt-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Background decorative elements */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                className="absolute -inset-4 bg-gradient-to-br from-primary-green/20 to-gold-primary/20 rounded-3xl blur-xl"
              />
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
                className="absolute -inset-2 bg-gradient-to-br from-primary-green to-gold-primary rounded-2xl opacity-20"
              />
              
              {/* Main image container */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="relative bg-white p-2 rounded-2xl shadow-2xl"
              >
                <motion.img 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                  src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.45.56.webp"
                  alt="Dra. Ana Carolina Salles - Oncologista Clínica"
                  className="w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem] object-cover rounded-xl shadow-lg"
                />
                
                
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
