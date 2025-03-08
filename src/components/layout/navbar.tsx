
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/context/language-context";
import { useTheme } from "@/context/theme-context";
import { useAuth } from "@/context/auth-context";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { 
  Menu, 
  Search, 
  ShoppingCart, 
  Sun, 
  Moon, 
  User, 
  LogOut,
  Settings,
  History,
  ChevronDown
} from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const { user, logout, isAuthenticated } = useAuth();
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.products"), path: "/products" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
      setIsSearchOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-xl tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            minStore
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover-lift",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="relative hover:bg-transparent"
          >
            <Search className="h-5 w-5 transition-opacity" />
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-transparent"
          >
            {theme === "dark" ? (
              <Moon className="h-5 w-5 transition-opacity" />
            ) : (
              <Sun className="h-5 w-5 transition-opacity" />
            )}
          </Button>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-8 px-2 hover:bg-transparent"
              >
                <span className="uppercase mr-1">{language}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32 glass animate-scale">
              <DropdownMenuItem 
                onClick={() => setLanguage("en")}
                className={cn(language === "en" && "font-medium")}
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setLanguage("ru")}
                className={cn(language === "ru" && "font-medium")}
              >
                Русский
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setLanguage("uz")}
                className={cn(language === "uz" && "font-medium")}
              >
                O'zbekcha
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Cart */}
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative hover:bg-transparent">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

          {/* User Menu */}
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full p-0 hover:bg-transparent">
                  <Avatar className="h-8 w-8">
                    <AvatarImage 
                      src={user?.profileImg} 
                      alt={user?.name} 
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {user?.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 glass animate-scale">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium text-sm">{user?.name}</p>
                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="cursor-pointer w-full flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    {t("profile.title")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile/orders" className="cursor-pointer w-full flex items-center">
                    <History className="mr-2 h-4 w-4" />
                    {t("profile.orders")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile/settings" className="cursor-pointer w-full flex items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    {t("profile.settings")}
                  </Link>
                </DropdownMenuItem>
                {user?.isAdmin && (
                  <DropdownMenuItem asChild>
                    <Link to="/admin" className="cursor-pointer w-full">
                      {t("nav.admin")}
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={logout}
                  className="cursor-pointer text-destructive focus:text-destructive"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  {t("profile.logout")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth/login">
              <Button variant="default" size="sm" className="h-8">
                {t("auth.login")}
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center space-x-4">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[350px] glass pt-12">
              <SheetHeader>
                <SheetTitle className="text-left font-bold tracking-tight text-xl">
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    minStore
                  </span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.path}>
                    <Link
                      to={link.path}
                      className={cn(
                        "flex w-full text-base py-2 transition-colors",
                        location.pathname === link.path
                          ? "text-primary font-medium"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
                <div className="h-0.5 w-full bg-border/50 my-2" />

                {/* Theme Toggle */}
                <div className="flex items-center justify-between">
                  <span className="text-sm">{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    {theme === "dark" ? (
                      <Moon className="h-5 w-5" />
                    ) : (
                      <Sun className="h-5 w-5" />
                    )}
                  </Button>
                </div>

                {/* Language */}
                <div className="flex flex-col space-y-2">
                  <span className="text-sm">Language</span>
                  <div className="flex space-x-2">
                    <Button
                      variant={language === "en" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setLanguage("en")}
                      className="flex-1"
                    >
                      English
                    </Button>
                    <Button
                      variant={language === "ru" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setLanguage("ru")}
                      className="flex-1"
                    >
                      Русский
                    </Button>
                    <Button
                      variant={language === "uz" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setLanguage("uz")}
                      className="flex-1"
                    >
                      O'zbekcha
                    </Button>
                  </div>
                </div>

                <div className="h-0.5 w-full bg-border/50 my-2" />

                {/* User Section */}
                {isAuthenticated ? (
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage 
                          src={user?.profileImg} 
                          alt={user?.name} 
                        />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {user?.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <p className="font-medium">{user?.name}</p>
                        <p className="text-xs text-muted-foreground">{user?.email}</p>
                      </div>
                    </div>
                    <SheetClose asChild>
                      <Link 
                        to="/profile" 
                        className="flex w-full items-center text-base py-2"
                      >
                        <User className="mr-2 h-4 w-4" />
                        {t("profile.title")}
                      </Link>
                    </SheetClose>
                    {user?.isAdmin && (
                      <SheetClose asChild>
                        <Link 
                          to="/admin" 
                          className="flex w-full items-center text-base py-2"
                        >
                          <Settings className="mr-2 h-4 w-4" />
                          {t("nav.admin")}
                        </Link>
                      </SheetClose>
                    )}
                    <Button 
                      variant="destructive" 
                      className="w-full mt-6" 
                      onClick={logout}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      {t("profile.logout")}
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <SheetClose asChild>
                      <Link to="/auth/login">
                        <Button className="w-full">
                          {t("auth.login")}
                        </Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/auth/register">
                        <Button variant="outline" className="w-full">
                          {t("auth.signup")}
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-md p-4 animate-slide-down">
          <form onSubmit={handleSearch} className="container mx-auto flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 bg-transparent border-b-2 border-primary/20 py-2 px-0 outline-none focus:border-primary transition-colors"
              autoFocus
            />
            <Button type="submit" variant="ghost" className="ml-2">
              <Search className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setIsSearchOpen(false)}
              className="ml-2"
            >
              Cancel
            </Button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Navbar;
