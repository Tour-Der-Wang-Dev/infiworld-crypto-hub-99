
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "@/hooks/use-toast";
import SEOHead from "@/components/seo/SEOHead";

// Form validation schema
const loginFormSchema = z.object({
  email: z.string().email({
    message: "กรุณากรอกอีเมลให้ถูกต้อง",
  }),
  password: z.string().min(8, {
    message: "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร",
  }),
  consent: z.boolean().refine((value) => value === true, {
    message: "กรุณายอมรับนโยบายความเป็นส่วนตัว",
  }),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Setup form with validation
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      consent: false,
    },
  });

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const onSubmit = async (values: LoginFormValues) => {
    setIsLoading(true);
    setAuthError(null);

    try {
      // Attempt to sign in with Supabase
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        setAuthError(error.message);
        return;
      }

      // Success
      toast({
        title: "เข้าสู่ระบบสำเร็จ",
        description: "ยินดีต้อนรับกลับมา",
      });

      // Redirect to home page after successful login
      navigate("/");
    } catch (error) {
      setAuthError("เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง");
    } finally {
      setIsLoading(false);
    }
  };

  // Login with ThaiID provider (placeholder for OAuth integration)
  const loginWithThaiID = async () => {
    setIsLoading(true);
    setAuthError(null);

    try {
      toast({
        title: "กำลังเชื่อมต่อกับ ThaiID",
        description: "กรุณารอสักครู่...",
      });
      
      // Placeholder for ThaiID OAuth - in real implementation would use Supabase OAuth
      // const { error } = await supabase.auth.signInWithOAuth({ provider: 'thaiid' });
      
      // Simulate ThaiID OAuth for now
      setTimeout(() => {
        toast({
          title: "ฟีเจอร์ยังไม่พร้อมใช้งาน",
          description: "ระบบ ThaiID OAuth อยู่ระหว่างการพัฒนา",
          variant: "destructive",
        });
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      setAuthError("เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง");
      setIsLoading(false);
    }
  };

  return (
    <>
      <SEOHead
        title="เข้าสู่ระบบ INFIWORLD | แพลตฟอร์มคริปโต"
        description="เข้าสู่ระบบ INFIWORLD - แพลตฟอร์มที่รวมบริการซื้อ-ขาย-เช่า, งานฟรีแลนซ์, การจอง, และแผนที่ร้านค้าที่รับคริปโต"
        canonicalUrl="/login"
        ogImage="/ChatGPT Image 3 พ.ค. 2568 18_28_43.png"
      />
      <div className="min-h-screen flex flex-col">
        <header className="py-6 border-b">
          <div className="container mx-auto px-4 sm:px-6 flex justify-center">
            <Link to="/" className="flex items-center" aria-label="กลับไปที่หน้าหลัก">
              <span className="text-2xl md:text-3xl font-bold text-infi-dark">INFIWORLD</span>
              <span className="ml-1 text-xs bg-infi-green text-white px-1.5 py-0.5 rounded">CRYPTO</span>
            </Link>
          </div>
        </header>

        <main className="flex-grow flex items-center justify-center px-4 sm:px-6 py-8">
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-infi-dark">เข้าสู่ระบบ</h1>
              <p className="text-infi-gray mt-2">เข้าสู่ระบบเพื่อใช้บริการ INFIWORLD</p>
            </div>

            {authError && (
              <Alert variant="destructive" className="mb-6">
                <AlertDescription>{authError}</AlertDescription>
              </Alert>
            )}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">อีเมล</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-infi-gray h-4 w-4" />
                            <Input
                              id="email"
                              placeholder="example@mail.com"
                              className="pl-10"
                              type="email"
                              autoComplete="email"
                              aria-describedby="email-error"
                              {...field}
                            />
                          </div>
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="password">รหัสผ่าน</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-infi-gray h-4 w-4" />
                            <Input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••"
                              className="pl-10"
                              autoComplete="current-password"
                              aria-describedby="password-error"
                              {...field}
                            />
                            <button
                              type="button"
                              onClick={togglePasswordVisibility}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-infi-gray"
                              aria-label={showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Link to="/forgot-password" className="text-sm font-medium text-infi-green hover:text-infi-green-hover">
                    ลืมรหัสผ่าน?
                  </Link>
                </div>

                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          id="consent"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          aria-describedby="consent-error"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel htmlFor="consent" className="text-sm font-normal">
                          ฉันยินยอมให้เก็บข้อมูลส่วนบุคคลตาม{" "}
                          <Link to="/privacy-policy" className="text-infi-green hover:underline">
                            นโยบายความเป็นส่วนตัว
                          </Link>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-infi-green hover:bg-infi-green-hover transition-transform hover:scale-[1.02]"
                  disabled={isLoading}
                >
                  {isLoading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
                </Button>
              </form>
            </Form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-infi-gray">หรือ</span>
              </div>
            </div>

            <Button
              type="button"
              onClick={loginWithThaiID}
              variant="outline"
              className="w-full border border-infi-gray/30 hover:bg-gray-50 transition-transform hover:scale-[1.02]"
              disabled={isLoading}
            >
              <User className="mr-2 h-4 w-4" />
              เข้าสู่ระบบด้วย ThaiID
            </Button>

            <div className="mt-6 text-center">
              <p className="text-sm text-infi-gray">
                ยังไม่มีบัญชี?{" "}
                <Link to="/signup" className="font-medium text-infi-green hover:underline">
                  สมัครสมาชิก
                </Link>
              </p>
            </div>
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

export default Login;
