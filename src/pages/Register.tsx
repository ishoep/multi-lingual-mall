
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

const Register = () => {
  const { t } = useLanguage();
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // Handle password mismatch
      return;
    }
    register(name, email, password);
  };

  return (
    <Layout>
      <div className="container px-4 py-16 mx-auto flex justify-center">
        <Card className="w-full max-w-md">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">{t('auth.signup')}</h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t('auth.name')}</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('auth.namePlaceholder')}
                  required
                />
              </div>
              
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
                <Label htmlFor="password">{t('auth.password')}</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">{t('auth.confirmPassword')}</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked === true)}
                  required
                />
                <Label htmlFor="terms" className="text-sm">
                  {t('auth.agreeTerms')}
                </Label>
              </div>
              
              <Button type="submit" className="w-full" disabled={!agreeTerms}>
                {t('auth.signupButton')}
              </Button>
            </form>
            
            <div className="mt-6 text-center text-sm">
              <p>
                {t('auth.haveAccount')}{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                  {t('auth.login')}
                </Link>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Register;
