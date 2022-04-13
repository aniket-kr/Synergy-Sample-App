import { center } from 'locator/api/defaultCenter';
import ChargingLocator from 'locator/containers/ChargingLocator';
import { Route, Routes } from 'react-router-dom';
import Layout from 'shared/containers/Layout';

const LocatorRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout stretch />}>
        <Route index element={<ChargingLocator center={center} zoom={14} />} />
      </Route>
    </Routes>
  );
};

export default LocatorRoutes;
