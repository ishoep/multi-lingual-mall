
import { useState } from "react";
import Layout from "@/components/layout/layout";
import { useLanguage } from "@/context/language-context";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Products = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="text-3xl font-bold mb-6">{t('nav.products')}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters sidebar */}
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-4">{t('products.search')}</h3>
              <Input
                type="text"
                placeholder={t('products.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div>
              <h3 className="font-medium mb-4">{t('products.price')}</h3>
              <Slider
                defaultValue={[0, 1000]}
                max={1000}
                step={10}
                onValueChange={setPriceRange}
              />
              <div className="flex justify-between mt-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">{t('products.categories')}</h3>
              <div className="space-y-2">
                {['Electronics', 'Clothing', 'Home Goods', 'Books'].map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox id={category} />
                    <Label htmlFor={category}>{category}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Product grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder for product cards */}
              {Array.from({ length: 9 }).map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-square relative bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                  <div className="p-4">
                    <h3 className="font-semibold">{t('products.productTitle')}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">$99.99</p>
                    <Button className="w-full mt-4">{t('products.addToCart')}</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
