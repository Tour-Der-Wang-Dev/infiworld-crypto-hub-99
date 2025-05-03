
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { format } from "date-fns";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ReservationDetailsProps {
  booking: any;
  onConfirm: () => void;
  onBack: () => void;
}

export const ReservationDetails = ({
  booking,
  onConfirm,
  onBack,
}: ReservationDetailsProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleConfirm = async () => {
    setIsSubmitting(true);
    try {
      await onConfirm();
    } catch (error) {
      toast({
        title: "Error",
        description: "เกิดข้อผิดพลาดในการยืนยันการจอง กรุณาลองใหม่อีกครั้ง",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isHotel = booking.type === "hotel";
  
  return (
    <div className="max-w-2xl mx-auto">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-4 flex items-center"
        disabled={isSubmitting}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        ย้อนกลับ
      </Button>
      
      <Card>
        <CardHeader>
          <CardTitle>
            {isHotel ? "ยืนยันการจองโรงแรม" : "ยืนยันการจองตั๋วเครื่องบิน"}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-gray-500">ผู้ให้บริการ</p>
              <p className="font-medium">{booking.provider}</p>
            </div>
            {isHotel && (
              <div className="space-y-1">
                <p className="text-sm text-gray-500">ประเภทห้อง</p>
                <p className="font-medium">{booking.roomType}</p>
              </div>
            )}
            <div className="space-y-1">
              <p className="text-sm text-gray-500">ปลายทาง</p>
              <p className="font-medium">{booking.destination}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">
                {isHotel ? "วันที่เช็คอิน" : "วันที่เดินทาง"}
              </p>
              <p className="font-medium">{format(new Date(isHotel ? booking.checkIn : booking.departureDate), "dd MMMM yyyy")}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">
                {isHotel ? "วันที่เช็คเอาท์" : "วันที่เดินทางกลับ"}
              </p>
              <p className="font-medium">
                {isHotel
                  ? booking.checkOut && format(new Date(booking.checkOut), "dd MMMM yyyy")
                  : booking.returnDate && format(new Date(booking.returnDate), "dd MMMM yyyy")}
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <span>ราคา</span>
              <span className="font-medium">฿{booking.price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>ภาษี</span>
              <span className="font-medium">฿{Math.round(booking.price * 0.07).toLocaleString()}</span>
            </div>
            <div className="border-t pt-2 mt-2 flex justify-between items-center">
              <span className="font-bold">ราคารวม</span>
              <span className="font-bold text-lg text-infi-green">฿{Math.round(booking.price * 1.07).toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex-col space-y-2">
          <Button
            className="w-full bg-infi-green hover:bg-infi-green-hover"
            disabled={isSubmitting}
            onClick={handleConfirm}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                กำลังดำเนินการ...
              </>
            ) : (
              "ยืนยันการจอง"
            )}
          </Button>
          <Button
            variant="outline" 
            className="w-full"
            disabled={isSubmitting}
            onClick={onBack}
          >
            ยกเลิก
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
