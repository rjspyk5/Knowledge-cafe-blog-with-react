import { Outlet } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="w-9/12 mx-auto">
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
}

export default App;
