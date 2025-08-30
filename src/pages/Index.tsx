import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Welcome to Notepad</h1>
          <p className="text-xl text-muted-foreground">Your modern note-taking companion</p>
        </div>
        
        <div className="space-x-4">
          <Button asChild className="rounded-xl shadow-md">
            <Link to="/signup">Get Started</Link>
          </Button>
          <Button variant="outline" asChild className="rounded-xl">
            <Link to="/signin">Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
