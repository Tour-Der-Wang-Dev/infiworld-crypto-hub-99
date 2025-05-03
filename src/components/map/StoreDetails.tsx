
import { X, Phone, Globe, Clock, Bitcoin, Ethereum, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tables } from "@/integrations/supabase/types";

type Store = Tables<"stores">;

interface StoreDetailsProps {
  store: Store;
  onClose: () => void;
}

const cryptoIcons: Record<string, React.ReactNode> = {
  BTC: <Bitcoin className="h-5 w-5 text-amber-500" />,
  ETH: <Ethereum className="h-5 w-5 text-purple-600" />,
  USDT: <CreditCard className="h-5 w-5 text-green-500" />,
  XRP: <CreditCard className="h-5 w-5 text-blue-500" />,
  DOGE: <CreditCard className="h-5 w-5 text-yellow-500" />,
  LTC: <CreditCard className="h-5 w-5 text-gray-400" />,
};

const StoreDetails = ({ store, onClose }: StoreDetailsProps) => {
  return (
    <div className="absolute right-4 top-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-20">
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-semibold">{store.name}</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="p-1 h-auto">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="text-sm text-gray-600 mb-4">{store.address}</div>

        <div className="space-y-3">
          {store.phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-500" />
              <a href={`tel:${store.phone}`} className="text-sm hover:underline">{store.phone}</a>
            </div>
          )}

          {store.website && (
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-gray-500" />
              <a 
                href={store.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-infi-green hover:underline truncate max-w-[16rem]"
              >
                {store.website.replace(/^https?:\/\//, '')}
              </a>
            </div>
          )}

          {store.opening_hours && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-sm">{store.opening_hours}</span>
            </div>
          )}

          <div className="pt-2">
            <h3 className="text-sm font-semibold mb-2">Accepted Cryptocurrencies:</h3>
            <div className="flex flex-wrap gap-2">
              {store.accepted_crypto.map((crypto) => (
                <div 
                  key={crypto} 
                  className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full"
                >
                  {cryptoIcons[crypto] || <CreditCard className="h-4 w-4 text-gray-500" />}
                  <span className="text-xs font-medium">{crypto}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-3 text-right">
        <Button 
          size="sm" 
          onClick={() => window.open(`https://maps.google.com/maps?q=${store.latitude},${store.longitude}`, '_blank')}
          className="bg-infi-green hover:bg-infi-green-hover text-xs"
        >
          Get Directions
        </Button>
      </div>
    </div>
  );
};

export default StoreDetails;
