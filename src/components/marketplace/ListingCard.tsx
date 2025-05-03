
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
        <div className="absolute top-2 left-2 flex gap-2">
          <Badge variant="default" className="bg-infi-green">
            {listing.type === "car" ? "รถยนต์" : "อสังหาริมทรัพย์"}
          </Badge>
          {listing.isRental ? (
            <Badge variant="outline" className="bg-white">เช่า</Badge>
          ) : (
            <Badge variant="outline" className="bg-white">ขาย</Badge>
          )}
        </div>
      </div>

      <CardHeader className="pb-2">
        <div className="text-lg font-semibold line-clamp-1">{listing.title}</div>
        <div className="text-sm text-infi-gray">{listing.location}</div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="text-xl font-bold text-infi-green mb-2">
          {priceDisplay}
        </div>
        <p className={`text-infi-gray text-sm ${showDetails ? '' : 'line-clamp-2'}`}>
          {listing.description}
        </p>
        
        {showDetails && (
          <div className="mt-4">
            <div className="text-sm font-semibold mb-1">คุณสมบัติ:</div>
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

      <CardFooter className="flex justify-between pt-0">
        <Button 
          variant="outline"
          className="text-xs" 
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "แสดงน้อยลง" : "ดูเพิ่มเติม"}
        </Button>
        <Button className="text-xs bg-infi-green hover:bg-infi-green-hover">
          {listing.isRental ? "จองเช่า" : "ซื้อเลย"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ListingCard;
