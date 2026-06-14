import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
// import AdminHome from "./pages/Admin/AdminHome";
import Dashboard from "./pages/Admin/Dashboard";
// import { CartProvider } from "./components/Customer/Context/CartContext";
import Home from "./pages/Customer/Home";
// import Home from "./pages/Home";
// import Home from "./pages/User/Home";
import AddProduct from "./pages/Admin/AddProduct";
import Inventory from "./pages/Admin/Inventory";
import Products from "./pages/Admin/Products";
import Orders from "./pages/Admin/Orders";
import Stores from "./pages/Admin/Stores";
import Customers from "./pages/Admin/Customers";
import DeliveryPartners from "./pages/Admin/DeliveryPartners";
import Analytics from "./pages/Admin/Analytics";
import Coupons from "./pages/Admin/Coupons";
import Notifications from "./pages/Admin/Notifications";
import Settings from "./pages/Admin/Settings";
import Search from "./pages/Customer/Search";
import Profile from "./pages/Customer/Profile";
import Checkout from "./pages/Customer/Checkout";
import { CartProvider } from "./components/Customer/CartContext";
import AddStore from "./pages/Admin/AddStore";
import CreateCoupon from "./pages/Admin/CreateCoupon";
import Managers from "./pages/Admin/Managers";
import AddManager from "./pages/Admin/AddManager";

const App = () => {
  return (
    <>
      <Toaster />
      <CartProvider>
        <Routes>
          {/* Customer Route */}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* Admin Routes Grouped under /admin */}
          <Route path="/admin">
            {/* 'index' means this loads exactly on /admin */}
            <Route index element={<Dashboard />} />

            {/* This loads on /admin/add-product */}
            <Route path="add-product" element={<AddProduct />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="stores" element={<Stores />} />
            <Route path="customers" element={<Customers />} />
            <Route path="managers" element={<Managers />} />
            <Route path="add-manager" element={<AddManager />} />
            <Route path="delivery" element={<DeliveryPartners />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="coupons" element={<Coupons />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="settings" element={<Settings />} />
            <Route path="stores/add" element={<AddStore />} />
            <Route path="coupons/add" element={<CreateCoupon />} />
          </Route>
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;
