
import { useState } from "react";
import Layout from "@/components/layout/layout";
import { useLanguage } from "@/context/language-context";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { t } = useLanguage();
  const { items, removeItem, updateQuantity } = useCart();
  const [promoCode, setPromoCode] = useState("");

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = items.length > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="text-3xl font-bold mb-6">{t('cart.title')}</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium mb-4">{t('cart.empty')}</h2>
            <Button asChild>
              <a href="/products">{t('cart.continueShopping')}</a>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <div className="p-6">
                  {items.map((item) => (
                    <div key={item.productId} className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b">
                      <div className="w-full sm:w-24 h-24 bg-gray-100 dark:bg-gray-800 mb-4 sm:mb-0 sm:mr-4 flex-shrink-0"></div>
                      <div className="flex-grow">
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center mt-4 sm:mt-0">
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.productId, parseInt(e.target.value))}
                          className="w-16 mr-4"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.productId)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="overflow-hidden">
                <div className="p-6">
                  <h2 className="text-lg font-medium mb-4">{t('cart.summary')}</h2>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>{t('cart.subtotal')}</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('cart.shipping')}</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-medium text-lg border-t pt-2 mt-2">
                      <span>{t('cart.total')}</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder={t('cart.promoCode')}
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-grow"
                      />
                      <Button variant="outline">{t('cart.apply')}</Button>
                    </div>
                    <Button className="w-full">{t('cart.checkout')}</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
