import { useState } from "react";
import { MapPin, Clock, Send, ExternalLink, Building2, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    privacy: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.email || !formData.message || !formData.privacy) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios e aceite a política de privacidade.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message with structured format
    const whatsappMessage = `Nome: ${formData.name}
Email: ${formData.email}
Assunto: ${formData.subject || 'Não informado'}
Mensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5561992947671?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Success feedback
    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Sua mensagem foi preparada e você será redirecionado para o WhatsApp da Dra. Ana Carolina.",
    });
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
      privacy: false
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 section-fade">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary-green mb-4">
            Agende Sua Consulta
          </h2>
          <div className="w-16 h-1 bg-gold-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Entre em contato e receba cuidado oncológico personalizado e humanizado
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Information - Minimalistic */}
          <div className="lg:col-span-2 section-fade">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-montserrat font-bold text-xl text-primary-green mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/5561992947671?text=Olá%20gostaria%20de%20marcar%20uma%20consulta%20com%20a%20Dra.%20Ana%20Carolina%20Salles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group hover:translate-x-1 transition-transform duration-300 cursor-pointer"
                >
                  <div className="bg-gold-primary/10 p-3 rounded-xl mr-4 group-hover:bg-gold-primary/20 transition-colors duration-300">
                    <FaWhatsapp className="w-5 h-5 text-gold-primary" />
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-primary-green group-hover:text-gold-primary transition-colors duration-300">WhatsApp</p>
                    <p className="text-gray-600 text-sm">(61) 99294-7671</p>
                  </div>
                </a>
                
                {/* Instagram */}
                <a 
                  href="instagram://user?username=anacarolinasallesoncologia"
                  onClick={(e) => {
                    // Para dispositivos móveis, tenta abrir o app primeiro
                    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                      // Se o app não abrir em 2.5s, redireciona para o site
                      setTimeout(() => {
                        window.location.href = "https://www.instagram.com/anacarolinasallesoncologia?igsh=MTk3NWJ5bjY3MGRnOQ==";
                      }, 2500);
                    } else {
                      // Para desktop, vai direto para o site
                      e.preventDefault();
                      window.open("https://www.instagram.com/anacarolinasallesoncologia?igsh=MTk3NWJ5bjY3MGRnOQ==", "_blank");
                    }
                  }}
                  className="flex items-center group hover:translate-x-1 transition-transform duration-300 cursor-pointer"
                >
                  <div className="bg-gold-primary/10 p-3 rounded-xl mr-4 group-hover:bg-gold-primary/20 transition-colors duration-300">
                    <Instagram className="w-5 h-5 text-gold-primary" />
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-primary-green group-hover:text-gold-primary transition-colors duration-300">Instagram</p>
                    <p className="text-gray-600 text-sm">@anacarolinasallesoncologia</p>
                  </div>
                </a>
                
                {/* Location */}
                <div className="flex items-start group hover:translate-x-1 transition-transform duration-300">
                  <div className="bg-gold-primary/10 p-3 rounded-xl mr-4 mt-1">
                    <MapPin className="w-5 h-5 text-gold-primary" />
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-primary-green mb-2">Onde Atuo</p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>
                        <a href="https://maps.app.goo.gl/c3pL4edDkEfdashP7" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center hover:text-gold-primary transition-colors">
                          <Building2 className="w-3 h-3 mr-2" />
                          Hospital DF Star
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                      <div>
                        <a href="https://maps.app.goo.gl/uGf4MKb2eb9RtQZz5" target="_blank" rel="noopener noreferrer"
                           className="flex items-center hover:text-gold-primary transition-colors">
                          <Building2 className="w-3 h-3 mr-2" />
                          OHB - Oncologia D'or
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hours */}
                <div className="flex items-center group hover:translate-x-1 transition-transform duration-300">
                  <div className="bg-gold-primary/10 p-3 rounded-xl mr-4">
                    <Clock className="w-5 h-5 text-gold-primary" />
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-primary-green">Atendimento</p>
                    <p className="text-gray-600 text-sm">Segunda a sexta-feira</p>
                    <p className="text-gray-600 text-sm">Horário comercial - 8h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 section-fade">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-montserrat font-bold text-xl text-primary-green mb-6">Envie uma Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-montserrat font-medium text-gray-700 mb-2">Nome Completo *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary transition-all duration-300 bg-gray-50 hover:bg-white"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-montserrat font-medium text-gray-700 mb-2">Telefone *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary transition-all duration-300 bg-gray-50 hover:bg-white"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-montserrat font-medium text-gray-700 mb-2">E-mail *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary transition-all duration-300 bg-gray-50 hover:bg-white"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-montserrat font-medium text-gray-700 mb-2">Assunto</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary transition-all duration-300 bg-gray-50 hover:bg-white"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="consulta">Agendamento de Consulta</option>
                    <option value="informacoes">Informações sobre Tratamento</option>
                    <option value="segunda-opiniao">Segunda Opinião Médica</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-montserrat font-medium text-gray-700 mb-2">Mensagem *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required 
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary transition-all duration-300 bg-gray-50 hover:bg-white resize-none" 
                    placeholder="Descreva brevemente o motivo do seu contato..."
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    name="privacy" 
                    required 
                    checked={formData.privacy}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-gold-primary border-gray-300 rounded focus:ring-gold-primary mt-0.5"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600 leading-5">
                    Concordo com o uso das informações para contato conforme a política de privacidade *
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 bg-primary-green text-white font-montserrat font-semibold rounded-xl hover:bg-secondary-green transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5 inline mr-2" />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
