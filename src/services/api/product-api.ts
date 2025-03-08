
import { Product } from "@/types";
import { mockProducts, delay } from './mock-data';

export const productApi = {
  getProducts: async (): Promise<Product[]> => {
    await delay(500);
    return [...mockProducts];
  },
  
  getProductById: async (id: string): Promise<Product | undefined> => {
    await delay(300);
    return mockProducts.find(p => p.id === id);
  },
  
  getProductsByCategory: async (category: string): Promise<Product[]> => {
    await delay(500);
    return mockProducts.filter(p => p.category === category);
  },
  
  getFeaturedProducts: async (): Promise<Product[]> => {
    await delay(300);
    return mockProducts.filter(p => p.featured);
  },
  
  getTrendingProducts: async (): Promise<Product[]> => {
    await delay(300);
    return mockProducts.filter(p => p.trending);
  },
  
  searchProducts: async (query: string): Promise<Product[]> => {
    await delay(500);
    const searchTerm = query.toLowerCase();
    return mockProducts.filter(p => 
      p.name.toLowerCase().includes(searchTerm) || 
      p.description.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm)
    );
  },
  
  addProduct: async (product: Omit<Product, 'id'>): Promise<Product> => {
    await delay(800);
    const newProduct = {
      ...product,
      id: Date.now().toString()
    };
    mockProducts.push(newProduct);
    return newProduct;
  },
  
  updateProduct: async (product: Product): Promise<Product> => {
    await delay(800);
    const index = mockProducts.findIndex(p => p.id === product.id);
    if (index !== -1) {
      mockProducts[index] = product;
      return product;
    }
    throw new Error('Product not found');
  },
  
  deleteProduct: async (id: string): Promise<boolean> => {
    await delay(500);
    const index = mockProducts.findIndex(p => p.id === id);
    if (index !== -1) {
      mockProducts.splice(index, 1);
      return true;
    }
    return false;
  }
};
