
interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  type: "car" | "property";
  image: string;
  isRental: boolean;
  location: string;
  features: string[];
}

export const listings: Listing[] = [
  {
    id: "car-1",
    title: "Toyota Camry 2023",
    description: "รถยนต์ซีดานรุ่นใหม่ล่าสุด สภาพดีเยี่ยม เลขไมล์ต่ำ",
    price: 950000,
    type: "car",
    image: "/assets/marketplace/car-1.jpg",
    isRental: false,
    location: "กรุงเทพฯ",
    features: ["เกียร์อัตโนมัติ", "กล้องถอยหลัง", "ระบบนำทาง", "ประหยัดน้ำมัน"]
  },
  {
    id: "car-2",
    title: "Honda Civic 2022",
    description: "รถซีดานสภาพดีมาก ใช้งานเพียง 1 ปี พร้อมประกัน",
    price: 850000,
    type: "car",
    image: "/assets/marketplace/car-2.jpg",
    isRental: false,
    location: "เชียงใหม่",
    features: ["เกียร์อัตโนมัติ", "ประตูไฟฟ้า", "เซ็นเซอร์ถอยหลัง"]
  },
  {
    id: "car-3",
    title: "Mercedes-Benz C-Class เช่ารายเดือน",
    description: "รถหรูให้เช่ารายเดือน สภาพใหม่ บริการดี มีประกันครอบคลุม",
    price: 45000,
    type: "car",
    image: "/assets/marketplace/car-3.jpg",
    isRental: true,
    location: "กรุงเทพฯ",
    features: ["เช่ารายเดือน", "ประกันชั้น 1", "บริการดูแลรักษา"]
  },
  {
    id: "property-1",
    title: "คอนโดใจกลางเมือง The Metropolis",
    description: "คอนโดหรูใจกลางเมือง 1 ห้องนอน วิวสวย ทำเลดีมาก",
    price: 3500000,
    type: "property",
    image: "/assets/marketplace/property-1.jpg",
    isRental: false,
    location: "สุขุมวิท กรุงเทพฯ",
    features: ["1 ห้องนอน", "1 ห้องน้ำ", "ใกล้ BTS", "สระว่ายน้ำ"]
  },
  {
    id: "property-2",
    title: "บ้านเดี่ยว 2 ชั้น หมู่บ้านศุภาลัย",
    description: "บ้านเดี่ยว 2 ชั้น 3 ห้องนอน พื้นที่ใช้สอย 150 ตรม. ที่ดิน 60 ตรว.",
    price: 5200000,
    type: "property",
    image: "/assets/marketplace/property-2.jpg",
    isRental: false,
    location: "รังสิต ปทุมธานี",
    features: ["3 ห้องนอน", "2 ห้องน้ำ", "จอดรถ 2 คัน", "สวนหลังบ้าน"]
  },
  {
    id: "property-3",
    title: "คอนโดให้เช่า The Link",
    description: "คอนโดให้เช่ารายเดือน ห้องใหม่ เฟอร์นิเจอร์ครบ พร้อมเข้าอยู่",
    price: 15000,
    type: "property",
    image: "/assets/marketplace/property-3.jpg",
    isRental: true,
    location: "รัชดาภิเษก กรุงเทพฯ",
    features: ["1 ห้องนอน", "1 ห้องน้ำ", "เฟอร์นิเจอร์ครบ", "ใกล้ MRT"]
  },
  {
    id: "property-4",
    title: "ทาวน์โฮม 3 ชั้น โครงการบ้านกลางเมือง",
    description: "ทาวน์โฮมใหม่ 3 ชั้น 3 ห้องนอน ทำเลดี เดินทางสะดวก",
    price: 4200000,
    type: "property",
    image: "/assets/marketplace/property-4.jpg",
    isRental: false,
    location: "บางนา กรุงเทพฯ",
    features: ["3 ห้องนอน", "3 ห้องน้ำ", "ที่จอดรถ", "พื้นที่ส่วนกลาง"]
  },
  {
    id: "car-4",
    title: "Nissan Leaf รถยนต์ไฟฟ้า",
    description: "รถยนต์พลังงานไฟฟ้า 100% ประหยัดพลังงาน เป็นมิตรกับสิ่งแวดล้อม",
    price: 1200000,
    type: "car",
    image: "/assets/marketplace/car-4.jpg",
    isRental: false,
    location: "กรุงเทพฯ",
    features: ["รถไฟฟ้า", "ชาร์จเร็ว", "ระยะทางไกล", "ประหยัดพลังงาน"]
  }
];
