
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";

interface ReservationSearchResultsProps {
  results: any[];
  onSelect: (result: any) => void;
}

export const ReservationSearchResults = ({
  results,
  onSelect,
}: ReservationSearchResultsProps) => {
  // Group results by type (flight/hotel)
  const flightResults = results.filter((result) => result.type === "flight");
  const hotelResults = results.filter((result) => result.type === "hotel");

  return (
    <div className="space-y-6">
      {flightResults.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">ตั๋วเครื่องบิน</h2>
          <div className="space-y-4">
            {flightResults.map((flight) => (
              <Card key={flight.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="space-y-2">
                      <div className="font-semibold text-lg">{flight.provider}</div>
                      <div className="text-gray-600">
                        <span>ไป: {format(new Date(flight.departureDate), "dd MMM yyyy")}</span>
                        {flight.returnDate && (
                          <span> - กลับ: {format(new Date(flight.returnDate), "dd MMM yyyy")}</span>
                        )}
                      </div>
                      <div className="text-gray-600">
                        <span>{flight.destination}</span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col md:items-end md:ml-4">
                      <div className="text-2xl font-bold text-infi-green mb-2">
                        ฿{flight.price.toLocaleString()}
                      </div>
                      <Button 
                        onClick={() => onSelect(flight)} 
                        className="bg-infi-green hover:bg-infi-green-hover"
                      >
                        เลือก
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {hotelResults.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">โรงแรม</h2>
          <div className="space-y-4">
            {hotelResults.map((hotel) => (
              <Card key={hotel.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="space-y-2">
                      <div className="font-semibold text-lg">
                        {hotel.provider} - {hotel.roomType}
                      </div>
                      <div className="text-gray-600">
                        <span>เช็คอิน: {format(new Date(hotel.checkIn), "dd MMM yyyy")}</span>
                        {hotel.checkOut && (
                          <span> - เช็คเอาท์: {format(new Date(hotel.checkOut), "dd MMM yyyy")}</span>
                        )}
                      </div>
                      <div className="text-gray-600">
                        <span>{hotel.destination}</span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col md:items-end md:ml-4">
                      <div className="text-2xl font-bold text-infi-green mb-2">
                        ฿{hotel.price.toLocaleString()}
                        <span className="text-sm font-normal text-gray-600"> / คืน</span>
                      </div>
                      <Button 
                        onClick={() => onSelect(hotel)} 
                        className="bg-infi-green hover:bg-infi-green-hover"
                      >
                        เลือก
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
