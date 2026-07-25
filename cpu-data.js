// รายการข้อมูล CPU ยอดนิยมสำหรับหน้าเว็บ SPEC HUB
const cpuDatabase = [
  // ==========================================
  // AMD RYZEN 9000 SERIES (AM5)
  // ==========================================
  {
    name: "AMD Ryzen 9 9950X",
    series: "9000 Series",
    socket: "AM5",
    coresThreads: "16 Cores / 32 Threads",
    graphics: "AMD Radeon Graphics",
    tdp: "170W",
    cooler: "No",
    image: "assets/Ryzen 9.png"
  },
  {
    name: "AMD Ryzen 9 9900X",
    series: "9000 Series",
    socket: "AM5",
    coresThreads: "12 Cores / 24 Threads",
    graphics: "AMD Radeon Graphics",
    tdp: "120W",
    cooler: "No",
    image: "assets/Ryzen 9.png"
  },
  {
    name: "AMD Ryzen 7 9700X",
    series: "9000 Series",
    socket: "AM5",
    coresThreads: "8 Cores / 16 Threads",
    graphics: "AMD Radeon Graphics",
    tdp: "65W",
    cooler: "No",
    image: "assets/Ryzen 7.png"
  },
  {
    name: "AMD Ryzen 5 9600X",
    series: "9000 Series",
    socket: "AM5",
    coresThreads: "6 Cores / 12 Threads",
    graphics: "AMD Radeon Graphics",
    tdp: "65W",
    cooler: "No",
    image: "assets/Ryzen 5.png"
  },

  // ==========================================
  // AMD RYZEN 7000 SERIES (AM5)
  // ==========================================
  {
    name: "AMD Ryzen 9 7950X3D",
    series: "7000 Series",
    socket: "AM5",
    coresThreads: "16 Cores / 32 Threads",
    graphics: "AMD Radeon Graphics",
    tdp: "120W",
    cooler: "No",
    image: "assets/Ryzen 9.png"
  },
  {
    name: "AMD Ryzen 9 7900X3D",
    series: "7000 Series",
    socket: "AM5",
    coresThreads: "12 Cores / 24 Threads",
    graphics: "AMD Radeon Graphics",
    tdp: "120W",
    cooler: "No",
    image: "assets/Ryzen 9.png"
  },
  {
    name: "AMD Ryzen 7 7800X3D",
    series: "7000 Series",
    socket: "AM5",
    coresThreads: "8 Cores / 16 Threads",
    graphics: "AMD Radeon Graphics",
    tdp: "120W",
    cooler: "No",
    image: "assets/Ryzen 7.png"
  },
  {
    name: "AMD Ryzen 7 7700X",
    series: "7000 Series",
    socket: "AM5",
    coresThreads: "8 Cores / 16 Threads",
    graphics: "AMD Radeon Graphics",
    tdp: "105W",
    cooler: "No",
    image: "assets/Ryzen 7.png"
  },
  {
    name: "AMD Ryzen 5 7600X",
    series: "7000 Series",
    socket: "AM5",
    coresThreads: "6 Cores / 12 Threads",
    graphics: "AMD Radeon Graphics",
    tdp: "105W",
    cooler: "No",
    image: "assets/Ryzen 5.png"
  },

  // ==========================================
  // AMD RYZEN 8000 SERIES (AM5 - APU)
  // ==========================================
  {
    name: "AMD Ryzen 7 8700G",
    series: "8000 Series",
    socket: "AM5",
    coresThreads: "8 Cores / 16 Threads",
    graphics: "AMD Radeon 780M",
    tdp: "65W",
    cooler: "AMD Wraith Spire",
    image: "assets/Ryzen 7.png"
  },
  {
    name: "AMD Ryzen 5 8600G",
    series: "8000 Series",
    socket: "AM5",
    coresThreads: "6 Cores / 12 Threads",
    graphics: "AMD Radeon 760M",
    tdp: "65W",
    cooler: "AMD Wraith Stealth",
    image: "assets/Ryzen 5.png"
  },

  // ==========================================
  // AMD RYZEN 5000 SERIES (AM4 ยอดนิยม)
  // ==========================================
  {
    name: "AMD Ryzen 7 5700X3D",
    series: "5000 Series",
    socket: "AM4",
    coresThreads: "8 Cores / 16 Threads",
    graphics: "None",
    tdp: "105W",
    cooler: "No",
    image: "assets/Ryzen 7.png"
  },
  {
    name: "AMD Ryzen 5 5600X",
    series: "5000 Series",
    socket: "AM4",
    coresThreads: "6 Cores / 12 Threads",
    graphics: "None",
    tdp: "65W",
    cooler: "AMD Wraith Stealth",
    image: "assets/Ryzen 5.png"
  },

  // ==========================================
  // INTEL CORE ULTRA SERIES 2 (LGA1851 ยุคใหม่)
  // ==========================================
  {
    name: "Intel Core Ultra 9 285K",
    series: "Core Ultra Series 2",
    socket: "LGA1851",
    coresThreads: "24 Cores / 24 Threads",
    graphics: "Intel Graphics",
    tdp: "125W",
    cooler: "No",
    image: "assets/Intel Core Ultra 9.png"
  },
  {
    name: "Intel Core Ultra 7 265K",
    series: "Core Ultra Series 2",
    socket: "LGA1851",
    coresThreads: "20 Cores / 20 Threads",
    graphics: "Intel Graphics",
    tdp: "125W",
    cooler: "No",
    image: "assets/Intel Core Ultra 7.png"
  },
  {
    name: "Intel Core Ultra 5 245K",
    series: "Core Ultra Series 2",
    socket: "LGA1851",
    coresThreads: "14 Cores / 14 Threads",
    graphics: "Intel Graphics",
    tdp: "125W",
    cooler: "No",
    image: "assets/Intel Core Ultra 5.png"
  },

  // ==========================================
  // INTEL 14TH GENERATION (LGA1700)
  // ==========================================
  {
    name: "Intel Core i9-14900K",
    series: "14th Gen Intel",
    socket: "LGA1700",
    coresThreads: "24 Cores / 32 Threads",
    graphics: "Intel UHD Graphics 770",
    tdp: "125W",
    cooler: "No",
    image: "assets/Intel Core i9.png"
  },
  {
    name: "Intel Core i7-14700K",
    series: "14th Gen Intel",
    socket: "LGA1700",
    coresThreads: "20 Cores / 28 Threads",
    graphics: "Intel UHD Graphics 770",
    tdp: "125W",
    cooler: "No",
    image: "assets/Intel Core i7.png"
  },
  {
    name: "Intel Core i5-14600K",
    series: "14th Gen Intel",
    socket: "LGA1700",
    coresThreads: "14 Cores / 20 Threads",
    graphics: "Intel UHD Graphics 770",
    tdp: "125W",
    cooler: "No",
    image: "assets/Intel Core i5.png"
  },
  {
    name: "Intel Core i5-14400F",
    series: "14th Gen Intel",
    socket: "LGA1700",
    coresThreads: "10 Cores / 16 Threads",
    graphics: "None",
    tdp: "65W",
    cooler: "Intel Laminar RM1",
    image: "assets/Intel Core i5.png"
  },

  // ==========================================
  // INTEL 13TH GENERATION (LGA1700)
  // ==========================================
  {
    name: "Intel Core i9-13900K",
    series: "13th Gen Intel",
    socket: "LGA1700",
    coresThreads: "24 Cores / 32 Threads",
    graphics: "Intel UHD Graphics 770",
    tdp: "125W",
    cooler: "No",
    image: "assets/Intel Core i9.png"
  },
  {
    name: "Intel Core i7-13700K",
    series: "13th Gen Intel",
    socket: "LGA1700",
    coresThreads: "16 Cores / 24 Threads",
    graphics: "Intel UHD Graphics 770",
    tdp: "125W",
    cooler: "No",
    image: "assets/Intel Core i7.png"
  },
  {
    name: "Intel Core i5-13400",
    series: "13th Gen Intel",
    socket: "LGA1700",
    coresThreads: "10 Cores / 16 Threads",
    graphics: "Intel UHD Graphics 730",
    tdp: "65W",
    cooler: "Intel Laminar RM1",
    image: "assets/Intel Core i5.png"
  },

  // ==========================================
  // INTEL 12TH GENERATION (LGA1700 คุ้มค่า)
  // ==========================================
  {
    name: "Intel Core i5-12400F",
    series: "12th Gen Intel",
    socket: "LGA1700",
    coresThreads: "6 Cores / 12 Threads",
    graphics: "None",
    tdp: "65W",
    cooler: "Intel Laminar RM1",
    image: "assets/Intel Core i5.png"
  },
  {
    name: "Intel Core i3-12100F",
    series: "12th Gen Intel",
    socket: "LGA1700",
    coresThreads: "4 Cores / 8 Threads",
    graphics: "None",
    tdp: "60W",
    cooler: "Intel Laminar RM1",
    image: "assets/Intel Core i3.png"
  }
];