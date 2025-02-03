import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Pages/MainLayout.jsx";
import ClothingLayout from "./Pages/ClothingLayout.jsx";
import AccessoriesLayout from "./Pages/AccessoriesLayout.jsx";
import ContentDetail from "./Components/ContentDetail.jsx";
import ItemLayout from "./Pages/ItemLayout.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
        <Route path="/clothing" element={<ClothingLayout />}></Route>
        <Route path="/accessories" element={<AccessoriesLayout />}></Route>
        <Route path="/contentDetails/:id" element={<ItemLayout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
