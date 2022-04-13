import GoogleMapReact, { Coords } from 'google-map-react';
import Marker from 'locator/components/Marker';
import { stations } from 'locator/api/stationCoords';

interface ChargingLocatorProps {
  center: Coords;
  zoom: number;
}

const ChargingLocator = ({ center, zoom }: ChargingLocatorProps) => {
  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={center}
        center={center}
        defaultZoom={zoom}
        zoom={zoom}
      >
        {stations.map(station => (
          <Marker
            lat={station.coords.lat}
            lng={station.coords.lng}
            key={station.id}
            isActive={station.isActive}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default ChargingLocator;
