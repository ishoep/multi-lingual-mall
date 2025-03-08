
import { Order } from "@/types";
import { mockOrders, delay } from './mock-data';

export const orderApi = {
  getOrdersByUserId: async (userId: string): Promise<Order[]> => {
    await delay(500);
    return mockOrders.filter(o => o.userId === userId);
  },
  
  getOrderById: async (id: string): Promise<Order | undefined> => {
    await delay(300);
    return mockOrders.find(o => o.id === id);
  },
  
  createOrder: async (order: Omit<Order, 'id' | 'date' | 'status'>): Promise<Order> => {
    await delay(1000);
    const newOrder = {
      ...order,
      id: `ord-${Date.now().toString().slice(-3)}`,
      date: new Date().toISOString(),
      status: 'pending' as const
    };
    mockOrders.push(newOrder);
    return newOrder;
  }
};
