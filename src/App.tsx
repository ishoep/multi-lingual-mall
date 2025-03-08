
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "@/context/theme-context";
import { LanguageContext } from "@/context/language-context";
import { AuthContext } from "@/context/auth-context";
import { CartContext } from "@/context/cart-context";
import { Language } from "@/data/translations";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Theme state
  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.getItem("theme") as "light" | "dark" || "light"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  // Language state
  const [language, setLanguage] = useState<Language>(
    (localStorage.getItem("language") as Language) || "en"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Auth state
  const [user, setUser] = useState(null);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <AuthContext.Provider
          value={{
            user,
            login: () => {},
            register: () => {},
            logout: () => {},
            isLoading: false,
          }}
        >
          <CartContext.Provider
            value={{
              items: [],
              addItem: () => {},
              removeItem: () => {},
              updateQuantity: () => {},
              clearCart: () => {},
            }}
          >
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </BrowserRouter>
              </TooltipProvider>
            </QueryClientProvider>
          </CartContext.Provider>
        </AuthContext.Provider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
