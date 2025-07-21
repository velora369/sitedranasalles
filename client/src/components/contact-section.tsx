import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ExternalLink, Building2 } from "lucide-react";
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
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-fade">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-green mb-6">
            Agende Sua Consulta
          </h2>
          <div className="w-24 h-1 bg-gold-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Entre em contato para agendar sua consulta personalizada. Estamos aqui para oferecer o melhor cuidado oncológico.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="section-fade">
            <h3 className="font-montserrat font-bold text-2xl text-primary-green mb-8">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gold-primary p-3 rounded-lg mr-4 mt-1">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-montserrat font-semibold text-primary-green mb-4">Onde Atuo</h4>
                  
                  {/* Hospital DF Star */}
                  <div className="mb-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-gold-primary transition-all duration-300 group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Building2 className="w-4 h-4 text-primary-green mr-2" />
                        <span className="font-montserrat font-medium text-primary-green">Hospital DF Star</span>
                      </div>
                      <a 
                        href="https://share.google.com/WgPaKcD3TARcZy9h2" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gold-primary hover:text-primary-green transition-colors duration-300"
                      >
                        <span className="text-sm mr-1">Ver no Maps</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">Clique para ver a localização no Google Maps</p>
                  </div>

                  {/* OHB - Oncologia D'or */}
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-gold-primary transition-all duration-300 group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Building2 className="w-4 h-4 text-primary-green mr-2" />
                        <span className="font-montserrat font-medium text-primary-green">OHB - Oncologia D'or</span>
                      </div>
                      <a 
                        href="https://share.google.com/rb2PjR4ro8Qs5MC0y" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gold-primary hover:text-primary-green transition-colors duration-300"
                      >
                        <span className="text-sm mr-1">Ver no Maps</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">Quinto Andar - Clique para ver a localização</p>
                  </div>
                  
                  <p className="text-gray-700 mt-4 text-sm">Brasília, DF</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold-primary p-3 rounded-lg mr-4 mt-1">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-primary-green mb-2">WhatsApp</h4>
                  <p className="text-gray-700">(61) 99294-7671</p>
                  <p className="text-gray-medium text-sm">Resposta rápida via WhatsApp</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold-primary p-3 rounded-lg mr-4 mt-1">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-primary-green mb-2">Instagram</h4>
                  <p className="text-gray-700">@anacarolinasallesoncologia</p>
                  <p className="text-gray-medium text-sm">Acompanhe nas redes sociais</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold-primary p-3 rounded-lg mr-4 mt-1">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-primary-green mb-2">Horário de Atendimento</h4>
                  <p className="text-gray-700">Consultório de segunda a sexta-feira</p>
                  <p className="text-gray-medium text-sm">Agendamento com hora marcada</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="section-fade">
            <h3 className="font-montserrat font-bold text-2xl text-primary-green mb-8">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-montserrat font-medium text-primary-green mb-2">Nome Completo *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-montserrat font-medium text-primary-green mb-2">Telefone *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block font-montserrat font-medium text-primary-green mb-2">E-mail *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-montserrat font-medium text-primary-green mb-2">Assunto</label>
                <select 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all duration-300"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="consulta">Agendamento de Consulta</option>
                  <option value="informacoes">Informações sobre Tratamento</option>
                  <option value="segunda-opiniao">Segunda Opinião Médica</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block font-montserrat font-medium text-primary-green mb-2">Mensagem *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all duration-300" 
                  placeholder="Descreva brevemente o motivo do seu contato..."
                />
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  name="privacy" 
                  required 
                  checked={formData.privacy}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-gold-primary border-gray-300 rounded focus:ring-gold-primary"
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-gray-700">
                  Concordo com o uso das informações para contato conforme a política de privacidade *
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-4 bg-primary-green text-white font-montserrat font-semibold rounded-xl hover:bg-secondary-green transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Send className="w-5 h-5 inline mr-3" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
