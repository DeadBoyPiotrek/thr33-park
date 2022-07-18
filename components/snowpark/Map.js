import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';
const lat = +process.env.NEXT_PUBLIC_LATITUDE;
const lng = +process.env.NEXT_PUBLIC_LONGITUDE;
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });
  if (!isLoaded) return <div>Loading map...</div>;
  return <Map2 />;
};

const Map2 = () => {
  const center = useMemo(() => ({ lat, lng }), []);
  return (
    <GoogleMap
      mapContainerStyle={{
        height: '80vh',
        width: '80%',
      }}
      zoom={15}
      center={center}
    >
      <MarkerF position={{ lat, lng }} />
    </GoogleMap>
  );
};

export default Map;
