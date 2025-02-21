import { BrowserRouter, Route, Routes } from "react-router";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

import HomePage from "./pages/home/HomePage";
import AppLayout from "./layout/AppLayout";
import ProductPage from "./pages/product/ProductPage";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <BrowserRouter basename="/kidpro-demo">
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />}>
              <Route path=":categoryId" element={<HomePage />} />
            </Route>
            <Route path="/product" element={<ProductPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
