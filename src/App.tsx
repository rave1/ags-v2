import type React from "react"; // @ts-ignore
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./views/Homepage";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="photos" element={<div>fotos</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
