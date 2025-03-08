
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 flex flex-col">
            <Link to="/" className="font-bold text-2xl tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                minStore
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm">
              Premium quality products with minimalist design and exceptional functionality.
            </p>
            <div className="flex mt-6 space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Links Column */}
          <div className="col-span-1">
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t("nav.products")}
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t("nav.cart")}
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t("nav.account")}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support Column */}
          <div className="col-span-1">
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t("footer.contact")}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t("footer.privacy")}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div className="col-span-1">
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  123 Example Street, City, Country, 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  +1 (234) 567-8901
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  info@minstore.example
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} minStore. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <span className="text-xs text-muted-foreground">Payment Methods:</span>
            <div className="flex space-x-2">
              <div className="h-8 w-12 bg-muted rounded-md flex items-center justify-center text-xs font-medium">
                Visa
              </div>
              <div className="h-8 w-12 bg-muted rounded-md flex items-center justify-center text-xs font-medium">
                MC
              </div>
              <div className="h-8 w-12 bg-muted rounded-md flex items-center justify-center text-xs font-medium">
                PayPal
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
