import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import "./AppLayout.css";

function AppLayout({ children }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  // Close sidebar on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only check if mobile sidebar is open
      if (!isMobileOpen) return;
      
      // Check if click is outside the sidebar
      const sidebar = document.querySelector(".sidebar");
      const mobileHeader = document.querySelector(".mobile-header");
      
      if (
        sidebar && 
        !sidebar.contains(event.target) &&
        mobileHeader && 
        !mobileHeader.contains(event.target)
      ) {
        setIsMobileOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileOpen]);
  
  return (
    <div className="app-layout">
      <Sidebar 
        isMobileOpen={isMobileOpen} 
        onCloseMobile={() => setIsMobileOpen(false)} 
      />
      <MobileHeader 
        onToggleSidebar={() => setIsMobileOpen(!isMobileOpen)} 
      />
      {isMobileOpen && <div className="sidebar-overlay" onClick={() => setIsMobileOpen(false)} />}
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}

export default AppLayout;