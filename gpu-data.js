const gpuDatabase = [
  // ==========================================
  // --- NVIDIA GEFORCE RTX 40 SERIES ---
  // ==========================================
  { name: "NVIDIA GeForce RTX 4090", brand: "NVIDIA", model: "GeForce RTX 4090", memorySize: "24 GB GDDR6X", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "850 Watt", dimension: "304 x 137 x 61 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 4080 Super", brand: "NVIDIA", model: "GeForce RTX 4080 Super", memorySize: "16 GB GDDR6X", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1a", powerRequirement: "750 Watt", dimension: "304 x 137 x 61 mm", warranty: "3 Years", image: "assets/RTX 4080.png" },
  { name: "NVIDIA GeForce RTX 4080", brand: "NVIDIA", model: "GeForce RTX 4080", memorySize: "16 GB GDDR6X", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "750 Watt", dimension: "304 x 137 x 61 mm", warranty: "3 Years", image: "assets/RTX 4080.png" },
  { name: "NVIDIA GeForce RTX 4070 Ti Super", brand: "NVIDIA", model: "GeForce RTX 4070 Ti Super", memorySize: "16 GB GDDR6X", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1a", powerRequirement: "750 Watt", dimension: "285 x 112 x 42 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 4070 Ti", brand: "NVIDIA", model: "GeForce RTX 4070 Ti", memorySize: "12 GB GDDR6X", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1a", powerRequirement: "700 Watt", dimension: "285 x 112 x 42 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 4070 Super", brand: "NVIDIA", model: "GeForce RTX 4070 Super", memorySize: "12 GB GDDR6X", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1a", powerRequirement: "650 Watt", dimension: "242 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 4070", brand: "NVIDIA", model: "GeForce RTX 4070", memorySize: "12 GB GDDR6X", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1a", powerRequirement: "600 Watt", dimension: "242 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 4060 Ti (16GB)", brand: "NVIDIA", model: "GeForce RTX 4060 Ti", memorySize: "16 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1a", powerRequirement: "550 Watt", dimension: "242 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 4060 Ti (8GB)", brand: "NVIDIA", model: "GeForce RTX 4060 Ti", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1a", powerRequirement: "500 Watt", dimension: "242 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 4060", brand: "NVIDIA", model: "GeForce RTX 4060", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1a", powerRequirement: "500 Watt", dimension: "249 x 123 x 40 mm", warranty: "3 Years", image: "assets/RTX 4060.png" },

  // ==========================================
  // --- NVIDIA GEFORCE RTX 30 SERIES ---
  // ==========================================
  { name: "NVIDIA GeForce RTX 3090 Ti", brand: "NVIDIA", model: "GeForce RTX 3090 Ti", memorySize: "24 GB GDDR6X", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "850 Watt", dimension: "336 x 140 x 61 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 3090", brand: "NVIDIA", model: "GeForce RTX 3090", memorySize: "24 GB GDDR6X", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "750 Watt", dimension: "313 x 138 x 61 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 3080 Ti", brand: "NVIDIA", model: "GeForce RTX 3080 Ti", memorySize: "12 GB GDDR6X", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "750 Watt", dimension: "285 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 3080 (12GB)", brand: "NVIDIA", model: "GeForce RTX 3080", memorySize: "12 GB GDDR6X", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "750 Watt", dimension: "285 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 3080 (10GB)", brand: "NVIDIA", model: "GeForce RTX 3080", memorySize: "10 GB GDDR6X", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "700 Watt", dimension: "285 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 3070 Ti", brand: "NVIDIA", model: "GeForce RTX 3070 Ti", memorySize: "8 GB GDDR6X", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "750 Watt", dimension: "267 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 3070", brand: "NVIDIA", model: "GeForce RTX 3070", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "650 Watt", dimension: "242 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 3060 Ti", brand: "NVIDIA", model: "GeForce RTX 3060 Ti", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "600 Watt", dimension: "242 x 112 x 38 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 3060 (12GB)", brand: "NVIDIA", model: "GeForce RTX 3060", memorySize: "12 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "550 Watt", dimension: "242 x 112 x 38 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 3060 (8GB)", brand: "NVIDIA", model: "GeForce RTX 3060", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "550 Watt", dimension: "242 x 112 x 38 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 3050 (8GB)", brand: "NVIDIA", model: "GeForce RTX 3050", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "550 Watt", dimension: "220 x 112 x 38 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 3050 (6GB)", brand: "NVIDIA", model: "GeForce RTX 3050", memorySize: "6 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "400 Watt", dimension: "200 x 110 x 35 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },

  // ==========================================
  // --- NVIDIA GEFORCE RTX 20 SERIES ---
  // ==========================================
  { name: "NVIDIA GeForce RTX 2080 Ti", brand: "NVIDIA", model: "GeForce RTX 2080 Ti", memorySize: "11 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "650 Watt", dimension: "267 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 2080 Super", brand: "NVIDIA", model: "GeForce RTX 2080 Super", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "650 Watt", dimension: "267 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 2080", brand: "NVIDIA", model: "GeForce RTX 2080", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "650 Watt", dimension: "267 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 2070 Super", brand: "NVIDIA", model: "GeForce RTX 2070 Super", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "650 Watt", dimension: "267 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 2070", brand: "NVIDIA", model: "GeForce RTX 2070", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "550 Watt", dimension: "228 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 2060 Super", brand: "NVIDIA", model: "GeForce RTX 2060 Super", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "550 Watt", dimension: "228 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 2060 (12GB)", brand: "NVIDIA", model: "GeForce RTX 2060", memorySize: "12 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "500 Watt", dimension: "228 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce RTX 2060 (6GB)", brand: "NVIDIA", model: "GeForce RTX 2060", memorySize: "6 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "500 Watt", dimension: "228 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },

  // ==========================================
  // --- NVIDIA GEFORCE GTX 16 & 10 SERIES ---
  // ==========================================
  { name: "NVIDIA GeForce GTX 1660 Ti", brand: "NVIDIA", model: "GeForce GTX 1660 Ti", memorySize: "6 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "450 Watt", dimension: "229 x 111 x 35 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 1660 Super", brand: "NVIDIA", model: "GeForce GTX 1660 Super", memorySize: "6 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "450 Watt", dimension: "229 x 111 x 35 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 1660", brand: "NVIDIA", model: "GeForce GTX 1660", memorySize: "6 GB GDDR5", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "450 Watt", dimension: "229 x 111 x 35 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 1650 Super", brand: "NVIDIA", model: "GeForce GTX 1650 Super", memorySize: "4 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "350 Watt", dimension: "200 x 111 x 35 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 1650", brand: "NVIDIA", model: "GeForce GTX 1650", memorySize: "4 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "300 Watt", dimension: "170 x 111 x 35 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 1080 Ti", brand: "NVIDIA", model: "GeForce GTX 1080 Ti", memorySize: "11 GB GDDR5X", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "600 Watt", dimension: "267 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 1080", brand: "NVIDIA", model: "GeForce GTX 1080", memorySize: "8 GB GDDR5X", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "500 Watt", dimension: "267 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 1070 Ti", brand: "NVIDIA", model: "GeForce GTX 1070 Ti", memorySize: "8 GB GDDR5", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "500 Watt", dimension: "267 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 1070", brand: "NVIDIA", model: "GeForce GTX 1070", memorySize: "8 GB GDDR5", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "500 Watt", dimension: "267 x 112 x 40 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 1060 (6GB)", brand: "NVIDIA", model: "GeForce GTX 1060", memorySize: "6 GB GDDR5", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "400 Watt", dimension: "250 x 112 x 38 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 1050 Ti", brand: "NVIDIA", model: "GeForce GTX 1050 Ti", memorySize: "4 GB GDDR5", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "300 Watt", dimension: "145 x 111 x 35 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },

  // ==========================================
  // --- AMD RADEON RX 7000 SERIES ---
  // ==========================================
  { name: "AMD Radeon RX 7900 XTX", brand: "AMD", model: "Radeon RX 7900 XTX", memorySize: "24 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "800 Watt", dimension: "287 x 135 x 51 mm", warranty: "3 Years", image: "assets/RX 7900.png" },
  { name: "AMD Radeon RX 7900 XT", brand: "AMD", model: "Radeon RX 7900 XT", memorySize: "20 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "750 Watt", dimension: "276 x 135 x 51 mm", warranty: "3 Years", image: "assets/RX 7900.png" },
  { name: "AMD Radeon RX 7900 GRE", brand: "AMD", model: "Radeon RX 7900 GRE", memorySize: "16 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "700 Watt", dimension: "280 x 130 x 50 mm", warranty: "3 Years", image: "assets/RX 7900.png" },
  { name: "AMD Radeon RX 7800 XT", brand: "AMD", model: "Radeon RX 7800 XT", memorySize: "16 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "700 Watt", dimension: "267 x 130 x 50 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX 7700 XT", brand: "AMD", model: "Radeon RX 7700 XT", memorySize: "12 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "700 Watt", dimension: "267 x 130 x 50 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX 7600 XT", brand: "AMD", model: "Radeon RX 7600 XT", memorySize: "16 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "600 Watt", dimension: "241 x 111 x 50 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX 7600", brand: "AMD", model: "Radeon RX 7600", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "550 Watt", dimension: "204 x 105 x 41 mm", warranty: "3 Years", image: "assets/AMD.png" },

  // ==========================================
  // --- AMD RADEON RX 6000 SERIES ---
  // ==========================================
  { name: "AMD Radeon RX 6950 XT", brand: "AMD", model: "Radeon RX 6950 XT", memorySize: "16 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "850 Watt", dimension: "267 x 120 x 53 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX 6900 XT", brand: "AMD", model: "Radeon RX 6900 XT", memorySize: "16 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "850 Watt", dimension: "267 x 120 x 53 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX 6800 XT", brand: "AMD", model: "Radeon RX 6800 XT", memorySize: "16 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "750 Watt", dimension: "267 x 120 x 50 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX 6800", brand: "AMD", model: "Radeon RX 6800", memorySize: "16 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "650 Watt", dimension: "267 x 120 x 50 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX 6750 XT", brand: "AMD", model: "Radeon RX 6750 XT", memorySize: "12 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "650 Watt", dimension: "267 x 110 x 40 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX 6700 XT", brand: "AMD", model: "Radeon RX 6700 XT", memorySize: "12 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "650 Watt", dimension: "267 x 110 x 40 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX 6700", brand: "AMD", model: "Radeon RX 6700", memorySize: "10 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "550 Watt", dimension: "267 x 110 x 40 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX 6650 XT", brand: "AMD", model: "Radeon RX 6650 XT", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "500 Watt", dimension: "243 x 134 x 49 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX 6600 XT", brand: "AMD", model: "Radeon RX 6600 XT", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "500 Watt", dimension: "243 x 134 x 49 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX 6600", brand: "AMD", model: "Radeon RX 6600", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "450 Watt", dimension: "200 x 130 x 40 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX 6500 XT", brand: "AMD", model: "Radeon RX 6500 XT", memorySize: "4 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "400 Watt", dimension: "170 x 100 x 40 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX 6400", brand: "AMD", model: "Radeon RX 6400", memorySize: "4 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "350 Watt", dimension: "150 x 90 x 30 mm", warranty: "3 Years", image: "assets/AMD.png" },

  // ==========================================
  // --- AMD RADEON RX 5000 SERIES & VEGA ---
  // ==========================================
  { name: "AMD Radeon RX 5700 XT", brand: "AMD", model: "Radeon RX 5700 XT", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "600 Watt", dimension: "272 x 111 x 36 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX 5700", brand: "AMD", model: "Radeon RX 5700", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "600 Watt", dimension: "272 x 111 x 36 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX 5600 XT", brand: "AMD", model: "Radeon RX 5600 XT", memorySize: "6 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "450 Watt", dimension: "230 x 115 x 40 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX 5500 XT", brand: "AMD", model: "Radeon RX 5500 XT", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "450 Watt", dimension: "210 x 115 x 40 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon VII", brand: "AMD", model: "Radeon VII", memorySize: "16 GB HBM2", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.0b", powerRequirement: "750 Watt", dimension: "267 x 111 x 40 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX Vega 64", brand: "AMD", model: "RX Vega 64", memorySize: "8 GB HBM2", maxResolution: "4096 x 2160", hdmiPort: "1 x HDMI 2.0", powerRequirement: "750 Watt", dimension: "280 x 127 x 40 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX Vega 56", brand: "AMD", model: "RX Vega 56", memorySize: "8 GB HBM2", maxResolution: "4096 x 2160", hdmiPort: "1 x HDMI 2.0", powerRequirement: "650 Watt", dimension: "280 x 127 x 40 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX 580", brand: "AMD", model: "Radeon RX 580", memorySize: "8 GB GDDR5", maxResolution: "3840 x 2160", hdmiPort: "2 x HDMI 2.0b", powerRequirement: "500 Watt", dimension: "240 x 125 x 40 mm", warranty: "3 Years", image: "assets/AMD.png" },
  { name: "AMD Radeon RX 570", brand: "AMD", model: "Radeon RX 570", memorySize: "4 GB GDDR5", maxResolution: "3840 x 2160", hdmiPort: "2 x HDMI 2.0b", powerRequirement: "450 Watt", dimension: "240 x 125 x 40 mm", warranty: "3 Years", image: "assets/AMD.png" },

  // ==========================================
  // --- INTEL ARC GRAPHICS ---
  // ==========================================
  { name: "Intel Arc A770", brand: "Intel", model: "Arc A770", memorySize: "16 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "600 Watt", dimension: "250 x 100 x 39 mm", warranty: "3 Years", image: "assets/INTEL.png" },
  { name: "Intel Arc A750", brand: "Intel", model: "Arc A750", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "600 Watt", dimension: "250 x 100 x 39 mm", warranty: "3 Years", image: "assets/INTEL.png" },
  { name: "Intel Arc A580", brand: "Intel", model: "Arc A580", memorySize: "8 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "550 Watt", dimension: "220 x 100 x 38 mm", warranty: "3 Years", image: "assets/INTEL.png" },
  { name: "Intel Arc A380", brand: "Intel", model: "Arc A380", memorySize: "6 GB GDDR6", maxResolution: "7680 x 4320", hdmiPort: "1 x HDMI 2.1", powerRequirement: "350 Watt", dimension: "150 x 100 x 35 mm", warranty: "3 Years", image: "assets/INTEL.png" },

  // ==========================================
  // --- NVIDIA CLASSIC & OLDER POPULAR MODELS ---
  // ==========================================
  { name: "NVIDIA GeForce GTX 980 Ti", brand: "NVIDIA", model: "GeForce GTX 980 Ti", memorySize: "6 GB GDDR5", maxResolution: "4096 x 2160", hdmiPort: "1 x HDMI 2.0", powerRequirement: "600 Watt", dimension: "267 x 111 x 38 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 980", brand: "NVIDIA", model: "GeForce GTX 980", memorySize: "4 GB GDDR5", maxResolution: "4096 x 2160", hdmiPort: "1 x HDMI 2.0", powerRequirement: "500 Watt", dimension: "267 x 111 x 38 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 970", brand: "NVIDIA", model: "GeForce GTX 970", memorySize: "4 GB GDDR5", maxResolution: "4096 x 2160", hdmiPort: "1 x HDMI 2.0", powerRequirement: "500 Watt", dimension: "241 x 111 x 38 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 960", brand: "NVIDIA", model: "GeForce GTX 960", memorySize: "2 GB GDDR5", maxResolution: "4096 x 2160", hdmiPort: "1 x HDMI 2.0", powerRequirement: "400 Watt", dimension: "200 x 111 x 35 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 780 Ti", brand: "NVIDIA", model: "GeForce GTX 780 Ti", memorySize: "3 GB GDDR5", maxResolution: "4096 x 2160", hdmiPort: "1 x HDMI 1.4a", powerRequirement: "600 Watt", dimension: "267 x 111 x 38 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 770", brand: "NVIDIA", model: "GeForce GTX 770", memorySize: "2 GB GDDR5", maxResolution: "4096 x 2160", hdmiPort: "1 x HDMI 1.4a", powerRequirement: "600 Watt", dimension: "267 x 111 x 38 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 750 Ti", brand: "NVIDIA", model: "GeForce GTX 750 Ti", memorySize: "2 GB GDDR5", maxResolution: "4096 x 2160", hdmiPort: "1 x HDMI 1.4a", powerRequirement: "300 Watt", dimension: "145 x 111 x 35 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 680", brand: "NVIDIA", model: "GeForce GTX 680", memorySize: "2 GB GDDR5", maxResolution: "2560 x 1600", hdmiPort: "1 x HDMI 1.4a", powerRequirement: "550 Watt", dimension: "254 x 111 x 38 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 660", brand: "NVIDIA", model: "GeForce GTX 660", memorySize: "2 GB GDDR5", maxResolution: "2560 x 1600", hdmiPort: "1 x HDMI 1.4a", powerRequirement: "450 Watt", dimension: "241 x 111 x 38 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 580", brand: "NVIDIA", model: "GeForce GTX 580", memorySize: "1.5 GB GDDR5", maxResolution: "2560 x 1600", hdmiPort: "1 x Mini HDMI", powerRequirement: "600 Watt", dimension: "267 x 111 x 38 mm", warranty: "3 Years", image: "assets/NVIDIA.png" },
  { name: "NVIDIA GeForce GTX 480", brand: "NVIDIA", model: "GeForce GTX 480", memorySize: "1.5 GB GDDR5", maxResolution: "2560 x 1600", hdmiPort: "1 x Mini HDMI", powerRequirement: "600 Watt", dimension: "267 x 111 x 38 mm", warranty: "3 Years", image: "assets/NVIDIA.png" }
];

// สั่งแสดงผลการ์ดสินค้าบนหน้าจอเมื่อโหลดไฟล์เสร็จ
if (typeof checkIncomingSearch === 'function') {
  checkIncomingSearch();
}