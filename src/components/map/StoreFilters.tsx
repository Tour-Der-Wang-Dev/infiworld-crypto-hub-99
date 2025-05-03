
import { Button } from "@/components/ui/button";

interface StoreFiltersProps {
  onCategoryChange: (category: string | null) => void;
  selectedCategory: string | null;
}

const StoreFilters = ({ onCategoryChange, selectedCategory }: StoreFiltersProps) => {
  const categories = [
    { id: "restaurant", label: "Restaurants" },
    { id: "retail", label: "Retail Stores" }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="font-semibold mb-2 text-lg">Filter Crypto Stores</h2>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(null)}
          className={selectedCategory === null ? "bg-infi-green hover:bg-infi-green-hover" : ""}
        >
          All Stores
        </Button>
        
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category.id)}
            className={selectedCategory === category.id ? "bg-infi-green hover:bg-infi-green-hover" : ""}
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default StoreFilters;
