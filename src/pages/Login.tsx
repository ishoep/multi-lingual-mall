
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/layout";
import { useLanguage } from "@/context/language-context";
import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const Login = () => {
  const { t } = useLanguage();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Layout>
      <div className="container px-4 py-16 mx-auto flex justify-center">
        <Card className="w-full max-w-md">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">{t('auth.login')}</h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t('auth.email')}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your-email@example.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">{t('auth.password')}</Label>
                  <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
                    {t('auth.forgotPassword')}
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={remember}
                  onCheckedChange={(checked) => setRemember(checked === true)}
                />
                <Label htmlFor="remember" className="text-sm">
                  {t('auth.rememberMe')}
                </Label>
              </div>
              
              <Button type="submit" className="w-full">
                {t('auth.loginButton')}
              </Button>
            </form>
            
            <div className="mt-6 text-center text-sm">
              <p>
                {t('auth.noAccount')}{' '}
                <Link to="/register" className="text-blue-600 hover:text-blue-800 font-medium">
                  {t('auth.signup')}
                </Link>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Login;
