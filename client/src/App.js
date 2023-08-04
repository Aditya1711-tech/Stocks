import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import MarketView from "./pages/MarketView";
import Utilities from "./pages/Utilities";
import ProtectedRoute from "./pages/ProtectedRoute";
import ColorPicker from "./pages/ColorPicker";
import Portfolio from "./pages/Portfolio";
import { useAppContext } from "./context/appContext";
import Stocks from "./pages/Stocks";
import StockDetails from "./pages/StockDetails";
import Validator from "./pages/Validator";
import Watchlist from "./pages/Watchlist";
function App() {
  const { currentMode } = useAppContext();
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Utilities />}>
            <Route index path="" element={<Landing />} />
            <Route index path="/landing" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ThemePicker" element={<ColorPicker />}></Route>
            <Route path="/stockHome" element={<Stocks />}></Route>
            <Route
              path="/stockDetails/:exc/:name/:sym"
              element={<StockDetails />}
            ></Route>
          </Route>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Utilities />
              </ProtectedRoute>
            }
          >
            <Route element={<Portfolio />}></Route>
            <Route path="watchlist" element={<Watchlist />}></Route>
            <Route path="marketView" element={<MarketView />}></Route>
            <Route
              path="buyStock/:stockName/:id"
              element={<Validator />}
            ></Route>
            <Route path="Portfolio" element={<Portfolio />}></Route>
          </Route>
          <Route path="/" element={<Utilities />}>
            <Route path="*" element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
