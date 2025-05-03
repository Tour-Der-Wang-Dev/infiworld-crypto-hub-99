
import { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/layout/Navbar";
import { ReservationSearchResults } from "@/components/reservations/ReservationSearchResults";
import { ReservationDetails } from "@/components/reservations/ReservationDetails";
import { ReservationForm } from "@/components/reservations/ReservationForm";

const Reservations = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<any | null>(null);
  const [bookingStep, setBookingStep] = useState<"search" | "details" | "payment">("search");
  const { toast } = useToast();

  // Fetch user's existing reservations
  const { data: userReservations, isLoading } = useQuery({
    queryKey: ["reservations"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reservations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        toast({
          title: "Error fetching reservations",
          description: error.message,
          variant: "destructive",
        });
        return [];
      }

      return data || [];
    },
  });

  const handleSearchSubmit = (data: any) => {
    // This would be connected to the Amadeus API in a real implementation
    // For now we'll show mock results
    const mockResults = [
      {
        id: "flight-1",
        type: "flight",
        provider: "Thai Airways",
        destination: data.destination,
        departureDate: data.departureDate,
        returnDate: data.returnDate,
        price: 12500,
        available: true,
      },
      {
        id: "flight-2",
        type: "flight",
        provider: "Bangkok Airways",
        destination: data.destination,
        departureDate: data.departureDate,
        returnDate: data.returnDate,
        price: 8900,
        available: true,
      },
      {
        id: "hotel-1",
        type: "hotel",
        provider: "Hilton",
        destination: data.destination,
        checkIn: data.departureDate,
        checkOut: data.returnDate,
        price: 5600,
        available: true,
        roomType: "Deluxe",
      },
      {
        id: "hotel-2",
        type: "hotel",
        provider: "Marriott",
        destination: data.destination,
        checkIn: data.departureDate,
        checkOut: data.returnDate,
        price: 4800,
        available: true,
        roomType: "Standard",
      },
    ];
    
    setSearchResults(mockResults);
    toast({
      title: "Search complete",
      description: `Found ${mockResults.length} results for ${data.destination}`,
    });
  };

  const handleBookingSelect = (booking: any) => {
    setSelectedBooking(booking);
    setBookingStep("details");
  };

  const handleConfirmBooking = async () => {
    if (!selectedBooking) return;
    
    try {
      // In a real implementation, this would integrate with a payment processor
      // For now, we'll just save the reservation to Supabase
      const { data, error } = await supabase.from("reservations").insert({
        type: selectedBooking.type,
        destination: selectedBooking.destination,
        departure_date: selectedBooking.departureDate || selectedBooking.checkIn,
        return_date: selectedBooking.returnDate || selectedBooking.checkOut,
        adults: selectedBooking.adults || 1,
        children: selectedBooking.children || 0,
        provider: selectedBooking.provider,
        price: selectedBooking.price,
        booking_reference: `REF-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
      }).select();
      
      if (error) throw error;
      
      toast({
        title: "Booking confirmed!",
        description: `Your ${selectedBooking.type} booking has been confirmed.`,
      });
      
      setBookingStep("search");
      setSelectedBooking(null);
      
    } catch (error: any) {
      toast({
        title: "Booking error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleBackToSearch = () => {
    setBookingStep("search");
    setSelectedBooking(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-infi-dark mb-8">
          {bookingStep === "search" ? "จองตั๋วเครื่องบินและโรงแรม" : 
           bookingStep === "details" ? "รายละเอียดการจอง" : "ชำระเงิน"}
        </h1>

        {bookingStep === "search" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="col-span-1 lg:sticky lg:top-24 h-fit">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">ค้นหา</h2>
                <ReservationForm onSubmit={handleSearchSubmit} />
              </CardContent>
            </Card>

            <div className="col-span-1 lg:col-span-2">
              {searchResults.length > 0 ? (
                <ReservationSearchResults 
                  results={searchResults} 
                  onSelect={handleBookingSelect}
                />
              ) : (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <h3 className="text-lg font-medium text-gray-700 mb-2">เริ่มการค้นหา</h3>
                  <p className="text-gray-500">
                    กรุณาระบุปลายทาง วันที่เดินทาง และจำนวนผู้เดินทางเพื่อค้นหาตั๋วและโรงแรม
                  </p>
                </div>
              )}

              {userReservations && userReservations.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-4">การจองของฉัน</h2>
                  <Card>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>ประเภท</TableHead>
                            <TableHead>ปลายทาง</TableHead>
                            <TableHead>วันที่</TableHead>
                            <TableHead>ผู้ให้บริการ</TableHead>
                            <TableHead>ราคา</TableHead>
                            <TableHead>สถานะ</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {userReservations.map((reservation) => (
                            <TableRow key={reservation.id}>
                              <TableCell className="capitalize">
                                {reservation.type === "flight" ? "ตั๋วเครื่องบิน" : "โรงแรม"}
                              </TableCell>
                              <TableCell>{reservation.destination}</TableCell>
                              <TableCell>
                                {format(new Date(reservation.departure_date), "dd/MM/yyyy")}
                                {reservation.return_date && (
                                  <> - {format(new Date(reservation.return_date), "dd/MM/yyyy")}</>
                                )}
                              </TableCell>
                              <TableCell>{reservation.provider}</TableCell>
                              <TableCell>฿{reservation.price.toLocaleString()}</TableCell>
                              <TableCell>
                                <span className={cn(
                                  "inline-block px-2 py-1 text-xs font-medium rounded-full",
                                  reservation.status === "confirmed" && "bg-green-100 text-green-800",
                                  reservation.status === "pending" && "bg-yellow-100 text-yellow-800",
                                  reservation.status === "cancelled" && "bg-red-100 text-red-800",
                                )}>
                                  {reservation.status === "confirmed" && "ยืนยันแล้ว"}
                                  {reservation.status === "pending" && "รอดำเนินการ"}
                                  {reservation.status === "cancelled" && "ยกเลิกแล้ว"}
                                </span>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        )}

        {bookingStep === "details" && selectedBooking && (
          <ReservationDetails
            booking={selectedBooking}
            onConfirm={handleConfirmBooking}
            onBack={handleBackToSearch}
          />
        )}
      </div>
    </div>
  );
};

export default Reservations;
