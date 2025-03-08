
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeContext } from "@/context/theme-context";
import { LanguageContext } from "@/context/language-context";
import { AuthContext } from "@/context/auth-context";
import { CartContext } from "@/context/cart-context";
import { translations } from "@/data/translations";
import { Menu, ShoppingCart, Sun, Moon, Globe, User } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);
  const { user, logout } = useContext(AuthContext);
  const { items } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const t = translations[language];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  to="/"
                  className="hover:text-foreground/80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.home}
                </Link>
                <Link
                  to="/products"
                  className="hover:text-foreground/80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.products}
                </Link>
                <Link
                  to="/categories"
                  className="hover:text-foreground/80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.categories}
                </Link>
                {user && (
                  <Link
                    to="/profile"
                    className="hover:text-foreground/80"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.profile}
                  </Link>
                )}
                {user?.isAdmin && (
                  <Link
                    to="/admin"
                    className="hover:text-foreground/80"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.admin}
                  </Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">GlobalMart</span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-foreground/80">
              {t.home}
            </Link>
            <Link to="/products" className="hover:text-foreground/80">
              {t.products}
            </Link>
            <Link to="/categories" className="hover:text-foreground/80">
              {t.categories}
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">{t.language}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>
                {t.english}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("ru")}>
                {t.russian}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("uz")}>
                {t.uzbek}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
              <span className="sr-only">{t.cart}</span>
            </Button>
          </Link>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">{t.profile}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/profile">{t.profile}</Link>
                </DropdownMenuItem>
                {user.isAdmin && (
                  <DropdownMenuItem asChild>
                    <Link to="/admin">{t.admin}</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={logout}>
                  {t.logout}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">{t.login}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/login">{t.login}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/register">{t.register}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
