import { Route, Routes } from 'react-router-dom';
import {
  kRouteCall,
  kRouteCustomerList,
  kRouteMissedCallList,
  kRouteSearch,
} from './config';
import MissedCallListPage from '../pages/MissedCallListPage/MissedCallListPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import CustomerListPage from '../pages/CustomerListPage/CustomerListPage';
import Call from '../pages/Call/Call';

const MainRightMenu = () => {
  return (
    <Routes>
      <Route
        path={`/${kRouteMissedCallList}/*`}
        element={<MissedCallListPage />}
      />
      <Route path={`/${kRouteSearch}/*`} element={<SearchPage />} />
      <Route path={`/${kRouteCustomerList}/*`} element={<CustomerListPage />} />
      <Route path={`/${kRouteCall}/*`} element={<Call />} />
    </Routes>
  );
};

export default MainRightMenu;
