
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo/SEOHead";

const ForgotPassword = () => {
  return (
    <>
      <SEOHead
        title="ลืมรหัสผ่าน INFIWORLD | แพลตฟอร์มคริปโต"
        description="รีเซ็ตรหัสผ่าน INFIWORLD - แพลตฟอร์มที่รวมบริการซื้อ-ขาย-เช่า, งานฟรีแลนซ์, การจอง, และแผนที่ร้านค้าที่รับคริปโต"
        canonicalUrl="/forgot-password"
      />
      <div className="min-h-screen flex flex-col">
        <header className="py-6 border-b">
          <div className="container mx-auto px-4 flex justify-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl md:text-3xl font-bold text-infi-dark">INFIWORLD</span>
              <span className="ml-1 text-xs bg-infi-green text-white px-1.5 py-0.5 rounded">CRYPTO</span>
            </Link>
          </div>
        </header>

        <main className="flex-grow flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">รีเซ็ตรหัสผ่าน</h1>
            <p className="mb-6 text-infi-gray">หน้านี้อยู่ระหว่างการพัฒนา</p>
            <Button asChild>
              <Link to="/login">กลับไปหน้าเข้าสู่ระบบ</Link>
            </Button>
          </div>
        </main>

        <footer className="py-6 border-t">
          <div className="container mx-auto px-4 text-center text-sm text-infi-gray">
            <p>
              &copy; {new Date().getFullYear()} INFIWORLD - แพลตฟอร์มคริปโต |{" "}
              <Link to="/privacy-policy" className="hover:underline">
                นโยบายความเป็นส่วนตัว
              </Link>{" "}
              |{" "}
              <Link to="/terms" className="hover:underline">
                ข้อกำหนดการใช้งาน
              </Link>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ForgotPassword;
