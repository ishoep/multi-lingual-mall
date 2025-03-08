
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
  trending?: boolean; // Add trending property
  createdAt: string;
  reviews?: number; // Add reviews property
  details?: Record<string, string>; // Add details property
  translations: {
    ru: {
      title: string;
      description: string;
      details?: Record<string, string>; // Add details in translations
    };
    uz: {
      title: string;
      description: string;
      details?: Record<string, string>; // Add details in translations
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
  productCount?: number; // Add productCount property
  translations?: {
    ru: { name: string },
    uz: { name: string }
  }; // Add translations property
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  date?: string; // Add date property
  shippingAddress: Address;
  paymentMethod?: string; // Add paymentMethod property
}

export interface OrderItem {
  productId: string;
  title: string; // Changed from name to title
  price: number;
  quantity: number;
  image?: string;
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
  id: string;
  fullName: string; // Changed from name to fullName
  street: string;
  city: string;
  state: string;
  postalCode: string; // Instead of zip
  country: string;
  isDefault: boolean;
  // Additional fields used in api.ts
  name?: string; // For backward compatibility
  zip?: string; // For backward compatibility
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
