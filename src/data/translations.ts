
export type Language = 'en' | 'ru' | 'uz';

export type TranslationType = {
  [key in Language]: {
    // Navigation
    home: string;
    products: string;
    categories: string;
    cart: string;
    profile: string;
    login: string;
    logout: string;
    register: string;
    admin: string;
    
    // Hero section
    heroTitle: string;
    heroSubtitle: string;
    shopNow: string;
    learnMore: string;
    
    // Categories
    featuredCategories: string;
    browseCategories: string;
    electronics: string;
    clothing: string;
    home: string;
    electronicsDescription: string;
    clothingDescription: string;
    homeDescription: string;
    exploreCategory: string;
    
    // Products
    featuredProducts: string;
    discoverProducts: string;
    popular: string;
    new: string;
    sale: string;
    productTitle: string;
    newProduct: string;
    saleProduct: string;
    
    // Footer
    aboutUs: string;
    contactUs: string;
    termsOfService: string;
    privacyPolicy: string;
    copyright: string;
    
    // Language
    language: string;
    english: string;
    russian: string;
    uzbek: string;
    
    // Authentication
    emailAddress: string;
    password: string;
    confirmPassword: string;
    forgotPassword: string;
    signIn: string;
    signUp: string;
    orContinueWith: string;
    
    // Cart
    yourCart: string;
    emptyCart: string;
    subtotal: string;
    checkout: string;
    continueShopping: string;
    
    // Product details
    addToCart: string;
    description: string;
    specifications: string;
    reviews: string;
    relatedProducts: string;
  }
};

export const translations: TranslationType = {
  en: {
    // Navigation
    home: 'Home',
    products: 'Products',
    categories: 'Categories',
    cart: 'Cart',
    profile: 'Profile',
    login: 'Login',
    logout: 'Logout',
    register: 'Register',
    admin: 'Admin',
    
    // Hero section
    heroTitle: 'Discover Amazing Products',
    heroSubtitle: 'Shop our latest collection of premium quality products with free shipping worldwide.',
    shopNow: 'Shop Now',
    learnMore: 'Learn More',
    
    // Categories
    featuredCategories: 'Featured Categories',
    browseCategories: 'Browse our selection of premium categories, handpicked for your enjoyment.',
    electronics: 'Electronics',
    clothing: 'Clothing',
    home: 'Home & Living',
    electronicsDescription: 'Discover the latest tech gadgets and innovations',
    clothingDescription: 'Explore fashionable apparel for all seasons',
    homeDescription: 'Find beautiful items to enhance your living space',
    exploreCategory: 'Explore',
    
    // Products
    featuredProducts: 'Featured Products',
    discoverProducts: 'Discover our selection of premium products, carefully curated for your enjoyment.',
    popular: 'Popular',
    new: 'New Arrivals',
    sale: 'On Sale',
    productTitle: 'Premium Product',
    newProduct: 'New Collection Item',
    saleProduct: 'Special Discount Item',
    
    // Footer
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    termsOfService: 'Terms of Service',
    privacyPolicy: 'Privacy Policy',
    copyright: '© 2023 GlobalMart. All rights reserved.',
    
    // Language
    language: 'Language',
    english: 'English',
    russian: 'Russian',
    uzbek: 'Uzbek',
    
    // Authentication
    emailAddress: 'Email Address',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    forgotPassword: 'Forgot Password?',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    orContinueWith: 'Or continue with',
    
    // Cart
    yourCart: 'Your Cart',
    emptyCart: 'Your cart is empty',
    subtotal: 'Subtotal',
    checkout: 'Checkout',
    continueShopping: 'Continue Shopping',
    
    // Product details
    addToCart: 'Add to Cart',
    description: 'Description',
    specifications: 'Specifications',
    reviews: 'Reviews',
    relatedProducts: 'Related Products',
  },
  
  ru: {
    // Navigation
    home: 'Главная',
    products: 'Товары',
    categories: 'Категории',
    cart: 'Корзина',
    profile: 'Профиль',
    login: 'Вход',
    logout: 'Выход',
    register: 'Регистрация',
    admin: 'Админ',
    
    // Hero section
    heroTitle: 'Откройте для себя удивительные товары',
    heroSubtitle: 'Покупайте нашу последнюю коллекцию товаров премиум-качества с бесплатной доставкой по всему миру.',
    shopNow: 'Купить сейчас',
    learnMore: 'Узнать больше',
    
    // Categories
    featuredCategories: 'Популярные категории',
    browseCategories: 'Просмотрите наш выбор премиум-категорий, подобранных специально для вас.',
    electronics: 'Электроника',
    clothing: 'Одежда',
    home: 'Дом и быт',
    electronicsDescription: 'Откройте для себя новейшие технические гаджеты и инновации',
    clothingDescription: 'Исследуйте модную одежду для всех сезонов',
    homeDescription: 'Найдите красивые предметы для украшения вашего жилого пространства',
    exploreCategory: 'Исследовать',
    
    // Products
    featuredProducts: 'Рекомендуемые товары',
    discoverProducts: 'Откройте для себя наш выбор товаров премиум-класса, тщательно подобранных для вашего удовольствия.',
    popular: 'Популярные',
    new: 'Новинки',
    sale: 'Распродажа',
    productTitle: 'Премиум товар',
    newProduct: 'Товар из новой коллекции',
    saleProduct: 'Товар со специальной скидкой',
    
    // Footer
    aboutUs: 'О нас',
    contactUs: 'Связаться с нами',
    termsOfService: 'Условия использования',
    privacyPolicy: 'Политика конфиденциальности',
    copyright: '© 2023 GlobalMart. Все права защищены.',
    
    // Language
    language: 'Язык',
    english: 'Английский',
    russian: 'Русский',
    uzbek: 'Узбекский',
    
    // Authentication
    emailAddress: 'Электронная почта',
    password: 'Пароль',
    confirmPassword: 'Подтвердите пароль',
    forgotPassword: 'Забыли пароль?',
    signIn: 'Войти',
    signUp: 'Зарегистрироваться',
    orContinueWith: 'Или продолжить с',
    
    // Cart
    yourCart: 'Ваша корзина',
    emptyCart: 'Ваша корзина пуста',
    subtotal: 'Промежуточный итог',
    checkout: 'Оформить заказ',
    continueShopping: 'Продолжить покупки',
    
    // Product details
    addToCart: 'Добавить в корзину',
    description: 'Описание',
    specifications: 'Характеристики',
    reviews: 'Отзывы',
    relatedProducts: 'Похожие товары',
  },
  
  uz: {
    // Navigation
    home: 'Asosiy',
    products: 'Mahsulotlar',
    categories: 'Kategoriyalar',
    cart: 'Savat',
    profile: 'Profil',
    login: 'Kirish',
    logout: 'Chiqish',
    register: 'Ro\'yxatdan o\'tish',
    admin: 'Admin',
    
    // Hero section
    heroTitle: 'Ajoyib mahsulotlarni kashf eting',
    heroSubtitle: 'Butun dunyo bo\'ylab bepul yetkazib berish bilan premium sifatli mahsulotlarimizning so\'nggi kolleksiyasini xarid qiling.',
    shopNow: 'Hozir xarid qiling',
    learnMore: 'Ko\'proq ma\'lumot',
    
    // Categories
    featuredCategories: 'Tanlangan kategoriyalar',
    browseCategories: 'Sizning zavqingiz uchun maxsus tanlangan premium kategoriyalarimizni ko\'rib chiqing.',
    electronics: 'Elektronika',
    clothing: 'Kiyim-kechak',
    home: 'Uy va turmush',
    electronicsDescription: 'Eng so\'nggi texnologik qurilmalar va innovatsiyalarni kashf eting',
    clothingDescription: 'Barcha mavsumlar uchun zamonaviy kiyimlarni tadqiq qiling',
    homeDescription: 'Yashash joyingizni yaxshilash uchun chiroyli buyumlarni toping',
    exploreCategory: 'O\'rganish',
    
    // Products
    featuredProducts: 'Tanlangan mahsulotlar',
    discoverProducts: 'Sizning zavqingiz uchun g\'amxo\'rlik bilan saralangan premium mahsulotlarimizni kashf eting.',
    popular: 'Mashhur',
    new: 'Yangi kelganlar',
    sale: 'Chegirmada',
    productTitle: 'Premium mahsulot',
    newProduct: 'Yangi kolleksiya elementi',
    saleProduct: 'Maxsus chegirma elementi',
    
    // Footer
    aboutUs: 'Biz haqimizda',
    contactUs: 'Biz bilan bog\'laning',
    termsOfService: 'Xizmat ko\'rsatish shartlari',
    privacyPolicy: 'Maxfiylik siyosati',
    copyright: '© 2023 GlobalMart. Barcha huquqlar himoyalangan.',
    
    // Language
    language: 'Til',
    english: 'Ingliz',
    russian: 'Rus',
    uzbek: 'O\'zbek',
    
    // Authentication
    emailAddress: 'Elektron pochta',
    password: 'Parol',
    confirmPassword: 'Parolni tasdiqlang',
    forgotPassword: 'Parolni unutdingizmi?',
    signIn: 'Kirish',
    signUp: 'Ro\'yxatdan o\'tish',
    orContinueWith: 'Yoki davom eting',
    
    // Cart
    yourCart: 'Sizning savatingiz',
    emptyCart: 'Sizning savatingiz bo\'sh',
    subtotal: 'Oraliq jami',
    checkout: 'Rasmiylashtirish',
    continueShopping: 'Xarid qilishni davom ettirish',
    
    // Product details
    addToCart: 'Savatga qo\'shish',
    description: 'Tavsif',
    specifications: 'Xususiyatlar',
    reviews: 'Sharhlar',
    relatedProducts: 'Tegishli mahsulotlar',
  }
};
