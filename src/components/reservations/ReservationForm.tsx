
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
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReservationFormProps {
  onSubmit: (data: ReservationFormData) => void;
}

export interface ReservationFormData {
  type: "flight" | "hotel" | "both";
  destination: string;
  departureDate: Date;
  returnDate?: Date;
  adults: number;
  children: number;
}

export const ReservationForm = ({ onSubmit }: ReservationFormProps) => {
  const [selectedReturnDate, setSelectedReturnDate] = useState<Date>();
  
  const form = useForm<ReservationFormData>({
    defaultValues: {
      type: "both",
      destination: "",
      adults: 1,
      children: 0,
    },
  });

  const handleSubmit = (data: ReservationFormData) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ประเภทการจอง</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="เลือกประเภทการจอง" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="flight">ตั๋วเครื่องบิน</SelectItem>
                  <SelectItem value="hotel">โรงแรม</SelectItem>
                  <SelectItem value="both">ทั้งสองอย่าง</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="destination"
          rules={{ required: "กรุณาระบุปลายทาง" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>ปลายทาง</FormLabel>
              <FormControl>
                <Input placeholder="เช่น กรุงเทพ, ภูเก็ต, เชียงใหม่" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="departureDate"
          rules={{ required: "กรุณาเลือกวันเดินทาง" }}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>วันที่เดินทาง</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "dd/MM/yyyy")
                      ) : (
                        <span>เลือกวันที่</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(date) => {
                      field.onChange(date);
                      // Clear return date if it's before departure date
                      if (date && selectedReturnDate && date > selectedReturnDate) {
                        setSelectedReturnDate(undefined);
                        form.setValue("returnDate", undefined);
                      }
                    }}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="returnDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>วันที่เดินทางกลับ</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "dd/MM/yyyy")
                      ) : (
                        <span>เลือกวันที่</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(date) => {
                      field.onChange(date);
                      setSelectedReturnDate(date || undefined);
                    }}
                    disabled={(date) => {
                      const departureDate = form.getValues("departureDate");
                      return date < new Date() || (departureDate && date < departureDate);
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="adults"
            rules={{ required: "จำเป็น", min: { value: 1, message: "อย่างน้อย 1 คน" } }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>ผู้ใหญ่</FormLabel>
                <FormControl>
                  <Input type="number" min={1} {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="children"
            render={({ field }) => (
              <FormItem>
                <FormLabel>เด็ก</FormLabel>
                <FormControl>
                  <Input type="number" min={0} {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full bg-infi-green hover:bg-infi-green-hover">
          ค้นหา
        </Button>
      </form>
    </Form>
  );
};
