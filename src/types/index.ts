
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  stock: number;
  featured?: boolean;
  trending?: boolean;
  rating?: number;
  reviews?: number;
  details?: {
    [key: string]: string;
  };
  translations?: {
    ru?: {
      name: string;
      description: string;
      details?: {
        [key: string]: string;
      };
    };
    uz?: {
      name: string;
      description: string;
      details?: {
        [key: string]: string;
      };
    };
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image?: string;
  productCount?: number;
  translations?: {
    ru?: { name: string };
    uz?: { name: string };
  };
}

export interface Order {
  id: string;
  userId: string;
  items: {
    productId: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  paymentMethod: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  profileImg?: string;
  isAdmin?: boolean;
  shippingAddresses?: {
    id: string;
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    isDefault?: boolean;
  }[];
}
