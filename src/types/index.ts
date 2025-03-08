

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  rating: number;
  stock: number;
  featured: boolean;
  trending?: boolean;
  createdAt: string;
  reviews?: number;
  details?: Record<string, string>;
  name?: string; // Adding this for backward compatibility
  translations: {
    ru: {
      title: string;
      description: string;
      details?: Record<string, string>;
      name?: string; // Adding this for backward compatibility
    };
    uz: {
      title: string;
      description: string;
      details?: Record<string, string>;
      name?: string; // Adding this for backward compatibility
    };
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image: string;
  parentId?: string;
  featured: boolean;
  productCount?: number;
  translations?: {
    ru: { name: string },
    uz: { name: string }
  };
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  date?: string;
  shippingAddress: Address;
  paymentMethod?: string;
}

export interface OrderItem {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
  name?: string; // Adding this for backward compatibility
}

export interface User {
  id: string;
  email: string;
  name?: string;
  phone?: string;
  isAdmin: boolean;
  addresses: Address[];
  createdAt: string;
}

export interface Address {
  id?: string; // Making optional for compatibility
  fullName?: string; // Making optional for compatibility
  street: string;
  city: string;
  state: string;
  postalCode?: string; // Making optional for compatibility
  zip?: string; // Adding for backward compatibility
  country: string;
  isDefault?: boolean; // Making optional for compatibility
  name?: string; // For backward compatibility
}

export interface CartItem {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

