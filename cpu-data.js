const cpuDatabase = [
  // ==========================================
  // --- INTEL DESKTOP CPU (100 รุ่นจริง) ---
  // ==========================================
  // 14th Gen Intel (LGA1700)
  { name: "Intel Core i9-14900KS", series: "14th Gen Intel", socket: "LGA1700", coresThreads: "24/32", graphics: "Intel UHD Graphics 770", tdp: "150 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i9-14900K", series: "14th Gen Intel", socket: "LGA1700", coresThreads: "24/32", graphics: "Intel UHD Graphics 770", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i9-14900KF", series: "14th Gen Intel", socket: "LGA1700", coresThreads: "24/32", graphics: "None", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i9-14900F", series: "14th Gen Intel", socket: "LGA1700", coresThreads: "24/32", graphics: "None", tdp: "65 W", cooler: "Intel Laminar RH1", image: "assets/INTEL.png" },
  { name: "Intel Core i9-14900", series: "14th Gen Intel", socket: "LGA1700", coresThreads: "24/32", graphics: "Intel UHD Graphics 770", tdp: "65 W", cooler: "Intel Laminar RH1", image: "assets/INTEL.png" },
  { name: "Intel Core i7-14700K", series: "14th Gen Intel", socket: "LGA1700", coresThreads: "20/28", graphics: "Intel UHD Graphics 770", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i7-14700KF", series: "14th Gen Intel", socket: "LGA1700", coresThreads: "20/28", graphics: "None", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i7-14700F", series: "14th Gen Intel", socket: "LGA1700", coresThreads: "20/28", graphics: "None", tdp: "65 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },
  { name: "Intel Core i7-14700", series: "14th Gen Intel", socket: "LGA1700", coresThreads: "20/28", graphics: "Intel UHD Graphics 770", tdp: "65 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },
  { name: "Intel Core i5-14600K", series: "14th Gen Intel", socket: "LGA1700", coresThreads: "14/20", graphics: "Intel UHD Graphics 770", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i5-14600KF", series: "14th Gen Intel", socket: "LGA1700", coresThreads: "14/20", graphics: "None", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i5-14600", series: "14th Gen Intel", socket: "LGA1700", coresThreads: "14/20", graphics: "Intel UHD Graphics 770", tdp: "65 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },
  { name: "Intel Core i5-14500", series: "14th Gen Intel", socket: "LGA1700", coresThreads: "14/20", graphics: "Intel UHD Graphics 770", tdp: "65 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },
  { name: "Intel Core i5-14400F", series: "14th Gen Intel", socket: "LGA1700", coresThreads: "10/16", graphics: "None", tdp: "65 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },
  { name: "Intel Core i5-14400", series: "14th Gen Intel", socket: "LGA1700", coresThreads: "10/16", graphics: "Intel UHD Graphics 730", tdp: "65 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },
  { name: "Intel Core i3-14100F", series: "14th Gen Intel", socket: "LGA1700", coresThreads: "4/8", graphics: "None", tdp: "58 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },
  { name: "Intel Core i3-14100", series: "14th Gen Intel", socket: "LGA1700", coresThreads: "4/8", graphics: "Intel UHD Graphics 730", tdp: "60 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },

  // 13th Gen Intel (LGA1700)
  { name: "Intel Core i9-13900KS", series: "13th Gen Intel", socket: "LGA1700", coresThreads: "24/32", graphics: "Intel UHD Graphics 770", tdp: "150 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i9-13900K", series: "13th Gen Intel", socket: "LGA1700", coresThreads: "24/32", graphics: "Intel UHD Graphics 770", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i9-13900KF", series: "13th Gen Intel", socket: "LGA1700", coresThreads: "24/32", graphics: "None", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i9-13900F", series: "13th Gen Intel", socket: "LGA1700", coresThreads: "24/32", graphics: "None", tdp: "65 W", cooler: "Intel Laminar RH1", image: "assets/INTEL.png" },
  { name: "Intel Core i9-13900", series: "13th Gen Intel", socket: "LGA1700", coresThreads: "24/32", graphics: "Intel UHD Graphics 770", tdp: "65 W", cooler: "Intel Laminar RH1", image: "assets/INTEL.png" },
  { name: "Intel Core i7-13700K", series: "13th Gen Intel", socket: "LGA1700", coresThreads: "16/24", graphics: "Intel UHD Graphics 770", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i7-13700KF", series: "13th Gen Intel", socket: "LGA1700", coresThreads: "16/24", graphics: "None", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i7-13700F", series: "13th Gen Intel", socket: "LGA1700", coresThreads: "16/24", graphics: "None", tdp: "65 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },
  { name: "Intel Core i7-13700", series: "13th Gen Intel", socket: "LGA1700", coresThreads: "16/24", graphics: "Intel UHD Graphics 770", tdp: "65 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },
  { name: "Intel Core i5-13600K", series: "13th Gen Intel", socket: "LGA1700", coresThreads: "14/20", graphics: "Intel UHD Graphics 770", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i5-13600KF", series: "13th Gen Intel", socket: "LGA1700", coresThreads: "14/20", graphics: "None", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i5-13500", series: "13th Gen Intel", socket: "LGA1700", coresThreads: "14/20", graphics: "Intel UHD Graphics 770", tdp: "65 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },
  { name: "Intel Core i5-13400F", series: "13th Gen Intel", socket: "LGA1700", coresThreads: "10/16", graphics: "None", tdp: "65 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },
  { name: "Intel Core i5-13400", series: "13th Gen Intel", socket: "LGA1700", coresThreads: "10/16", graphics: "Intel UHD Graphics 730", tdp: "65 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },
  { name: "Intel Core i3-13100F", series: "13th Gen Intel", socket: "LGA1700", coresThreads: "4/8", graphics: "None", tdp: "58 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },
  { name: "Intel Core i3-13100", series: "13th Gen Intel", socket: "LGA1700", coresThreads: "4/8", graphics: "Intel UHD Graphics 730", tdp: "60 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },

  // 12th Gen Intel (LGA1700)
  { name: "Intel Core i9-12900KS", series: "12th Gen Intel", socket: "LGA1700", coresThreads: "16/24", graphics: "Intel UHD Graphics 770", tdp: "150 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i9-12900K", series: "12th Gen Intel", socket: "LGA1700", coresThreads: "16/24", graphics: "Intel UHD Graphics 770", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i9-12900KF", series: "12th Gen Intel", socket: "LGA1700", coresThreads: "16/24", graphics: "None", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i9-12900F", series: "12th Gen Intel", socket: "LGA1700", coresThreads: "16/24", graphics: "None", tdp: "65 W", cooler: "Intel Laminar RH1", image: "assets/INTEL.png" },
  { name: "Intel Core i9-12900", series: "12th Gen Intel", socket: "LGA1700", coresThreads: "16/24", graphics: "Intel UHD Graphics 770", tdp: "65 W", cooler: "Intel Laminar RH1", image: "assets/INTEL.png" },
  { name: "Intel Core i7-12700K", series: "12th Gen Intel", socket: "LGA1700", coresThreads: "12/20", graphics: "Intel UHD Graphics 770", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i7-12700KF", series: "12th Gen Intel", socket: "LGA1700", coresThreads: "12/20", graphics: "None", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i7-12700F", series: "12th Gen Intel", socket: "LGA1700", coresThreads: "12/20", graphics: "None", tdp: "65 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },
  { name: "Intel Core i7-12700", series: "12th Gen Intel", socket: "LGA1700", coresThreads: "12/20", graphics: "Intel UHD Graphics 770", tdp: "65 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },
  { name: "Intel Core i5-12600K", series: "12th Gen Intel", socket: "LGA1700", coresThreads: "10/16", graphics: "Intel UHD Graphics 770", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i5-12600KF", series: "12th Gen Intel", socket: "LGA1700", coresThreads: "10/16", graphics: "None", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i5-12500", series: "12th Gen Intel", socket: "LGA1700", coresThreads: "6/12", graphics: "Intel UHD Graphics 770", tdp: "65 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },
  { name: "Intel Core i5-12400F", series: "12th Gen Intel", socket: "LGA1700", coresThreads: "6/12", graphics: "None", tdp: "65 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },
  { name: "Intel Core i5-12400", series: "12th Gen Intel", socket: "LGA1700", coresThreads: "6/12", graphics: "Intel UHD Graphics 730", tdp: "65 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },
  { name: "Intel Core i3-12100F", series: "12th Gen Intel", socket: "LGA1700", coresThreads: "4/8", graphics: "None", tdp: "58 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },
  { name: "Intel Core i3-12100", series: "12th Gen Intel", socket: "LGA1700", coresThreads: "4/8", graphics: "Intel UHD Graphics 730", tdp: "60 W", cooler: "Intel Laminar RM1", image: "assets/INTEL.png" },

  // 11th Gen Intel (LGA1200)
  { name: "Intel Core i9-11900K", series: "11th Gen Intel", socket: "LGA1200", coresThreads: "8/16", graphics: "Intel UHD Graphics 750", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i9-11900KF", series: "11th Gen Intel", socket: "LGA1200", coresThreads: "8/16", graphics: "None", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i9-11900F", series: "11th Gen Intel", socket: "LGA1200", coresThreads: "8/16", graphics: "None", tdp: "65 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },
  { name: "Intel Core i7-11700K", series: "11th Gen Intel", socket: "LGA1200", coresThreads: "8/16", graphics: "Intel UHD Graphics 750", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i7-11700KF", series: "11th Gen Intel", socket: "LGA1200", coresThreads: "8/16", graphics: "None", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i7-11700F", series: "11th Gen Intel", socket: "LGA1200", coresThreads: "8/16", graphics: "None", tdp: "65 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },
  { name: "Intel Core i5-11600K", series: "11th Gen Intel", socket: "LGA1200", coresThreads: "6/12", graphics: "Intel UHD Graphics 750", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i5-11600KF", series: "11th Gen Intel", socket: "LGA1200", coresThreads: "6/12", graphics: "None", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i5-11400F", series: "11th Gen Intel", socket: "LGA1200", coresThreads: "6/12", graphics: "None", tdp: "65 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },
  { name: "Intel Core i5-11400", series: "11th Gen Intel", socket: "LGA1200", coresThreads: "6/12", graphics: "Intel UHD Graphics 730", tdp: "65 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },

  // 10th Gen Intel (LGA1200)
  { name: "Intel Core i9-10900K", series: "10th Gen Intel", socket: "LGA1200", coresThreads: "10/20", graphics: "Intel UHD Graphics 630", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i9-10900KF", series: "10th Gen Intel", socket: "LGA1200", coresThreads: "10/20", graphics: "None", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i9-10900F", series: "10th Gen Intel", socket: "LGA1200", coresThreads: "10/20", graphics: "None", tdp: "65 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },
  { name: "Intel Core i7-10700K", series: "10th Gen Intel", socket: "LGA1200", coresThreads: "8/16", graphics: "Intel UHD Graphics 630", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i7-10700KF", series: "10th Gen Intel", socket: "LGA1200", coresThreads: "8/16", graphics: "None", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i7-10700F", series: "10th Gen Intel", socket: "LGA1200", coresThreads: "8/16", graphics: "None", tdp: "65 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },
  { name: "Intel Core i5-10600K", series: "10th Gen Intel", socket: "LGA1200", coresThreads: "6/12", graphics: "Intel UHD Graphics 630", tdp: "125 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i5-10400F", series: "10th Gen Intel", socket: "LGA1200", coresThreads: "6/12", graphics: "None", tdp: "65 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },
  { name: "Intel Core i5-10400", series: "10th Gen Intel", socket: "LGA1200", coresThreads: "6/12", graphics: "Intel UHD Graphics 630", tdp: "65 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },
  { name: "Intel Core i3-10100F", series: "10th Gen Intel", socket: "LGA1200", coresThreads: "4/8", graphics: "None", tdp: "65 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },

  // 9th Gen Intel (LGA1151-v2)
  { name: "Intel Core i9-9900KS", series: "9th Gen Intel", socket: "LGA1151-v2", coresThreads: "8/16", graphics: "Intel UHD Graphics 630", tdp: "127 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i9-9900K", series: "9th Gen Intel", socket: "LGA1151-v2", coresThreads: "8/16", graphics: "Intel UHD Graphics 630", tdp: "95 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i9-9900KF", series: "9th Gen Intel", socket: "LGA1151-v2", coresThreads: "8/16", graphics: "None", tdp: "95 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i7-9700K", series: "9th Gen Intel", socket: "LGA1151-v2", coresThreads: "8/8", graphics: "Intel UHD Graphics 630", tdp: "95 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i7-9700F", series: "9th Gen Intel", socket: "LGA1151-v2", coresThreads: "8/8", graphics: "None", tdp: "65 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },
  { name: "Intel Core i5-9600K", series: "9th Gen Intel", socket: "LGA1151-v2", coresThreads: "6/6", graphics: "Intel UHD Graphics 630", tdp: "95 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i5-9400F", series: "9th Gen Intel", socket: "LGA1151-v2", coresThreads: "6/6", graphics: "None", tdp: "65 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },
  { name: "Intel Core i3-9100F", series: "9th Gen Intel", socket: "LGA1151-v2", coresThreads: "4/4", graphics: "None", tdp: "65 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },

  // 8th Gen Intel (LGA1151-v2)
  { name: "Intel Core i7-8700K", series: "8th Gen Intel", socket: "LGA1151-v2", coresThreads: "6/12", graphics: "Intel UHD Graphics 630", tdp: "95 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i7-8700", series: "8th Gen Intel", socket: "LGA1151-v2", coresThreads: "6/12", graphics: "Intel UHD Graphics 630", tdp: "65 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },
  { name: "Intel Core i5-8600K", series: "8th Gen Intel", socket: "LGA1151-v2", coresThreads: "6/6", graphics: "Intel UHD Graphics 630", tdp: "95 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i5-8400", series: "8th Gen Intel", socket: "LGA1151-v2", coresThreads: "6/6", graphics: "Intel UHD Graphics 630", tdp: "65 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },
  { name: "Intel Core i3-8100", series: "8th Gen Intel", socket: "LGA1151-v2", coresThreads: "4/4", graphics: "Intel UHD Graphics 630", tdp: "65 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },

  // Older Generations (Gen 7 - Gen 1)
  { name: "Intel Core i7-7700K", series: "7th Gen Intel", socket: "LGA1151", coresThreads: "4/8", graphics: "Intel HD Graphics 630", tdp: "91 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i5-7500", series: "7th Gen Intel", socket: "LGA1151", coresThreads: "4/4", graphics: "Intel HD Graphics 630", tdp: "65 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },
  { name: "Intel Core i7-6700K", series: "6th Gen Intel", socket: "LGA1151", coresThreads: "4/8", graphics: "Intel HD Graphics 530", tdp: "91 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i5-6600K", series: "6th Gen Intel", socket: "LGA1151", coresThreads: "4/4", graphics: "Intel HD Graphics 530", tdp: "91 W", cooler: "No", image: "assets/INTEL.png" },
  { name: "Intel Core i7-4790K", series: "4th Gen Intel", socket: "LGA1150", coresThreads: "4/8", graphics: "Intel HD Graphics 4600", tdp: "88 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },
  { name: "Intel Core i5-4460", series: "4th Gen Intel", socket: "LGA1150", coresThreads: "4/4", graphics: "Intel HD Graphics 4600", tdp: "84 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },
  { name: "Intel Core i7-3770K", series: "3rd Gen Intel", socket: "LGA1155", coresThreads: "4/8", graphics: "Intel HD Graphics 4000", tdp: "77 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },
  { name: "Intel Core i5-3570K", series: "3rd Gen Intel", socket: "LGA1155", coresThreads: "4/4", graphics: "Intel HD Graphics 4000", tdp: "77 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },
  { name: "Intel Core i7-2600K", series: "2nd Gen Intel", socket: "LGA1155", coresThreads: "4/8", graphics: "Intel HD Graphics 3000", tdp: "95 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },
  { name: "Intel Core i5-2500K", series: "2nd Gen Intel", socket: "LGA1155", coresThreads: "4/4", graphics: "Intel HD Graphics 3000", tdp: "95 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },
  { name: "Intel Core i7-920", series: "1st Gen Intel", socket: "LGA1366", coresThreads: "4/8", graphics: "None", tdp: "130 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },
  { name: "Intel Core i5-750", series: "1st Gen Intel", socket: "LGA1156", coresThreads: "4/4", graphics: "None", tdp: "95 W", cooler: "Stock Cooler", image: "assets/INTEL.png" },

  // ==========================================
  // --- AMD DESKTOP CPU (80 รุ่นจริง) ---
  // ==========================================
  // Ryzen 9000 Series (AM5)
  { name: "AMD Ryzen 9 9950X", series: "9000 Series", socket: "AM5", coresThreads: "16/32", graphics: "AMD Radeon Graphics", tdp: "170 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 9 9900X", series: "9000 Series", socket: "AM5", coresThreads: "12/24", graphics: "AMD Radeon Graphics", tdp: "120 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 7 9700X", series: "9000 Series", socket: "AM5", coresThreads: "8/16", graphics: "AMD Radeon Graphics", tdp: "65 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 9600X", series: "9000 Series", socket: "AM5", coresThreads: "6/12", graphics: "AMD Radeon Graphics", tdp: "65 W", cooler: "No", image: "assets/AMD.png" },

  // Ryzen 8000 Series APU (AM5)
  { name: "AMD Ryzen 7 8700G", series: "8000 Series", socket: "AM5", coresThreads: "8/16", graphics: "Radeon 780M", tdp: "65 W", cooler: "Wraith Spire", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 8600G", series: "8000 Series", socket: "AM5", coresThreads: "6/12", graphics: "Radeon 760M", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 8500G", series: "8000 Series", socket: "AM5", coresThreads: "6/12", graphics: "Radeon 740M", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },
  { name: "AMD Ryzen 3 8300G", series: "8000 Series", socket: "AM5", coresThreads: "4/8", graphics: "Radeon 740M", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },

  // Ryzen 7000 Series (AM5)
  { name: "AMD Ryzen 9 7950X3D", series: "7000 Series", socket: "AM5", coresThreads: "16/32", graphics: "AMD Radeon Graphics", tdp: "120 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 9 7950X", series: "7000 Series", socket: "AM5", coresThreads: "16/32", graphics: "AMD Radeon Graphics", tdp: "170 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 9 7900X3D", series: "7000 Series", socket: "AM5", coresThreads: "12/24", graphics: "AMD Radeon Graphics", tdp: "120 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 9 7900X", series: "7000 Series", socket: "AM5", coresThreads: "12/24", graphics: "AMD Radeon Graphics", tdp: "170 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 9 7900", series: "7000 Series", socket: "AM5", coresThreads: "12/24", graphics: "AMD Radeon Graphics", tdp: "65 W", cooler: "Wraith Prism", image: "assets/AMD.png" },
  { name: "AMD Ryzen 7 7800X3D", series: "7000 Series", socket: "AM5", coresThreads: "8/16", graphics: "AMD Radeon Graphics", tdp: "120 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 7 7700X", series: "7000 Series", socket: "AM5", coresThreads: "8/16", graphics: "AMD Radeon Graphics", tdp: "105 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 7 7700", series: "7000 Series", socket: "AM5", coresThreads: "8/16", graphics: "AMD Radeon Graphics", tdp: "65 W", cooler: "Wraith Prism", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 7600X", series: "7000 Series", socket: "AM5", coresThreads: "6/12", graphics: "AMD Radeon Graphics", tdp: "105 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 7600", series: "7000 Series", socket: "AM5", coresThreads: "6/12", graphics: "AMD Radeon Graphics", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 7500F", series: "7000 Series", socket: "AM5", coresThreads: "6/12", graphics: "None", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },

  // Ryzen 5000 Series (AM4)
  { name: "AMD Ryzen 9 5950X", series: "5000 Series", socket: "AM4", coresThreads: "16/32", graphics: "None", tdp: "105 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 9 5900X", series: "5000 Series", socket: "AM4", coresThreads: "12/24", graphics: "None", tdp: "105 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 7 5800X3D", series: "5000 Series", socket: "AM4", coresThreads: "8/16", graphics: "None", tdp: "105 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 7 5800X", series: "5000 Series", socket: "AM4", coresThreads: "8/16", graphics: "None", tdp: "105 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 7 5700X3D", series: "5000 Series", socket: "AM4", coresThreads: "8/16", graphics: "None", tdp: "105 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 7 5700X", series: "5000 Series", socket: "AM4", coresThreads: "8/16", graphics: "None", tdp: "65 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 7 5700G", series: "5000 Series", socket: "AM4", coresThreads: "8/16", graphics: "Radeon Vega 8", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },
  { name: "AMD Ryzen 7 5700", series: "5000 Series", socket: "AM4", coresThreads: "8/16", graphics: "None", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 5600X", series: "5000 Series", socket: "AM4", coresThreads: "6/12", graphics: "None", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 5600G", series: "5000 Series", socket: "AM4", coresThreads: "6/12", graphics: "Radeon Vega 7", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 5600", series: "5000 Series", socket: "AM4", coresThreads: "6/12", graphics: "None", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 5500GT", series: "5000 Series", socket: "AM4", coresThreads: "6/12", graphics: "Radeon Vega 7", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 5500", series: "5000 Series", socket: "AM4", coresThreads: "6/12", graphics: "None", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },

  // Ryzen 4000 & 3000 Series (AM4)
  { name: "AMD Ryzen 3 4100", series: "4000 Series", socket: "AM4", coresThreads: "4/8", graphics: "None", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 4600G", series: "4000 Series", socket: "AM4", coresThreads: "6/12", graphics: "Radeon Vega 7", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },
  { name: "AMD Ryzen 7 3800XT", series: "3000 Series", socket: "AM4", coresThreads: "8/16", graphics: "None", tdp: "105 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 9 3950X", series: "3000 Series", socket: "AM4", coresThreads: "16/32", graphics: "None", tdp: "105 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 9 3900X", series: "3000 Series", socket: "AM4", coresThreads: "12/24", graphics: "None", tdp: "105 W", cooler: "Wraith Prism", image: "assets/AMD.png" },
  { name: "AMD Ryzen 7 3800X", series: "3000 Series", socket: "AM4", coresThreads: "8/16", graphics: "None", tdp: "105 W", cooler: "Wraith Prism", image: "assets/AMD.png" },
  { name: "AMD Ryzen 7 3700X", series: "3000 Series", socket: "AM4", coresThreads: "8/16", graphics: "None", tdp: "65 W", cooler: "Wraith Prism", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 3600X", series: "3000 Series", socket: "AM4", coresThreads: "6/12", graphics: "None", tdp: "95 W", cooler: "Wraith Spire", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 3600", series: "3000 Series", socket: "AM4", coresThreads: "6/12", graphics: "None", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },
  { name: "AMD Ryzen 3 3300X", series: "3000 Series", socket: "AM4", coresThreads: "4/8", graphics: "None", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },
  { name: "AMD Ryzen 3 3100", series: "3000 Series", socket: "AM4", coresThreads: "4/8", graphics: "None", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 3400G", series: "3000 Series", socket: "AM4", coresThreads: "4/8", graphics: "Radeon RX Vega 11", tdp: "65 W", cooler: "Wraith Spire", image: "assets/AMD.png" },
  { name: "AMD Ryzen 3 3200G", series: "3000 Series", socket: "AM4", coresThreads: "4/4", graphics: "Radeon Vega 8", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },

  // Ryzen 2000 & 1000 Series (AM4)
  { name: "AMD Ryzen 7 2700X", series: "2000 Series", socket: "AM4", coresThreads: "8/16", graphics: "None", tdp: "105 W", cooler: "Wraith Prism", image: "assets/AMD.png" },
  { name: "AMD Ryzen 7 2700", series: "2000 Series", socket: "AM4", coresThreads: "8/16", graphics: "None", tdp: "65 W", cooler: "Wraith Spire", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 2600X", series: "2000 Series", socket: "AM4", coresThreads: "6/12", graphics: "None", tdp: "95 W", cooler: "Wraith Spire", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 2600", series: "2000 Series", socket: "AM4", coresThreads: "6/12", graphics: "None", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 2400G", series: "2000 Series", socket: "AM4", coresThreads: "4/8", graphics: "Radeon RX Vega 11", tdp: "65 W", cooler: "Wraith Spire", image: "assets/AMD.png" },
  { name: "AMD Ryzen 3 2200G", series: "2000 Series", socket: "AM4", coresThreads: "4/4", graphics: "Radeon Vega 8", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },
  { name: "AMD Ryzen 7 1800X", series: "1000 Series", socket: "AM4", coresThreads: "8/16", graphics: "None", tdp: "95 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 7 1700X", series: "1000 Series", socket: "AM4", coresThreads: "8/16", graphics: "None", tdp: "95 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 7 1700", series: "1000 Series", socket: "AM4", coresThreads: "8/16", graphics: "None", tdp: "65 W", cooler: "Wraith Spire", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 1600X", series: "1000 Series", socket: "AM4", coresThreads: "6/12", graphics: "None", tdp: "95 W", cooler: "No", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 1600", series: "1000 Series", socket: "AM4", coresThreads: "6/12", graphics: "None", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },
  { name: "AMD Ryzen 5 1500X", series: "1000 Series", socket: "AM4", coresThreads: "4/8", graphics: "None", tdp: "65 W", cooler: "Wraith Spire", image: "assets/AMD.png" },
  { name: "AMD Ryzen 3 1300X", series: "1000 Series", socket: "AM4", coresThreads: "4/4", graphics: "None", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },
  { name: "AMD Ryzen 3 1200", series: "1000 Series", socket: "AM4", coresThreads: "4/4", graphics: "None", tdp: "65 W", cooler: "Wraith Stealth", image: "assets/AMD.png" },
  { name: "AMD Athlon 3000G", series: "Athlon Series", socket: "AM4", coresThreads: "2/4", graphics: "Radeon Vega 3", tdp: "35 W", cooler: "Stock Cooler", image: "assets/AMD.png" },
  { name: "AMD Athlon 200GE", series: "Athlon Series", socket: "AM4", coresThreads: "2/4", graphics: "Radeon Vega 3", tdp: "35 W", cooler: "Stock Cooler", image: "assets/AMD.png" }
];

// สั่งแสดงผลการ์ดสินค้าบนหน้าจอเมื่อโหลดไฟล์เสร็จ
if (typeof checkIncomingSearch === 'function') {
  checkIncomingSearch();
}