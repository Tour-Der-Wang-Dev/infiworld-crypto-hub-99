
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FilterSidebarProps {
  listingType: "all" | "car" | "property";
  setListingType: (type: "all" | "car" | "property") => void;
  priceRange: "all" | "low" | "medium" | "high";
  setPriceRange: (range: "all" | "low" | "medium" | "high") => void;
  isRental: boolean | null;
  setIsRental: (isRental: boolean | null) => void;
}

const FilterSidebar = ({
  listingType,
  setListingType,
  priceRange,
  setPriceRange,
  isRental,
  setIsRental,
}: FilterSidebarProps) => {
  const resetFilters = () => {
    setListingType("all");
    setPriceRange("all");
    setIsRental(null);
  };

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>ตัวกรอง</span>
          <Button
            onClick={resetFilters}
            variant="outline"
            className="text-sm"
          >
            รีเซ็ต
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Accordion type="multiple" defaultValue={["type", "price", "listing"]}>
          <AccordionItem value="type">
            <AccordionTrigger className="text-base font-medium">
              ประเภทสินค้า
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="type-all"
                    name="listingType"
                    checked={listingType === "all"}
                    onChange={() => setListingType("all")}
                    className="mr-2"
                  />
                  <label htmlFor="type-all" className="text-sm">
                    ทั้งหมด
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="type-car"
                    name="listingType"
                    checked={listingType === "car"}
                    onChange={() => setListingType("car")}
                    className="mr-2"
                  />
                  <label htmlFor="type-car" className="text-sm">
                    รถยนต์
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="type-property"
                    name="listingType"
                    checked={listingType === "property"}
                    onChange={() => setListingType("property")}
                    className="mr-2"
                  />
                  <label htmlFor="type-property" className="text-sm">
                    อสังหาริมทรัพย์
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price">
            <AccordionTrigger className="text-base font-medium">
              ช่วงราคา
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="price-all"
                    name="priceRange"
                    checked={priceRange === "all"}
                    onChange={() => setPriceRange("all")}
                    className="mr-2"
                  />
                  <label htmlFor="price-all" className="text-sm">
                    ทั้งหมด
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="price-low"
                    name="priceRange"
                    checked={priceRange === "low"}
                    onChange={() => setPriceRange("low")}
                    className="mr-2"
                  />
                  <label htmlFor="price-low" className="text-sm">
                    น้อยกว่า 500,000 บาท
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="price-medium"
                    name="priceRange"
                    checked={priceRange === "medium"}
                    onChange={() => setPriceRange("medium")}
                    className="mr-2"
                  />
                  <label htmlFor="price-medium" className="text-sm">
                    500,000 - 2,000,000 บาท
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="price-high"
                    name="priceRange"
                    checked={priceRange === "high"}
                    onChange={() => setPriceRange("high")}
                    className="mr-2"
                  />
                  <label htmlFor="price-high" className="text-sm">
                    มากกว่า 2,000,000 บาท
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="listing">
            <AccordionTrigger className="text-base font-medium">
              ประเภทรายการ
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="listing-all"
                    name="listingType"
                    checked={isRental === null}
                    onChange={() => setIsRental(null)}
                    className="mr-2"
                  />
                  <label htmlFor="listing-all" className="text-sm">
                    ทั้งหมด
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="listing-buy"
                    name="listingType"
                    checked={isRental === false}
                    onChange={() => setIsRental(false)}
                    className="mr-2"
                  />
                  <label htmlFor="listing-buy" className="text-sm">
                    ซื้อ/ขาย
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="listing-rent"
                    name="listingType"
                    checked={isRental === true}
                    onChange={() => setIsRental(true)}
                    className="mr-2"
                  />
                  <label htmlFor="listing-rent" className="text-sm">
                    เช่า
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FilterSidebar;
