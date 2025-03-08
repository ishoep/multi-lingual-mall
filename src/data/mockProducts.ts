
import { Product } from '@/types';

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    description: 'Experience crystal-clear sound with our premium wireless headphones. Features noise cancellation and 30-hour battery life.',
    price: 299.99,
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'],
    category: 'electronics',
    rating: 4.8,
    stock: 15,
    featured: true,
    createdAt: new Date('2023-05-15').toISOString(),
    translations: {
      ru: {
        title: 'Премиальные беспроводные наушники',
        description: 'Ощутите кристально чистый звук с нашими премиальными беспроводными наушниками. Оснащены шумоподавлением и 30-часовой батареей.'
      },
      uz: {
        title: 'Premium simsiz quloqchinlar',
        description: 'Premium simsiz quloqchinlarimiz bilan kristall toza ovozni his qiling. Shovqinni bekor qilish va 30 soatlik batareya.'
      }
    }
  },
  {
    id: '2',
    title: 'Smart Fitness Watch',
    description: 'Track your fitness goals with our advanced smart watch. Features heart rate monitoring, GPS, and waterproof design.',
    price: 199.99,
    images: ['https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'],
    category: 'electronics',
    rating: 4.5,
    stock: 20,
    featured: true,
    createdAt: new Date('2023-04-20').toISOString(),
    translations: {
      ru: {
        title: 'Умные фитнес-часы',
        description: 'Отслеживайте свои фитнес-цели с нашими продвинутыми умными часами. Оснащены мониторингом сердечного ритма, GPS и водонепроницаемым дизайном.'
      },
      uz: {
        title: 'Aqlli fitnes soati',
        description: 'Bizning rivojlangan aqlli soatimiz bilan fitnes maqsadlaringizni kuzating. Yurak urish tezligini kuzatish, GPS va suv o\'tkazmaydigan dizayn.'
      }
    }
  },
  {
    id: '3',
    title: 'Designer Leather Jacket',
    description: 'Premium leather jacket with modern design. Perfect for casual and formal occasions.',
    price: 349.99,
    images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'],
    category: 'clothing',
    rating: 4.7,
    stock: 10,
    featured: true,
    createdAt: new Date('2023-03-10').toISOString(),
    translations: {
      ru: {
        title: 'Дизайнерская кожаная куртка',
        description: 'Премиальная кожаная куртка с современным дизайном. Идеально подходит для повседневных и официальных случаев.'
      },
      uz: {
        title: 'Dizayner teri kurtka',
        description: 'Zamonaviy dizayndagi premium teri kurtka. Kundalik va rasmiy tadbirlar uchun ideal.'
      }
    }
  },
  {
    id: '4',
    title: 'Minimalist Desk Lamp',
    description: 'Modern desk lamp with adjustable brightness and color temperature. Perfect for your home office.',
    price: 89.99,
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'],
    category: 'home',
    rating: 4.4,
    stock: 25,
    featured: true,
    createdAt: new Date('2023-02-05').toISOString(),
    translations: {
      ru: {
        title: 'Минималистичная настольная лампа',
        description: 'Современная настольная лампа с регулируемой яркостью и цветовой температурой. Идеально подходит для вашего домашнего офиса.'
      },
      uz: {
        title: 'Minimalistik stol lampasi',
        description: 'Sozlanadigan yorqinlik va rang temperaturasi bilan zamonaviy stol lampasi. Uy ofisi uchun juda mos.'
      }
    }
  },
  {
    id: '5',
    title: 'Smartphone Pro Max',
    description: 'Latest generation smartphone with advanced camera system and powerful processor.',
    price: 999.99,
    images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'],
    category: 'electronics',
    rating: 4.9,
    stock: 8,
    featured: false,
    createdAt: new Date('2023-06-01').toISOString(),
    translations: {
      ru: {
        title: 'Смартфон Pro Max',
        description: 'Смартфон последнего поколения с продвинутой системой камер и мощным процессором.'
      },
      uz: {
        title: 'Smartphone Pro Max',
        description: 'Ilg\'or kamera tizimi va kuchli protsessor bilan so\'nggi avlod smartfoni.'
      }
    }
  },
  {
    id: '6',
    title: 'Ergonomic Office Chair',
    description: 'Comfortable office chair with lumbar support and adjustable height. Perfect for long working hours.',
    price: 249.99,
    images: ['https://images.unsplash.com/photo-1505843490701-5be5d1b31d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'],
    category: 'home',
    rating: 4.6,
    stock: 12,
    featured: false,
    createdAt: new Date('2023-01-25').toISOString(),
    translations: {
      ru: {
        title: 'Эргономичное офисное кресло',
        description: 'Удобное офисное кресло с поддержкой поясницы и регулируемой высотой. Идеально подходит для длительного рабочего времени.'
      },
      uz: {
        title: 'Ergonomik ofis stuli',
        description: 'Bel suyanchig\'i va sozlanadigan balandligi bilan qulay ofis stuli. Uzoq ish soatlari uchun ideal.'
      }
    }
  }
];
