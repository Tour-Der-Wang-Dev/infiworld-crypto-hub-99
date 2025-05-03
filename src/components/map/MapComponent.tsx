
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Tables } from "@/integrations/supabase/types";

type Store = Tables<"stores">;

interface MapComponentProps {
  stores: Store[];
  onStoreClick: (store: Store) => void;
  mapboxToken: string;
}

const MapComponent = ({ stores, onStoreClick, mapboxToken }: MapComponentProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [100.5018, 13.7563], // Bangkok coordinates
      zoom: 11
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      "top-right"
    );

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [mapboxToken]);

  // Update markers when stores change
  useEffect(() => {
    if (!map.current) return;

    // Clear existing markers
    markers.current.forEach(marker => marker.remove());
    markers.current = [];

    // Add markers for each store
    stores.forEach(store => {
      const markerEl = document.createElement('div');
      markerEl.className = 'store-marker';
      markerEl.innerHTML = `
        <div class="w-6 h-6 bg-infi-green rounded-full flex items-center justify-center cursor-pointer shadow-lg transform transition-transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
          </svg>
        </div>
      `;

      const marker = new mapboxgl.Marker({
        element: markerEl,
      })
        .setLngLat([store.longitude, store.latitude])
        .addTo(map.current!);
      
      // Add click event to marker
      markerEl.addEventListener('click', () => {
        onStoreClick(store);
      });
      
      markers.current.push(marker);
    });

    // Fit map to markers if any
    if (stores.length > 0 && map.current) {
      const bounds = new mapboxgl.LngLatBounds();
      
      stores.forEach(store => {
        bounds.extend([store.longitude, store.latitude]);
      });
      
      map.current.fitBounds(bounds, {
        padding: 70,
        maxZoom: 15
      });
    }
  }, [stores, onStoreClick]);

  return (
    <div ref={mapContainer} className="absolute inset-0" />
  );
};

export default MapComponent;
