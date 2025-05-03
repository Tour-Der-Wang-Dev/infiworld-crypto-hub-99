
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <div className="service-card flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-infi-light rounded-full flex items-center justify-center mb-4">
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-infi-gray mb-6">{description}</p>
      <Link 
        to={link}
        className="mt-auto btn-primary"
      >
        เริ่มต้นใช้งาน
      </Link>
    </div>
  );
};

export default ServiceCard;
