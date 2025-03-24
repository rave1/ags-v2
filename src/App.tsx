import type React from "react"; // @ts-ignore
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./views/Homepage";
import { Gallery } from "./views/Gallerry";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="photos" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
