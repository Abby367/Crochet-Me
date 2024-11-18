import React from "react";
import logo from "./logo.svg";
import { useEffect, useRef } from "react";
import { NavBar } from "./component/NavBar/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/HomePage/Home";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    containerRef.current?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-[#FFF0F5] min-h-screen">
      <div>
        <NavBar />
      </div>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
