import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./MainPage";
import NotFoundPage from "./NotFoundPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
