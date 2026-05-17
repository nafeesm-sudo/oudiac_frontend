import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import AdminHome from "./pages/Admin/AdminHome";
import Dashboard from "./pages/Admin/Dashboard";
// import Home from "./pages/Customer/Home";
// import { CartProvider } from "./components/Customer/Context/CartContext";
import Home from "./pages/User/Home";
import AddProduct from "./pages/Admin/AddProduct";

const App = () => {
  return (
    <>
      <Toaster />
      {/* <CartProvider> */}
      <Routes>
        {/* Customer Route */}
        <Route path="/" element={<Home />} />

        {/* Admin Routes Grouped under /admin */}
        <Route path="/admin">
          {/* 'index' means this loads exactly on /admin */}
          <Route index element={<Dashboard />} />

          {/* This loads on /admin/add-product */}
          <Route path="add-product" element={<AddProduct />} />
        </Route>
      </Routes>
      {/* </CartProvider> */}
    </>
  );
};

export default App;
