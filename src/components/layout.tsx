import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
    <div className="flex h-screen">
      {/* Sidebar (Full height) */}
      <Sidebar className="h-full fixed left-0 top-0" />
  
      {/* Main content area */}
      <div className="flex flex-col flex-1"> 
        {/* Navbar at the top-right */}
        <div className="w-full h-[64px] flex px-5 top-0 z-50 justify-end">
          <Navbar />
        </div>
  
        {/* Main Content (Below Navbar) */}
        <main className="flex-1 p-5 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  </>
  
    
  );
};

export default Layout;