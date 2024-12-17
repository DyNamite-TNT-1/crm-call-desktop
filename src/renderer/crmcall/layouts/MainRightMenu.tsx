import { Route, Routes } from 'react-router-dom';
import {
  kRouteCustomerList,
  kRouteMissedCallList,
  kRouteSearch,
} from './config';
import MissedCallListPage from '../pages/MissedCallListPage/MissedCallListPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import CustomerListPage from '../pages/CustomerListPage/CustomerListPage';

const MainRightMenu = () => {
  return (
    <Routes>
      <Route
        path={`/${kRouteMissedCallList}/*`}
        element={<MissedCallListPage />}
      />
      <Route path={`/${kRouteSearch}/*`} element={<SearchPage />} />
      <Route path={`/${kRouteCustomerList}/*`} element={<CustomerListPage />} />
    </Routes>
  );
};

export default MainRightMenu;
