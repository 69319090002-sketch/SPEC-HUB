const mainboardDatabase = [
  // ==========================================
  // --- INTEL LGA1700 MOTHERBOARDS (Z790 / B760 / Z690) ---
  // ==========================================
  { name: "ASUS ROG Maximus Z790 Hero", socket: "LGA1700", formFactor: "ATX", chipset: "Intel Z790", memorySlots: "4 x DDR5", m2Slots: "5 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "ASUS ROG Strix Z790-E Gaming WiFi", socket: "LGA1700", formFactor: "ATX", chipset: "Intel Z790", memorySlots: "4 x DDR5", m2Slots: "5 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "ASUS ROG Strix Z790-F Gaming WiFi", socket: "LGA1700", formFactor: "ATX", chipset: "Intel Z790", memorySlots: "4 x DDR5", m2Slots: "4 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "ASUS TUF Gaming Z790-Plus WiFi", socket: "LGA1700", formFactor: "ATX", chipset: "Intel Z790", memorySlots: "4 x DDR5", m2Slots: "4 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "MSI MPG Z790 Carbon WiFi", socket: "LGA1700", formFactor: "ATX", chipset: "Intel Z790", memorySlots: "4 x DDR5", m2Slots: "5 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/MSI.png" },
  { name: "MSI MAG Z790 Tomahawk WiFi", socket: "LGA1700", formFactor: "ATX", chipset: "Intel Z790", memorySlots: "4 x DDR5", m2Slots: "4 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/MSI.png" },
  { name: "MSI PRO Z790-A WiFi", socket: "LGA1700", formFactor: "ATX", chipset: "Intel Z790", memorySlots: "4 x DDR5", m2Slots: "4 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/MSI.png" },
  { name: "Gigabyte Z790 Aorus Master", socket: "LGA1700", formFactor: "E-ATX", chipset: "Intel Z790", memorySlots: "4 x DDR5", m2Slots: "5 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/GIGABYTE.png" },
  { name: "Gigabyte Z790 Aorus Elite AX", socket: "LGA1700", formFactor: "ATX", chipset: "Intel Z790", memorySlots: "4 x DDR5", m2Slots: "4 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/GIGABYTE.png" },
  { name: "Gigabyte Z790 Gaming X AX", socket: "LGA1700", formFactor: "ATX", chipset: "Intel Z790", memorySlots: "4 x DDR5", m2Slots: "4 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/GIGABYTE.png" },
  { name: "ASRock Z790 Taichi", socket: "LGA1700", formFactor: "E-ATX", chipset: "Intel Z790", memorySlots: "4 x DDR5", m2Slots: "5 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASRock.png" },
  { name: "ASRock Z790 Steel Legend WiFi", socket: "LGA1700", formFactor: "ATX", chipset: "Intel Z790", memorySlots: "4 x DDR5", m2Slots: "3 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASRock.png" },
  { name: "ASUS ROG Strix B760-F Gaming WiFi", socket: "LGA1700", formFactor: "ATX", chipset: "Intel B760", memorySlots: "4 x DDR5", m2Slots: "3 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "ASUS TUF Gaming B760-Plus WiFi", socket: "LGA1700", formFactor: "ATX", chipset: "Intel B760", memorySlots: "4 x DDR5", m2Slots: "3 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "ASUS Prime B760M-A WiFi", socket: "LGA1700", formFactor: "Micro-ATX", chipset: "Intel B760", memorySlots: "4 x DDR5", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "MSI MAG B760 Tomahawk WiFi", socket: "LGA1700", formFactor: "ATX", chipset: "Intel B760", memorySlots: "4 x DDR5", m2Slots: "3 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/MSI.png" },
  { name: "MSI PRO B760M-A WiFi", socket: "LGA1700", formFactor: "Micro-ATX", chipset: "Intel B760", memorySlots: "4 x DDR5", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/MSI.png" },
  { name: "Gigabyte B760 Aorus Elite AX", socket: "LGA1700", formFactor: "ATX", chipset: "Intel B760", memorySlots: "4 x DDR5", m2Slots: "3 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/GIGABYTE.png" },
  { name: "Gigabyte B760M Gaming X AX", socket: "LGA1700", formFactor: "Micro-ATX", chipset: "Intel B760", memorySlots: "4 x DDR5", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/GIGABYTE.png" },
  { name: "ASRock B760 Pro RS", socket: "LGA1700", formFactor: "ATX", chipset: "Intel B760", memorySlots: "4 x DDR5", m2Slots: "3 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASRock.png" },
  { name: "ASUS ROG Maximus Z690 Formula", socket: "LGA1700", formFactor: "ATX", chipset: "Intel Z690", memorySlots: "4 x DDR5", m2Slots: "5 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "MSI MPG Z690 Edge WiFi", socket: "LGA1700", formFactor: "ATX", chipset: "Intel Z690", memorySlots: "4 x DDR5", m2Slots: "4 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/MSI.png" },
  { name: "Gigabyte Z690 Aorus Ultra", socket: "LGA1700", formFactor: "ATX", chipset: "Intel Z690", memorySlots: "4 x DDR5", m2Slots: "4 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/GIGABYTE.png" },
  { name: "ASRock Z690 Phantom Gaming 4", socket: "LGA1700", formFactor: "ATX", chipset: "Intel Z690", memorySlots: "4 x DDR4", m2Slots: "3 x M.2", usbPorts: "USB 3.2", image: "assets/ASRock.png" },

  // ==========================================
  // --- AMD AM5 MOTHERBOARDS (X670E / B650 / A620) ---
  // ==========================================
  { name: "ASUS ROG Crosshair X670E Hero", socket: "AM5", formFactor: "ATX", chipset: "AMD X670E", memorySlots: "4 x DDR5", m2Slots: "5 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "ASUS ROG Strix X670E-E Gaming WiFi", socket: "AM5", formFactor: "ATX", chipset: "AMD X670E", memorySlots: "4 x DDR5", m2Slots: "4 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "ASUS TUF Gaming X670E-Plus WiFi", socket: "AM5", formFactor: "ATX", chipset: "AMD X670E", memorySlots: "4 x DDR5", m2Slots: "4 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "MSI MPG X670E Carbon WiFi", socket: "AM5", formFactor: "ATX", chipset: "AMD X670E", memorySlots: "4 x DDR5", m2Slots: "4 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/MSI.png" },
  { name: "MSI MAG X670E Tomahawk WiFi", socket: "AM5", formFactor: "ATX", chipset: "AMD X670E", memorySlots: "4 x DDR5", m2Slots: "4 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/MSI.png" },
  { name: "Gigabyte X670E Aorus Master", socket: "LGA1700", formFactor: "ATX", chipset: "AMD X670E", memorySlots: "4 x DDR5", m2Slots: "4 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/GIGABYTE.png" },
  { name: "Gigabyte X670 Aorus Elite AX", socket: "AM5", formFactor: "ATX", chipset: "AMD X670", memorySlots: "4 x DDR5", m2Slots: "4 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/GIGABYTE.png" },
  { name: "ASRock X670E Taichi", socket: "AM5", formFactor: "E-ATX", chipset: "AMD X670E", memorySlots: "4 x DDR5", m2Slots: "4 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASRock.png" },
  { name: "ASUS ROG Strix B650-A Gaming WiFi", socket: "AM5", formFactor: "ATX", chipset: "AMD B650", memorySlots: "4 x DDR5", m2Slots: "3 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "ASUS ROG Strix B650E-F Gaming WiFi", socket: "AM5", formFactor: "ATX", chipset: "AMD B650E", memorySlots: "4 x DDR5", m2Slots: "3 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "ASUS TUF Gaming B650-Plus WiFi", socket: "AM5", formFactor: "ATX", chipset: "AMD B650", memorySlots: "4 x DDR5", m2Slots: "3 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "ASUS Prime B650M-A WIFI", socket: "AM5", formFactor: "Micro-ATX", chipset: "AMD B650", memorySlots: "4 x DDR5", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "MSI MPG B650 Carbon WiFi", socket: "AM5", formFactor: "ATX", chipset: "AMD B650", memorySlots: "4 x DDR5", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/MSI.png" },
  { name: "MSI MAG B650 Tomahawk WiFi", socket: "AM5", formFactor: "ATX", chipset: "AMD B650", memorySlots: "4 x DDR5", m2Slots: "3 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/MSI.png" },
  { name: "MSI MAG B650M Mortar WiFi", socket: "AM5", formFactor: "Micro-ATX", chipset: "AMD B650", memorySlots: "4 x DDR5", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/MSI.png" },
  { name: "MSI PRO B650M-A WiFi", socket: "AM5", formFactor: "Micro-ATX", chipset: "AMD B650", memorySlots: "4 x DDR5", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/MSI.png" },
  { name: "Gigabyte B650 Aorus Elite AX", socket: "AM5", formFactor: "ATX", chipset: "AMD B650", memorySlots: "4 x DDR5", m2Slots: "3 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/GIGABYTE.png" },
  { name: "Gigabyte B650 Gaming X AX", socket: "AM5", formFactor: "ATX", chipset: "AMD B650", memorySlots: "4 x DDR5", m2Slots: "3 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/GIGABYTE.png" },
  { name: "Gigabyte B650M DS3H", socket: "AM5", formFactor: "Micro-ATX", chipset: "AMD B650", memorySlots: "4 x DDR5", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/GIGABYTE.png" },
  { name: "ASRock B650 Steel Legend WiFi", socket: "AM5", formFactor: "ATX", chipset: "AMD B650", memorySlots: "4 x DDR5", m2Slots: "3 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASRock.png" },
  { name: "ASRock B650 LiveMixer", socket: "AM5", formFactor: "ATX", chipset: "AMD B650", memorySlots: "4 x DDR5", m2Slots: "3 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASRock.png" },
  { name: "ASRock B650M Pro RS", socket: "AM5", formFactor: "Micro-ATX", chipset: "AMD B650", memorySlots: "4 x DDR5", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASRock.png" },
  { name: "ASUS TUF Gaming A620M-Plus WiFi", socket: "AM5", formFactor: "Micro-ATX", chipset: "AMD A620", memorySlots: "4 x DDR5", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "Gigabyte A620M Gaming X", socket: "AM5", formFactor: "Micro-ATX", chipset: "AMD A620", memorySlots: "4 x DDR5", m2Slots: "1 x M.2", usbPorts: "USB 3.2", image: "assets/GIGABYTE.png" },

  // ==========================================
  // --- INTEL LGA1200 MOTHERBOARDS (Z590 / B560 / H410) ---
  // ==========================================
  { name: "ASUS ROG Maximus XIII Hero", socket: "LGA1200", formFactor: "ATX", chipset: "Intel Z590", memorySlots: "4 x DDR4", m2Slots: "4 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "ASUS TUF Gaming Z590-Plus WiFi", socket: "LGA1200", formFactor: "ATX", chipset: "Intel Z590", memorySlots: "4 x DDR4", m2Slots: "3 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "MSI MPG Z590 Gaming Carbon WiFi", socket: "LGA1200", formFactor: "ATX", chipset: "Intel Z590", memorySlots: "4 x DDR4", m2Slots: "3 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/MSI.png" },
  { name: "Gigabyte Z590 Aorus Elite", socket: "LGA1200", formFactor: "ATX", chipset: "Intel Z590", memorySlots: "4 x DDR4", m2Slots: "3 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/GIGABYTE.png" },
  { name: "ASUS ROG Strix B560-F Gaming WiFi", socket: "LGA1200", formFactor: "ATX", chipset: "Intel B560", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "ASUS TUF Gaming B560M-Plus WiFi", socket: "LGA1200", formFactor: "Micro-ATX", chipset: "Intel B560", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "MSI MAG B560 Tomahawk WiFi", socket: "LGA1200", formFactor: "ATX", chipset: "Intel B560", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/MSI.png" },
  { name: "Gigabyte B560M Aorus Elite", socket: "LGA1200", formFactor: "Micro-ATX", chipset: "Intel B560", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/GIGABYTE.png" },
  { name: "ASRock B560 Steel Legend", socket: "LGA1200", formFactor: "ATX", chipset: "Intel B560", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASRock.png" },
  { name: "ASUS Prime H510M-K", socket: "LGA1200", formFactor: "Micro-ATX", chipset: "Intel H510", memorySlots: "2 x DDR4", m2Slots: "1 x M.2", usbPorts: "USB 3.2", image: "assets/ASUS.png" },

  // ==========================================
  // --- AMD AM4 MOTHERBOARDS (X570 / B550 / A520) ---
  // ==========================================
  { name: "ASUS ROG Crosshair VIII Dark Hero", socket: "AM4", formFactor: "ATX", chipset: "AMD X570", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "ASUS ROG Strix X570-E Gaming WiFi II", socket: "AM4", formFactor: "ATX", chipset: "AMD X570", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "ASUS TUF Gaming X570-Plus (Wi-Fi)", socket: "AM4", formFactor: "ATX", chipset: "AMD X570", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "MSI MPG X570 Gaming Edge WiFi", socket: "AM4", formFactor: "ATX", chipset: "AMD X570", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/MSI.png" },
  { name: "Gigabyte X570 Aorus Elite", socket: "AM4", formFactor: "ATX", chipset: "AMD X570", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/GIGABYTE.png" },
  { name: "ASRock X570 Taichi", socket: "AM4", formFactor: "ATX", chipset: "AMD X570", memorySlots: "4 x DDR4", m2Slots: "3 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASRock.png" },
  { name: "ASUS ROG Strix B550-F Gaming WiFi II", socket: "AM4", formFactor: "ATX", chipset: "AMD B550", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "ASUS ROG Strix B550-A Gaming", socket: "AM4", formFactor: "ATX", chipset: "AMD B550", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "ASUS TUF Gaming B550-Plus WiFi II", socket: "AM4", formFactor: "ATX", chipset: "AMD B550", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "ASUS Prime B550M-A WiFi II", socket: "AM4", formFactor: "Micro-ATX", chipset: "AMD B550", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASUS.png" },
  { name: "MSI MAG B550 Tomahawk", socket: "AM4", formFactor: "ATX", chipset: "AMD B550", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/MSI.png" },
  { name: "MSI MPG B550 Gaming Edge WiFi", socket: "AM4", formFactor: "ATX", chipset: "AMD B550", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/MSI.png" },
  { name: "MSI MAG B550M Mortar WiFi", socket: "AM4", formFactor: "Micro-ATX", chipset: "AMD B550", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/MSI.png" },
  { name: "MSI B550-A Pro", socket: "AM4", formFactor: "ATX", chipset: "AMD B550", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/MSI.png" },
  { name: "Gigabyte B550 Aorus Elite AX V2", socket: "AM4", formFactor: "ATX", chipset: "AMD B550", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/GIGABYTE.png" },
  { name: "Gigabyte B550M Aorus Pro-P", socket: "AM4", formFactor: "Micro-ATX", chipset: "AMD B550", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/GIGABYTE.png" },
  { name: "Gigabyte B550 Gaming X V2", socket: "AM4", formFactor: "ATX", chipset: "AMD B550", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB 3.2", image: "assets/GIGABYTE.png" },
  { name: "ASRock B550 Steel Legend", socket: "AM4", formFactor: "ATX", chipset: "AMD B550", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASRock.png" },
  { name: "ASRock B550 Extreme4", socket: "AM4", formFactor: "ATX", chipset: "AMD B550", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASRock.png" },
  { name: "ASRock B550M Pro4", socket: "AM4", formFactor: "Micro-ATX", chipset: "AMD B550", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.2", image: "assets/ASRock.png" },
  { name: "ASUS Prime A520M-A II", socket: "AM4", formFactor: "Micro-ATX", chipset: "AMD A520", memorySlots: "4 x DDR4", m2Slots: "1 x M.2", usbPorts: "USB 3.2", image: "assets/ASUS.png" },
  { name: "MSI A520M-A PRO", socket: "AM4", formFactor: "Micro-ATX", chipset: "AMD A520", memorySlots: "2 x DDR4", m2Slots: "1 x M.2", usbPorts: "USB 3.2", image: "assets/MSI.png" },
  { name: "Gigabyte A520M S2H", socket: "AM4", formFactor: "Micro-ATX", chipset: "AMD A520", memorySlots: "2 x DDR4", m2Slots: "1 x M.2", usbPorts: "USB 3.2", image: "assets/GIGABYTE.png" },
  { name: "ASRock A520M-HDV", socket: "AM4", formFactor: "Micro-ATX", chipset: "AMD A520", memorySlots: "2 x DDR4", m2Slots: "1 x M.2", usbPorts: "USB 3.2", image: "assets/ASRock.png" },

  // ==========================================
  // --- INTEL OLDER GEN & AMD LEGACY MOTHERBOARDS ---
  // ==========================================
  { name: "ASUS ROG Maximus XI Hero", socket: "LGA1151", formFactor: "ATX", chipset: "Intel Z390", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.1", image: "assets/ASUS.png" },
  { name: "MSI MPG Z390 Gaming Edge AC", socket: "LGA1151", formFactor: "ATX", chipset: "Intel Z390", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.1", image: "assets/MSI.png" },
  { name: "Gigabyte Z390 Aorus Pro", socket: "LGA1151", formFactor: "ATX", chipset: "Intel Z390", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.1", image: "assets/GIGABYTE.png" },
  { name: "ASUS Prime B365M-A", socket: "LGA1151", formFactor: "Micro-ATX", chipset: "Intel B365", memorySlots: "4 x DDR4", m2Slots: "1 x M.2", usbPorts: "USB 3.1", image: "assets/ASUS.png" },
  { name: "ASUS ROG Maximus X Code", socket: "LGA1151", formFactor: "ATX", chipset: "Intel Z370", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.1", image: "assets/ASUS.png" },
  { name: "ASUS ROG Strix Z270H Gaming", socket: "LGA1151", formFactor: "ATX", chipset: "Intel Z270", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB 3.0", image: "assets/ASUS.png" },
  { name: "Gigabyte Z170X-Gaming 7", socket: "LGA1151", formFactor: "ATX", chipset: "Intel Z170", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.0", image: "assets/GIGABYTE.png" },
  { name: "ASUS ROG Maximus VII Ranger", socket: "LGA1150", formFactor: "ATX", chipset: "Intel Z97", memorySlots: "4 x DDR3", m2Slots: "1 x M.2", usbPorts: "USB 3.0", image: "assets/ASUS.png" },
  { name: "ASUS Sabertooth Z97 Mark 1", socket: "LGA1150", formFactor: "ATX", chipset: "Intel Z97", memorySlots: "4 x DDR3", m2Slots: "1 x M.2", usbPorts: "USB 3.0", image: "assets/ASUS.png" },
  { name: "MSI Z87-G45 Gaming", socket: "LGA1150", formFactor: "ATX", chipset: "Intel Z87", memorySlots: "4 x DDR3", m2Slots: "0 x M.2", usbPorts: "USB 3.0", image: "assets/MSI.png" },
  { name: "ASUS P8Z68-V PRO", socket: "LGA1155", formFactor: "ATX", chipset: "Intel Z68", memorySlots: "4 x DDR3", m2Slots: "0 x M.2", usbPorts: "USB 3.0", image: "assets/ASUS.png" },
  { name: "Gigabyte GA-Z68X-UD3H-B3", socket: "LGA1155", formFactor: "ATX", chipset: "Intel Z68", memorySlots: "4 x DDR3", m2Slots: "0 x M.2", usbPorts: "USB 2.0 / USB 3.0", image: "assets/GIGABYTE.png" },
  { name: "ASUS ROG Crosshair VI Hero", socket: "AM4", formFactor: "ATX", chipset: "AMD X370", memorySlots: "4 x DDR4", m2Slots: "2 x M.2", usbPorts: "USB-C / USB 3.1", image: "assets/ASUS.png" },
  { name: "MSI B350 Tomahawk", socket: "AM4", formFactor: "ATX", chipset: "AMD B350", memorySlots: "4 x DDR4", m2Slots: "1 x M.2", usbPorts: "USB-C / USB 3.1", image: "assets/MSI.png" },
  { name: "Gigabyte GA-AB350-Gaming 3", socket: "AM4", formFactor: "ATX", chipset: "AMD B350", memorySlots: "4 x DDR4", m2Slots: "1 x M.2", usbPorts: "USB 3.1", image: "assets/GIGABYTE.png" },
  { name: "ASRock A320M-HDV", socket: "AM4", formFactor: "Micro-ATX", chipset: "AMD A320", memorySlots: "2 x DDR4", m2Slots: "1 x M.2", usbPorts: "USB 3.0", image: "assets/ASRock.png" }
];

// สั่งแสดงผลการ์ดสินค้าบนหน้าจอเมื่อโหลดไฟล์เสร็จ
if (typeof checkIncomingSearch === 'function') {
  checkIncomingSearch();
}