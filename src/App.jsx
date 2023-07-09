import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { HeaderPartial } from "./partials/HeaderPartial";
import { CartPage } from "./pages/CartPage";
import { AppProvider, useAppContext } from "./store/AppContext";

const initialState = {
  activeProduct: {},
  type: "",
  cart: [],
  products: [],
  notificationsQueue: [],
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppProvider initialState={initialState}>
          <HeaderPartial />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </AppProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
