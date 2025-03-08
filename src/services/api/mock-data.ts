import { Product, Category, Order } from "@/types";

// Simulate API calls with delay
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock data (simulating an API)
export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "Experience crystal-clear sound with our premium wireless headphones featuring noise cancellation technology and 40-hour battery life.",
    price: 299.99,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&auto=format&fit=crop&q=80"
    ],
    category: "audio",
    stock: 25,
    featured: true,
    trending: true,
    rating: 4.8,
    reviews: 124,
    createdAt: "2023-01-15T09:30:00Z",
    details: {
      "Brand": "SoundMax",
      "Model": "ProSound X1",
      "Color": "Matte Black",
      "Connectivity": "Bluetooth 5.2",
      "Battery Life": "40 hours",
      "Noise Cancellation": "Active"
    },
    translations: {
      ru: {
        name: "Премиальные беспроводные наушники",
        description: "Оцените кристально чистый звук с нашими премиальными беспроводными наушниками с технологией шумоподавления и 40-часовой батареей.",
        details: {
          "Бренд": "SoundMax",
          "Модель": "ProSound X1",
          "Цвет": "Матовый черный",
          "Подключение": "Bluetooth 5.2",
          "Время работы": "40 часов",
          "Шумоподавление": "Активное"
        }
      },
      uz: {
        name: "Premium simsiz quloqchinlar",
        description: "Shovqinni yo'q qilish texnologiyasi va 40 soatlik batareya quvvati bilan jihozlangan premium simsiz quloqchinlarimiz bilan kristall toza tovushni his qiling.",
        details: {
          "Brend": "SoundMax",
          "Model": "ProSound X1",
          "Rang": "Matt qora",
          "Ulanish": "Bluetooth 5.2",
          "Batareya quvvati": "40 soat",
          "Shovqin yo'qotish": "Faol"
        }
      }
    }
  },
  {
    id: "2",
    name: "Smart Watch Series 5",
    description: "Stay connected with this premium smartwatch featuring health monitoring, GPS, and seamless smartphone integration in a sleek design.",
    price: 349.99,
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544117519-31a4a39e9a68?w=800&auto=format&fit=crop&q=80"
    ],
    category: "wearables",
    stock: 15,
    featured: true,
    trending: true,
    rating: 4.6,
    reviews: 89,
    createdAt: "2023-02-20T14:45:00Z",
    details: {
      "Brand": "TechFit",
      "Model": "Series 5",
      "Display": "AMOLED 1.4 inch",
      "Water Resistance": "IP68",
      "Battery Life": "Up to 5 days",
      "Sensors": "Heart rate, SpO2, Accelerometer"
    },
    translations: {
      ru: {
        name: "Умные часы Series 5",
        description: "Оставайтесь на связи с этими премиальными умными часами с мониторингом здоровья, GPS и интеграцией со смартфоном в элегантном дизайне.",
        details: {
          "Бренд": "TechFit",
          "Модель": "Series 5",
          "Дисплей": "AMOLED 1.4 дюйма",
          "Водостойкость": "IP68",
          "Время работы": "До 5 дней",
          "Датчики": "Пульс, SpO2, Акселерометр"
        }
      },
      uz: {
        name: "Smart Watch Series 5",
        description: "Sog'liqni kuzatish, GPS va chiroyli dizaynda smartfon integratsiyasi bilan jihozlangan ushbu premium smart soat bilan bog'lanib qoling.",
        details: {
          "Brend": "TechFit",
          "Model": "Series 5",
          "Display": "AMOLED 1.4 dyuym",
          "Suv o'tkazmasligi": "IP68",
          "Batareya quvvati": "5 kungacha",
          "Sensorlar": "Yurak urishi, SpO2, Akselerometr"
        }
      }
    }
  },
  {
    id: "3",
    name: "Minimalist Laptop Backpack",
    description: "A sleek, water-resistant backpack with padded compartments for your laptop and accessories, perfect for work or travel.",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80"
    ],
    category: "accessories",
    stock: 50,
    featured: false,
    trending: true,
    rating: 4.7,
    reviews: 213,
    details: {
      "Brand": "UrbanCarry",
      "Material": "Water-resistant polyester",
      "Capacity": "22L",
      "Laptop Size": "Up to 15.6 inches",
      "Weight": "0.8 kg",
      "Color": "Charcoal Gray"
    },
    translations: {
      ru: {
        name: "Минималистичный рюкзак для ноутбука",
        description: "Элегантный водостойкий рюкзак с мягкими отделениями для ноутбука и аксессуаров, идеально подходит для работы или путешествий.",
        details: {
          "Бренд": "UrbanCarry",
          "Материал": "Водостойкий полиэстер",
          "Объем": "22 л",
          "Размер ноутбука": "До 15.6 дюймов",
          "Вес": "0.8 кг",
          "Цвет": "Угольно-серый"
        }
      },
      uz: {
        name: "Minimalistik noutbuk ryukzagi",
        description: "Noutbuk va aksessuarlar uchun yumshoq bo'lmalar bilan jihozlangan elegantt, suv o'tkazmaydigan ryukzak, ish yoki sayohat uchun juda mos.",
        details: {
          "Brend": "UrbanCarry",
          "Material": "Suv o'tkazmaydigan polyester",
          "Sig'imi": "22L",
          "Noutbuk o'lchami": "15.6 dyuymgacha",
          "Vazni": "0.8 kg",
          "Rang": "Ko'mir kulrang"
        }
      }
    }
  },
  {
    id: "4",
    name: "Ultra HD Smart TV 55\"",
    description: "Experience stunning 4K resolution and smart features with this slim, bezel-less design TV that enhances any living space.",
    price: 899.99,
    images: [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1577979749830-f1d742b96791?w=800&auto=format&fit=crop&q=80"
    ],
    category: "electronics",
    stock: 10,
    featured: true,
    trending: false,
    rating: 4.5,
    reviews: 67,
    details: {
      "Brand": "VisionPlus",
      "Screen Size": "55 inches",
      "Resolution": "4K Ultra HD",
      "Refresh Rate": "120Hz",
      "Smart Features": "Voice control, streaming apps",
      "Connectivity": "HDMI x4, USB x3, Wi-Fi, Bluetooth"
    },
    translations: {
      ru: {
        name: "Ультра HD Smart TV 55\"",
        description: "Оцените потрясающее разрешение 4K и умные функции с этим тонким безрамочным телевизором, который украсит любое жилое пространство.",
        details: {
          "Бренд": "VisionPlus",
          "Размер экрана": "55 дюймов",
          "Разрешение": "4K Ultra HD",
          "Частота обновления": "120Гц",
          "Умные функции": "Голосовое управление, стриминговые приложения",
          "Подключения": "HDMI x4, USB x3, Wi-Fi, Bluetooth"
        }
      },
      uz: {
        name: "Ultra HD Smart TV 55\"",
        description: "Har qanday yashash joyini boyitadigan bu yupqa, chegarasiz dizaynli televizor bilan ajoyib 4K ruxsat va aqlli xususiyatlarni his qiling.",
        details: {
          "Brend": "VisionPlus",
          "Ekran o'lchami": "55 dyuym",
          "Ruxsat": "4K Ultra HD",
          "Yangilanish tezligi": "120Hz",
          "Aqlli funksiyalar": "Ovozli boshqaruv, striming ilovalar",
          "Ulanish": "HDMI x4, USB x3, Wi-Fi, Bluetooth"
        }
      }
    }
  },
  {
    id: "5",
    name: "Professional DSLR Camera",
    description: "Capture stunning photos and videos with this professional DSLR camera featuring high resolution sensor and advanced autofocus system.",
    price: 1299.99,
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=800&auto=format&fit=crop&q=80"
    ],
    category: "electronics",
    stock: 8,
    featured: true,
    trending: false,
    rating: 4.9,
    reviews: 42,
    details: {
      "Brand": "FotoMax",
      "Model": "Pro X7",
      "Sensor": "Full-frame 45MP",
      "Video": "4K 60fps",
      "ISO Range": "100-51200 (expandable)",
      "Connectivity": "Wi-Fi, Bluetooth, USB-C"
    },
    translations: {
      ru: {
        name: "Профессиональная камера DSLR",
        description: "Создавайте потрясающие фотографии и видео с этой профессиональной камерой DSLR с высоким разрешением сенсора и продвинутой системой автофокуса.",
        details: {
          "Бренд": "FotoMax",
          "Модель": "Pro X7",
          "Сенсор": "Полнокадровый 45Мп",
          "Видео": "4K 60fps",
          "Диапазон ISO": "100-51200 (расширяемый)",
          "Подключения": "Wi-Fi, Bluetooth, USB-C"
        }
      },
      uz: {
        name: "Professional DSLR kamera",
        description: "Yuqori ruxsatli sensor va ilg'or avtofokus tizimi bilan jihozlangan ushbu professional DSLR kamera bilan ajoyib rasmlar va videolarni yarating.",
        details: {
          "Brend": "FotoMax",
          "Model": "Pro X7",
          "Sensor": "To'liq kadr 45MP",
          "Video": "4K 60fps",
          "ISO diapazoni": "100-51200 (kengaytiriladigan)",
          "Ulanish": "Wi-Fi, Bluetooth, USB-C"
        }
      }
    }
  },
  {
    id: "6",
    name: "Wireless Charging Pad",
    description: "Sleek wireless charging pad compatible with all Qi-enabled devices, featuring fast charging and anti-slip surface.",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1633060443718-113ca2ca0a5d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618520408846-bcd8940c3bad?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80"
    ],
    category: "accessories",
    stock: 75,
    featured: false,
    trending: true,
    rating: 4.4,
    reviews: 156,
    details: {
      "Brand": "PowerUp",
      "Model": "QiCharge Pro",
      "Charging Speed": "Up to 15W",
      "Compatibility": "All Qi-enabled devices",
      "Material": "Aluminum + Silicone",
      "LED Indicator": "Yes"
    },
    translations: {
      ru: {
        name: "Беспроводная зарядная панель",
        description: "Элегантная беспроводная зарядная панель, совместимая со всеми устройствами с поддержкой Qi, с функцией быстрой зарядки и нескользящей поверхностью.",
        details: {
          "Бренд": "PowerUp",
          "Модель": "QiCharge Pro",
          "Скорость зарядки": "До 15Вт",
          "Совместимость": "Все устройства с Qi",
          "Материал": "Алюминий + Силикон",
          "LED Индикатор": "Да"
        }
      },
      uz: {
        name: "Simsiz quvvatlash pad",
        description: "Barcha Qi-qo'llab-quvvatlaydigan qurilmalar bilan mos keladigan, tez quvvatlash va sirg'anmaydigan yuza bilan jihozlangan zamonaviy simsiz quvvatlash padi.",
        details: {
          "Brend": "PowerUp",
          "Model": "QiCharge Pro",
          "Quvvatlash tezligi": "15W gacha",
          "Moslik": "Barcha Qi-qo'llab-quvvatlaydigan qurilmalar",
          "Material": "Alyuminiy + Silikon",
          "LED indikator": "Ha"
        }
      }
    }
  },
  {
    id: "7",
    name: "Mechanical Keyboard",
    description: "Precise mechanical keyboard with customizable RGB lighting, programmable keys, and durable construction for gaming and professional use.",
    price: 149.99,
    images: [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593998066526-65fcab3021a2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"
    ],
    category: "accessories",
    stock: 30,
    featured: false,
    trending: true,
    rating: 4.7,
    reviews: 128,
    details: {
      "Brand": "TypeMaster",
      "Model": "MK-7 Pro",
      "Switch Type": "Cherry MX Brown",
      "Key Rollover": "N-key rollover",
      "Backlight": "RGB (16.8M colors)",
      "Connectivity": "USB-C (detachable)"
    },
    translations: {
      ru: {
        name: "Механическая клавиатура",
        description: "Точная механическая клавиатура с настраиваемой RGB-подсветкой, программируемыми клавишами и прочной конструкцией для гейминга и профессионального использования.",
        details: {
          "Бренд": "TypeMaster",
          "Модель": "MK-7 Pro",
          "Тип переключателей": "Cherry MX Brown",
          "Антиконфликт клавиш": "Полный",
          "Подсветка": "RGB (16.8M цветов)",
          "Подключение": "USB-C (отсоединяемый)"
        }
      },
      uz: {
        name: "Mexanik klaviatura",
        description: "O'yin va professional foydalanish uchun moslashtirilgan RGB yoritish, dasturlanadigan tugmalar va mustahkam konstruksiya bilan jihozlangan aniq mexanik klaviatura.",
        details: {
          "Brend": "TypeMaster",
          "Model": "MK-7 Pro",
          "Tugma turi": "Cherry MX Brown",
          "Tugma rollover": "N-key rollover",
          "Orqa yoritish": "RGB (16.8M ranglar)",
          "Ulanish": "USB-C (ajraladigan)"
        }
      }
    }
  },
  {
    id: "8",
    name: "Portable Bluetooth Speaker",
    description: "Compact, waterproof Bluetooth speaker delivering rich sound with deep bass, perfect for outdoor adventures with its 20-hour battery life.",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589003077984-89909882e98d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?w=800&auto=format&fit=crop&q=80"
    ],
    category: "audio",
    stock: 45,
    featured: false,
    trending: true,
    rating: 4.6,
    reviews: 94,
    details: {
      "Brand": "SoundWave",
      "Model": "Aqua Mini",
      "Waterproof Rating": "IPX7",
      "Battery Life": "Up to 20 hours",
      "Drivers": "Dual 40mm drivers",
      "Connectivity": "Bluetooth 5.1, AUX"
    },
    translations: {
      ru: {
        name: "Портативная Bluetooth-колонка",
        description: "Компактная водонепроницаемая Bluetooth-колонка с богатым звуком и глубокими басами, идеально подходит для приключений на свежем воздухе с 20-часовой работой от батареи.",
        details: {
          "Бренд": "SoundWave",
          "Модель": "Aqua Mini",
          "Водонепроницаемость": "IPX7",
          "Время работы": "До 20 часов",
          "Динамики": "Двойные 40мм драйверы",
          "Подключения": "Bluetooth 5.1, AUX"
        }
      },
      uz: {
        name: "Ko'chma Bluetooth karnay",
        description: "Chuqur bas bilan boy tovush beradigan ixcham, suv o'tkazmaydigan Bluetooth karnay, 20 soatlik batareya quvvati bilan tashqi sarguzashtlar uchun juda mos.",
        details: {
          "Brend": "SoundWave",
          "Model": "Aqua Mini",
          "Suv o'tkazmasligi": "IPX7",
          "Batareya quvvati": "20 soatgacha",
          "Driverslar": "Ikkita 40mm driver",
          "Ulanish": "Bluetooth 5.1, AUX"
        }
      }
    }
  }
];

export const mockCategories: Category[] = [
  {
    id: "1",
    name: "Audio",
    slug: "audio",
    image: "https://images.unsplash.com/photo-1612199509555-d2933cce5323?w=800&auto=format&fit=crop&q=80",
    productCount: 2,
    featured: false,
    translations: {
      ru: { name: "Аудио" },
      uz: { name: "Audio" }
    }
  },
  {
    id: "2",
    name: "Wearables",
    slug: "wearables",
    image: "https://images.unsplash.com/photo-1617043786394-ae5a3f7c09ac?w=800&auto=format&fit=crop&q=80",
    productCount: 1,
    featured: false,
    translations: {
      ru: { name: "Носимые устройства" },
      uz: { name: "Kiyiladigan qurilmalar" }
    }
  },
  {
    id: "3",
    name: "Electronics",
    slug: "electronics",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&fit=crop&q=80",
    productCount: 2,
    featured: false,
    translations: {
      ru: { name: "Электроника" },
      uz: { name: "Elektronika" }
    }
  },
  {
    id: "4",
    name: "Accessories",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1617043786394-ae5a3f7c09ac?w=800&auto=format&fit=crop&q=80",
    productCount: 3,
    featured: false,
    translations: {
      ru: { name: "Аксессуары" },
      uz: { name: "Aksessuarlar" }
    }
  }
];

export const mockOrders: Order[] = [
  {
    id: "ord-001",
    userId: "1",
    items: [
      {
        productId: "1",
        name: "Premium Wireless Headphones",
        price: 299.99,
        quantity: 1
      },
      {
        productId: "3",
        name: "Minimalist Laptop Backpack",
        price: 79.99,
        quantity: 1
      }
    ],
    total: 379.98,
    status: "delivered",
    date: "2023-10-15T14:22:00Z",
    createdAt: "2023-10-15T14:22:00Z",
    shippingAddress: {
      name: "John Doe",
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      country: "USA"
    },
    paymentMethod: "Credit Card"
  },
  {
    id: "ord-002",
    userId: "1",
    items: [
      {
        productId: "5",
        name: "Professional DSLR Camera",
        price: 1299.99,
        quantity: 1
      }
    ],
    total: 1299.99,
    status: "shipped",
    date: "2023-11-02T11:45:00Z",
    createdAt: "2023-11-02T11:45:00Z",
    shippingAddress: {
      name: "John Doe",
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      country: "USA"
    },
    paymentMethod: "PayPal"
  }
];
