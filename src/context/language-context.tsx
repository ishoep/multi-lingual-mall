
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ru' | 'uz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// This is a simplified translation mechanism
// In a real app, you would use i18next or similar
const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.cart': 'Cart',
    'nav.account': 'Account',
    'nav.admin': 'Admin',
    'product.addToCart': 'Add to Cart',
    'product.buyNow': 'Buy Now',
    'product.outOfStock': 'Out of Stock',
    'product.price': 'Price',
    'product.category': 'Category',
    'product.description': 'Description',
    'product.details': 'Details',
    'filter.category': 'Category',
    'filter.price': 'Price',
    'filter.popularity': 'Popularity',
    'filter.apply': 'Apply Filters',
    'filter.reset': 'Reset',
    'cart.title': 'Your Cart',
    'cart.empty': 'Your cart is empty',
    'cart.checkout': 'Checkout',
    'cart.total': 'Total',
    'auth.login': 'Log In',
    'auth.signup': 'Sign Up',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.name': 'Full Name',
    'auth.forgotPassword': 'Forgot Password?',
    'auth.loginWithGoogle': 'Log in with Google',
    'auth.alreadyAccount': 'Already have an account?',
    'auth.noAccount': 'Don\'t have an account?',
    'profile.title': 'My Profile',
    'profile.orders': 'Order History',
    'profile.settings': 'Settings',
    'profile.logout': 'Log Out',
    'admin.dashboard': 'Admin Dashboard',
    'admin.products': 'Manage Products',
    'admin.addProduct': 'Add Product',
    'admin.editProduct': 'Edit Product',
    'home.hero.title': 'Premium Quality Products',
    'home.hero.subtitle': 'Discover our carefully curated collection',
    'home.featured': 'Featured Products',
    'home.categories': 'Shop by Category',
    'home.trending': 'Trending Now',
    'footer.about': 'About Us',
    'footer.contact': 'Contact',
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.products': 'Товары',
    'nav.cart': 'Корзина',
    'nav.account': 'Аккаунт',
    'nav.admin': 'Админ',
    'product.addToCart': 'Добавить в корзину',
    'product.buyNow': 'Купить сейчас',
    'product.outOfStock': 'Нет в наличии',
    'product.price': 'Цена',
    'product.category': 'Категория',
    'product.description': 'Описание',
    'product.details': 'Детали',
    'filter.category': 'Категория',
    'filter.price': 'Цена',
    'filter.popularity': 'Популярность',
    'filter.apply': 'Применить фильтры',
    'filter.reset': 'Сбросить',
    'cart.title': 'Ваша корзина',
    'cart.empty': 'Ваша корзина пуста',
    'cart.checkout': 'Оформить заказ',
    'cart.total': 'Итого',
    'auth.login': 'Вход',
    'auth.signup': 'Регистрация',
    'auth.email': 'Электронная почта',
    'auth.password': 'Пароль',
    'auth.name': 'Полное имя',
    'auth.forgotPassword': 'Забыли пароль?',
    'auth.loginWithGoogle': 'Войти через Google',
    'auth.alreadyAccount': 'Уже есть аккаунт?',
    'auth.noAccount': 'Нет аккаунта?',
    'profile.title': 'Мой профиль',
    'profile.orders': 'История заказов',
    'profile.settings': 'Настройки',
    'profile.logout': 'Выйти',
    'admin.dashboard': 'Панель администратора',
    'admin.products': 'Управление товарами',
    'admin.addProduct': 'Добавить товар',
    'admin.editProduct': 'Редактировать товар',
    'home.hero.title': 'Товары премиум-качества',
    'home.hero.subtitle': 'Откройте для себя нашу тщательно подобранную коллекцию',
    'home.featured': 'Рекомендуемые товары',
    'home.categories': 'Категории',
    'home.trending': 'Популярное сейчас',
    'footer.about': 'О нас',
    'footer.contact': 'Контакты',
    'footer.terms': 'Условия использования',
    'footer.privacy': 'Политика конфиденциальности',
  },
  uz: {
    'nav.home': 'Bosh sahifa',
    'nav.products': 'Mahsulotlar',
    'nav.cart': 'Savat',
    'nav.account': 'Hisob',
    'nav.admin': 'Admin',
    'product.addToCart': 'Savatga qo\'shish',
    'product.buyNow': 'Hozir sotib olish',
    'product.outOfStock': 'Mavjud emas',
    'product.price': 'Narx',
    'product.category': 'Kategoriya',
    'product.description': 'Tavsif',
    'product.details': 'Tafsilotlar',
    'filter.category': 'Kategoriya',
    'filter.price': 'Narx',
    'filter.popularity': 'Ommaboplik',
    'filter.apply': 'Filtrlarni qo\'llash',
    'filter.reset': 'Qayta o\'rnatish',
    'cart.title': 'Sizning savatchangiz',
    'cart.empty': 'Sizning savatchangiz bo\'sh',
    'cart.checkout': 'Buyurtma berish',
    'cart.total': 'Jami',
    'auth.login': 'Kirish',
    'auth.signup': 'Ro\'yxatdan o\'tish',
    'auth.email': 'Elektron pochta',
    'auth.password': 'Parol',
    'auth.name': 'To\'liq ism',
    'auth.forgotPassword': 'Parolni unutdingizmi?',
    'auth.loginWithGoogle': 'Google orqali kirish',
    'auth.alreadyAccount': 'Allaqachon hisobingiz bormi?',
    'auth.noAccount': 'Hisobingiz yo\'qmi?',
    'profile.title': 'Mening profilim',
    'profile.orders': 'Buyurtmalar tarixi',
    'profile.settings': 'Sozlamalar',
    'profile.logout': 'Chiqish',
    'admin.dashboard': 'Admin paneli',
    'admin.products': 'Mahsulotlarni boshqarish',
    'admin.addProduct': 'Mahsulot qo\'shish',
    'admin.editProduct': 'Mahsulotni tahrirlash',
    'home.hero.title': 'Premium sifatli mahsulotlar',
    'home.hero.subtitle': 'Bizning sinchkovlik bilan tanlangan kolleksiyamizni kashf eting',
    'home.featured': 'Tavsiya etilgan mahsulotlar',
    'home.categories': 'Kategoriyalar bo\'yicha xarid qiling',
    'home.trending': 'Hozirda trend',
    'footer.about': 'Biz haqimizda',
    'footer.contact': 'Aloqa',
    'footer.terms': 'Foydalanish shartlari',
    'footer.privacy': 'Maxfiylik siyosati',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to get language from localStorage or use browser language or default to English
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split('-')[0];
    return (browserLang as Language) === 'ru' || browserLang === 'uz' 
      ? (browserLang as Language) 
      : 'en';
  };
  
  const [language, setLanguageState] = useState<Language>(() => {
    const storedLang = localStorage.getItem('language') as Language;
    return storedLang || getBrowserLanguage();
  });

  // Translate function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  // Update language and save to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  };

  // Set initial HTML lang attribute
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
