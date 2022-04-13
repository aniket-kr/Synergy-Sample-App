import { Route, Routes } from 'react-router-dom';

import Home from 'home/containers/Home';
import Layout from 'shared/containers/Layout';
import ChargingLocator from 'locator/containers/ChargingLocator';
import { center } from 'locator/api/defaultCenter';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/charging-locator" element={<Layout stretch />}>
        <Route index element={<ChargingLocator center={center} zoom={13} />} />
      </Route>
    </Routes>
  );
};

export default App;
