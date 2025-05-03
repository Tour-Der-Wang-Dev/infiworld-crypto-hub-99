
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";

interface ListingCardProps {
  listing: {
    id: string;
    title: string;
    description: string;
    price: number;
    type: "car" | "property";
    image: string;
    isRental: boolean;
    location: string;
    features: string[];
  };
}

const ListingCard = ({ listing }: ListingCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const isMobile = useIsMobile();

  // Format price based on rental or sale
  const formattedPrice = new Intl.NumberFormat("th-TH").format(listing.price);
  const priceDisplay = listing.isRental ? 
    `฿${formattedPrice}/เดือน` : 
    `฿${formattedPrice}`;

  return (
    <Card className="overflow-hidden h-full flex flex-col transition-shadow hover:shadow-md">
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <img 
            src={listing.image || "/placeholder.svg"} 
            alt={listing.title}
            className="w-full h-full object-cover"
          />
        </AspectRatio>
        <div className="absolute top-2 left-2 flex gap-1 sm:gap-2">
          <Badge variant="default" className="bg-infi-green text-xs">
            {listing.type === "car" ? "รถยนต์" : "อสังหาริมทรัพย์"}
          </Badge>
          {listing.isRental ? (
            <Badge variant="outline" className="bg-white text-xs">เช่า</Badge>
          ) : (
            <Badge variant="outline" className="bg-white text-xs">ขาย</Badge>
          )}
        </div>
      </div>

      <CardHeader className="pb-1 sm:pb-2 px-3 sm:px-4 pt-2 sm:pt-3">
        <div className="text-base sm:text-lg font-semibold line-clamp-1">{listing.title}</div>
        <div className="text-xs sm:text-sm text-infi-gray">{listing.location}</div>
      </CardHeader>
      
      <CardContent className="flex-grow px-3 sm:px-4 py-1 sm:py-2">
        <div className="text-lg sm:text-xl font-bold text-infi-green mb-1 sm:mb-2">
          {priceDisplay}
        </div>
        <p className={`text-infi-gray text-xs sm:text-sm ${showDetails ? '' : 'line-clamp-2'}`}>
          {listing.description}
        </p>
        
        {showDetails && (
          <div className="mt-3 sm:mt-4">
            <div className="text-xs sm:text-sm font-semibold mb-1">คุณสมบัติ:</div>
            <div className="flex flex-wrap gap-1">
              {listing.features.map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between pt-0 px-3 sm:px-4 pb-3 sm:pb-4">
        <Button 
          variant="outline"
          className="text-xs h-8 sm:h-9" 
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "แสดงน้อยลง" : "ดูเพิ่มเติม"}
        </Button>
        <Button className="text-xs h-8 sm:h-9 bg-infi-green hover:bg-infi-green-hover">
          {listing.isRental ? "จองเช่า" : "ซื้อเลย"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ListingCard;
