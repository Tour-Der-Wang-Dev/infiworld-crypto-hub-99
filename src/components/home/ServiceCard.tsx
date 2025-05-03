
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <div className="service-card flex flex-col items-center text-center h-full">
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-infi-light rounded-full flex items-center justify-center mb-3 sm:mb-4">
        <img src={icon} alt={title} className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{title}</h3>
      <p className="text-infi-gray text-sm sm:text-base mb-4 sm:mb-6">{description}</p>
      <Link 
        to={link}
        className="mt-auto btn-primary text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6"
      >
        เริ่มต้นใช้งาน
      </Link>
    </div>
  );
};

export default ServiceCard;
