import PropertyPage from "./pages/PropertyPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import { BrowserRouter, Routes, Route } from "react-router";
import { WishListContextProvider } from "./context/WishListContext";
const App = () => {
  return (
    <>
      <WishListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/property" element={<PropertyPage />} />
            <Route path="/property/:id" element={<PropertyDetailPage />} />
          </Routes>
        </BrowserRouter>
      </WishListContextProvider>
    </>
  );
};

export default App;
