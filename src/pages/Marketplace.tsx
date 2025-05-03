
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ListingCard from "@/components/marketplace/ListingCard";
import FilterSidebar from "@/components/marketplace/FilterSidebar";
import { listings } from "@/data/marketplace";

type ListingType = "all" | "car" | "property";
type PriceRange = "all" | "low" | "medium" | "high";

interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  type: "car" | "property";
  image: string;
  isRental: boolean;
  location: string;
  features: string[];
}

const Marketplace = () => {
  const [listingType, setListingType] = useState<ListingType>("all");
  const [priceRange, setPriceRange] = useState<PriceRange>("all");
  const [isRental, setIsRental] = useState<boolean | null>(null);
  const [filteredListings, setFilteredListings] = useState<Listing[]>(listings);

  // Filter listings based on selected filters
  useEffect(() => {
    let results = [...listings];

    // Filter by listing type
    if (listingType !== "all") {
      results = results.filter((item) => item.type === listingType);
    }

    // Filter by price range
    if (priceRange !== "all") {
      results = results.filter((item) => {
        if (priceRange === "low") return item.price < 500000;
        if (priceRange === "medium") return item.price >= 500000 && item.price < 2000000;
        if (priceRange === "high") return item.price >= 2000000;
        return true;
      });
    }

    // Filter by rental status
    if (isRental !== null) {
      results = results.filter((item) => item.isRental === isRental);
    }

    setFilteredListings(results);
  }, [listingType, priceRange, isRental]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-semibold mb-6 text-infi-dark">INFIWORLD Marketplace</h1>
          <p className="text-infi-gray mb-8">
            ซื้อ ขาย เช่า รถยนต์และอสังหาริมทรัพย์ด้วยสกุลเงินดิจิทัลหรือบัตรเครดิต
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Filter Sidebar */}
            <div className="w-full md:w-1/4">
              <FilterSidebar
                listingType={listingType}
                setListingType={setListingType}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                isRental={isRental}
                setIsRental={setIsRental}
              />
            </div>

            {/* Listings Grid */}
            <div className="w-full md:w-3/4">
              {filteredListings.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredListings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <p className="text-infi-gray text-lg">
                    ไม่พบรายการที่ตรงกับการค้นหา กรุณาลองเปลี่ยนตัวกรอง
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Marketplace;
