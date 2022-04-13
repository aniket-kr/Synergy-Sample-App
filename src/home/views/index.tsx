import { Route, Routes } from 'react-router-dom';
import Layout from 'shared/containers/Layout';
import Home from 'home/containers/Home';

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default HomeRoutes;
