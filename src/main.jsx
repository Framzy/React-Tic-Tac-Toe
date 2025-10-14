import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Board from "./Board.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex flex-col justify-center items-center h-screen bg-[#2f7078]">
      <Board />
    </div>
  </StrictMode>
);
