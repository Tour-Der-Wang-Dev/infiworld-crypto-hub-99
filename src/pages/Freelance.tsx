
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FreelancerCard from "@/components/freelance/FreelancerCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Mock data for freelancers
const mockFreelancers = [
  {
    id: 1,
    name: "สมชาย ใจดี",
    category: "ครูสอนภาษาอังกฤษ",
    rating: 4.8,
    price: 850,
    image: "https://placehold.co/300x200?text=Teacher",
    skills: ["ภาษาอังกฤษ", "การสอน", "IELTS"]
  },
  {
    id: 2,
    name: "สมหญิง เก่งกาจ",
    category: "ครูสอนคณิตศาสตร์",
    rating: 4.9,
    price: 900,
    image: "https://placehold.co/300x200?text=Math+Teacher",
    skills: ["คณิตศาสตร์", "สถิติ", "การสอน"]
  },
  {
    id: 3,
    name: "มานี มานะ",
    category: "โปรแกรมเมอร์",
    rating: 4.7,
    price: 1200,
    image: "https://placehold.co/300x200?text=Programmer",
    skills: ["React", "Node.js", "Full Stack"]
  },
  {
    id: 4,
    name: "วีระ โค้ดดิ้ง",
    category: "โปรแกรมเมอร์",
    rating: 4.5,
    price: 1500,
    image: "https://placehold.co/300x200?text=Developer",
    skills: ["Python", "Data Science", "Machine Learning"]
  },
  {
    id: 5,
    name: "ไพลิน ศิลปิน",
    category: "กราฟิกดีไซเนอร์",
    rating: 4.6,
    price: 950,
    image: "https://placehold.co/300x200?text=Designer",
    skills: ["Photoshop", "Illustrator", "UI/UX"]
  },
  {
    id: 6,
    name: "รุ่งโรจน์ เวบเมสเตอร์",
    category: "โปรแกรมเมอร์",
    rating: 4.4,
    price: 1100,
    image: "https://placehold.co/300x200?text=Webmaster",
    skills: ["WordPress", "PHP", "SEO"]
  }
];

const Freelance = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter freelancers based on search query and category
  const filteredFreelancers = mockFreelancers.filter((freelancer) => {
    const matchesSearch = freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          freelancer.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          freelancer.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || 
                            (selectedCategory === "teacher" && freelancer.category.includes("ครู")) ||
                            (selectedCategory === "programmer" && freelancer.category === "โปรแกรมเมอร์") ||
                            (selectedCategory === "designer" && freelancer.category === "กราฟิกดีไซเนอร์");
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-infi-dark text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">ค้นหาฟรีแลนซ์มืออาชีพ</h1>
              <p className="text-lg mb-8">
                ค้นพบฟรีแลนซ์มืออาชีพหลากหลายสาขา พร้อมระบบจองและชำระเงินที่ปลอดภัยด้วยคริปโต
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="w-full relative">
                  <Input 
                    type="text" 
                    placeholder="ค้นหาตามทักษะ ชื่อ หรือหมวดหมู่" 
                    className="h-12 pl-4 pr-10 bg-white text-black border-0"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute right-3 top-3 text-gray-400">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                      />
                    </svg>
                  </div>
                </div>
                <Button className="bg-infi-green hover:bg-infi-green-hover h-12 px-8">
                  ค้นหา
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="all">ทั้งหมด</TabsTrigger>
                <TabsTrigger value="teacher">ครูสอนพิเศษ</TabsTrigger>
                <TabsTrigger value="programmer">โปรแกรมเมอร์</TabsTrigger>
                <TabsTrigger value="designer">กราฟิกดีไซเนอร์</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Freelancers Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">ฟรีแลนซ์แนะนำ</h2>
            
            {filteredFreelancers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredFreelancers.map((freelancer) => (
                  <FreelancerCard 
                    key={freelancer.id} 
                    {...freelancer} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-infi-gray text-xl">ไม่พบฟรีแลนซ์ที่ตรงกับเงื่อนไขการค้นหา</p>
                <Button 
                  className="mt-4 bg-infi-green hover:bg-infi-green-hover"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                >
                  ดูทั้งหมด
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">วิธีการใช้บริการ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-infi-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-infi-green text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">ค้นหาและเลือกฟรีแลนซ์</h3>
                <p className="text-infi-gray">
                  ค้นหาฟรีแลนซ์ที่มีทักษะตรงความต้องการของคุณ และตรวจสอบรีวิวจากลูกค้าคนอื่น
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-infi-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-infi-green text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">ส่งคำขอและชำระเงิน</h3>
                <p className="text-infi-gray">
                  ส่งรายละเอียดงาน ระบุวันเวลาที่ต้องการ และชำระเงินด้วยวิธีที่สะดวก รวมถึงคริปโต
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-infi-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-infi-green text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">รับบริการและให้คะแนน</h3>
                <p className="text-infi-gray">
                  รับบริการตามวันเวลาที่นัดหมาย เมื่อเสร็จสิ้นสามารถให้คะแนนและรีวิวฟรีแลนซ์ได้
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-infi-green py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">เป็นฟรีแลนซ์กับเรา</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              มีทักษะพิเศษ? ลงทะเบียนเป็นฟรีแลนซ์กับเราวันนี้ และรับงานจากลูกค้าทั่วประเทศ
            </p>
            <Button className="bg-white text-infi-green hover:bg-gray-100 px-8 py-6 text-lg">
              สมัครเป็นฟรีแลนซ์
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Freelance;
