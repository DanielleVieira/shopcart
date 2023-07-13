import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { HeaderPartial } from "./partials/Header/HeaderPartial";
import { CartPage } from "./pages/Cart/CartPage";
import { useAppContext } from "./store/AppContext";
import {
  fetchCartAction,
  removeNotificationToQueueAction,
} from "./store/actions";
import { useEffect } from "react";
import { NotificationComponent } from "./components/Notification/NotificationComponent";
import { FooterPartial } from "./partials/Footer/FooterPatial";

function App() {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    fetchCartAction(dispatch);
  }, []);

  useEffect(() => {
    if (state.notificationsQueue.length > 0) {
      const timer = setTimeout(() => {
        dispatch(removeNotificationToQueueAction());
      }, 3000);
      return () => clearTimeout(timer); //para desativar o timeout se houver mudança de tela e o compoente for demostado.
    }
  }, [state.notificationsQueue]);

  return (
    <BrowserRouter>
      <div className="App min-vh-100 position-relative">
        <HeaderPartial />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <FooterPartial />
        {state.notificationsQueue.length > 0 && (
          <NotificationComponent
            message={state.notificationsQueue[0].message}
            variant={state.notificationsQueue[0].variant}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
