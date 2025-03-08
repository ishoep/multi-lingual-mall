
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/layout/layout";
import { LanguageContext } from "@/context/language-context";
import { translations } from "@/data/translations";

const Index = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <Layout>
      <section className="relative w-full py-12 md:py-24 lg:py-32">
        {/* Hero Section */}
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                {t.heroTitle}
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {t.heroSubtitle}
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" className="hover-lift">
                {t.shopNow}
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                {t.learnMore}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t.featuredCategories}
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {t.browseCategories}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {["electronics", "clothing", "home"].map((category) => (
              <Card key={category} className="card-hover overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{t[category]}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    {t[`${category}Description`]}
                  </p>
                  <Button variant="link" className="p-0 mt-4">
                    {t.exploreCategory} →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t.featuredProducts}
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {t.discoverProducts}
              </p>
            </div>
          </div>
          <Tabs defaultValue="popular" className="mt-8">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="popular">{t.popular}</TabsTrigger>
                <TabsTrigger value="new">{t.new}</TabsTrigger>
                <TabsTrigger value="sale">{t.sale}</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="popular" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Placeholder for product cards */}
                {[1, 2, 3, 4].map((item) => (
                  <Card key={item} className="card-hover overflow-hidden">
                    <div className="aspect-square relative overflow-hidden rounded-t-lg">
                      <div className="w-full h-full bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">{t.productTitle}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        $99.99
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="new" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Placeholder for new products */}
                {[1, 2, 3, 4].map((item) => (
                  <Card key={item} className="card-hover overflow-hidden">
                    <div className="aspect-square relative overflow-hidden rounded-t-lg">
                      <div className="w-full h-full bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">{t.newProduct}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        $129.99
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="sale" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Placeholder for sale products */}
                {[1, 2, 3, 4].map((item) => (
                  <Card key={item} className="card-hover overflow-hidden">
                    <div className="aspect-square relative overflow-hidden rounded-t-lg">
                      <div className="w-full h-full bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">{t.saleProduct}</h3>
                      <div className="flex items-center space-x-2">
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-through">
                          $149.99
                        </p>
                        <p className="text-sm font-semibold text-red-500">
                          $89.99
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
