import { Calendar, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [showCursor, setShowCursor] = useState(true);

  // Efeito de cursor piscando
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);
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

  // Configurações de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2
      }
    }
  };

  const slideUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const typingVariants = {
    hidden: { width: 0 },
    visible: {
      width: "auto",
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const backgroundVariants = {
    hidden: { 
      opacity: 0,
      scale: 1.1
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="hero-gradient-animated pt-24 pb-20 px-4 relative overflow-hidden">
      {/* Background animated elements */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-gradient-to-br from-primary-green/5 via-transparent to-gold-primary/5"
      />
      
      {/* Floating background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute top-20 left-10 w-32 h-32 bg-gold-primary rounded-full hero-floating-element"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="absolute bottom-32 right-20 w-24 h-24 bg-primary-green rounded-full hero-floating-element"
          style={{ animationDelay: "2s" }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            {/* Animated Name Title with shimmer effect */}
            <motion.div variants={slideUpVariants} className="mb-6 relative">
              <motion.h1 
                className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight overflow-hidden"
              >
                <motion.span
                  variants={typingVariants}
                  className="inline-block text-shimmer"
                  style={{ whiteSpace: "nowrap" }}
                  initial={{ backgroundPosition: "-200% 0" }}
                  animate={{ backgroundPosition: "200% 0" }}
                  transition={{ 
                    delay: 2.2,
                    duration: 2,
                    ease: "easeInOut"
                  }}
                >
                  Dra. Ana Carolina Salles
                </motion.span>
                <motion.span
                  className="inline-block w-1 h-12 md:h-16 bg-gold-primary ml-2 typing-cursor"
                  animate={{ opacity: showCursor ? 1 : 0 }}
                  transition={{ duration: 0.1 }}
                />
              </motion.h1>
              
              {/* Subtle glow effect behind title */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-primary-green/20 to-gold-primary/20 blur-3xl -z-10"
              />
            </motion.div>

            {/* Animated Subtitle */}
            <motion.h2 
              variants={slideUpVariants}
              className="font-montserrat text-xl md:text-2xl text-gold-primary font-semibold mb-8"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.5, duration: 0.8 }}
              >
                Oncologista Clínica
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.8, duration: 0.8 }}
                className="block mt-2"
              >
                Cuidado Incansável, Respeito e Paixão pela Vida
              </motion.span>
            </motion.h2>

            {/* Animated Description */}
            <motion.p 
              variants={slideUpVariants}
              className="text-lg text-gray-700 mb-10 leading-relaxed"
            >
              Bem-vindo(a) ao espaço digital da Dra. Ana Carolina Salles, uma oncologista clínica dedicada e apaixonada por sua missão. Com uma trajetória sólida e um compromisso inabalável com a ciência e o cuidado humanizado, oferece um atendimento personalizado, pautado nas mais recentes evidências científicas e no profundo respeito por cada paciente.
            </motion.p>

            {/* Animated Buttons */}
            <motion.div 
              variants={slideUpVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button 
                variants={buttonVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(27, 67, 50, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-green text-white font-montserrat font-semibold rounded-xl hover:bg-secondary-green transition-all duration-300 shadow-lg"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ delay: 4, duration: 0.8 }}
                >
                  <Calendar className="w-5 h-5 mr-3" />
                </motion.div>
                Agende sua Consulta
              </motion.button>
              
              <motion.button 
                variants={buttonVariants}
                whileHover={{ 
                  scale: 1.05
                }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToAbout}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold-primary text-gold-primary font-montserrat font-semibold rounded-xl hover:bg-gold-primary hover:text-white transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 4.2, duration: 0.6, type: "spring" }}
                >
                  <UserCheck className="w-5 h-5 mr-3" />
                </motion.div>
                Conheça a Doutora
              </motion.button>
            </motion.div>
          </div>

          {/* Animated Visual Elements */}
          <motion.div 
            variants={slideUpVariants}
            className="lg:text-right relative"
          >
            {/* Enhanced floating medical elements with pulse */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.5, duration: 1 }}
              className="absolute top-10 right-10 w-16 h-16 bg-gold-primary/20 rounded-full hero-pulse hero-floating-element"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 4, duration: 1 }}
              className="absolute bottom-20 left-10 w-12 h-12 bg-primary-green/20 rounded-full hero-pulse hero-floating-element"
              style={{ animationDelay: "1s" }}
            />
            
            {/* Main hero card with enhanced animations */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 3.8, duration: 0.8 }}
              className="relative z-10 p-8 bg-white/40 backdrop-blur-lg rounded-2xl border border-white/50 hero-card-entrance shadow-2xl"
            >
              <div className="text-center">
                {/* Animated medical cross with continuous rotation */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-green to-gold-primary rounded-full flex items-center justify-center hero-pulse"
                >
                  <motion.span 
                    className="text-white text-2xl font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 4.5, type: "spring", stiffness: 200 }}
                  >
                    +
                  </motion.span>
                </motion.div>
                
                {/* Card content with staggered animations */}
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4.2, duration: 0.6 }}
                  className="font-montserrat font-semibold text-primary-green mb-2"
                >
                  Cuidado Especializado
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4.4, duration: 0.6 }}
                  className="text-gray-600 text-sm"
                >
                  Oncologia Clínica Moderna
                </motion.p>

                {/* Animated stats */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 4.6, duration: 0.6 }}
                  className="mt-4 grid grid-cols-2 gap-4"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 4.8, duration: 0.8 }}
                      className="text-2xl font-bold text-primary-green"
                    >
                      10+
                    </motion.div>
                    <div className="text-xs text-gray-500">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 5, duration: 0.8 }}
                      className="text-2xl font-bold text-gold-primary"
                    >
                      100%
                    </motion.div>
                    <div className="text-xs text-gray-500">Dedicação</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
