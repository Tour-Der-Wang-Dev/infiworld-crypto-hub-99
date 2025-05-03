
import { X, Phone, Globe, Clock, Bitcoin, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tables } from "@/integrations/supabase/types";
import { useIsMobile } from "@/hooks/use-mobile";

interface StoreDetailsProps {
  store: Tables<"stores">;
  onClose: () => void;
}

const StoreDetails = ({ store, onClose }: StoreDetailsProps) => {
  const isMobile = useIsMobile();
  
  const displayCryptos = () => {
    return store.accepted_crypto.map((crypto, index) => (
      <div key={crypto} className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md text-sm">
        {crypto === "BTC" ? <Bitcoin className="h-4 w-4" /> : <CreditCard className="h-4 w-4" />}
        <span>{crypto}</span>
      </div>
    ));
  };

  return (
    <div className={`${isMobile ? 'fixed bottom-4 left-4 right-4' : 'fixed right-4 top-24'} z-20 w-auto bg-white rounded-lg shadow-lg p-4 border border-gray-200`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg md:text-xl font-semibold">{store.name}</h3>
        <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <p className="text-gray-600 mb-4 text-sm md:text-base">{store.address}</p>
      
      <div className="mb-4">
        <h4 className="text-xs md:text-sm font-semibold mb-2">Accepted Cryptocurrencies</h4>
        <div className="flex flex-wrap gap-2">
          {displayCryptos()}
        </div>
      </div>
      
      {store.phone && (
        <div className="flex items-center gap-2 text-xs md:text-sm mb-2">
          <Phone className="h-4 w-4 text-gray-500" />
          <a href={`tel:${store.phone}`} className="text-blue-600 hover:underline">{store.phone}</a>
        </div>
      )}
      
      {store.website && (
        <div className="flex items-center gap-2 text-xs md:text-sm mb-2">
          <Globe className="h-4 w-4 text-gray-500" />
          <a href={store.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate max-w-full">{store.website}</a>
        </div>
      )}
      
      {store.opening_hours && (
        <div className="flex items-center gap-2 text-xs md:text-sm">
          <Clock className="h-4 w-4 text-gray-500" />
          <span>{store.opening_hours}</span>
        </div>
      )}
    </div>
  );
};

export default StoreDetails;
