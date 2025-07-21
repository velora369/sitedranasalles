import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    const message = "Olá! Gostaria de agendar uma consulta com a Dra. Ana Carolina Salles.";
    const whatsappUrl = `https://wa.me/5561992947671?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="whatsapp-float bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
      aria-label="Entrar em contato via WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </button>
  );
}
