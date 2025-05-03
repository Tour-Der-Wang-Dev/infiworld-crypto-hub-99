
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-infi-dark mb-4">404</h1>
          <p className="text-xl text-infi-gray mb-8">
            ขออภัย ไม่พบหน้าที่คุณกำลังค้นหา
          </p>
          <Link to="/" className="btn-primary">
            กลับสู่หน้าหลัก
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
