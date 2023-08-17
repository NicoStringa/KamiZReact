import { Routes as ReactDomRoutes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Congratulations from '../pages/Congratulations/Congratulations';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Checkout from '../pages/Checkout/Checkout';
import MyOrders from '../pages/MyOrders/MyOrders';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Summary from '../pages/Summary/Summary';

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/congratulations" element={<Congratulations />} />
      <Route path="/summary/:orderId" element={<Summary />} />

      <Route
        path="/checkout"
        element={
          <ProtectedRoute redirectTo="/register">
            <Checkout />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<PageNotFound />} />
    </ReactDomRoutes>
  );
}

export default Routes;
