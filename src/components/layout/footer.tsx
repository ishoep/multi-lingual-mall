
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "@/context/language-context";
import { translations } from "@/data/translations";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">GlobalMart</h3>
            <p className="text-sm text-muted-foreground">
              Premium marketplace for all your shopping needs with worldwide shipping.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{t.categories}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/categories/electronics" className="text-muted-foreground hover:text-foreground">
                  {t.electronics}
                </Link>
              </li>
              <li>
                <Link to="/categories/clothing" className="text-muted-foreground hover:text-foreground">
                  {t.clothing}
                </Link>
              </li>
              <li>
                <Link to="/categories/home" className="text-muted-foreground hover:text-foreground">
                  {t.home}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{t.aboutUs}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  {t.aboutUs}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                  {t.contactUs}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                  {t.termsOfService}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                  {t.privacyPolicy}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{t.language}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const { setLanguage } = useContext(LanguageContext);
                    setLanguage("en");
                  }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {t.english}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const { setLanguage } = useContext(LanguageContext);
                    setLanguage("ru");
                  }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {t.russian}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const { setLanguage } = useContext(LanguageContext);
                    setLanguage("uz");
                  }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {t.uzbek}
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          {t.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
