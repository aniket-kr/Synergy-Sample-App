import { Route, Routes } from 'react-router-dom';
import HomeRoutes from 'home/views';
import LocatorRoutes from 'locator/views';

const App = () => {
  return (
    <Routes>
      <Route path="/locator/*" element={<LocatorRoutes />} />
      <Route path="/*" element={<HomeRoutes />} />
    </Routes>
  );
};

export default App;
