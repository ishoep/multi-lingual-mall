
import { Category } from "@/types";
import { mockCategories, delay } from './mock-data';

export const categoryApi = {
  getCategories: async (): Promise<Category[]> => {
    await delay(300);
    return [...mockCategories];
  },
  
  getCategoryBySlug: async (slug: string): Promise<Category | undefined> => {
    await delay(200);
    return mockCategories.find(c => c.slug === slug);
  }
};
