import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import UserContextProvider from "./contexts/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
     <Sidebar/>
     <Outlet/>
    </UserContextProvider>
  )
}

export default App;