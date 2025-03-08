
import Layout from "@/components/layout/layout";
import { useLanguage } from "@/context/language-context";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Categories = () => {
  const { t } = useLanguage();

  // Sample categories
  const categories = [
    { name: 'Electronics', count: 42, image: '/placeholder.svg' },
    { name: 'Clothing', count: 36, image: '/placeholder.svg' },
    { name: 'Home Goods', count: 28, image: '/placeholder.svg' },
    { name: 'Books', count: 24, image: '/placeholder.svg' },
    { name: 'Sports', count: 18, image: '/placeholder.svg' },
    { name: 'Beauty', count: 15, image: '/placeholder.svg' },
  ];

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="text-3xl font-bold mb-6">{t('nav.categories')}</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {category.count} products
                </p>
                <Button className="w-full mt-4">
                  {t('categories.browse')}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
