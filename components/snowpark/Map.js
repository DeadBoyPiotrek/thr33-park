import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const Map = ({ weather }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });
  if (!isLoaded) return <div>Loading map...</div>;
  return <Map2 weather={weather} />;
};

const Map2 = ({ weather }) => {
  const { lat, lon: lng } = weather;
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
      <MarkerF position={center} />
    </GoogleMap>
  );
};

export default Map;
