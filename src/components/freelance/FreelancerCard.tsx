
import { StarIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface FreelancerCardProps {
  id: number;
  name: string;
  category: string;
  rating: number;
  price: number;
  image: string;
  skills: string[];
}

const FreelancerCard = ({ id, name, category, rating, price, image, skills }: FreelancerCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative">
        <img 
          src={image} 
          alt={`${name} - ${category}`} 
          className="w-full h-36 sm:h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 sm:p-3 text-white">
          <div className="flex items-center space-x-1">
            <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-xs sm:text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
      
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg font-semibold">{name}</h3>
        <p className="text-infi-gray text-xs sm:text-sm mb-2">{category}</p>
        
        <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="text-xs bg-infi-light text-infi-dark px-1.5 py-0.5 sm:px-2 sm:py-1 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <p className="font-semibold text-infi-dark text-sm sm:text-base">฿{price.toLocaleString()}/ชั่วโมง</p>
          <Link
            to={`/freelance/${id}`}
            className="btn-primary py-1.5 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm"
          >
            จองตอนนี้
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreelancerCard;
